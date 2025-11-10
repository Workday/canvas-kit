/**
 * Markdown Utilities Module
 *
 * Provides utility functions for working with Markdown content.
 */

/**
 * Normalize Whitespace in Markdown Content
 *
 * Cleans up and standardizes whitespace in the generated Markdown content
 * to ensure consistent formatting and readability.
 *
 * @param {string} markdown - The raw Markdown content to be normalized
 * @returns {string} The normalized Markdown content with standardized whitespace
 */
export function normalizeWhitespace(markdown) {
  return (
    markdown
      // Replace 3+ consecutive newlines with 2 newlines
      .replace(/\n{3,}/g, '\n\n')
      // Remove trailing whitespace on each line
      .replace(/[ \t]+$/gm, '')
      // Ensure single newline after frontmatter
      .replace(/---\n\n+/, '---\n\n')
      // Ensure exactly one newline at the end of file
      .replace(/\n+$/, '\n')
  );
}

/**
 * Generates a Markdown table from data
 *
 * @param {string[]} headers - Table headers
 * @param {Array<Object>} rows - Array of objects representing rows
 * @param {string[]} fields - Fields to include from each object
 * @returns {string} Formatted Markdown table
 */
export function generateMarkdownTable(headers, rows, fields) {
  let table = `| ${headers.join(' | ')} |\n`;
  table += `| ${headers.map(() => '---').join(' | ')} |\n`;

  rows.forEach(row => {
    const values = fields.map(field => row[field] || '');
    table += `| ${values.join(' | ')} |\n`;
  });

  return table;
}

/**
 * Creates a Markdown code block
 *
 * @param {string} code - The code content
 * @param {string} language - Code language for syntax highlighting
 * @returns {string} Formatted code block
 */
export function codeBlock(code, language = '') {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}
