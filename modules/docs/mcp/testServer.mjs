#!/usr/bin/env node

import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {server} from './index.js';

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(error => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
