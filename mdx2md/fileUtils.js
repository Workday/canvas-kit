/**
 * FileUtils Module
 *
 * A utility module for handling file system operations related to MDX-to-Markdown conversion.
 * This module uses a factory pattern to create utility functions that operate on the file system.
 *
 * The module provides functionality for:
 * - Finding and reading MDX files recursively in a directory structure
 * - Managing image file copying with batched processing for performance
 * - Resolving import paths between files (both relative and module-based)
 * - Loading and caching file contents to avoid redundant reads
 * - Loading component documentation from Canvas Kit
 *
 * @module fileUtils
 * @requires fs/promises - Node.js promise-based file system operations
 * @requires path - Node.js path manipulation utilities
 *
 * @param {Object} config - Configuration object with the following properties:
 * @param {string} config.baseUrl - Base URL for generated documentation
 * @param {Map} config.cache - Cache for storing processed content
 * @param {string} config.nodeModulesPath - Path to node_modules directory
 * @param {Array} config.canvasDocs - Storage for loaded component documentation
 * @param {number} config.imageBatchSize - Number of images to process in a batch
 * @param {Array} config.pendingImages - Queue of images waiting to be processed
 *
 * @returns {Object} Collection of file utility functions
 * @version 1.0.0
 * @since Node 14.21.3
 */

import fs from 'fs/promises';
import path from 'path';

