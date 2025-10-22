#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Configuration
const SOURCE_DIR = path.join(process.cwd(), 'modules', 'docs', 'mdx');
const TARGET_DIR = path.join(process.cwd(), 'modules', 'docs', 'llm', 'upgrade-guides');
const MIN_VERSION = 12.0;

// ANSI color codes for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

// Helper function to log with colors
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Helper function to parse version from filename
function parseVersion(filename) {
  const match = filename.match(/^(\d+)\.(\d+)-UPGRADE-GUIDE\.mdx$/);
  if (!match) return null;

  const major = parseInt(match[1]);
  const minor = parseInt(match[2]);
  return {major, minor, full: major + minor * 0.1};
}

// Helper function to process file content
async function processContent(content, sourceDir) {
  // Remove Meta tag
  content = content.replace(/<Meta[^>]*\/>/g, '');
  content = content.replace(/<Meta[^>]*>[\s\S]*?<\/Meta>/g, '');

  // Find and include referenced files
  const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
  const mdxImportRegex = /{\/\*\s*import\s+([^\s]+)\s*\*\/}/g;

  let processedContent = content;

  // Process standard imports
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    try {
      const fullPath = path.resolve(sourceDir, importPath);
      const importedContent = await fs.readFile(fullPath, 'utf-8');

      processedContent += `\n\n---\n## Referenced from: ${importPath}\n\n${importedContent}`;
      log(`  - Included reference: ${importPath}`, 'blue');
    } catch (error) {
      log(`  - Warning: Could not include reference ${importPath}: ${error.message}`, 'yellow');
    }
  }

  // Process MDX-style imports
  while ((match = mdxImportRegex.exec(content)) !== null) {
    const importPath = match[1];
    try {
      const fullPath = path.resolve(sourceDir, importPath);
      const importedContent = await fs.readFile(fullPath, 'utf-8');

      processedContent += `\n\n---\n## Referenced from: ${importPath}\n\n${importedContent}`;
      log(`  - Included MDX reference: ${importPath}`, 'blue');
    } catch (error) {
      log(`  - Warning: Could not include MDX reference ${importPath}: ${error.message}`, 'yellow');
    }
  }

  return processedContent;
}

// Main migration function
async function migrateUpgradeGuides() {
  log('Starting Canvas Kit Upgrade Guide Migration', 'green');
  log('=========================================\n');

  try {
    // Check if source directory exists
    try {
      await fs.access(SOURCE_DIR);
    } catch (error) {
      throw new Error(
        `Source directory not found: ${SOURCE_DIR}\nPlease run this script from the Canvas Kit root directory.`
      );
    }

    log(`Source directory: ${SOURCE_DIR}`, 'blue');
    log(`Target directory: ${TARGET_DIR}`, 'blue');
    log(`Minimum version: ${MIN_VERSION}\n`);

    // Create target directory if it doesn't exist
    await fs.mkdir(TARGET_DIR, {recursive: true});
    log('Created target directory structure\n');

    // Read all files from source directory
    const files = await fs.readdir(SOURCE_DIR);

    // Filter for upgrade guide files
    const upgradeGuides = files.filter(file => {
      if (!file.endsWith('-UPGRADE-GUIDE.mdx')) return false;

      const version = parseVersion(file);
      if (!version) return false;

      return version.full >= MIN_VERSION;
    });

    if (upgradeGuides.length === 0) {
      throw new Error('No upgrade guide files found matching criteria');
    }

    log(`Found ${upgradeGuides.length} upgrade guides to process:\n`);

    // Sort by version
    upgradeGuides.sort((a, b) => {
      const versionA = parseVersion(a);
      const versionB = parseVersion(b);
      return versionA.full - versionB.full;
    });

    // Process each file
    let successCount = 0;
    let errorCount = 0;

    for (const file of upgradeGuides) {
      try {
        log(`Processing: ${file}`);

        // Read file content
        const sourcePath = path.join(SOURCE_DIR, file);
        const content = await fs.readFile(sourcePath, 'utf-8');

        // Process content
        const processedContent = await processContent(content, SOURCE_DIR);

        // Create new filename (.mdx -> .md)
        const newFilename = file.replace('.mdx', '.md');
        const targetPath = path.join(TARGET_DIR, newFilename);

        // Write processed content
        await fs.writeFile(targetPath, processedContent, 'utf-8');

        log(`  ✓ Successfully converted to: ${newFilename}`, 'green');
        successCount++;
      } catch (error) {
        log(`  ✗ Error processing ${file}: ${error.message}`, 'red');
        errorCount++;
      }
    }

    // Summary
    log('\n=========================================');
    log('Migration Summary:', 'green');
    log(`  - Total files processed: ${upgradeGuides.length}`);
    log(`  - Successful conversions: ${successCount}`, successCount > 0 ? 'green' : 'yellow');
    if (errorCount > 0) {
      log(`  - Failed conversions: ${errorCount}`, 'red');
    }
    log('=========================================\n');

    // Exit with appropriate code for CI
    if (errorCount > 0) {
      process.exit(1);
    }
  } catch (error) {
    log(`\nFatal Error: ${error.message}`, 'red');
    log('\nStack trace:', 'red');
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the migration
migrateUpgradeGuides().catch(error => {
  log(`Unhandled error: ${error.message}`, 'red');
  process.exit(1);
});
