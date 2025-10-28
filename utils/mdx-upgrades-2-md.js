#!/usr/bin/env node

/**
 * Canvas Kit Upgrade Guide Migration Script
 *
 * Converts MDX upgrade guides to Markdown format for LLM consumption.
 * Always regenerates all files to ensure consistency.
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  sourceDir: path.join(process.cwd(), 'modules', 'docs', 'mdx'),
  targetDir: path.join(process.cwd(), 'modules', 'docs', 'llm', 'upgrade-guides'),
  codemodDir: path.join(process.cwd(), 'modules', 'codemod', 'lib'),
  codemodsFile: path.join(process.cwd(), 'modules', 'docs', 'mdx', 'CODEMODS.mdx'),
  minVersion: 12.0,
  colors: {
    success: '\x1b[32m',
    error: '\x1b[31m',
    warning: '\x1b[33m',
    info: '\x1b[34m',
    reset: '\x1b[0m',
  },
};

// Logging utility
const log = (message, type = 'reset') => {
  const color = CONFIG.colors[type] || CONFIG.colors.reset;
  console.log(`${color}${message}${CONFIG.colors.reset}`);
};

// Parse version from filename
const parseVersion = filename => {
  const match = filename.match(/^(\d+)\.(\d+)-UPGRADE-GUIDE\.mdx$/);
  if (!match) {
    return null;
  }

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    full: parseFloat(`${match[1]}.${match[2]}`),
  };
};

// Remove unnecessary imports for MD format
const cleanImports = content => {
  // Find where the actual content starts (after imports and Meta tag)
  const codeBlockRegex = /```[\s\S]*?```/g;
  let firstCodeBlockIndex = content.length;
  let match;
  while ((match = codeBlockRegex.exec(content)) !== null) {
    firstCodeBlockIndex = match.index;
    break;
  }

  // Process content in two parts: top (before first code block) and rest
  let topContent = content.substring(0, firstCodeBlockIndex);
  const restContent = content.substring(firstCodeBlockIndex);

  // More specific import patterns that capture the semicolon
  const patterns = [
    // Import from @workday (with optional path)
    /import\s+(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)\s+from\s+['"]@workday\/[^'"]+['"]\s*;\s*\n?/g,
    // Import from @storybook
    /import\s+(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)\s+from\s+['"]@storybook\/[^'"]+['"]\s*;\s*\n?/g,
    // Meta tag lines
    /<Meta[^>]*\/>\s*\n?/g,
    /<Meta[^>]*>[\s\S]*?<\/Meta>\s*\n?/g,
    // Orphaned semicolons on their own lines
    /^\s*;\s*$/gm,
  ];

  // Remove imports and Meta tags from top content
  patterns.forEach(pattern => {
    topContent = topContent.replace(pattern, '');
  });

  // Clean up excessive newlines
  topContent = topContent.replace(/\n{3,}/g, '\n\n').trim();

  // Combine cleaned top content with rest
  const cleaned = (topContent + restContent)
    .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
    .trim();

  return cleaned;
};

// Get codemod transformations for a specific version
const getCodemodTransformations = async version => {
  try {
    const versionDir = path.join(CONFIG.codemodDir, `v${version}`);
    const files = await fs.readdir(versionDir);

    // Filter out non-transform files (spec, utils, index.ts)
    const transformFiles = files
      .filter(
        file =>
          file.endsWith('.ts') &&
          !file.includes('spec') &&
          !file.includes('utils') &&
          file !== 'index.ts'
      )
      .map(file => file.replace('.ts', ''));

    return transformFiles;
  } catch (error) {
    log(`  ⚠ Could not read codemod directory for v${version}: ${error.message}`, 'warning');
    return [];
  }
};

// Create codemod summary for a version
const createCodemodSummary = async version => {
  const transformations = await getCodemodTransformations(version);

  if (transformations.length === 0) {
    return `No codemod transformations available for v${version}.`;
  }

  let summary = `## Codemod Transformations for v${version}\n\n`;
  summary += `The following automated transformations are available for upgrading to v${version}:\n\n`;

  transformations.forEach(transform => {
    // Convert camelCase to readable format
    const readableName = transform
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();

    summary += `- **${readableName}**: ${transform}\n`;
  });

  summary += `\nRun the codemod with: \`npx @workday/canvas-kit-codemod v${version} [path]\`\n`;

  return summary;
};

// Process CODEMODS.mdx content
const processCodemodsMdx = async () => {
  try {
    const content = await fs.readFile(CONFIG.codemodsFile, 'utf-8');

    // Remove Meta tags and clean imports
    let processed = content
      .replace(/<Meta[^>]*\/>/g, '')
      .replace(/<Meta[^>]*>[\s\S]*?<\/Meta>/g, '');
    processed = cleanImports(processed);

    return processed;
  } catch (error) {
    log(`  ⚠ Could not read CODEMODS.mdx: ${error.message}`, 'warning');
    return '';
  }
};

// Process MDX content to Markdown
const processContent = async (content, sourceDir, version, codemodsContent) => {
  // Remove Meta tags
  let processed = content.replace(/<Meta[^>]*\/>/g, '').replace(/<Meta[^>]*>[\s\S]*?<\/Meta>/g, '');

  // Clean imports
  processed = cleanImports(processed);

  // Include referenced example files
  const exampleRegex = /{\/\*\s*import\s+Examples?\s+from\s+['"]([^'"]+\.mdx)['"]\s*\*\/}/g;
  const includedFiles = new Set();

  let match;
  while ((match = exampleRegex.exec(content)) !== null) {
    const examplePath = match[1];
    if (!includedFiles.has(examplePath)) {
      try {
        const fullPath = path.resolve(sourceDir, examplePath);
        const exampleContent = await fs.readFile(fullPath, 'utf-8');
        processed += `\n\n---\n\n## Examples from: ${examplePath}\n\n${exampleContent}`;
        includedFiles.add(examplePath);
        log(`  → Included: ${examplePath}`, 'info');
      } catch (error) {
        log(`  ⚠ Could not include: ${examplePath}`, 'warning');
      }
    }
  }

  // Add codemod information
  if (codemodsContent) {
    processed += `\n\n---\n\n## Codemod Reference\n\n${codemodsContent}`;
  }

  // Add version-specific codemod transformations
  const codemodSummary = await createCodemodSummary(version);
  processed += `\n\n${codemodSummary}`;

  return processed;
};

// Main migration function
const migrate = async () => {
  log('🚀 Canvas Kit Upgrade Guide Migration\n', 'success');

  try {
    // Validate source directory
    await fs.access(CONFIG.sourceDir).catch(() => {
      throw new Error(`Source directory not found: ${CONFIG.sourceDir}`);
    });

    // Create target directory
    await fs.mkdir(CONFIG.targetDir, {recursive: true});

    // Process CODEMODS.mdx once
    log('📚 Processing CODEMODS.mdx...');
    const codemodsContent = await processCodemodsMdx();
    if (codemodsContent) {
      log('  ✓ CODEMODS.mdx processed successfully', 'success');
    }

    // Get upgrade guide files
    const files = await fs.readdir(CONFIG.sourceDir);
    const upgradeGuides = files
      .filter(file => {
        const version = parseVersion(file);
        return version && version.full >= CONFIG.minVersion;
      })
      .sort((a, b) => {
        const vA = parseVersion(a);
        const vB = parseVersion(b);
        return vA.full - vB.full;
      });

    if (upgradeGuides.length === 0) {
      throw new Error('No upgrade guides found for versions >= 12.0');
    }

    log(`Found ${upgradeGuides.length} upgrade guides\n`);

    // Process each file
    const results = {success: 0, failed: 0};

    for (const file of upgradeGuides) {
      try {
        log(`📄 ${file}`);

        const sourcePath = path.join(CONFIG.sourceDir, file);
        const targetPath = path.join(CONFIG.targetDir, file.replace('.mdx', '.md'));

        const content = await fs.readFile(sourcePath, 'utf-8');
        const version = parseVersion(file);
        const processed = await processContent(
          content,
          CONFIG.sourceDir,
          version.major,
          codemodsContent
        );

        await fs.writeFile(targetPath, processed, 'utf-8');

        log(`  ✓ Converted successfully`, 'success');
        results.success++;
      } catch (error) {
        log(`  ✗ Error: ${error.message}`, 'error');
        results.failed++;
      }
    }

    // Summary
    log('\n📊 Summary', 'info');
    log(`  Total: ${upgradeGuides.length}`);
    log(`  ✓ Success: ${results.success}`, 'success');
    if (results.failed > 0) {
      log(`  ✗ Failed: ${results.failed}`, 'error');
    }

    process.exit(results.failed > 0 ? 1 : 0);
  } catch (error) {
    log(`\n❌ Fatal Error: ${error.message}`, 'error');
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  migrate();
}

module.exports = {migrate};
