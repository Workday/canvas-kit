import * as path from 'path';
import * as fs from 'fs';
import {execSync} from 'child_process';
import {bestPracticesResourcesFiles} from '../mcp/config';

/**
 * Build script for MCP (Model Context Protocol) resources
 * This script uses esbuild to bundle the MCP server with MDX files injected as strings
 */
function buildMcp(): void {
  const docsPath = path.join(__dirname, '..');
  const mcpPath = path.join(docsPath, 'mcp');
  const distPath = path.join(docsPath, 'dist');
  const mcpDistPath = path.join(distPath, 'mcp');
  const mdxPath = path.join(docsPath, 'mdx');

  try {
    console.log('Building MCP server with esbuild...');

    // Ensure dist directory exists
    if (!fs.existsSync(mcpDistPath)) {
      fs.mkdirSync(mcpDistPath, {recursive: true});
    }

    // Read MDX files and create content object
    const mdxContent: Record<string, string> = {};
    for (const fileName of bestPracticesResourcesFiles) {
      const filePath = path.join(mdxPath, fileName);
      if (fs.existsSync(filePath)) {
        mdxContent[fileName] = fs.readFileSync(filePath, 'utf8');
        console.log(`Read MDX file: ${fileName}`);
      } else {
        console.warn(`Warning: ${fileName} not found in ${mdxPath}`);
      }
    }

    // Create a temporary file with the MDX content injected
    const tempIndexPath = path.join(mcpPath, 'index.temp.ts');
    const originalIndexPath = path.join(mcpPath, 'index.ts');

    // Read the original index.ts
    const originalContent = fs.readFileSync(originalIndexPath, 'utf8');

    // Replace the MDX_CONTENT declaration with actual content
    const mdxContentString = JSON.stringify(mdxContent, null, 2);
    const updatedContent = originalContent.replace(
      'declare const MDX_CONTENT: Record<string, string>;',
      `const MDX_CONTENT: Record<string, string> = ${mdxContentString};`
    );

    // Write the temporary file
    fs.writeFileSync(tempIndexPath, updatedContent);

    try {
      // Use esbuild to bundle the MCP server
      const esbuildCommand = [
        'npx esbuild',
        tempIndexPath,
        '--bundle',
        '--format=esm',
        '--platform=node',
        '--target=node18',
        '--external:@modelcontextprotocol/sdk',
        '--outfile=' + path.join(mcpDistPath, 'index.js'),
        '--sourcemap',
      ].join(' ');

      execSync(esbuildCommand, {
        stdio: 'inherit',
        cwd: docsPath,
      });
    } finally {
      // Clean up temporary file
      if (fs.existsSync(tempIndexPath)) {
        fs.unlinkSync(tempIndexPath);
      }
    }

    console.log('MCP build completed successfully!');
  } catch (error) {
    console.error('Error building MCP resources:', error);
    process.exit(1);
  }
}

// Run the build if this script is executed directly
if (require.main === module) {
  buildMcp();
}
export {buildMcp};
