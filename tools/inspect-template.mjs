#!/usr/bin/env node
import { open } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const MAX_BYTES = 10 * 1024 * 1024;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const settings = value => object(value) || (Array.isArray(value) && value.length === 0);

/** Inspect the documented template envelope or a raw _elementor_data array.
 * Does not execute content, resolve remote URLs, mutate input, or validate controls.
 */
export function inspectTemplate(data) {
  const report = { format: Array.isArray(data) ? 'raw-elements' : 'template',
    elements: 0, widgets: {}, errors: [], warnings: [] };
  const add = (severity, code, path) => report[severity].push({ code, path });
  let content;
  if (Array.isArray(data)) {
    content = data;
    add('warnings', 'RAW_DATA_NO_DOCUMENT_SETTINGS', '$');
  } else if (object(data)) {
    for (const key of ['title', 'type', 'version']) {
      if (!nonempty(data[key])) add('errors', 'REQUIRED_STRING', '$.' + key);
    }
    if (nonempty(data.version) && data.version !== '0.4')
      add('warnings', 'UNRECOGNIZED_SCHEMA_VERSION', '$.version');
    if (!settings(data.page_settings)) add('errors', 'INVALID_SETTINGS', '$.page_settings');
    content = data.content;
  } else {
    add('errors', 'INVALID_ROOT', '$');
    return report;
  }
  if (!Array.isArray(content)) {
    add('errors', 'EXPECTED_ELEMENTS_ARRAY', '$.content');
    return report;
  }
  if (content.length === 0) add('warnings', 'EMPTY_CONTENT', '$');
  const ids = new Set();
  const stack = content.map((node, index) => ({ node, path: '$.content[' + index + ']', depth: 0 })).reverse();
  while (stack.length) {
    const { node, path, depth } = stack.pop();
    if (depth > 100) { add('errors', 'DEPTH_LIMIT', path); continue; }
    if (!object(node)) { add('errors', 'INVALID_ELEMENT', path); continue; }
    report.elements++;
    if (!nonempty(node.id)) add('errors', 'REQUIRED_ID', path + '.id');
    else if (ids.has(node.id)) add('errors', 'DUPLICATE_ID', path + '.id');
    else ids.add(node.id);
    if (!nonempty(node.elType)) add('errors', 'REQUIRED_ELEMENT_TYPE', path + '.elType');
    else if (!['container', 'section', 'column', 'widget'].includes(node.elType))
      add('warnings', 'UNKNOWN_ELEMENT_TYPE', path + '.elType');
    if (node.elType === 'section' || node.elType === 'column')
      add('warnings', 'LEGACY_LAYOUT_REVIEW', path + '.elType');
    if ('isInner' in node && typeof node.isInner !== 'boolean')
      add('errors', 'INVALID_IS_INNER', path + '.isInner');
    if (!settings(node.settings)) add('errors', 'INVALID_SETTINGS', path + '.settings');
    if (node.elType === 'widget') {
      if (!nonempty(node.widgetType)) add('errors', 'REQUIRED_WIDGET_TYPE', path + '.widgetType');
      else {
        // defineProperty keeps unusual input names such as "__proto__" inert.
        const count = Object.hasOwn(report.widgets, node.widgetType) ? report.widgets[node.widgetType] : 0;
        Object.defineProperty(report.widgets, node.widgetType,
          { value: count + 1, enumerable: true, configurable: true, writable: true });
        if (['html', 'shortcode'].includes(node.widgetType))
          add('warnings', 'MANUAL_CODE_REVIEW', path + '.settings');
      }
    }
    if (!Array.isArray(node.elements)) add('errors', 'EXPECTED_ELEMENTS_ARRAY', path + '.elements');
    else for (let i = node.elements.length - 1; i >= 0; i--)
      stack.push({ node: node.elements[i], path: path + '.elements[' + i + ']', depth: depth + 1 });
  }
  return report;
}

export async function main(args) {
  const flags = new Set(['--json', '--strict']);
  if (args.length === 1 && args[0] === '--help') {
    console.log('Usage: node tools/inspect-template.mjs <file.json> [--json] [--strict]');
    return 0;
  }
  const paths = args.filter(arg => !arg.startsWith('--'));
  if (paths.length !== 1 || args.some(arg => arg.startsWith('--') && !flags.has(arg))) {
    console.error('Usage: node tools/inspect-template.mjs <file.json> [--json] [--strict]');
    return 2;
  }
  let handle;
  let data;
  try {
    handle = await open(paths[0], 'r');
    const stat = await handle.stat();
    if (!stat.isFile() || stat.size > MAX_BYTES) throw new Error('unsupported input');
    // A bounded read also covers a file growing after stat().
    const buffer = Buffer.alloc(MAX_BYTES + 1);
    let length = 0;
    while (length < buffer.length) {
      const { bytesRead } = await handle.read(buffer, length, buffer.length - length, null);
      if (!bytesRead) break;
      length += bytesRead;
    }
    if (length > MAX_BYTES) throw new Error('input too large');
    data = JSON.parse(buffer.subarray(0, length).toString('utf8').replace(/^\uFEFF/, ''));
  } catch {
    // Do not print parser snippets: a private input could contain credentials.
    console.error('Cannot read input: provide a regular UTF-8 JSON file of at most 10 MiB.');
    return 2;
  } finally {
    if (handle) await handle.close();
  }
  const report = inspectTemplate(data);
  if (args.includes('--json')) console.log(JSON.stringify(report, null, 2));
  else {
    console.log('Elements: ' + report.elements + '; errors: ' + report.errors.length + '; warnings: ' + report.warnings.length);
    for (const [severity, findings] of [['error', report.errors], ['warning', report.warnings]])
      for (const finding of findings) console.log(severity + ': ' + finding.code + ' at ' + finding.path);
  }
  return report.errors.length || (args.includes('--strict') && report.warnings.length) ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  process.exitCode = await main(process.argv.slice(2));
