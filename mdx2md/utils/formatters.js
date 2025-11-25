/**
 * Formatters Module
 *
 * Provides utility functions for formatting different types of data
 * for Markdown output, especially for API documentation.
 */

/**
 * Formats a prop type for display in Markdown.
 *
 * @param {Object} type - Prop type object
 * @returns {string} Formatted type string
 */
export function formatPropType(type) {
  if (!type) return 'unknown';

  // Enhanced type formatting based on the original implementation
  switch (type.kind) {
    case 'primitive': {
      return `\`${type.value}\``;
    }
    case 'string': {
      return `\`"${type.value}"\``;
    }
    case 'boolean': {
      return `\`${type.value}\``;
    }
    case 'number': {
      return `\`${type.value}\``;
    }
    case 'symbol': {
      return `\`${type.name}\``;
    }
    case 'union': {
      if (type.value && Array.isArray(type.value)) {
        return type.value.map(t => formatPropType(t)).join(' | ');
      }
      return '`union`';
    }
    case 'array': {
      if (type.value) {
        return `${formatPropType(type.value)}[]`;
      }
      return '`Array`';
    }
    case 'function': {
      let fnSignature = '`function`';
      if (type.parameters && type.returnType) {
        // Format parameters
        const params = type.parameters
          .map(p => `${p.name}${p.required ? '' : '?'}: ${formatPropType(p.type)}`)
          .join(', ');

        // Format return type
        const returnType = formatPropType(type.returnType);

        fnSignature = `\`(${params}) => ${returnType}\``;
      }
      return fnSignature;
    }
    case 'external': {
      return type.url ? `[\`${type.name}\`](${type.url})` : `\`${type.name}\``;
    }
    case 'intersection': {
      if (type.value && Array.isArray(type.value)) {
        return type.value.map(t => formatPropType(t)).join(' & ');
      }
      return '`intersection`';
    }
    case 'generic': {
      let genericType = `\`${type.name}\``;
      if (type.typeParameters && type.typeParameters.length) {
        const typeParams = type.typeParameters.map(t => formatPropType(t)).join(', ');
        genericType = `\`${type.name}<${typeParams}>\``;
      }
      return genericType;
    }
    case 'parenthesis': {
      // Handle parenthesized types (typically function signatures wrapped in parentheses)
      if (type.value) {
        return formatPropType(type.value);
      }
      return '`parenthesis`';
    }
    case 'typeParameter': {
      return `\`${type.name}\``;
    }
    default: {
      return `\`${type.kind}\``;
    }
  }
}

/**
 * Formats a default value for display in Markdown.
 *
 * @param {Object} prop - Prop object
 * @returns {string} Formatted default value string
 */
export function formatDefaultValue(prop) {
  // No default value provided
  if (!prop.defaultValue) {
    // Check if there's a default in tags
    return prop.tags && prop.tags.default ? `\`${prop.tags.default}\`` : '';
  }

  // Format based on the default value type
  switch (prop.defaultValue.kind) {
    case 'string':
      return `\`"${prop.defaultValue.value}"\``;

    case 'boolean':
    case 'number':
      return `\`${prop.defaultValue.value}\``;

    case 'symbol':
      return `\`${prop.defaultValue.value}\``;

    case 'function':
      return '`() => {...}`';

    case 'external':
      return `\`${prop.defaultValue.name}\``;

    default:
      return `\`${prop.defaultValue.kind}\``;
  }
}
