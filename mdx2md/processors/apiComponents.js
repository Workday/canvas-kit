/**
 * API Component Processors Module
 *
 * Handles components related to API documentation like SymbolDoc and SymbolDescription.
 * Generates formatted Markdown tables for component props and metadata.
 */

import {resetRegex} from '../utils/regexPatterns.js';
import {formatPropType, formatDefaultValue} from '../utils/formatters.js';
import {generateMarkdownTable} from '../utils/markdownUtils.js';

/**
 * Creates API component processors with the given dependencies.
 *
 * @param {Object} config - Configuration object
 * @param {Object} regex - Regular expression patterns
 * @param {Object} mdxParser - MDX parser utilities
 * @returns {Object} API component processor functions
 */
export function createApiComponentProcessors(config, regex, mdxParser) {
  return {
    /**
     * Processes SymbolDoc components to generate API documentation.
     * Caches processed documentation for better performance.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with SymbolDoc components converted
     */
    processSymbolDocComponent(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.symbolDoc);

      return content.replace(regex.symbolDoc, (_, componentName, attributes) => {
        const cacheKey = config.cacheKeys.componentDoc(componentName, attributes);

        // Check if we've already processed this component
        if (config.cache.has(cacheKey)) {
          return config.cache.get(cacheKey);
        }

        const attrs = mdxParser.parseComponentAttributes(attributes);
        const fileName = attrs.fileName || '';

        // Find the component in canvasDocs
        const componentDoc = config.canvasDocs.find(
          doc => doc.name === componentName && (fileName ? doc.fileName.includes(fileName) : true)
        );

        if (!componentDoc) {
          return `<!-- API Reference for ${componentName} not found -->`;
        }

        const result = this.generateFullComponentDocumentation(componentDoc);

        // Cache the result for future use
        config.cache.set(cacheKey, result);

        return result;
      });
    },

    /**
     * Processes SymbolDescription components to include component descriptions.
     *
     * @param {string} content - MDX content
     * @returns {string} Processed content with SymbolDescription components converted
     */
    processSymbolDescription(content) {
      // Reset regex to ensure we start from the beginning
      resetRegex(regex.symbolDesc);

      return content.replace(regex.symbolDesc, (_, componentName, attributes) => {
        const attrs = mdxParser.parseComponentAttributes(attributes);
        const fileName = attrs.fileName || '';
        const cacheKey = config.cacheKeys.componentDesc(componentName, fileName);

        // Check cache first
        if (config.cache.has(cacheKey)) {
          return config.cache.get(cacheKey);
        }

        // Find the component in canvasDocs
        const componentDoc = config.canvasDocs.find(
          doc => doc.name === componentName && (fileName ? doc.fileName.includes(fileName) : true)
        );

        if (!componentDoc || !componentDoc.description) {
          return `<!-- No description available for ${componentName} -->`;
        }

        const result = mdxParser.convertJSDocLinks(componentDoc.description);
        config.cache.set(cacheKey, result);
        return result;
      });
    },

    /**
     * Generates full component documentation including description, metadata, and props.
     *
     * @param {Object} componentDoc - Component documentation object
     * @returns {string} Complete Markdown documentation for the component
     */
    generateFullComponentDocumentation(componentDoc) {
      // Start with component name as heading
      let markdown = `## ${componentDoc.name}\n\n`;

      // Add description
      if (componentDoc.description) {
        // Convert JSDoc links to markdown links
        const description = mdxParser.convertJSDocLinks(componentDoc.description);
        markdown += `${description}\n\n`;
      }

      // Check component type
      const componentType = componentDoc.type;
      if (!componentType) {
        return markdown + '<!-- No type information available for this component -->\n';
      }

      // Add special metadata sections based on component type
      markdown += this.generateComponentMetadata(componentType);

      // Generate props documentation
      markdown += this.generatePropsDocumentation(componentDoc);

      // Generate subcomponents documentation
      markdown += this.generateSubComponentsDocumentation(componentDoc);

      return markdown;
    },

    /**
     * Generates component metadata documentation.
     *
     * @param {Object} componentType - Component type information
     * @returns {string} Markdown documentation for component metadata
     */
    generateComponentMetadata(componentType) {
      let markdown = '';

      // Add component type information
      if (componentType.kind) {
        markdown += `**Component Type:** \`${componentType.kind}\`\n\n`;
      }

      // If it's an enhanced component, add display name
      if (componentType.kind === 'enhancedComponent' && componentType.displayName) {
        markdown += `**Display Name:** \`${componentType.displayName}\`\n\n`;
      }

      // If it's a styled component, add style info
      if (componentType.styleComponent) {
        markdown += `**Style Component:** \`${
          componentType.styleComponent.name || 'CustomStyled'
        }\`\n\n`;
      }

      // If it has a base element, document it
      if (componentType.baseElement) {
        const baseElement = componentType.baseElement;
        if (typeof baseElement === 'object' && baseElement.name) {
          const elementLink = baseElement.url
            ? `[${baseElement.name}](${baseElement.url})`
            : baseElement.name;
          markdown += `**Base Element:** ${elementLink}\n\n`;
        } else if (typeof baseElement === 'string') {
          markdown += `**Base Element:** \`${baseElement}\`\n\n`;
        }
      }

      // If it's an alias, show what it extends
      if (componentType.kind === 'alias' && componentType.name) {
        markdown += `**Extends:** \`${componentType.name}\`\n\n`;
      }

      return markdown;
    },

    /**
     * Generates props documentation for a component.
     *
     * @param {Object} componentDoc - Component documentation object
     * @returns {string} Markdown documentation for component props
     */
    generatePropsDocumentation(componentDoc) {
      let markdown = '';
      const componentType = componentDoc.type;

      // Determine props based on component type
      let props;
      if (componentType.props) {
        props = componentType.props;
      } else if (componentType.kind === 'alias' && componentType.name) {
        // For aliased types, try to find the original component
        const aliasDoc = config.canvasDocs.find(doc => doc.name === componentType.name);
        if (aliasDoc && aliasDoc.type && aliasDoc.type.props) {
          props = aliasDoc.type.props;
        }
      }

      if (!props || props.length === 0) {
        return markdown + '<!-- No properties documented for this component -->\n';
      }

      // Create a props table with more detailed information
      markdown += `### Props\n\n`;

      // Format props into rows for the table
      const headers = ['Name', 'Type', 'Default', 'Description'];
      const rows = props.map(prop => {
        // Name with formatting for required props
        const name = prop.required ? `**${prop.name}**` : prop.name;

        // Format type with the utility
        const type = formatPropType(prop.type);

        // Format default value with the utility
        const defaultValue = formatDefaultValue(prop);

        // Format description
        let description = prop.description || '';
        description = mdxParser.convertJSDocLinks(description);

        // Add deprecated notice
        if (prop.tags && prop.tags.deprecated) {
          description = `**Deprecated:** ${prop.tags.deprecated}\n\n${description}`;
        }

        // Format for table
        const formattedDescription = description.replace(/\n\n/g, '<br><br>').replace(/\n/g, ' ');

        return {
          name,
          type,
          defaultValue,
          description: formattedDescription,
        };
      });

      // Generate the table
      markdown += generateMarkdownTable(headers, rows, [
        'name',
        'type',
        'defaultValue',
        'description',
      ]);

      return markdown;
    },

    /**
     * Generates documentation for subcomponents.
     *
     * @param {Object} componentDoc - Component documentation object
     * @returns {string} Markdown documentation for subcomponents
     */
    generateSubComponentsDocumentation(componentDoc) {
      let markdown = '';
      const componentType = componentDoc.type;

      // Check if component has subcomponents
      if (!componentType.subComponents || componentType.subComponents.length === 0) {
        return markdown;
      }

      markdown += `## Subcomponents\n\n`;

      // Process each subcomponent
      for (const subComponent of componentType.subComponents) {
        const subComponentName = `${componentDoc.name}.${subComponent.name}`;
        
        markdown += `### ${subComponentName}\n\n`;

        // Add subcomponent description
        if (subComponent.description) {
          const description = mdxParser.convertJSDocLinks(subComponent.description);
          markdown += `${description}\n\n`;
        }

        // Find the full documentation for this subcomponent by its symbol name
        const subComponentDoc = config.canvasDocs.find(
          doc => doc.name === subComponent.symbol
        );

        if (subComponentDoc && subComponentDoc.type && subComponentDoc.type.props) {
          // Generate props table for the subcomponent
          markdown += `#### Props\n\n`;

          const headers = ['Name', 'Type', 'Default', 'Description'];
          const rows = subComponentDoc.type.props.map(prop => {
            // Name with formatting for required props
            const name = prop.required ? `**${prop.name}**` : prop.name;

            // Format type with the utility
            const type = formatPropType(prop.type);

            // Format default value with the utility
            const defaultValue = formatDefaultValue(prop);

            // Format description
            let description = prop.description || '';
            description = mdxParser.convertJSDocLinks(description);

            // Add deprecated notice
            if (prop.tags && prop.tags.deprecated) {
              description = `**Deprecated:** ${prop.tags.deprecated}\n\n${description}`;
            }

            // Format for table
            const formattedDescription = description.replace(/\n\n/g, '<br><br>').replace(/\n/g, ' ');

            return {
              name,
              type,
              defaultValue,
              description: formattedDescription,
            };
          });

          // Generate the table
          markdown += generateMarkdownTable(headers, rows, [
            'name',
            'type',
            'defaultValue',
            'description',
          ]);

          markdown += '\n';
        } else {
          markdown += `<!-- No props documentation found for ${subComponent.symbol} -->\n\n`;
        }
      }

      return markdown;
    },
  };
}
