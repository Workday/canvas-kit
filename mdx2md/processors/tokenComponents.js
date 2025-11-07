/**
 * Token Components Processor Module
 *
 * Handles design token-related MDX components such as BrandTokens and ColorGrid.
 * Processes color token information and formats it for Markdown output.
 */

import fs from 'fs/promises';
import path from 'path';
import {resetRegex} from '../utils/regexPatterns.js';
import {generateMarkdownTable} from '../utils/markdownUtils.js';

/**
 * Creates token component processors with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} fileUtils - File utilities
 * @returns {Object} Token component processor functions
 */
export function createTokenComponentProcessors(config, regex, fileUtils) {
  /**
   * Utility function - Converts RGB values to a hex color code.
   *
   * @param {number} r - Red value (0-255)
   * @param {number} g - Green value (0-255)
   * @param {number} b - Blue value (0-255)
   * @returns {string} - Hex color code
   */
  function rgbToHex(r, g, b) {
    return (
      '#' +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  }

  /**
   * Gets the color value for a token.
   * This will try to find the actual color value by analyzing CSS files.
   *
   * @param {string} category - Token category (primary, error, etc.)
   * @param {string} key - Token key (base, light, etc.)
   * @param {Object} colorValues - Color values object
   * @returns {string} Color value or CSS variable reference
   */
  function getColorValueForToken(category, key, colorValues) {
    // If we have actual color values, use them
    if (colorValues && colorValues[category] && colorValues[category][key]) {
      return colorValues[category][key];
    }

    // Otherwise, return the CSS variable reference
    return `var(--cnvs-brand-${category}-${key})`;
  }

  /**
   * Gets the table headings from the ColorGrid component.
   *
   * @param {string} rootInputDir - Root input directory
   * @returns {Promise<string[]>} Array of table headings
   */
  async function getColorGridHeadings(rootInputDir) {
    try {
      // Path to the TokensColorsGrid component
      const colorsGridPath = path.join(
        rootInputDir,
        '../src/components/content/tokens/TokensColorsGrid.tsx'
      );

      // Default headings in case we can't read the file
      let headings = ['Swatch', 'CSS Variable', 'JS Variable', 'Value'];

      try {
        // Read the file content
        const fileContent = await fs.readFile(colorsGridPath, 'utf-8');

        // Extract the headings from the ColorGrid component
        const headingsMatch = /headings=\{(?:\s*)\[(.*?)\](?:\s*)\}/s.exec(fileContent);
        if (headingsMatch && headingsMatch[1]) {
          // Parse the headings array
          const headingsStr = headingsMatch[1].replace(/'/g, '"');
          headings = headingsStr
            .split(',')
            .map(h => h.trim().replace(/["']/g, ''))
            .filter(h => h); // Remove empty entries
        }
      } catch (error) {
        config.logger.warn('Could not read TokensColorsGrid.tsx, using default headings');
      }

      return headings;
    } catch (error) {
      console.error('Error getting color grid headings:', error);
      return ['Swatch', 'CSS Variable', 'JS Variable', 'Value'];
    }
  }

  return {
    /**
     * Processes BrandTokens components and dynamically generates markdown tables.
     *
     * @param {string} content - MDX content
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @returns {Promise<string>} Processed content with BrandTokens components converted
     */
    async processBrandTokensComponent(content, filePath, rootInputDir) {
      // Skip if no BrandTokens components
      if (!regex.brandTokens.test(content)) {
        return content;
      }

      // Reset regex to ensure we start from the beginning
      resetRegex(regex.brandTokens);

      try {
        // Initialize brand tokens structure
        let brandTokens = {};
        const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');

        // Paths to Canvas tokens CSS files
        const brandCssPath = path.join(
          nodeModulesPath,
          '@workday/canvas-tokens-web/css/brand/_variables.css'
        );
        const baseCssPath = path.join(
          nodeModulesPath,
          '@workday/canvas-tokens-web/css/base/_variables.css'
        );

        // Cache for color values from CSS files
        const colorValues = {};

        // Get table headings from TokensColorsGrid component
        const tableHeadings = await getColorGridHeadings(rootInputDir);

        // Try to load the CSS files to get the color values
        try {
          // Read the CSS files
          const brandCssContent = await fs.readFile(brandCssPath, 'utf-8');
          const baseCssContent = await fs.readFile(baseCssPath, 'utf-8');

          // Parse the base CSS variables to get color values
          const baseVars = {};
          const baseVarRegex =
            /--cnvs-base-palette-([a-z-]+)-(\d+):\s*rgba\((\d+),(\d+),(\d+),\d+\);/g;
          let baseMatch;

          while ((baseMatch = baseVarRegex.exec(baseCssContent)) !== null) {
            const [, palette, shade, r, g, b] = baseMatch;
            const varName = `--cnvs-base-palette-${palette}-${shade}`;
            // Convert RGB to hex
            const hex = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
            baseVars[varName] = hex;
          }

          config.logger.log(
            `Successfully loaded ${Object.keys(baseVars).length} base color values`
          );

          // Parse the brand CSS variables
          const brandVarRegex =
            /--cnvs-brand-([a-z-]+)-([a-z-]+):\s*(?:var\(([^)]+)\)|rgba\(([^)]+)\));/g;
          let brandMatch;

          while ((brandMatch = brandVarRegex.exec(brandCssContent)) !== null) {
            const [, category, key, varRef, rgbaVal] = brandMatch;

            // Create category in the structure if it doesn't exist
            if (!brandTokens[category]) {
              brandTokens[category] = {};
              colorValues[category] = {};
            }

            // Store the CSS variable name
            const cssVar = `--cnvs-brand-${category}-${key}`;
            brandTokens[category][key] = cssVar;

            // Try to determine the actual color value
            if (varRef && baseVars[varRef]) {
              // It's a reference to a base variable and we have the value
              colorValues[category][key] = baseVars[varRef];
            } else if (rgbaVal) {
              // It's an RGBA value
              const rgbaParts = rgbaVal.split(',').map(p => parseInt(p.trim()));
              if (rgbaParts.length >= 3) {
                const [r, g, b] = rgbaParts;
                colorValues[category][key] = rgbToHex(r, g, b);
              }
            }
            // If we couldn't determine the value, we'll use a fallback in getColorValueForToken
          }

          // Handle special case for gradients
          const gradientMatch = brandCssContent.match(/--cnvs-brand-gradient-primary:[^;]+;/);
          if (gradientMatch) {
            if (!brandTokens.gradient) {
              brandTokens.gradient = {};
              colorValues.gradient = {};
            }
            brandTokens.gradient.primary = '--cnvs-brand-gradient-primary';
            colorValues.gradient.primary =
              'linear-gradient(90deg, var(--cnvs-brand-primary-base), var(--cnvs-brand-primary-dark))';
          }

          config.logger.log(
            `Successfully loaded brand token structure with ${
              Object.keys(brandTokens).length
            } categories`
          );
        } catch (error) {
          console.warn(
            'Could not load Canvas token CSS files, will use variable references.',
            error.message
          );

          // Create a basic structure with common brand token categories
          const categories = [
            'primary',
            'accent',
            'error',
            'alert',
            'success',
            'neutral',
            'gradient',
          ];
          const keys = ['lightest', 'light', 'base', 'dark', 'darkest', 'accent'];

          categories.forEach(category => {
            brandTokens[category] = {};
            keys.forEach(key => {
              brandTokens[category][key] = `--cnvs-brand-${category}-${key}`;
            });
          });

          // Special case for gradient
          if (brandTokens.gradient) {
            brandTokens.gradient = {
              primary: '--cnvs-brand-gradient-primary',
            };
          }
        }

        // Now replace the BrandTokens component with the markdown tables
        return content.replace(regex.brandTokens, () => {
          let markdown = '';

          // Generate a markdown table for each brand token category
          for (const [category, shades] of Object.entries(brandTokens)) {
            if (Object.keys(shades).length === 0) continue;

            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            markdown += `\n### ${categoryName}\n\n`;

            // Filter out the "Swatch" column if it exists
            const filteredHeadings = tableHeadings.filter(heading => heading !== 'Swatch');

            // Sort token keys alphabetically
            const sortedKeys = Object.keys(shades).sort();

            // Prepare rows for the table
            const rows = sortedKeys.map(key => {
              // The CSS variable name is stored in the brandTokens object
              const cssVar = shades[key];
              const jsVar = `brand.${category}.${key}`;

              // Get the color value from our parsed data
              const value = getColorValueForToken(category, key, colorValues);

              return {
                cssVar,
                jsVar,
                value,
              };
            });

            // Generate the table
            markdown += generateMarkdownTable(filteredHeadings, rows, ['cssVar', 'jsVar', 'value']);
            markdown += '\n';
          }

          return markdown;
        });
      } catch (error) {
        console.error('Error processing BrandTokens component:', error);
        // Return a placeholder in case of error
        return content.replace(
          regex.brandTokens,
          '<!-- Error processing BrandTokens component -->'
        );
      }
    },

    /**
     * Processes ColorGrid components and converts them to markdown tables.
     *
     * @param {string} content - MDX content
     * @param {string} filePath - Path to the current MDX file
     * @param {string} rootInputDir - Root input directory
     * @returns {Promise<string>} Processed content with ColorGrid components converted
     */
    async processColorGridComponent(content, filePath, rootInputDir) {
      // Skip if no ColorGrid components
      if (!regex.colorGrid.test(content)) {
        return content;
      }

      // Reset regex to ensure we start from the beginning
      resetRegex(regex.colorGrid);

      try {
        // Get table headings dynamically
        const tableHeadings = await getColorGridHeadings(rootInputDir);

        // Load base palette colors from CSS
        const nodeModulesPath = path.resolve(process.cwd(), 'node_modules');
        const baseCssPath = path.join(
          nodeModulesPath,
          '@workday/canvas-tokens-web/css/base/_variables.css'
        );
        const baseColorMap = {};
        const colorFamilies = new Set(); // Use a Set to track unique color families

        try {
          // Read the base CSS content
          const baseCssContent = await fs.readFile(baseCssPath, 'utf-8');

          // Parse the base CSS variables to get color values
          const baseVarRegex =
            /--cnvs-base-palette-([a-z-]+)-(\d+):\s*rgba\((\d+),(\d+),(\d+),\d+\);/g;
          let baseMatch;

          while ((baseMatch = baseVarRegex.exec(baseCssContent)) !== null) {
            const [, palette, shade, r, g, b] = baseMatch;

            // Add the palette to our unique color families
            colorFamilies.add(palette);

            const colorName = `${palette}${shade}`;
            // Convert RGB to hex
            const hex = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
            baseColorMap[colorName] = {
              name: `${palette} ${shade}`,
              cssVar: `--cnvs-base-palette-${palette}-${shade}`,
              jsVar: `base.palette.${palette}.${shade}`,
              value: hex,
            };
          }

          config.logger.log(
            `Successfully loaded ${
              Object.keys(baseColorMap).length
            } base color values for ColorGrid`
          );
          config.logger.log(`Found ${colorFamilies.size} unique color families`);
        } catch (error) {
          config.logger.warn('Could not load base colors for ColorGrid, using placeholders');
        }

        // Process each ColorGrid component
        return content.replace(regex.colorGrid, (match, colorsVariable) => {
          // Parse the colorsVariable to determine what to do
          const isJsonVariable = colorsVariable.trim().endsWith('Json');

          if (isJsonVariable) {
            // This is likely using imported JSON (e.g., colorsJson)
            // Create a descriptive table with placeholder
            let markdown = '## All Colors\n\n';
            markdown +=
              'The color palette contains a comprehensive set of colors organized by family.\n';
            markdown += 'Each color includes multiple shades from lightest to darkest.\n\n';

            // Convert the Set to an array and sort alphabetically
            const sortedFamilies = Array.from(colorFamilies).sort();

            // If we didn't find any color families, use a small default set
            if (sortedFamilies.length === 0) {
              sortedFamilies.push('blueberry', 'cantaloupe', 'cinnamon', 'soap', 'french-vanilla');
            }

            // Create a sample table for each color family
            for (const familyKey of sortedFamilies) {
              // Format the family name for display (capitalize, replace hyphens with spaces)
              const familyName = familyKey
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              // Get all the shades for this family
              const familyShades = Object.keys(baseColorMap)
                .filter(key => key.startsWith(familyKey))
                .map(key => key.replace(familyKey, ''))
                .sort((a, b) => parseInt(a) - parseInt(b));

              // Skip if no shades were found (shouldn't happen, but just in case)
              if (familyShades.length === 0) continue;

              markdown += `### ${familyName}\n\n`;
              // Filter out the "Swatch" column if it exists
              const filteredHeadings = tableHeadings.filter(heading => heading !== 'Swatch');

              // Display all shades for this color family
              const rows = familyShades.map(shade => {
                const colorKey = `${familyKey}${shade}`;
                const color = baseColorMap[colorKey] || {
                  cssVar: `--cnvs-base-palette-${familyKey}-${shade}`,
                  jsVar: `base.palette.${familyKey}.${shade}`,
                  value: '#CCCCCC', // Placeholder color
                };

                return {
                  cssVar: color.cssVar,
                  jsVar: color.jsVar,
                  value: color.value,
                };
              });

              // Generate the table
              markdown += generateMarkdownTable(filteredHeadings, rows, [
                'cssVar',
                'jsVar',
                'value',
              ]);
              markdown += '\n';
            }

            return markdown;
          } else {
            // It's a different variable, use a generic placeholder
            return '## Color Grid\n\nA collection of colors organized in a grid format. Refer to the Canvas API documentation for details on available colors.\n';
          }
        });
      } catch (error) {
        console.error('Error processing ColorGrid component:', error);
        return content.replace(regex.colorGrid, '<!-- Error processing ColorGrid component -->');
      }
    },
  };
}
