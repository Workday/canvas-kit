/**
 * Basic Component Processors Module
 *
 * Provides processors for simple MDX components that don't require complex operations.
 * Handles components like PackageInfo, InternalContent, TabPanel, and Specifications.
 */

import {resetRegex} from '../utils/regexPatterns.js';

/**
 * Creates basic component processors with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} mdxParser - MDX parser utilities
 * @returns {Object} Basic component processor functions
 */
export function createBasicComponentProcessors(config, regex, mdxParser) {
  return {
    /**
     * Processes PackageInfo components and converts them to Markdown tables.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with PackageInfo components converted
     */
    processPackageInfoComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.packageInfo);

      return content.replace(regex.packageInfo, attributes => {
        const attrs = mdxParser.parseComponentAttributes(attributes);
        let table = '| Package Information | |\n| --- | --- |\n';

        for (const [key, value] of Object.entries(attrs)) {
          if (key.startsWith('data-')) continue;
          table += `| ${key} | ${value} |\n`;
        }

        return table;
      });
    },

    /**
     * Processes InternalContent components - always includes the content.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with internal content included
     */
    processInternalContentComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.internalContent);

      // Always include the internal content without the wrapper
      return content.replace(regex.internalContent, (_, internalContent) => internalContent);
    },

    /**
     * Processes ExternalContent components based on configuration.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with external content handled
     */
    processExternalContentComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.externalContent);

      // Always include the external content without the wrapper
      // This is appropriate content for both internal and external modes
      return content.replace(regex.externalContent, (_, externalContent) => externalContent);
    },

    /**
     * Processes TabPanel components and converts them to Markdown headings.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with TabPanel components converted
     */
    processTabPanelComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.tabPanel);

      return content.replace(regex.tabPanel, (_, attributes, tabContent) => {
        const attrs = mdxParser.parseComponentAttributes(attributes);

        // Get the tab ID (data-id) or name
        const tabTitle = attrs['data-id'] || attrs.name || 'Tab';

        // Return the tab content with a header
        return `\n## ${tabTitle}\n\n${tabContent}\n`;
      });
    },

    /**
     * Processes Specifications components to include specifications info.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with Specifications components converted
     */
    processSpecificationsComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.specification);

      return content.replace(regex.specification, (_, file, name) => {
        return `### Specifications for ${name}\n\n<!-- Component specifications from ${file} -->\n`;
      });
    },

    /**
     * Processes figma links - no filtering needed for open source.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content (unchanged)
     */
    processFigmaLinks(content) {
      // No filtering needed for open source repository
      return content;
    },
  };
}
