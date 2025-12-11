import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import index from '../lib/config.json';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const llmSourceDir = path.resolve(__dirname, '../../docs/llm');
const targetDir = path.resolve(__dirname, '../dist/lib');

/**
 * Copy a specific file from source to destination, creating directories as needed
 */
function copyFile(relativePath: string): void {
  // All files are now in the llm source directory
  const srcPath = path.resolve(llmSourceDir, relativePath);
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

// Get file list from index.json and copy only those files
// Combine upgradeGuideFiles and tokenFiles, removing duplicates
const allFiles = [...new Set([...index.upgradeGuideFiles, ...index.tokenFiles])];

console.log(`Found ${allFiles.length} files to copy:`);
allFiles.forEach(file => console.log(`  - ${file}`));

allFiles.forEach(file => copyFile(file));

console.log('\nCopy completed successfully!');
