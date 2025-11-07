/**
 * File Processor Module
 *
 * Core module for processing MDX files and converting them to Markdown.
 * Handles the main processing pipeline and coordinates between various utilities.
 */

import fs from 'fs/promises';
import path from 'path';
import {normalizeWhitespace} from './utils/markdownUtils.js';

/**
 * Creates a file processor with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} fileUtils - File utilities
 * @param {Object} mdxParser - MDX parser
 * @param {Object} componentProcessors - Component processors
 * @returns {Object} File processor object
 */
export function createFileProcessor(config, fileUtils, mdxParser, componentProcessors) {
  return {
    /**
     * Process MDX File to Markdown
     *
     * Core function that reads an MDX file, processes its components,
     * and generates a Markdown file with equivalent content.
     *
     * @param {string} mdxFilePath - Path to the source MDX file
     * @param {string} outputPath - Destination path for the Markdown file
     * @param {string} rootInputDir - Root input directory
     * @param {string} rootOutputDir - Root output directory
     * @param {boolean} isImported - Whether this file is being processed as an import
     * @returns {Promise<string>} - The processed Markdown content
     * @throws {Error} - If there are issues with file processing
     */
    async processMdxFile(mdxFilePath, outputPath, rootInputDir, rootOutputDir, isImported = false) {
      // Check if this file has already been processed
      const cacheKey = config.cacheKeys.processedFile(mdxFilePath);
      if (config.cache.has(cacheKey)) {
        return config.cache.get(cacheKey);
      }

      const logger = config.logger;


      try {
        // Read file content
        const mdxContent = await fs.readFile(mdxFilePath, 'utf-8');

        // Check if it's a TSX file
        if (mdxFilePath.endsWith('.tsx')) {

          // For TSX files, create a simple markdown file with just the code
          const fileName = path.basename(mdxFilePath, '.tsx');
          let markdownContent = `---
title: ${fileName}
source_file: ${path.relative(rootInputDir, mdxFilePath)}
---

# ${fileName}

This file is a React component.

\`\`\`tsx
${mdxContent}
\`\`\`
`;
          // Write to file
          if (!isImported && outputPath) {
            await fs.mkdir(path.dirname(outputPath), {recursive: true});
            await fs.writeFile(outputPath, markdownContent, 'utf-8');
          }

          return markdownContent;
        }

        // Parse frontmatter and content for MDX files
        const {frontmatter, content} = mdxParser.parseFrontmatter(mdxContent);

        // Process imports and extract them
        const {processedContent, imports} = mdxParser.processImports(content);

        // Process components in the content
        const finalContent = await componentProcessors.processComponents(
          processedContent,
          imports,
          mdxFilePath,
          rootInputDir,
          rootOutputDir
        );

        // Add document identifier and URL to frontmatter
        frontmatter.source_file = path.relative(rootInputDir, mdxFilePath);
        const relativePath = path.relative(rootInputDir, mdxFilePath);
        const urlPath = relativePath.replace(/\.mdx$/, '');
        frontmatter.live_url = `${config.baseUrl}/${urlPath}`;

        // Build final markdown content
        let markdownContent = mdxParser.generateFrontmatter(frontmatter);
        markdownContent += finalContent;

        // Clean up whitespace
        const cleanedContent = normalizeWhitespace(markdownContent);

        // Save to the cache
        config.cache.set(cacheKey, cleanedContent);

        // Write to file if needed
        if (!isImported && outputPath) {
          try {
            // Make sure we can write to this path (handles directory conflicts)
            await fileUtils.ensureValidOutputPath(outputPath);

            // Create directory structure
            const dirName = path.dirname(outputPath);
            await fs.mkdir(dirName, {recursive: true});

            // Write the file
            await fs.writeFile(outputPath, cleanedContent, 'utf-8');

            // Log success (less verbose)
            logger.log(`Successfully wrote: ${outputPath} (${cleanedContent.length} chars)`);
          } catch (error) {
            logger.error(`Error writing file ${outputPath}:`, error);
          }
        }

        return cleanedContent;
      } catch (error) {
        logger.error(`Error processing file ${mdxFilePath}:`, error);
        throw error;
      }
    },

    /**
     * Process MDX to Markdown Conversion
     *
     * Main entry point that orchestrates the conversion process.
     *
     * @param {Object} options - Processing options
     * @returns {Promise<void>} - Resolves when all files have been processed
     * @throws {Error} - If there are issues with directory access or processing
     */
    async processFiles(options) {
      const {inputDir, outputDir} = options;
      const logger = config.logger;

      try {
        // Validate input directory
        try {
          await fs.access(inputDir);
        } catch (err) {
          logger.error(`Input directory not found: ${inputDir}`);
          process.exit(1);
        }

        // Check for node_modules existence
        try {
          await fs.access(config.nodeModulesPath);
        } catch (err) {
          logger.warn(`⚠️ node_modules not found at: ${config.nodeModulesPath}`);
        }

        // Create output directory (only if outputDir is a directory, not a file)
        const isInputFile = (await fs.stat(inputDir)).isFile();
        logger.log(`isInputFile: ${isInputFile}, inputDir: ${inputDir}, outputDir: ${outputDir}`);
        if (!isInputFile) {
          logger.log(`Creating output directory: ${outputDir}`);
          await fs.mkdir(outputDir, {recursive: true});
        } else {
          // For single file processing, ensure the output directory exists
          const outputDirPath = path.dirname(outputDir);
          logger.log(`Creating parent directory for single file: ${outputDirPath}`);
          await fs.mkdir(outputDirPath, {recursive: true});
        }

        logger.log(`Starting MDX to Markdown conversion...`);
        logger.log(`Input directory: ${inputDir}`);
        logger.log(`Output directory: ${outputDir}`);
        logger.log(`Base URL: ${config.baseUrl}`);

        // Load docs
        const docsLoaded = await fileUtils.loadCKDocs();
        logger.log(`Docs loading ${docsLoaded ? 'succeeded' : 'failed'}`);

        let mdxFiles = [];
        try {
          // Check if inputDir is a file
          const stats = await fs.stat(inputDir);
          if (stats.isFile()) {
            if (inputDir.endsWith('.mdx') || inputDir.endsWith('.tsx')) {
              mdxFiles = [inputDir];
              logger.log(`Processing single file: ${inputDir}`);
            } else {
              logger.error(`Input file is not an MDX or TSX file: ${inputDir}`);
              process.exit(1);
            }
          } else {
            // Find all MDX files recursively
            mdxFiles = await fileUtils.findMdxFiles(inputDir);
          }
        } catch (err) {
          logger.error(`Error checking input path: ${err.message}`);
          process.exit(1);
        }

        logger.log(`Found ${mdxFiles.length} files to process.`);

        // Process files in batches to avoid memory issues with large repositories
        const BATCH_SIZE = 10;
        for (let i = 0; i < mdxFiles.length; i += BATCH_SIZE) {
          const batch = mdxFiles.slice(i, i + BATCH_SIZE);

          // Setup directory structure first to avoid missing directories
          const contentRootDir = isInputFile ? path.dirname(inputDir) : inputDir;
          if (i === 0 && !isInputFile) {
            // Only need to do this once, in the first batch, and only for directory processing
            logger.log(`Setting up directory structure from ${contentRootDir} to ${outputDir}`);
            await fileUtils.setupDirectoryStructure(contentRootDir, outputDir);
          }

          // Process each file in the batch sequentially to avoid race conditions
          for (const mdxFile of batch) {
            // Handle single file case
            let outputPath;
            const isInputFile = (await fs.stat(inputDir)).isFile();

            if (isInputFile) {
              // If input is a file, use outputDir as the direct output path
              outputPath = outputDir;
            } else {
              // Use the utility function to calculate the output path
              outputPath = fileUtils.calculateOutputPath(contentRootDir, mdxFile, outputDir);
            }

            logger.log(`Processing file: ${mdxFile} -> ${outputPath}`);
            const rootInputDir = isInputFile ? path.dirname(inputDir) : inputDir;
            const rootOutputDir = isInputFile ? path.dirname(outputDir) : outputDir;
            await this.processMdxFile(mdxFile, outputPath, rootInputDir, rootOutputDir);
          }

          // Process any queued images after each batch
          await fileUtils.processImageBatch();

          logger.log(
            `Processed batch ${Math.min(i + BATCH_SIZE, mdxFiles.length)}/${mdxFiles.length}`
          );
        }

        // Process any remaining images
        await fileUtils.processImageBatch();

        // Success message is handled in the main function
        return true;
      } catch (error) {
        logger.error('Error during conversion:');
        if (config.debug) {
          logger.error(error);
        }
        return false;
      }
    },
  };
}
