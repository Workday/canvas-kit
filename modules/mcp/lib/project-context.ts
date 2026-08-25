import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import * as fs from 'node:fs';
import * as path from 'node:path';

interface RootsCapableServer {
  listRoots?: () => Promise<{roots?: Array<{uri: string}>}>;
}

export const TRACKED_CANVAS_PACKAGES = [
  '@workday/canvas-kit-react',
  '@workday/canvas-kit-preview-react',
  '@workday/canvas-kit-labs-react',
  '@workday/canvas-tokens-web',
  '@workday/canvas-system-icons-web',
  '@workday/canvas-kit-styling',
] as const;

export type TrackedCanvasPackage = (typeof TRACKED_CANVAS_PACKAGES)[number];

export type ProjectContextSource = 'parameter' | 'roots' | 'env' | 'cwd' | 'none';

export type DriftSeverity = 'none' | 'patch' | 'minor' | 'major' | 'unknown';

export interface PackageInstallInfo {
  declaredRange?: string;
  installedVersion?: string;
  installed: boolean;
  declared: boolean;
}

export interface ProjectContext {
  projectRoot: string | null;
  source: ProjectContextSource;
  packages: Record<TrackedCanvasPackage, PackageInstallInfo>;
  drift: {
    indexVersion: string;
    installedVersion: string | null;
    severity: DriftSeverity;
  };
}

interface CacheEntry {
  mtimeMs: number;
  context: ProjectContext;
}

const contextCache = new Map<string, CacheEntry>();

function parseSemver(version: string): [number, number, number] | null {
  const match = version.trim().match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!match) {
    return null;
  }

  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

export function compareDriftSeverity(
  indexVersion: string,
  installedVersion: string | null
): DriftSeverity {
  if (!installedVersion) {
    return 'unknown';
  }

  const indexParts = parseSemver(indexVersion);
  const installedParts = parseSemver(installedVersion);

  if (!indexParts || !installedParts) {
    return 'unknown';
  }

  if (
    indexParts[0] === installedParts[0] &&
    indexParts[1] === installedParts[1] &&
    indexParts[2] === installedParts[2]
  ) {
    return 'none';
  }

  if (indexParts[0] === installedParts[0] && indexParts[1] === installedParts[1]) {
    return 'patch';
  }

  if (indexParts[0] === installedParts[0]) {
    return 'minor';
  }

  return 'major';
}

function readPackageJson(packageJsonPath: string): {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
} | null {
  if (!fs.existsSync(packageJsonPath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
      peerDependencies?: Record<string, string>;
    };
  } catch {
    return null;
  }
}

function readInstalledVersion(projectRoot: string, packageName: string): string | undefined {
  const packageJsonPath = path.join(projectRoot, 'node_modules', packageName, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    return undefined;
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {version?: string};
    return pkg.version;
  } catch {
    return undefined;
  }
}

function findCanvasProjectRoot(startDir: string): string | null {
  let current = path.resolve(startDir);

  while (true) {
    const packageJsonPath = path.join(current, 'package.json');
    const packageJson = readPackageJson(packageJsonPath);

    if (packageJson) {
      const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
        ...packageJson.peerDependencies,
      };

      const hasCanvasPackage = TRACKED_CANVAS_PACKAGES.some(pkg => pkg in (allDeps ?? {}));
      const hasNodeModulesCanvas = fs.existsSync(
        path.join(current, 'node_modules', '@workday', 'canvas-kit-react')
      );

      if (hasCanvasPackage || hasNodeModulesCanvas) {
        return current;
      }
    }

    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }

    current = parent;
  }

  return null;
}

function scanPackages(projectRoot: string): Record<TrackedCanvasPackage, PackageInstallInfo> {
  const packageJson = readPackageJson(path.join(projectRoot, 'package.json')) ?? {};
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.peerDependencies,
  };

  const packages = {} as Record<TrackedCanvasPackage, PackageInstallInfo>;

  for (const packageName of TRACKED_CANVAS_PACKAGES) {
    const declaredRange = allDeps?.[packageName];
    const installedVersion = readInstalledVersion(projectRoot, packageName);

    packages[packageName] = {
      declaredRange,
      installedVersion,
      installed: Boolean(installedVersion),
      declared: Boolean(declaredRange),
    };
  }

  return packages;
}

