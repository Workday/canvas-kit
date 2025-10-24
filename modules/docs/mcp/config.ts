/**
 * Configuration for MCP resources
 * Single source of truth for all MCP resource file names
 */

export const bestPracticesResourcesFiles = [
  'COMPOUND_COMPONENTS.mdx',
  'CREATING_COMPOUND_COMPONENTS.mdx',
] as const;

export type BestPracticesResourceFile = (typeof bestPracticesResourcesFiles)[number];
