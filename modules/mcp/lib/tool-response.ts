import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';

import {resolveProjectContext} from './project-context';
import {wrapStructuredOutput} from './version-context';

type ToolContent = {
  type: 'text';
  text: string;
};

type ResourceLinkContent = {
  type: 'resource_link';
  uri: string;
  name: string;
  mimeType: string;
  description?: string;
  annotations?: {
    audience: Array<'user' | 'assistant'>;
  };
};

export async function finalizeToolResponse(
  server: McpServer,
  indexVersion: string,
  output: Record<string, unknown>,
  extraContent: Array<ResourceLinkContent | ToolContent> = [],
  projectPath?: string
) {
  const projectContext = await resolveProjectContext({
    server,
    indexVersion,
    projectPath,
  });
  const structuredContent = wrapStructuredOutput(output, projectContext);

  return {
    content: [{type: 'text' as const, text: JSON.stringify(structuredContent)}, ...extraContent],
    structuredContent,
  };
}
