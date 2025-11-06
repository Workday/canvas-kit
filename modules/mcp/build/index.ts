import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import index from '../lib/config.json';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const llmSourceDir = path.resolve(__dirname, '../../docs/llm');
const llmTxtSourceDir = path.resolve(__dirname, '../../docs/llm-txt');
const targetDir = path.resolve(__dirname, '../dist/lib');

/**
 * Copy a specific file from source to destination, creating directories as needed
 */
function copyFile(relativePath: string): void {
  // Determine source directory based on file path
  let srcPath: string;
  if (relativePath.startsWith('llm-txt/')) {
    // For llm-txt files, use llm-txt source directory and remove the llm-txt/ prefix
    const fileName = relativePath.replace('llm-txt/', '');
    srcPath = path.resolve(llmTxtSourceDir, fileName);
  } else {
    // For upgrade-guides files, use llm source directory
    srcPath = path.resolve(llmSourceDir, relativePath);
  }
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
const filesToCopy = index.upgradeGuideFiles;

console.log(`Found ${filesToCopy.length} files to copy:`);
filesToCopy.forEach(file => console.log(`  - ${file}`));

filesToCopy.forEach(file => copyFile(file));

console.log('\nCopy completed successfully!');