export function buildProjectContext(
  projectRoot: string | null,
  source: ProjectContextSource,
  indexVersion: string
): ProjectContext {
  if (!projectRoot) {
    return {
      projectRoot: null,
      source: 'none',
      packages: TRACKED_CANVAS_PACKAGES.reduce(
        (acc, packageName) => {
          acc[packageName] = {
            installed: false,
            declared: false,
          };
          return acc;
        },
        {} as Record<TrackedCanvasPackage, PackageInstallInfo>
      ),
      drift: {
        indexVersion,
        installedVersion: null,
        severity: 'unknown',
      },
    };
  }

  const packages = scanPackages(projectRoot);
  const installedVersion = packages['@workday/canvas-kit-react'].installedVersion ?? null;

  return {
    projectRoot,
    source,
    packages,
    drift: {
      indexVersion,
      installedVersion,
      severity: compareDriftSeverity(indexVersion, installedVersion),
    },
  };
}

function getCachedContext(cacheKey: string, packageJsonPath: string): ProjectContext | null {
  const entry = contextCache.get(cacheKey);
  if (!entry || !fs.existsSync(packageJsonPath)) {
    return null;
  }

  try {
    const mtimeMs = fs.statSync(packageJsonPath).mtimeMs;
    if (entry.mtimeMs === mtimeMs) {
      return entry.context;
    }
  } catch {
    return null;
  }

  return null;
}

function setCachedContext(
  cacheKey: string,
  packageJsonPath: string,
  context: ProjectContext
): void {
  try {
    const mtimeMs = fs.statSync(packageJsonPath).mtimeMs;
    contextCache.set(cacheKey, {mtimeMs, context});
  } catch {
    // Skip caching if package.json is unreadable.
  }
}

async function resolveRoots(server: McpServer): Promise<string[]> {
  try {
    const rootsServer = server as McpServer & RootsCapableServer;
    if (!rootsServer.listRoots) {
      return [];
    }

    const result = await rootsServer.listRoots();
    return (result.roots ?? [])
      .map((root: {uri: string}) => root.uri)
      .filter((uri: string) => uri.startsWith('file://'))
      .map((uri: string) => decodeURIComponent(uri.replace(/^file:\/\//, '')));
  } catch {
    return [];
  }
}

export interface ResolveProjectContextOptions {
  projectPath?: string;
  server?: McpServer;
  indexVersion: string;
}

export async function resolveProjectContext(
  options: ResolveProjectContextOptions
): Promise<ProjectContext> {
  const candidates: Array<{root: string; source: ProjectContextSource}> = [];

  if (options.projectPath?.trim()) {
    candidates.push({
      root: path.resolve(options.projectPath.trim()),
      source: 'parameter',
    });
  }

  if (options.server) {
    for (const root of await resolveRoots(options.server)) {
      candidates.push({root, source: 'roots'});
    }
  }

  const envRoot = process.env.CANVAS_PROJECT_ROOT?.trim();
  if (envRoot) {
    candidates.push({root: path.resolve(envRoot), source: 'env'});
  }

  candidates.push({root: process.cwd(), source: 'cwd'});

  for (const candidate of candidates) {
    const projectRoot = findCanvasProjectRoot(candidate.root);
    if (!projectRoot) {
      continue;
    }

    const cacheKey = `${candidate.source}:${projectRoot}`;
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const cached = getCachedContext(cacheKey, packageJsonPath);

    if (cached) {
      return {
        ...cached,
        drift: {
          ...cached.drift,
          indexVersion: options.indexVersion,
          severity: compareDriftSeverity(
            options.indexVersion,
            cached.packages['@workday/canvas-kit-react'].installedVersion ?? null
          ),
        },
      };
    }

    const context = buildProjectContext(projectRoot, candidate.source, options.indexVersion);
    setCachedContext(cacheKey, packageJsonPath, context);
    return context;
  }

  return buildProjectContext(null, 'none', options.indexVersion);
}

export function getInstallCommand(packageName: string, version?: string | null): string {
  const range = version ? `@^${version}` : '';
  return `npm install ${packageName}${range}`;
}
