/**
 * Regex Patterns Module
 *
 * Centralizes regex patterns used throughout the MDX to Markdown conversion process.
 * Pre-compiles frequently used patterns for better performance.
 */

export const REGEX = {
  // Document structure
  frontmatter: /^---\n([\s\S]*?)\n---\n/,
  importStatement: /import\s+([^;]*?)\s+from\s+['"]([^'"]+)['"](\s*;)?/g,

  // Components
  exampleCodeBlock: /<ExampleCodeBlock\s*code=\{([^}]+)\}\s*\/>/g,
  symbolDoc: /<SymbolDoc\s+name="([^"]+)"([^>]*)\/>/g,
  symbolDesc: /<SymbolDescription\s+name="([^"]+)"([^>]*)\/>/g,
  packageInfo: /<PackageInfo([^>]*)\/>/g,
  internalContent: /<InternalContent>([\s\S]*?)<\/InternalContent>/g,
  externalContent: /<ExternalContent>([\s\S]*?)<\/ExternalContent>/g,
  tabPanel: /<TabPanel([^>]*)>([\s\S]*?)<\/TabPanel>/g,
  specification: /<Specifications\s+file="([^"]+)"\s+name="([^"]+)"\s*\/>/g,

  // Resources and references
  image: /!\[(.*?)\]\((.*?)\)/g,
  ckDocs: /<CKDocs\s*\/>/g,

  // Design tokens
  brandTokens: /<BrandTokens\s*\/>/g,
  colorGrid: /<ColorGrid\s+colors=\{([^}]+)\}\s*\/>/g,
};

// Utility function to reset regex lastIndex properties
export function resetRegex(regex) {
  if (regex) regex.lastIndex = 0;
}

// Export reset function for all patterns at once
export function resetAllRegex() {
  Object.values(REGEX).forEach(regex => {
    if (regex && typeof regex.lastIndex !== 'undefined') {
      regex.lastIndex = 0;
    }
  });
}
