export type CatalogChannel = 'production' | 'vision';

export interface CatalogSource {
  package: string;
  version: string;
  channel: CatalogChannel;
  path?: string;
}

export interface CatalogMeta {
  generatedAt: string;
  canvasKitVersion: string;
  releaseChannel: string;
  storybookUrl?: string;
  sources: CatalogSource[];
}

export interface ComponentCatalogEntry {
  name: string;
  slug?: string;
  packageName: string;
  subpath: string;
  canonicalImport: string;
  status: 'production' | 'preview' | 'labs';
  exports: string[];
  deprecated: boolean;
  recommended: boolean;
  deprecatedExports: Array<{
    name: string;
    message: string;
    replacementPackage?: string;
  }>;
  deprecatedProps: Array<{
    name: string;
    message: string;
    source: string;
  }>;
  aliases: string[];
  storySlug?: string;
}

export interface ComponentCatalog {
  meta: CatalogMeta;
  components: ComponentCatalogEntry[];
}

export interface TokenCatalogEntry {
  key: string;
  namespace: string;
  value: string;
  type: string;
  channel: CatalogChannel;
  theme: 'canvas' | 'sana';
  cssVariable?: string;
  deprecated?: boolean;
  aliases: string[];
}

export interface TokenCatalog {
  meta: CatalogMeta;
  tokens: TokenCatalogEntry[];
}

export interface IconCatalogEntry {
  name: string;
  exportName: string;
  packageName: string;
  canonicalImport: string;
  channel: CatalogChannel;
  availableInCanvasKit: boolean;
  figmaName?: string;
  category?: string;
  tags: string[];
  deprecated?: boolean;
  fallback?: string;
  previousNames?: string[];
  sanaName?: string;
  migrationStatus?: 'renamed' | 'unchanged' | 'unmapped';
  migrationSource?: string;
  aliases: string[];
}

export interface IconCatalog {
  meta: CatalogMeta;
  icons: IconCatalogEntry[];
}

export interface ComponentSearchResult {
  meta: CatalogMeta;
  query: string;
  count: number;
  results: ComponentCatalogEntry[];
}

export interface ComponentLookupResult {
  meta: CatalogMeta;
  query: string;
  match?: ComponentCatalogEntry;
  suggestions: ComponentCatalogEntry[];
}

export interface TokenValidationResult {
  meta: CatalogMeta;
  valid: Array<{
    token: string;
    entry: TokenCatalogEntry;
    deprecated?: boolean;
    replacedBy?: string;
    verifiedInProject?: boolean;
  }>;
  invalid: Array<{token: string; suggestions: string[]}>;
}

export interface IconSearchResult {
  meta: CatalogMeta;
  query: string;
  count: number;
  results: IconCatalogEntry[];
}
