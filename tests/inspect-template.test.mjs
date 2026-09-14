import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { inspectTemplate } from '../tools/inspect-template.mjs';

const fixture = () => JSON.parse(readFileSync(new URL('../examples/native-landing/template.json', import.meta.url), 'utf8'));
const codes = (result, severity = 'errors') => result[severity].map(item => item.code);
const cli = fileURLToPath(new URL('../tools/inspect-template.mjs', import.meta.url));
function runFile(text, flags = []) {
  const dir = mkdtempSync(join(tmpdir(), 'cet-test-'));
  try {
    const file = join(dir, 'input with spaces.json');
    writeFileSync(file, text);
    return spawnSync(process.execPath, [cli, file, ...flags], { encoding: 'utf8' });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('original native sample has expected structure without mutation', () => {
  const data = fixture();
  const before = JSON.stringify(data);
  const result = inspectTemplate(data);
  assert.equal(result.elements, 4);
  assert.deepEqual(result.widgets, { heading: 1, 'text-editor': 1, button: 1 });
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.warnings, []);
  assert.equal(JSON.stringify(data), before);
});
test('duplicate IDs are caught across nested siblings', () => {
  const data = fixture();
  data.content[0].elements[1].id = data.content[0].elements[0].id;
  assert.ok(codes(inspectTemplate(data)).includes('DUPLICATE_ID'));
});
test('raw arrays are inspected but warn about missing envelope', () => {
  const result = inspectTemplate(fixture().content);
  assert.equal(result.elements, 4);
  assert.deepEqual(codes(result, 'warnings'), ['RAW_DATA_NO_DOCUMENT_SETTINGS']);
});
test('invalid roots and content fail clearly', () => {
  for (const value of [null, 42, 'hello', true]) {
    assert.deepEqual(codes(inspectTemplate(value)), ['INVALID_ROOT']);
  }
  assert.ok(codes(inspectTemplate({ ...fixture(), content: {} })).includes('EXPECTED_ELEMENTS_ARRAY'));
});
test('invalid child, settings, widget name and isInner are diagnosed', () => {
  const data = fixture();
  data.content[0].elements.push(null);
  const child = data.content[0].elements[0];
  child.settings = [1];
  child.isInner = 'false';
  delete child.widgetType;
  child.elements = {};
  const result = codes(inspectTemplate(data));
  for (const expected of ['INVALID_ELEMENT', 'INVALID_SETTINGS', 'INVALID_IS_INNER', 'REQUIRED_WIDGET_TYPE', 'EXPECTED_ELEMENTS_ARRAY'])
    assert.ok(result.includes(expected), expected);
});
test('envelope metadata and page settings are validated', () => {
  const data = fixture();
  data.title = '';
  data.type = 7;
  delete data.version;
  data.page_settings = null;
  assert.equal(inspectTemplate(data).errors.length, 4);
});
test('legacy and code widgets need human review', () => {
  const data = fixture();
  data.content[0].elType = 'section';
  data.content[0].elements[0].widgetType = 'html';
  const result = inspectTemplate(data);
  assert.equal(result.errors.length, 0);
  assert.ok(codes(result, 'warnings').includes('LEGACY_LAYOUT_REVIEW'));
  assert.ok(codes(result, 'warnings').includes('MANUAL_CODE_REVIEW'));
});
test('unknown versions and element types do not silently pass', () => {
  const data = fixture();
  data.version = '99';
  data.content[0].elType = 'future-layout';
  const result = inspectTemplate(data);
  assert.ok(codes(result, 'warnings').includes('UNRECOGNIZED_SCHEMA_VERSION'));
  assert.ok(codes(result, 'warnings').includes('UNKNOWN_ELEMENT_TYPE'));
});
test('prototype-like widget names are inert inventory keys', () => {
  const data = fixture();
  data.content[0].elements[0].widgetType = '__proto__';
  const result = inspectTemplate(data);
  assert.equal(Object.getPrototypeOf(result.widgets), Object.prototype);
  assert.equal(result.widgets.__proto__, 1);
});
test('deep element input stops at the documented limit', () => {
  const data = fixture();
  let current = data.content[0];
  for (let i = 0; i < 105; i++) {
    const next = { id: 'deep' + i, elType: 'container', settings: [], elements: [] };
    current.elements = [next];
    current = next;
  }
  assert.ok(codes(inspectTemplate(data)).includes('DEPTH_LIMIT'));
});
test('CLI JSON summary handles paths with spaces and UTF-8 BOM', () => {
  const result = runFile('\uFEFF' + JSON.stringify(fixture()), ['--json']);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).elements, 4);
});
test('strict mode fails on warnings while default mode allows them', () => {
  const data = JSON.stringify(fixture().content);
  assert.equal(runFile(data).status, 0);
  assert.equal(runFile(data, ['--strict']).status, 1);
});
test('structural errors return 1 and parse failures do not echo private snippets', () => {
  assert.equal(runFile('null').status, 1);
  const result = runFile('{"private":"DO_NOT_ECHO_THIS"');
  assert.equal(result.status, 2);
  assert.ok(!(result.stdout + result.stderr).includes('DO_NOT_ECHO_THIS'));
});
test('oversized input returns 2', () => {
  assert.equal(runFile(' '.repeat(10 * 1024 * 1024 + 1)).status, 2);
});
test('help, missing input, unknown flags and missing file use documented exits', () => {
  const run = args => spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });
  assert.equal(run(['--help']).status, 0);
  assert.equal(run([]).status, 2);
  assert.equal(run(['--unknown']).status, 2);
  assert.equal(run(['missing-cet-file.json']).status, 2);
});
