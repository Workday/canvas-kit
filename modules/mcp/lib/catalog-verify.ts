import * as fs from 'node:fs';
import * as path from 'node:path';

import type {ComponentCatalogEntry, IconCatalogEntry, TokenCatalogEntry} from './catalog-types';
import {type ProjectContext, getInstallCommand} from './project-context';

export interface ComponentAvailability {
  installed: boolean;
  installedVersion?: string;
  verifiedInProject: boolean;
  installCommand?: string;
  fallback?: {
    import: string;
    deprecated: boolean;
    note: string;
  };
}

export interface VerifiedTokenResult {
  token: string;
  entry: TokenCatalogEntry;
  deprecated: boolean;
  replacedBy?: string;
  verifiedInProject: boolean;
}

const TOKEN_REPLACEMENTS: Record<string, string> = {
  'system.space.x4': 'system.gap.md',
  'system.space.x2': 'system.gap.sm',
  'system.space.x6': 'system.gap.lg',
  'system.space.x8': 'system.gap.xl',
};

const MAIN_PACKAGE_FALLBACKS: Record<
  string,
  {previewImport: string; mainImport: string; subpath: string}
> = {
  'status-indicator': {
    previewImport: '@workday/canvas-kit-preview-react/status-indicator',
    mainImport: '@workday/canvas-kit-react/status-indicator',
    subpath: 'status-indicator',
  },
  radio: {
    previewImport: '@workday/canvas-kit-preview-react/radio',
    mainImport: '@workday/canvas-kit-react/radio',
    subpath: 'radio',
  },
};

function packageRoot(projectRoot: string, packageName: string): string {
  return path.join(projectRoot, 'node_modules', packageName);
}

function componentSubpathExists(
  projectRoot: string,
  packageName: string,
  subpath: string
): boolean {
  const base = path.join(packageRoot(projectRoot, packageName), subpath);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
    path.join(base, 'package.json'),
  ];

  return candidates.some(candidate => fs.existsSync(candidate));
}

export function verifyComponentAvailability(
  entry: ComponentCatalogEntry,
  projectContext: ProjectContext
): ComponentAvailability {
  const projectRoot = projectContext.projectRoot;
  const packageInfo =
    projectContext.packages[entry.packageName as keyof typeof projectContext.packages];

  if (!projectRoot) {
    return {
      installed: false,
      verifiedInProject: false,
    };
  }

  const installed = packageInfo?.installed ?? false;
  const installedVersion = packageInfo?.installedVersion;
  const verifiedInProject =
    installed && componentSubpathExists(projectRoot, entry.packageName, entry.subpath);

  const availability: ComponentAvailability = {
    installed,
    installedVersion,
    verifiedInProject,
  };

  if (!installed) {
    availability.installCommand = getInstallCommand(
      entry.packageName,
      projectContext.drift.indexVersion
    );
  }

  const fallbackKey = entry.subpath;
  const fallbackSpec = MAIN_PACKAGE_FALLBACKS[fallbackKey];

  if (fallbackSpec && entry.packageName === '@workday/canvas-kit-preview-react' && !installed) {
    const mainPackage = projectContext.packages['@workday/canvas-kit-react'];
    const mainInstalled = mainPackage.installed;
    const mainVerified =
      mainInstalled &&
      componentSubpathExists(projectRoot, '@workday/canvas-kit-react', fallbackSpec.subpath);

    if (mainVerified) {
      availability.fallback = {
        import: fallbackSpec.mainImport,
        deprecated: true,
        note: `${entry.packageName} is not installed. The deprecated main-package component at ${fallbackSpec.mainImport} is available and compiles, but Workday recommends the Preview package.`,
      };
    }
  }

  return availability;
}

export function verifyIconExport(
  entry: IconCatalogEntry,
  projectContext: ProjectContext
): ComponentAvailability {
  const projectRoot = projectContext.projectRoot;
  const packageInfo = projectContext.packages['@workday/canvas-system-icons-web'];

  if (!projectRoot) {
    return {
      installed: false,
      verifiedInProject: false,
    };
  }

  const installed = packageInfo.installed;
  const installedVersion = packageInfo.installedVersion;
  let verifiedInProject = false;

  if (installed) {
    const typesPath = path.join(
      projectRoot,
      'node_modules',
      '@workday/canvas-system-icons-web',
      'dist/es6/index.d.ts'
    );

    if (fs.existsSync(typesPath)) {
      const content = fs.readFileSync(typesPath, 'utf8');
      verifiedInProject = new RegExp(`\\b${entry.exportName}\\b`).test(content);
    }
  }

  return {
    installed,
    installedVersion,
    verifiedInProject,
  };
}

export function verifyTokenInProject(
  entry: TokenCatalogEntry,
  projectContext: ProjectContext
): boolean {
  const projectRoot = projectContext.projectRoot;
  const tokensPackage = projectContext.packages['@workday/canvas-tokens-web'];

  if (!projectRoot || !tokensPackage.installed) {
    return false;
  }

  const tokensRoot = packageRoot(projectRoot, '@workday/canvas-tokens-web');
  const systemTypes = path.join(tokensRoot, 'dist/es6/system/index.d.ts');

  if (fs.existsSync(systemTypes)) {
    const content = fs.readFileSync(systemTypes, 'utf8');
    const tokenLeaf = entry.key.split('.').pop() ?? entry.key;
    if (content.includes(`"${tokenLeaf}"`) || content.includes(`'${tokenLeaf}'`)) {
      return true;
    }
  }

  if (entry.cssVariable) {
    const cssPath = path.join(tokensRoot, 'css/system/_variables.css');
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      return css.includes(entry.cssVariable);
    }
  }

  return false;
}

export function enrichTokenValidation(
  entry: TokenCatalogEntry,
  projectContext: ProjectContext
): VerifiedTokenResult {
  const replacedBy = TOKEN_REPLACEMENTS[entry.key];
  const deprecated = Boolean(entry.deprecated || replacedBy);

  return {
    token: entry.key,
    entry,
    deprecated,
    replacedBy: replacedBy ?? (entry.deprecated ? undefined : undefined),
    verifiedInProject: verifyTokenInProject(entry, projectContext),
  };
}

export function enrichComponentEntry(
  entry: ComponentCatalogEntry,
  projectContext: ProjectContext
): ComponentCatalogEntry & {availability: ComponentAvailability} {
  return {
    ...entry,
    availability: verifyComponentAvailability(entry, projectContext),
  };
}

export function enrichIconEntry(
  entry: IconCatalogEntry,
  projectContext: ProjectContext
): IconCatalogEntry & {availability: ComponentAvailability} {
  return {
    ...entry,
    availability: verifyIconExport(entry, projectContext),
  };
}
