/**
 * Generates token inventory data from @workday/canvas-tokens-web for MCP docs.
 * Run: node modules/mcp/build/generate-token-reference-data.mjs
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const require = createRequire(import.meta.url);

// Prefer beta.11 from /tmp if repo still has beta.7
const beta11Path = '/tmp/ck-token-audit/package';
const localPath = path.join(repoRoot, 'node_modules/@workday/canvas-tokens-web');
const tokensPkgPath = fs.existsSync(path.join(beta11Path, 'package.json'))
  ? beta11Path
  : localPath;

const system = require(path.join(tokensPkgPath, 'dist/common-js/system/index.js'));
const brand = require(path.join(tokensPkgPath, 'dist/common-js/brand/index.js'));
const pkgJson = JSON.parse(
  fs.readFileSync(path.join(tokensPkgPath, 'package.json'), 'utf8')
);

const systemDts = fs.readFileSync(
  path.join(tokensPkgPath, 'dist/es6/system/index.d.ts'),
  'utf8'
);
const brandDts = fs.readFileSync(
  path.join(tokensPkgPath, 'dist/es6/brand/index.d.ts'),
  'utf8'
);

function flat(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null && !Array.isArray(v)
      ? flat(v, `${prefix}${k}.`)
      : [[`${prefix}${k}`, v]]
  );
}

function parseDeprecated(dts) {
  const lines = dts.split('\n');
  const deprecated = new Map();
  for (let i = 0; i < lines.length; i++) {
    const depMatch = lines[i].match(/@deprecated\s*(.*)/);
    if (!depMatch) continue;
    const note = depMatch[1]?.trim() || '';
    for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
      const keyMatch = lines[j].match(/^\s*"?([\w$-]+)"?:\s*"(--[\w-]+)"/);
      if (keyMatch) {
        deprecated.set(keyMatch[2], note);
        break;
      }
    }
  }
  return deprecated;
}

function isDeprecated(cssVar, deprecatedSet) {
  return deprecatedSet.has(cssVar);
}

function extractPx(varString) {
  const m = varString.match(/,\s*([^)]+)\)$/);
  if (!m) return '—';
  const val = m[1].trim();
  if (val.endsWith('rem')) {
    const rem = parseFloat(val);
    if (!Number.isNaN(rem)) return `${Math.round(rem * 16)}px`;
  }
  if (val.endsWith('px')) return val;
  return val;
}

const systemDeprecated = parseDeprecated(systemDts);
const brandDeprecated = parseDeprecated(brandDts);

function liveTokens(namespaceObj, prefix, deprecatedSet, excludeKeys = []) {
  return flat(namespaceObj)
    .filter(([k]) => !excludeKeys.some(ex => k.startsWith(ex)))
    .filter(([, v]) => !isDeprecated(v, deprecatedSet))
    .map(([k]) => `${prefix}${k}`);
}

const liveColor = liveTokens(system.color, 'system.color.', systemDeprecated, ['chart']);
const liveByFamily = {};
for (const t of liveColor) {
  const parts = t.replace('system.color.', '').split('.');
  const fam = parts[0];
  (liveByFamily[fam] ??= []).push(t);
}

const shapeDefault = flat(system.shape).filter(([, v]) => !isDeprecated(v, systemDeprecated));
const shapeSana = flat(system.sana.shape);

const scales = ['gap', 'padding', 'size'];
const scaleData = {};
for (const fam of scales) {
  scaleData[fam] = flat(system[fam])
    .filter(([, v]) => !isDeprecated(v, systemDeprecated))
    .map(([k, v]) => ({token: k, defaultPx: extractPx(v), cssVar: v}));
}

// Deprecation tables from d.ts
function buildDeprecationTable(dts, namespace) {
  const lines = dts.split('\n');
  const rows = [];
  for (let i = 0; i < lines.length; i++) {
    const depMatch = lines[i].match(/@deprecated\s*(.*)/);
    if (!depMatch) continue;
    const note = depMatch[1]?.trim() || '(no replacement noted)';
    for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
      const keyMatch = lines[j].match(/^\s*"?([\w$-]+)"?:\s*"(--[\w-]+)"/);
      if (keyMatch) {
        rows.push({key: keyMatch[1], cssVar: keyMatch[2], replacement: note});
        break;
      }
    }
  }
  return rows;
}

const systemDeprecations = buildDeprecationTable(systemDts, 'system');
const brandDeprecations = buildDeprecationTable(brandDts, 'brand');

const sanaOverrides = flat(system.sana).map(([k, v]) => ({
  path: `system.sana.${k}`,
  cssVar: v.match(/--cnvs-[\w-]+/)?.[0] || v,
}));

const output = {
  version: pkgJson.version,
  liveColorCount: liveColor.length,
  liveByFamily,
  shapeDefault: shapeDefault.map(([k, v]) => ({
    token: k,
    defaultPx: extractPx(v),
    sanaPx:
      shapeSana.find(([sk]) => sk === k)?.[1] &&
      extractPx(shapeSana.find(([sk]) => sk === k)[1]),
  })),
  shapeSanaOnly: shapeSana
    .filter(([k]) => !shapeDefault.some(([dk]) => dk === k))
    .map(([k, v]) => ({token: k, sanaPx: extractPx(v)})),
  scaleData,
  systemDeprecationCount: systemDeprecations.length,
  brandDeprecationCount: brandDeprecations.length,
  sanaOverrideCount: sanaOverrides.length,
};

const outPath = path.join(__dirname, 'token-reference-data.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${outPath} (tokens-web@${pkgJson.version})`);
console.log(`Live color tokens: ${liveColor.length}`);
console.log(`System deprecations: ${systemDeprecations.length}`);
console.log(`Sana overrides: ${sanaOverrides.length}`);

// Also write markdown fragments
function mdList(tokens) {
  return tokens.map(t => `- \`${t}\``).join('\n');
}

const fragmentsDir = path.join(repoRoot, 'modules/docs/llm/tokens/v4/_generated');
fs.mkdirSync(fragmentsDir, {recursive: true});

let colorMd = '';
for (const [fam, tokens] of Object.entries(liveByFamily).sort()) {
  colorMd += `### \`system.color.${fam}\` (${tokens.length})\n\n${mdList(tokens)}\n\n`;
}
fs.writeFileSync(path.join(fragmentsDir, 'color-inventory.md'), colorMd);

// Shape table
let shapeMd =
  '| Token | Default | Sana | Usage |\n|---|---|---|---|\n';
const shapeUsage = {
  none: 'Full-width containers, headers, side panels',
  xs: 'Sana-only — compact rounding (checkboxes)',
  sm: 'Pills, status indicators, checkboxes',
  md: 'Inputs, toasts, tooltips, snackbars',
  lg: 'Rich text editors',
  xl: 'Compact cards',
  xxl: 'Cards, list items',
  xxxl: 'Modals, dialogs, bottom sheets',
  full: 'Buttons, badges, avatars — fully rounded',
};
for (const row of output.shapeDefault) {
  const sana = row.sanaPx && row.sanaPx !== row.defaultPx ? row.sanaPx : row.sanaPx || '—';
  shapeMd += `| \`shape.${row.token}\` | ${row.defaultPx} | ${sana === row.defaultPx ? 'same' : sana} | ${shapeUsage[row.token] || ''} |\n`;
}
for (const row of output.shapeSanaOnly) {
  shapeMd += `| \`shape.${row.token}\` | — | ${row.sanaPx} | ${shapeUsage[row.token] || 'Sana-only'} |\n`;
}
fs.writeFileSync(path.join(fragmentsDir, 'shape-table.md'), shapeMd);

// Size table
let sizeMd = '| Token | px | Canvas uses it for |\n|---|---|---|\n';
const sizeUsage = {
  xxxs: 'Switch toggle',
  xxs: 'Status indicators, count badges',
  xs: 'Small buttons, pills, checkboxes, radios',
  sm: 'Buttons, segmented controls, tooltips, avatars',
  md: 'Default control height — buttons, inputs, banners, menu items',
  lg: 'Large buttons, expandable triggers, tabs, large avatars',
  xl: 'Table cells, toasts',
  xxl: 'Collapsed expandable containers',
};
for (const row of scaleData.size) {
  sizeMd += `| \`size.${row.token}\` | ${row.defaultPx} | ${sizeUsage[row.token] || ''} |\n`;
}
fs.writeFileSync(path.join(fragmentsDir, 'size-table.md'), sizeMd);

// Gap/padding tables
let gapMd = '| Token | px |\n|---|---|\n';
for (const row of scaleData.gap) gapMd += `| \`gap.${row.token}\` | ${row.defaultPx} |\n`;
fs.writeFileSync(path.join(fragmentsDir, 'gap-table.md'), gapMd);

let padMd = '| Token | px |\n|---|---|\n';
for (const row of scaleData.padding) padMd += `| \`padding.${row.token}\` | ${row.defaultPx} |\n`;
fs.writeFileSync(path.join(fragmentsDir, 'padding-table.md'), padMd);

// Top deprecated color mappings
const colorDeps = systemDeprecations
  .filter(r => r.cssVar.includes('color'))
  .slice(0, 40);
let depMd = '| Deprecated CSS variable | Replacement |\n|---|---|\n';
for (const r of colorDeps) {
  depMd += `| \`${r.cssVar}\` | ${r.replacement} |\n`;
}
depMd += '\n_See installed JSDoc for the full list of 261 system and 39 brand deprecations._\n';
fs.writeFileSync(path.join(fragmentsDir, 'color-deprecations-sample.md'), depMd);

console.log(`Wrote fragments to ${fragmentsDir}`);