// We'll use a function factory pattern instead of shared state
export function createFileUtils(config) {
  return {
    /**
     * Gets file stats for a given path
     *
     * @param {string} pathToStat - Path to get stats for
     * @returns {Promise<fs.Stats|null>} - File stats or null if error
     */
    async statPath(pathToStat) {
      try {
        return await fs.stat(pathToStat);
      } catch (error) {
        return null;
      }
    },

    /**
     * Recursively finds all MDX files in a given directory.
     * Skips lib, spec, specs, examples, dist, visual-testing, node_modules,
     * and any directories ending in css.
     */
    async findMdxFiles(directory) {
      try {
        const entries = await fs.readdir(directory, {withFileTypes: true});
        const filePromises = entries.map(async entry => {
          const fullPath = path.join(directory, entry.name);
          
          // Skip directories we don't want to process
          if (entry.isDirectory()) {
            const dirName = entry.name.toLowerCase();
            // Skip lib, spec, specs directories
            if (dirName === 'lib' || dirName === 'spec' || dirName === 'specs') {
              config.logger.log(`Skipping directory: ${fullPath}`);
              return [];
            }
            // Skip all examples directories
            if (dirName === 'examples') {
              config.logger.log(`Skipping examples directory: ${fullPath}`);
              return [];
            }
            // Skip dist, visual-testing, node_modules directories
            if (dirName === 'dist' || dirName === 'visual-testing' || dirName === 'node_modules') {
              config.logger.log(`Skipping directory: ${fullPath}`);
              return [];
            }
            // Skip folders ending in css
            if (dirName.endsWith('css')) {
              config.logger.log(`Skipping directory: ${fullPath}`);
              return [];
            }
            // Skip specific top-level directories
            if (dirName === 'codemod' || dirName === 'mcp' || dirName === 'popup-stack' || dirName === 'styling-transform') {
              config.logger.log(`Skipping directory: ${fullPath}`);
              return [];
            }
            // Skip version directories
            if (dirName === 'version') {
              config.logger.log(`Skipping version directory: ${fullPath}`);
              return [];
            }
            // Skip specific subdirectories
            const normalizedPath = fullPath.replace(/\\/g, '/').toLowerCase();
            if (normalizedPath.includes('/docs/docgen') ||
                normalizedPath.includes('/docs/llm') ||
                normalizedPath.includes('/docs/mdx/images') ||
                normalizedPath.includes('/docs/utils') ||
                normalizedPath.includes('/docs/webpack')) {
              config.logger.log(`Skipping directory: ${fullPath}`);
              return [];
            }
            return this.findMdxFiles(fullPath);
          }
          
          // Only process MDX files (not TSX files)
          return entry.name.endsWith('.mdx') ? [fullPath] : [];
        });

        const files = await Promise.all(filePromises);
        return files.flat();
      } catch (error) {
        config.logger.error(`Error finding MDX files in ${directory}:`, error.message);
        return [];
      }
    },

    /**
     * Adds an image to the pending queue for processing.
     */
    queueImageCopy(imagePath, filePath, rootInputDir, rootOutputDir) {
      const baseDir = path.dirname(filePath);
      const fullImagePath = path.resolve(baseDir, imagePath);

      // Calculate output file path
      const relativePath = path.relative(rootInputDir, filePath);
      const outputFilePath = path.join(rootOutputDir, relativePath.replace(/\.mdx$/, '.md'));
      const outputDir = path.dirname(outputFilePath);

      // Output path will be in the same directory as the markdown file
      const imageName = path.basename(imagePath);
      const outputImagePath = path.join(outputDir, imageName);

      // IMPORTANT: Validate the destination path is within the output directory
      if (!outputImagePath.startsWith(rootOutputDir)) {
        config.logger.warn(
          `Skipping image with invalid destination path: ${outputImagePath} (not in output directory)`
        );
        return imageName; // Still return the image name for the markdown reference
      }

      // Add to pending queue
      config.pendingImages.push({
        source: fullImagePath,
        destination: outputImagePath,
      });

      // Process in batches if we've reached the batch size
      if (config.pendingImages.length >= config.imageBatchSize) {
        // Process async - don't await here to avoid blocking
        this.processImageBatch();
      }

      // Return just the image filename for the markdown reference
      return imageName;
    },

    /**
     * Processes a batch of pending images.
     */
    async processImageBatch() {
      if (config.pendingImages.length === 0) return;

      const imagesToProcess = [...config.pendingImages];
      config.pendingImages = []; // Clear the queue

      // Group by directory to reduce mkdir calls
      const dirSet = new Set();
      imagesToProcess.forEach(img => dirSet.add(path.dirname(img.destination)));

      // Create all directories first
      await Promise.all(
        [...dirSet].map(dir =>
          fs.mkdir(dir, {recursive: true}).catch(err => {
            config.logger.warn(`Failed to create directory ${dir}: ${err.message}`);
          })
        )
      );

      // Process all images
      await Promise.all(
        imagesToProcess.map(async img => {
          try {
            await fs.copyFile(img.source, img.destination);
          } catch (error) {
            config.logger.warn(`Could not copy image ${img.source}: ${error.message}`);
          }
        })
      );
    },

    /**
     * Loads Canvas Kit component documentation from node_modules.
     */
    async loadCKDocs() {
      try {
        const docsPath = path.join(
          config.nodeModulesPath,
          '@workday/canvas-kit-docs/dist/es6/lib/docs.js'
        );

        try {
          // Import the docs module directly
          const docsModule = await import(docsPath);

          if (docsModule.docs && Array.isArray(docsModule.docs)) {
            config.canvasDocs = docsModule.docs;
            config.logger.log(
              `Successfully loaded ${config.canvasDocs.length} documentation items`
            );
            return true;
          } else {
            config.logger.warn('docs export not found or not an array in the module');
          }
        } catch (err) {
          config.logger.warn(`Could not import Canvas Kit docs from: ${docsPath}`);
          config.logger.warn(`Import error: ${err.message}`);
        }

        return false;
      } catch (error) {
        config.logger.warn('Could not load docs module:', error.message);
        return false;
      }
    },

    /**
     * Resolves an import path to an actual file path.
     *
     * @param {string} importPath - The import path to resolve
     * @param {string} filePath - The path of the file containing the import
     * @returns {Promise<string|null>} - The resolved path or null if not found
     */
    async resolveImportPath(importPath, filePath) {
      let resolvedPath;
      const baseDir = path.dirname(filePath);

      // Determine how to resolve the path based on import type
      if (importPath.startsWith('@') || !importPath.startsWith('.')) {
        // For package imports, resolve from node_modules
        resolvedPath = path.resolve(config.nodeModulesPath, importPath);
      } else {
        // For relative imports, resolve relative to the current file
        resolvedPath = path.resolve(baseDir, importPath);
      }

      // Try the resolved path directly
      try {
        await fs.access(resolvedPath);
        return resolvedPath;
      } catch {
        // If direct access fails, try with extensions
        const extensions = ['.mdx', '.tsx', '.jsx', '.js'];

        // Only try extensions if the import doesn't already have one
        if (!path.extname(importPath)) {
          for (const ext of extensions) {
            const pathWithExt = `${resolvedPath}${ext}`;
            try {
              await fs.access(pathWithExt);
              return pathWithExt;
            } catch {
              // Continue to next extension
            }
          }
        }

        // If no valid path found, return null
        return null;
      }
    },

    /**
     * Loads a file's content with caching.
     */
    async loadFileContent(filePath) {
      const cacheKey = `content:${filePath}`;

      // Check cache first
      if (config.cache.has(cacheKey)) {
        return config.cache.get(cacheKey);
      }

      try {
        const content = await fs.readFile(filePath, 'utf-8');
        config.cache.set(cacheKey, content);
        return content;
      } catch (error) {
        return null;
      }
    },

    /**
     * Ensures an output path is valid for writing a file by handling directory conflicts.
     * If a directory exists with the same name as the target file, it is renamed.
     *
     * @param {string} outputPath - The path where a file will be written
     */
    async ensureValidOutputPath(outputPath) {
      try {
        const stats = await fs.stat(outputPath);
        if (stats.isDirectory()) {
          // If a directory exists at the output path, rename it
          const backupPath = `${outputPath}-dir`;
          config.logger.warn(`${outputPath} is a directory, moving to ${backupPath}`);
          await fs.rm(backupPath, {recursive: true, force: true}).catch(error => {
            config.logger.error(error);
          });
          await fs.rename(outputPath, backupPath);
        }
      } catch (err) {
        // If the path doesn't exist, that's normal and expected
        if (err.code !== 'ENOENT') {
          config.logger.warn(`Checking output path ${outputPath}: ${err.message}`);
        }
      }
    },

    /**
     * Sets up the output directory structure based on the input directory.
     * Ensures all subdirectories exist before writing files.
     *
     * @param {string} inputDir - The base input directory to mirror
     * @param {string} outputDir - The base output directory
     */
    async setupDirectoryStructure(inputDir, outputDir) {
      // Get all subdirectories from content folder
      const directories = await this.findDirectories(inputDir);

      // Create all required directories in the output folder
      for (const dir of directories) {
        const relativePath = path.relative(inputDir, dir);
        const targetDir = path.join(outputDir, relativePath);

        try {
          await fs.mkdir(targetDir, {recursive: true});
        } catch (err) {
          config.logger.warn(`Could not create directory ${targetDir}: ${err.message}`);
        }
      }

    },

    /**
     * Check if a directory exists
     *
     * @param {string} dir - Directory path to check
     * @returns {Promise<boolean>} - True if directory exists
     */
    async directoryExists(dir) {
      try {
        const stats = await fs.stat(dir);
        return stats.isDirectory();
      } catch (err) {
        return false;
      }
    },

    /**
     * Recursively finds all directories in a given path.
     * Skips lib, spec, specs, examples, dist, visual-testing, node_modules,
     * and any directories ending in css.
     *
     * @param {string} dirPath - The directory to scan
     * @returns {Promise<string[]>} - Array of directory paths
     */
    async findDirectories(dirPath) {
      const result = [];

      try {
        const entries = await fs.readdir(dirPath, {withFileTypes: true});

        for (const entry of entries) {
          if (entry.isDirectory()) {
            const fullPath = path.join(dirPath, entry.name);
            const dirName = entry.name.toLowerCase();
            
            // Skip lib, spec, specs directories
            if (dirName === 'lib' || dirName === 'spec' || dirName === 'specs') {
              continue;
            }
            
            // Skip all examples directories
            if (dirName === 'examples') {
              continue;
            }
            
            // Skip dist, visual-testing, node_modules directories
            if (dirName === 'dist' || dirName === 'visual-testing' || dirName === 'node_modules') {
              continue;
            }
            
            // Skip folders ending in css
            if (dirName.endsWith('css')) {
              continue;
            }
            
            // Skip specific top-level directories
            if (dirName === 'codemod' || dirName === 'mcp' || dirName === 'popup-stack' || dirName === 'styling-transform') {
              continue;
            }
            
            // Skip version directories
            if (dirName === 'version') {
              continue;
            }
            // Skip specific subdirectories
            const normalizedPath = fullPath.replace(/\\/g, '/').toLowerCase();
            if (normalizedPath.includes('/docs/docgen') ||
                normalizedPath.includes('/docs/llm') ||
                normalizedPath.includes('/docs/mdx/images') ||
                normalizedPath.includes('/docs/utils') ||
                normalizedPath.includes('/docs/webpack')) {
              continue;
            }
            
            result.push(fullPath);

            // Recursively scan subdirectories
            const subDirs = await this.findDirectories(fullPath);
            result.push(...subDirs);
          }
        }
      } catch (err) {
        config.logger.warn(`Error scanning directory ${dirPath}: ${err.message}`);
      }

      return result;
    },

    /**
     * Calculates the output path for a given input file, preserving directory structure.
     *
     * @param {string} contentRootDir - The root content directory
     * @param {string} inputFile - The input file path
     * @param {string} outputDir - The output directory
     * @returns {string} - The calculated output path
     */
    calculateOutputPath(contentRootDir, inputFile, outputDir) {
      // Calculate the proper relative path that preserves subdirectory structure
      const relativePath = path.relative(contentRootDir, inputFile);

      // Create the output path in the corresponding location
      return path.join(outputDir, relativePath.replace(/\.(mdx|tsx)$/, '.md'));
    },
  };
}
