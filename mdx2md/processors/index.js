/**
 * Component Processors Module
 *
 * This module consolidates all the component processors used in the MDX to Markdown conversion.
 * It serves as a central place to initialize and expose processor functions.
 */

import { createBasicComponentProcessors } from './basicComponents.js';
import { createApiComponentProcessors } from './apiComponents.js';
import { createCodeComponentProcessors } from './codeComponents.js';
import { createImageProcessor } from './imageProcessor.js';
import { createTokenComponentProcessors } from './tokenComponents.js';

/**
 * Creates and initializes all component processors.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} fileUtils - File utilities
 * @param {Object} mdxParser - MDX parser utilities
 * @returns {Object} Object containing all component processor functions
 */
export function createComponentProcessors(config, regex, fileUtils, mdxParser) {
  // Initialize all processor categories
  const basicProcessors = createBasicComponentProcessors(config, regex, mdxParser);
  const apiProcessors = createApiComponentProcessors(config, regex, mdxParser);
  const codeProcessors = createCodeComponentProcessors(config, regex, fileUtils, apiProcessors, mdxParser);
  const imageProcessor = createImageProcessor(config, regex, fileUtils);
  const tokenProcessors = createTokenComponentProcessors(config, regex, fileUtils);

  return {
    /**
     * Main method to process all components in MDX content.
     * Orchestrates the various component processors in the correct order.
     *
     * @param {string} content - MDX content to process
     * @param {Array} imports - Array of import information
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @param {string} rootOutputDir - Root output directory
     * @returns {Promise<string>} Processed content with components converted to Markdown
     */
    async processComponents(content, imports, filePath, rootInputDir, rootOutputDir) {
      // Process CKDocs component first (can import other content)
      let processedContent = await codeProcessors.processCKDocsComponent(
        content,
        imports,
        filePath,
        rootInputDir,
        rootOutputDir
      );

      // Process other specialized components
      processedContent = basicProcessors.processPackageInfoComponent(processedContent);
      processedContent = basicProcessors.processInternalContentComponent(processedContent);
      processedContent = basicProcessors.processExternalContentComponent(processedContent);
      processedContent = basicProcessors.processTabPanelComponent(processedContent);
      processedContent = apiProcessors.processSymbolDocComponent(processedContent);
      processedContent = apiProcessors.processSymbolDescription(processedContent);
      processedContent = basicProcessors.processSpecificationsComponent(processedContent);
      processedContent = await tokenProcessors.processBrandTokensComponent(
        processedContent,
        filePath,
        rootInputDir
      );

      processedContent = await tokenProcessors.processColorGridComponent(
        processedContent,
        filePath,
        rootInputDir
      );

      // Process example code blocks
      processedContent = await codeProcessors.processExampleCodeBlocks(
        processedContent,
        imports,
        filePath,
        rootInputDir,
        rootOutputDir
      );

      // Process any TSX imports as code blocks
      processedContent = await codeProcessors.processTsxImports(
        processedContent,
        imports,
        filePath,
        rootInputDir
      );

      // Process images
      processedContent = await imageProcessor.processImages(
        processedContent,
        filePath,
        rootInputDir,
        rootOutputDir
      );

      // Filter figma links (should be done last to catch any remaining figma links)
      processedContent = basicProcessors.processFigmaLinks(processedContent);

      return processedContent;
    },

    // Export individual processors for direct access if needed
    ...basicProcessors,
    ...apiProcessors,
    ...codeProcessors,
    ...imageProcessor,
    ...tokenProcessors
  };
}