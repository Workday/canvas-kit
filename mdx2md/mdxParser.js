/**
 * MDX Parser Module
 *
 * This module provides functionality for parsing, processing, and transforming MDX content
 * into standardized Markdown format. It handles extraction and manipulation of frontmatter,
 * import statements, component attributes, and special MDX syntax patterns.
 *
 * The parser is designed with a factory pattern to allow dependency injection of regex
 * patterns, making it more testable and modular. Each method focuses on a specific aspect
 * of MDX parsing with careful handling of edge cases and special formatting requirements.
 *
 * Key Features:
 * - YAML frontmatter extraction and generation
 * - Import statement processing with support for default, named, and aliased imports
 * - Component attribute parsing with support for various formats and types
 * - JSDoc link conversion to Markdown format
 * - Special handling for complex data structures in frontmatter
 *
 * @module mdxParser
 * @requires REGEX - Regular expression patterns for parsing different MDX constructs
 */

export function createMdxParser(REGEX) {
  return {
    /**
     * Extracts and parses YAML frontmatter from MDX content.
     *
     * @param {string} content - MDX content including frontmatter
     * @returns {Object} Object with frontmatter object and remaining content
     */
    parseFrontmatter(content) {
      const match = content.match(REGEX.frontmatter);

      if (!match) {
        return {frontmatter: {}, content};
      }

      const frontmatterStr = match[1];
      const frontmatter = this.parseFrontmatterContent(frontmatterStr);
      return {
        frontmatter,
        content: content.slice(match[0].length),
      };
    },

    /**
     * Parses frontmatter content string into a structured object.
     * Handles simple key-value pairs, booleans, and basic JSON structures.
     *
     * @param {string} content - Frontmatter content as a string
     * @returns {Object} Parsed frontmatter object
     */
    parseFrontmatterContent(content) {
      const lines = content.split('\n');
      const frontmatter = {};

      for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex <= 0) continue;

        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        // Handle boolean values
        if (value === 'true') value = true;
        if (value === 'false') value = false;

        // Handle arrays and objects
        if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
          try {
            value = JSON.parse(value);
          } catch (e) {
            // Keep as string if parsing fails
          }
        }

        frontmatter[key] = value;
      }

      // Handle complex tab structures
      if (frontmatter.tabs && typeof frontmatter.tabs === 'string') {
        try {
          frontmatter.tabs = frontmatter.tabs.split(/,\s*/).map(tab => {
            if (tab.includes('{')) {
              // Try to parse as JSON-like structure
              const match = tab.match(/{name:\s*([^,}]+)(?:,\s*internal:\s*(true|false))?}/);
              if (match) {
                return {
                  name: match[1].trim(),
                  internal: match[2] === 'true',
                };
              }
            }
            return tab.trim();
          });
        } catch (e) {
          // Keep as is if parsing fails
        }
      }

      return frontmatter;
    },

    /**
     * Generates frontmatter in YAML format from a frontmatter object.
     *
     * @param {Object} frontmatter - Frontmatter object
     * @returns {string} Formatted frontmatter string
     */
    generateFrontmatter(frontmatter) {
      const lines = ['---'];

      for (const [key, value] of Object.entries(frontmatter)) {
        const formattedValue =
          typeof value === 'object' && value !== null ? JSON.stringify(value) : value;
        lines.push(`${key}: ${formattedValue}`);
      }

      lines.push('---', '');
      return lines.join('\n');
    },

    /**
     * Processes import statements in MDX content.
     * Extracts import information and removes the statements from content.
     *
     * @param {string} content - MDX content with import statements
     * @returns {Object} Object with processed content and import information
     */
    processImports(content) {
      let processedContent = content;
      const imports = [];

      // Reset the regex to start from the beginning
      REGEX.importStatement.lastIndex = 0;

      // Extract all imports
      let match;
      while ((match = REGEX.importStatement.exec(content)) !== null) {
        imports.push({
          statement: match[0], // Includes the semicolon if present
          names: this.parseImportNames(match[1].trim()),
          path: match[2].trim(),
        });
      }

      // Remove import statements from content
      for (const importInfo of imports) {
        processedContent = processedContent.replace(importInfo.statement, '');
      }

      // Clean up any standalone semicolons at the beginning of lines or with only whitespace before them
      processedContent = processedContent.replace(/^\s*;/gm, '');

      return {processedContent, imports};
    },

    /**
     * Parses import names from import statements.
     * Handles default imports, named imports, and aliases.
     *
     * @param {string} importNames - The import names part of an import statement
     * @returns {Array} Array of import name objects
     */
    parseImportNames(importNames) {
      const result = [];

      // Handle default import
      if (importNames && !importNames.startsWith('{')) {
        const parts = importNames.split(',');
        result.push({default: parts[0].trim()});
        importNames = parts.slice(1).join(',').trim();
      }

      // Handle named imports
      if (importNames && importNames.startsWith('{')) {
        const namedImports = importNames
          .slice(1, -1)
          .split(',')
          .map(name => name.trim());

        for (const namedImport of namedImports) {
          const [importName, alias] = namedImport.split(' as ').map(part => part.trim());
          result.push({name: importName, alias: alias || importName});
        }
      }

      return result;
    },

    /**
     * Parses component attributes string into an object.
     * Handles quoted values, unquoted values, and boolean attributes.
     *
     * @param {string} attributesStr - String of component attributes
     * @returns {Object} Parsed attributes object
     */
    parseComponentAttributes(attributesStr) {
      const attrs = {};
      const attrRegex = /\s*(\w+(?:-\w+)*)(?:=(?:"([^"]*)"|'([^']*)'|(\w+)))?/g;
      let match;

      while ((match = attrRegex.exec(attributesStr)) !== null) {
        const name = match[1];
        // Value can be in any of the capture groups 2, 3, or 4 depending on quotes
        const value =
          match[2] !== undefined
            ? match[2]
            : match[3] !== undefined
            ? match[3]
            : match[4] !== undefined
            ? match[4]
            : true;
        attrs[name] = value;
      }

      return attrs;
    },

    /**
     * Converts JSDoc links to Markdown format.
     *
     * @param {string} text - Text containing JSDoc links
     * @returns {string} Text with converted links
     */
    convertJSDocLinks(text) {
      // Convert JSDoc {@link ComponentName text} to markdown links
      return text.replace(
        /{@link ([a-z0-9.]+)( [a-z0-9. ]+)?}/gi,
        (_, componentName, displayText) => {
          const text = displayText ? displayText.trim() : componentName;
          return `\`${text}\``;
        }
      );
    },
  };
}
