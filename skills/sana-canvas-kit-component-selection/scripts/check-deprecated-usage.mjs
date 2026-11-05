#!/usr/bin/env node
/**
 * Lightweight grep-style check for common deprecated Canvas Kit patterns in consumer code.
 * Usage: node check-deprecated-usage.mjs <file-or-dir> [more paths...]
 */
import {readFileSync, statSync, readdirSync} from 'node:fs';
import {join, extname} from 'node:path';

const ROOT = process.cwd();
const TARGETS = process.argv.slice(2);

if (TARGETS.length === 0) {
  console.error('Usage: node check-deprecated-usage.mjs <file-or-dir> [more paths...]');
  process.exit(1);
}

function readVersion(pkg) {
  try {
    return JSON.parse(readFileSync(join(ROOT, 'node_modules', pkg, 'package.json'), 'utf8')).version;
  } catch {
    return 'not installed';
  }
}

console.log('Canvas Kit packages:');
console.log(`  @workday/canvas-kit-react: ${readVersion('@workday/canvas-kit-react')}`);
console.log(`  @workday/canvas-kit-preview-react: ${readVersion('@workday/canvas-kit-preview-react')}`);
console.log(`  @workday/canvas-tokens-web: ${readVersion('@workday/canvas-tokens-web')}`);
console.log('');

const RULES = [
  {
    id: 'legacy-tokens-import',
    pattern: /@workday\/canvas-kit-react\/tokens/,
    message: 'Legacy token import — use @workday/canvas-tokens-web',
  },
  {
    id: 'barrel-import',
    pattern: /from ['"]@workday\/canvas-kit-react['"]/,
    message: 'Barrel import — use @workday/canvas-kit-react/<component>',
  },
  {
    id: 'layout-primitive',
    pattern: /<(?:Flex|Box|Grid|Stack|HStack|VStack)\b/,
    message: 'Layout primitive — prefer createStyles + plain elements',
  },
  {
    id: 'style-prop',
    pattern: /\b(?:padding|margin|gap|depth|backgroundColor)=["{]/,
    message: 'Deprecated style prop — use cs + createStyles/createStencil',
  },
  {
    id: 'merge-styles',
    pattern: /\bmergeStyles\(/,
    message: 'mergeStyles is deprecated — use handleCsProp',
  },
  {
    id: 'deprecated-icons',
    pattern: /\b(?:AccentIcon|AppletIcon)\b/,
    message: 'Deprecated icon component — use ExpressiveIcon',
  },
  {
    id: 'legacy-spacing',
    pattern: /system\.space\./,
    message: 'Deprecated spacing namespace — use system.gap/padding/size',
  },
];

const CODE_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']);

function collectFiles(path) {
  const abs = join(ROOT, path);
  const st = statSync(abs);
  if (st.isFile()) {
    return CODE_EXT.has(extname(abs)) ? [abs] : [];
  }
  const out = [];
  for (const entry of readdirSync(abs, {withFileTypes: true})) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    out.push(...collectFiles(join(path, entry.name)));
  }
  return out;
}

let findings = 0;

for (const target of TARGETS) {
  for (const file of collectFiles(target)) {
    const rel = file.slice(ROOT.length + 1);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, index) => {
      for (const rule of RULES) {
        if (rule.pattern.test(line)) {
          findings += 1;
          console.log(`${rel}:${index + 1} [${rule.id}] ${rule.message}`);
          console.log(`  ${line.trim()}`);
        }
      }
    });
  }
}

if (findings === 0) {
  console.log('No common deprecated patterns found.');
} else {
  console.log(`\n${findings} finding(s). Verify against installed JSDoc @deprecated tags before acting.`);
  process.exitCode = 1;
}
