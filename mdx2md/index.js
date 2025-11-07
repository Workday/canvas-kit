#!/usr/bin/env node
/* eslint-disable compat/compat */

/**
 * MDX to Markdown Converter
 *
 * This script converts MDX files from a design system repository to Markdown format,
 * handling imports, component references, image copying, and code compilation.
 *
 * Features:
 * - Extracts and preserves YAML frontmatter
 * - Processes component imports and references
 * - Handles code examples and API documentation
 * - Copies and relinks images
 *
 * Usage:
 *   node mdx2md.mjs <input-dir> <output-dir> [--base-url=URL]
 *
 * @example
 *   node mdx2md.mjs ./modules ./docs/markdown --base-url=https://workday.github.io/canvas-kit
 */

import path from 'path';
import {REGEX} from './utils/regexPatterns.js';
import {createConfig} from './config.js';
import {parseCliArgs, displayHelp} from './cli.js';
import {createFileProcessor} from './fileProcessor.js';
import {createFileUtils} from './fileUtils.js';
import {createMdxParser} from './mdxParser.js';
import {createComponentProcessors} from './processors/index.js';
import {genLlmsTxt} from './genLlmsTxt.js';

// Parse CLI arguments
const cliOptions = parseCliArgs();

// Display help if requested
if (cliOptions.showHelp) {
  displayHelp(cliOptions);
  process.exit(0);
}

// Create configuration with CLI options
const config = createConfig({
  baseUrl: cliOptions.baseUrl,
  nodeModulesPath: path.resolve('./') + '/node_modules',
  debug: cliOptions.debug,
});

// Initialize dependencies
const fileUtils = createFileUtils(config);
const mdxParser = createMdxParser(REGEX);
const componentProcessors = createComponentProcessors(config, REGEX, fileUtils, mdxParser);
const fileProcessor = createFileProcessor(config, fileUtils, mdxParser, componentProcessors);

/**
 * Main function to run the MDX to Markdown conversion
 */
async function main() {
  try {
    // Display start message based on debug mode
    if (!config.debug) {
      console.log('Converting MDX files to Markdown...');
    }

    // Process all files
    const success = await fileProcessor.processFiles({
      inputDir: cliOptions.inputDir,
      outputDir: cliOptions.outputDir,
    });

    // Generate the LLMs reference file
    if (success) {
      config.logger.log(`Generating LLMs reference file...`);
      await genLlmsTxt(
        cliOptions.outputDir,
        path.join(cliOptions.outputDir, '..', 'llms.txt'),
        config.logger
      );

      // Show completion message
      if (config.debug) {
        config.logger.log('Conversion completed successfully!');
      } else {
        console.log(`✅ Conversion successful! Output written to: ${cliOptions.outputDir}`);
      }
    } else {
      if (!config.debug) {
        console.error('❌ Conversion failed. Use --debug for more information.');
      }
    }

    // Exit with appropriate code
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('Fatal error:');
    if (config.debug) {
      console.error(error);
    }
    process.exit(1);
  }
}

// Start the script
main();
