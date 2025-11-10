/**
 * Code Components Processor Module
 *
 * Handles code-related MDX components such as ExampleCodeBlock, CKDocs, and TSX imports.
 * Processes and formats code examples for Markdown output.
 */

import path from 'path';
import {resetRegex} from '../utils/regexPatterns.js';
import {codeBlock} from '../utils/markdownUtils.js';

/**
 * Creates code component processors with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} fileUtils - File utilities
 * @param {Object} apiProcessors - API processors for SymbolDoc handling
 * @returns {Object} Code component processor functions
 */
export function createCodeComponentProcessors(config, regex, fileUtils, apiProcessors, mdxParser) {
  return {
    /**
     * Processes CKDocs components by resolving and including the referenced documentation.
     *
     * @param {string} content - MDX content
     * @param {Array} imports - Array of import information
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @param {string} rootOutputDir - Root output directory
     * @returns {Promise<string>} Processed content with CKDocs components resolved
     */
    async processCKDocsComponent(content, imports, filePath, rootInputDir, rootOutputDir) {
      if (!regex.ckDocs.test(content)) {
        return content; // Skip if no CKDocs component present
      }

      // Reset regex to ensure we start from the beginning
      resetRegex(regex.ckDocs);

      // Find the import for CKDocs
      const ckDocsImport = imports.find(imp =>
        imp.names.some(name => name.default === 'CKDocs' || name.name === 'CKDocs')
      );

      if (!ckDocsImport) {
        return content.replace(regex.ckDocs, '<!-- CKDocs component not found -->');
      }

      const importPath = ckDocsImport.path;
      const resolvedPath = await fileUtils.resolveImportPath(importPath, filePath);

      if (!resolvedPath) {
        return content.replace(
          regex.ckDocs,
          `<!-- CKDocs component not found at ${importPath} -->`
        );
      }
      
      // Store the CKDocs resolved path for later use in processing example code blocks
      config.ckDocsPath = resolvedPath;
      
      if (config.debug) {
        config.logger.log(`Found CKDocs file at: ${resolvedPath}`);
      }

      try {
        // This function will be defined in fileProcessor.js, so we need to call it from there
        // We need to pass this function in as a parameter
        const processMdxFile = async (
          mdxFilePath,
          outputPath,
          rootInputDir,
          rootOutputDir,
          isImported
        ) => {
          try {
            const cacheKey = config.cacheKeys.processedFile(mdxFilePath);
            if (config.cache.has(cacheKey)) {
              return config.cache.get(cacheKey);
            }

            // Read file content
            const content = await fileUtils.loadFileContent(mdxFilePath);
            if (!content) {
              return `<!-- Error loading content from ${mdxFilePath} -->`;
            }

            return content;
          } catch (error) {
            console.error(`Error processing imported MDX file ${mdxFilePath}:`, error.message);
            return `<!-- Error processing imported MDX file: ${error.message} -->`;
          }
        };

        // Process the imported MDX file
        let importedContent = await processMdxFile(
          resolvedPath,
          '', // No output path for imported content
          rootInputDir,
          rootOutputDir,
          true
        );

        // Process any imported components in the content
        importedContent = await this.processImportedComponents(importedContent, resolvedPath);

        // Process SymbolDoc components in the imported content
        if (apiProcessors) {
          importedContent = apiProcessors.processSymbolDocComponent(importedContent);
          importedContent = apiProcessors.processSymbolDescription(importedContent);
        }

        // Process the example code blocks in the imported content
        // Note: We need to parse imports from the imported content for this
        const {processedContent: _, imports: importedImports} = mdxParser.processImports(importedContent);
        importedContent = await this.processExampleCodeBlocks(
          importedContent,
          importedImports,
          resolvedPath, 
          rootInputDir, 
          rootOutputDir
        );

        return content.replace(regex.ckDocs, importedContent);
      } catch (error) {
        console.error(`Error processing CKDocs from ${resolvedPath}:`, error.message);
        return content.replace(
          regex.ckDocs,
          `<!-- Error processing CKDocs component: ${error.message} -->`
        );
      }
    },

    /**
     * Processes imported components that need special handling.
     *
     * @param {string} content - MDX content
     * @param {string} filePath - Path to the MDX file
     * @returns {Promise<string>} Processed content with imported components converted
     */
    async processImportedComponents(content, filePath) {
      // Define component patterns and their replacements
      const componentPatterns = [
        {
          regex: /<Specifications\s+file="([^"]+)"\s+name="([^"]+)"\s*\/>/g,
          replacer: (_, file, name) =>
            `\n## Specifications for ${name}\n\n<!-- Specifications from ${file} -->\n`,
        },
        {
          regex: /<LegacyPatternLink\s+href="([^"]+)">([^<]+)<\/LegacyPatternLink>/g,
          replacer: (_, href, text) => `[${text}](${href})`,
        },
        {
          regex: /<Suggestion\s+([^>]*)>([^<]*)<\/Suggestion>/g,
          replacer: (_, attrs, content) => {
            // This would need the mdxParser to be passed in
            const attributes = {status: '', guidance: ''}; // Simplified
            return `\n**${attributes.status ? attributes.status.toUpperCase() + ': ' : ''}${
              attributes.guidance
            }**\n\n${content}\n`;
          },
        },
        {
          regex: /<SideBySide>([^]*?)<\/SideBySide>/g,
          replacer: (_, content) => `\n## Side by Side Comparison\n\n${content}\n`,
        },
      ];

      // Apply each pattern
      return componentPatterns.reduce(
        (currentContent, pattern) => currentContent.replace(pattern.regex, pattern.replacer),
        content
      );
    },

    /**
     * Processes ExampleCodeBlock components to include example code snippets.
     *
     * @param {string} content - MDX content
     * @param {Array} imports - Array of import information from the MDX parser
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @param {string} rootOutputDir - Root output directory
     * @returns {Promise<string>} Processed content with example code blocks included
     */
    async processExampleCodeBlocks(content, imports, filePath, rootInputDir, rootOutputDir) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.exampleCodeBlock);

      // Build an imports map from the parsed imports array
      const importsMap = {};
      for (const importInfo of imports) {
        const importPath = importInfo.path;
        for (const nameInfo of importInfo.names) {
          const componentName = nameInfo.default || nameInfo.alias || nameInfo.name;
          if (componentName) {
            importsMap[componentName] = { path: importPath, originalName: nameInfo.name || componentName };
          }
        }
      }
      
      if (config.debug) {
        config.logger.log(`Found imports: ${JSON.stringify(Object.keys(importsMap))}`);
      }

      let processedContent = content;
      let match;

      // Find all ExampleCodeBlock components
      while ((match = regex.exampleCodeBlock.exec(content)) !== null) {
        const fullMatch = match[0];
        const componentName = match[1].trim();
        // Include file path in cache key to avoid conflicts between different components with same name
        const cacheKey = `${config.cacheKeys.exampleCode(componentName)}:${filePath}`;

        // Check cache first
        let exampleContent, foundPath;
        if (config.cache.has(cacheKey)) {
          exampleContent = config.cache.get(cacheKey);
          foundPath = config.cache.get(`${cacheKey}:path`) || '';
        } else {
          // Get the directory of the current file
          const dirPath = path.dirname(filePath);
          
          // First approach: Use the import information to resolve the file directly
          if (importsMap[componentName]) {
            const importInfo = importsMap[componentName];
            const importPath = importInfo.path;
            
            if (config.debug) {
              config.logger.log(`Found import for ${componentName}: ${importPath}`);
            }
            
            // Resolve the path correctly based on import type
            let resolvedBasePath;
            
            if (importPath.startsWith('.')) {
              // For relative imports, resolve relative to the current file
              resolvedBasePath = path.resolve(dirPath, importPath);
            } else if (importPath.startsWith('@') || !importPath.startsWith('/')) {
              // For package imports, resolve from node_modules
              resolvedBasePath = path.resolve(config.nodeModulesPath, importPath);
            } else {
              // For absolute paths
              resolvedBasePath = importPath;
            }
            
            // Check if the resolved path exists
            // First try the path as is (in case it's a direct file path)
            exampleContent = await fileUtils.loadFileContent(resolvedBasePath);
            if (exampleContent) {
              foundPath = resolvedBasePath;
            } else {
              // If direct load fails, try adding extensions
              const extensions = ['.tsx', '.jsx', '.ts', '.js'];
              for (const ext of extensions) {
                const pathWithExt = `${resolvedBasePath}${ext}`;
                exampleContent = await fileUtils.loadFileContent(pathWithExt);
                if (exampleContent) {
                  foundPath = pathWithExt;
                  break;
                }
              }
            }
          }
          
          // Second approach: If the file is from CKDocs, check its examples directory
          if (!exampleContent && config.ckDocsPath) {
            const ckDocsDir = path.dirname(config.ckDocsPath);
            if (config.debug) {
              config.logger.log(`Looking for examples in CKDocs directory: ${ckDocsDir}`);
            }
            
            // Try the examples directory in the CKDocs path
            const examplesPath = path.join(ckDocsDir, 'examples', componentName);
            const extensions = ['.tsx', '.jsx', '.js'];
            
            for (const ext of extensions) {
              try {
                const pathWithExt = `${examplesPath}${ext}`;
                exampleContent = await fileUtils.loadFileContent(pathWithExt);
                if (exampleContent) {
                  foundPath = pathWithExt;
                  if (config.debug) {
                    config.logger.log(`Found example in CKDocs directory: ${foundPath}`);
                  }
                  break;
                }
              } catch (error) {
                // Continue to next extension
              }
            }
          }
          
          // Third approach: Try the examples directory in the current file's path
          if (!exampleContent) {
            const examplesPath = path.join(dirPath, 'examples', componentName);
            const extensions = ['.tsx', '.jsx', '.js'];
            
            for (const ext of extensions) {
              try {
                const pathWithExt = `${examplesPath}${ext}`;
                exampleContent = await fileUtils.loadFileContent(pathWithExt);
                if (exampleContent) {
                  foundPath = pathWithExt;
                  if (config.debug) {
                    config.logger.log(`Found example in current directory: ${foundPath}`);
                  }
                  break;
                }
              } catch (error) {
                // Continue to next extension
              }
            }
          }
          
          // Cache the result if found
          if (exampleContent) {
            config.cache.set(cacheKey, exampleContent);
            config.cache.set(`${cacheKey}:path`, foundPath);
            if (config.debug) {
              config.logger.log(`Found example code for ${componentName} at ${foundPath}`);
            }
          } else if (config.debug) {
            config.logger.log(`Could not find example code for ${componentName}`);
          }
        }

        if (exampleContent) {
          // Determine the language from the file extension
          const extension = path.extname(foundPath).slice(1) || 'tsx';

          // Replace the ExampleCodeBlock with the code block
          processedContent = processedContent.replace(
            fullMatch,
            codeBlock(exampleContent, extension)
          );
        } else {
          processedContent = processedContent.replace(
            fullMatch,
            `<!-- Could not find example code for ${componentName} -->`
          );
        }
      }

      return processedContent;
    },

    /**
     * Processes TSX imports to include code blocks.
     *
     * @param {string} content - MDX content
     * @param {Array} imports - Array of import information
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @returns {Promise<string>} Processed content with TSX imports converted to code blocks
     */
    async processTsxImports(content, imports, filePath, rootInputDir) {
      // Find import statements for TSX files
      const tsxImports = imports.filter(
        imp =>
          imp.path.endsWith('.tsx') || imp.path.endsWith('.jsx') || imp.path.includes('/examples/')
      );

      if (tsxImports.length === 0) {
        return content;
      }

      let processedContent = content;
      const dirPath = path.dirname(filePath);

      for (const tsxImport of tsxImports) {
        let importPath = tsxImport.path;
        let resolvedPath;

        // Resolve the path correctly based on import type
        if (importPath.startsWith('.')) {
          // For relative imports, resolve relative to the current file
          resolvedPath = path.resolve(dirPath, importPath);
        } else if (importPath.startsWith('@') || !importPath.startsWith('/')) {
          // For package imports, resolve from node_modules
          resolvedPath = path.resolve(config.nodeModulesPath, importPath);
        } else {
          // For absolute paths
          resolvedPath = importPath;
        }

        // Try to load the file content
        let tsxContent;
        try {
          tsxContent = await fileUtils.loadFileContent(resolvedPath);
        } catch (error) {
          // If direct loading fails, try to resolve with extensions
          const extensions = ['.tsx', '.jsx', '.js'];
          for (const ext of extensions) {
            if (!resolvedPath.endsWith(ext)) {
              try {
                const pathWithExt = `${resolvedPath}${ext}`;
                tsxContent = await fileUtils.loadFileContent(pathWithExt);
                if (tsxContent) {
                  resolvedPath = pathWithExt;
                  break;
                }
              } catch (error) {
                // Continue to next extension
              }
            }
          }
        }

        // Skip if we couldn't load the content
        if (!tsxContent) {
          if (config.debug) {
            config.logger.log(`Could not load TSX content from ${resolvedPath}`);
          }
          continue;
        }

        // For each imported component, replace its usage with a code block
        for (const name of tsxImport.names) {
          const componentName = name.default || name.name;
          const componentRegex = new RegExp(
            `<${componentName}\\s*\\/?>|<${componentName}([^>]*)>([\\s\\S]*?)<\\/${componentName}>`,
            'g'
          );

          const extension = path.extname(resolvedPath).slice(1) || 'tsx';
          if (config.debug) {
            config.logger.log(`Replacing component ${componentName} with code block from ${resolvedPath}`);
          }
          
          processedContent = processedContent.replace(componentRegex, () =>
            codeBlock(tsxContent, extension)
          );
        }
      }

      return processedContent;
    },
  };
}
