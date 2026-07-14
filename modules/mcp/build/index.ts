import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

import index from '../lib/config.json';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const llmSourceDir = path.resolve(__dirname, '../../docs/llm');
const accessibilitySourceDir = path.resolve(__dirname, '../../docs/mdx');
const targetDir = path.resolve(__dirname, '../dist/lib');

type AccessibilityFileEntry =
  | string
  | {
      source: string;
      slug: string;
    };

/**
 * Copy a specific file from source to destination, creating directories as needed
 */
function copyFile(sourceDir: string, relativePath: string): void {
  const srcPath = path.resolve(sourceDir, relativePath);
  const destPath = path.resolve(targetDir, relativePath);

  // Check if source file exists
  if (!fs.existsSync(srcPath)) {
    throw new Error(`Source file not found: ${srcPath}`);
  }

  // Create destination directory if it doesn't exist
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, {recursive: true});
  }

  // Copy the file
  fs.copyFileSync(srcPath, destPath);
}

const allFiles = [...new Set([...index.upgradeGuideFiles, ...index.tokenFiles])];
const accessibilityFiles = [
  ...new Map(
    (index.accessibilityFiles as AccessibilityFileEntry[]).map(file => {
      const source = typeof file === 'string' ? file : file.source;
      return [source, {source}] as const;
    })
  ).values(),
];

console.log(`Found ${allFiles.length + accessibilityFiles.length} files to copy:`);
allFiles.forEach(file => console.log(`  - ${file}`));
accessibilityFiles.forEach(file => console.log(`  - ${file.source}`));

allFiles.forEach(file => copyFile(llmSourceDir, file));
accessibilityFiles.forEach(file => {
  copyFile(accessibilitySourceDir, file.source);
});

// story-viewer.html is now built by build-story-apps.ts through Vite (not copied raw).

console.log('\nCopy completed successfully!');
