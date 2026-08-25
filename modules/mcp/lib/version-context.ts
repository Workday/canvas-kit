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
  const warning =
    projectContext.drift.severity === 'major'
      ? `MCP index is v${projectContext.drift.indexVersion} but the consumer project installs @workday/canvas-kit-react@${projectContext.drift.installedVersion ?? 'unknown'}. Treat catalog answers as unverified until confirmed against node_modules.`
      : projectContext.source === 'none'
        ? 'No Canvas consumer project was detected. Catalog answers reflect the MCP index only and are not verified against an installed project.'
        : undefined;

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
