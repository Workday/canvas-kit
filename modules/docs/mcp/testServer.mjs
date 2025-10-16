#!/usr/bin/env node

import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';

async function main() {
  const {server} = await import('./index.js');
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(error => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
