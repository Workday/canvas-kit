#!/usr/bin/env node
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';

import {getServer} from './index.js';

export async function main() {
  const transport = new StdioServerTransport();
  await getServer().connect(transport);
}

main().catch((error: unknown) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
