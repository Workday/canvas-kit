import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {glob} from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_BASE_URL = 'https://workday.github.io/canvas-kit/';

interface StoryEntry {
  title: string;
  storybookUrl: string;
  mdxPath: string;
  mdxProse: string;
}

function titleToStorybookPath(title: string): string {
  return title.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');
}

function titleToSlug(title: string): string {
  const parts = title.split('/');
  const leaf = parts[parts.length - 1];
  return leaf.toLowerCase().replace(/\s+/g, '-');
}

function extractTitle(filePath: string): string | null {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  return match ? match[1] : null;
}

function extractMdxProse(mdxFilePath: string, exampleSources: Record<string, string>): string {
  const content = fs.readFileSync(mdxFilePath, 'utf8');
  const withoutImports = content.replace(
    /import\s+(?:(?:\{[\s\S]*?\}|\*\s+as\s+\w+|[\w]+)\s+from\s+)?['"][^'"]+['"];?\n?/g,
    ''
  );
  return withoutImports
    .split('\n')
    .map(line => {
      const codeBlockMatch = line.match(/^\s*<ExampleCodeBlock\s+code=\{(\w+)\}\s*\/>/);
      if (codeBlockMatch) {
        const name = codeBlockMatch[1];
        const source = exampleSources[name];
        if (source) {
          return `\`\`\`tsx\n${source.trimEnd()}\n\`\`\``;
        }
        return '';
      }
      if (
        /^\s*<(Meta|SymbolDoc|SymbolDescription|Specifications|InformationHighlight)\b/.test(line)
      ) {
        return '';
      }
      return line;
    })
    .join('\n')
    .replace(/^\n+/, '')
    .replace(/\n{3,}/g, '\n\n');
}

function findExampleSources(mdxFilePath: string): Record<string, string> {
  const mdxDir = path.dirname(mdxFilePath);
  const examplesDir = path.join(mdxDir, 'examples');
  if (!fs.existsSync(examplesDir) || !fs.statSync(examplesDir).isDirectory()) {
    return {};
  }

  const sources: Record<string, string> = {};
  const entries = fs.readdirSync(examplesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

  for (const entry of entries) {
    const name = entry.replace(/\.(tsx?|ts)$/, '');
    sources[name] = fs.readFileSync(path.join(examplesDir, entry), 'utf8');
  }

  return sources;
}

function findMdxFile(storyFilePath: string): string | null {
  const dir = path.dirname(storyFilePath);
  const entries = fs.readdirSync(dir);
  const mdxFiles = entries.filter(e => e.endsWith('.mdx'));

  if (mdxFiles.length === 0) {
    return null;
  }

  const storyBaseName = path.basename(storyFilePath).replace(/\.stories\.(ts|tsx)$/, '');
  const exactMatch = mdxFiles.find(f => f.replace('.mdx', '') === storyBaseName);
  if (exactMatch) {
    return path.join(dir, exactMatch);
  }

  return path.join(dir, mdxFiles[0]);
}

async function main() {
  const repoModules = path.resolve(__dirname, '../..');
  const outputPath = path.resolve(__dirname, '../lib/stories-config.json');

  const storyFiles = await glob('**/stories/**/*.stories.{ts,tsx}', {
    cwd: repoModules,
    absolute: true,
    ignore: ['**/node_modules/**', '**/visual-testing/**'],
  });

  const stories: Record<string, StoryEntry> = {};
  const slugCounts = new Map<string, number>();

  const TITLE_PREFIXES = ['Components/', 'Preview/'];
  const candidates: Array<{slug: string; title: string; storyFile: string; mdxPath: string}> = [];

  for (const storyFile of storyFiles) {
    const title = extractTitle(storyFile);
    if (!title) {
      continue;
    }
    if (!TITLE_PREFIXES.some(prefix => title.startsWith(prefix))) {
      continue;
    }

    const mdxPath = findMdxFile(storyFile);
    if (!mdxPath) {
      continue;
    }

    const slug = titleToSlug(title);
    const count = slugCounts.get(slug) || 0;
    slugCounts.set(slug, count + 1);

    const relativeMdxPath = path.relative(path.resolve(__dirname, '../../..'), mdxPath);
    candidates.push({slug, title, storyFile, mdxPath: relativeMdxPath});
  }

  for (const candidate of candidates) {
    let slug = candidate.slug;
    const count = slugCounts.get(slug) || 0;

    if (count > 1) {
      const parts = candidate.title.split('/');
      slug = parts.join('-').toLowerCase().replace(/\s+/g, '-');
    }

    if (stories[slug]) {
      console.warn(`Duplicate slug "${slug}" for "${candidate.title}", skipping`);
      continue;
    }

    const storybookPath = titleToStorybookPath(candidate.title);
    const repoRoot = path.resolve(__dirname, '../../..');
    const absoluteMdxPath = path.resolve(repoRoot, candidate.mdxPath);
    const exampleSources = findExampleSources(absoluteMdxPath);
    stories[slug] = {
      title: candidate.title,
      storybookUrl: `${STORYBOOK_BASE_URL}?path=/docs/${storybookPath}--docs`,
      mdxPath: candidate.mdxPath,
      mdxProse: extractMdxProse(absoluteMdxPath, exampleSources),
    };
  }

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }

  fs.writeFileSync(outputPath, JSON.stringify({stories}, null, 2) + '\n');

  const slugList = Object.keys(stories);
  console.log(`Discovered ${slugList.length} component stories:`);
  slugList.forEach(slug => console.log(`  - ${slug}: ${stories[slug].title}`));
}

main().catch((error: unknown) => {
  console.error('Discovery failed:', error);
  process.exit(1);
});
