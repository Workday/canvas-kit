import type {ProjectContext} from './project-context';

export interface VersionContextEnvelope {
  versionContext: {
    projectRoot: string | null;
    source: ProjectContext['source'];
    indexVersion: string;
    installedCanvasKitVersion: string | null;
    driftSeverity: ProjectContext['drift']['severity'];
    installedPackages: ProjectContext['packages'];
    warning?: string;
  };
}

export function createVersionContextEnvelope(
  projectContext: ProjectContext
): VersionContextEnvelope {
  const {severity, indexVersion, installedVersion} = projectContext.drift;
  let warning: string | undefined;

  if (severity === 'major') {
    warning = `MCP index is v${indexVersion} but the consumer project installs @workday/canvas-kit-react@${installedVersion ?? 'unknown'}. Treat catalog answers as unverified until confirmed against node_modules.`;
  } else if (severity === 'minor' || severity === 'patch') {
    warning = `MCP index is v${indexVersion} while the consumer project installs @workday/canvas-kit-react@${installedVersion ?? 'unknown'} (${severity} drift). Verify availability against node_modules before recommending imports.`;
  } else if (projectContext.source === 'none') {
    warning =
      'No Canvas consumer project was detected. Catalog answers reflect the MCP index only and are not verified against an installed project.';
  }

  return {
    versionContext: {
      projectRoot: projectContext.projectRoot,
      source: projectContext.source,
      indexVersion: projectContext.drift.indexVersion,
      installedCanvasKitVersion: projectContext.drift.installedVersion,
      driftSeverity: projectContext.drift.severity,
      installedPackages: projectContext.packages,
      ...(warning ? {warning} : {}),
    },
  };
}

export function wrapStructuredOutput<T extends Record<string, unknown>>(
  output: T,
  projectContext: ProjectContext
): T & VersionContextEnvelope {
  return {
    ...createVersionContextEnvelope(projectContext),
    ...output,
  };
}
