/**
 * Image Processor Module
 *
 * Handles image references in MDX content, copying images to the output location
 * and updating references to maintain correct paths.
 */

import path from 'path';
import {resetRegex} from '../utils/regexPatterns.js';

/**
 * Creates an image processor with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} fileUtils - File utilities
 * @returns {Object} Image processor functions
 */
export function createImageProcessor(config, regex, fileUtils) {
  return {
    /**
     * Processes image references in content.
     * Copies images to the markdown file location and updates references.
     *
     * @param {string} content - MDX content
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @param {string} rootOutputDir - Root output directory
     * @returns {Promise<string>} Processed content with updated image references
     */
    async processImages(content, filePath, rootInputDir, rootOutputDir) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.image);

      let match;
      let processedContent = content;
      const replacements = [];

      // Calculate output file path
      const relativePath = path.relative(rootInputDir, filePath);
      const outputFilePath = path.join(rootOutputDir, relativePath.replace(/\.mdx$/, '.md'));
      const outputDir = path.dirname(outputFilePath);

      // Collect all image references
      while ((match = regex.image.exec(content)) !== null) {
        const [fullMatch, altText, imagePath] = match;

        // Skip URLs
        if (imagePath.startsWith('http')) {
          continue;
        }

        // Get original image path
        const baseDir = path.dirname(filePath);
        const fullImagePath = path.resolve(baseDir, imagePath);

        // Get image filename
        const imageName = path.basename(imagePath);

        // Destination will be in same directory as markdown file
        const destImagePath = path.join(outputDir, imageName);

        // Queue the image for copying
        config.pendingImages.push({
          source: fullImagePath,
          destination: destImagePath,
        });

        // Use just the filename in the new markdown reference
        replacements.push({
          original: fullMatch,
          replacement: `![${altText}](${imageName})`,
        });
      }

      // Update all image references in the content
      for (const {original, replacement} of replacements) {
        processedContent = processedContent.replace(original, replacement);
      }

      return processedContent;
    },
  };
}
