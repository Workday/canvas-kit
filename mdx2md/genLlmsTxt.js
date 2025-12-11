// genLlmsTxt.js
import fs from 'fs/promises';
import path from 'path';

export async function genLlmsTxt(rootDir, outputFile, baseUrl, logger) {
  // Helper function to find all markdown files recursively
  async function findMarkdownFiles(dir, fileList = []) {
    try {
      const files = await fs.readdir(dir);

      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);

        if (stat.isDirectory()) {
          await findMarkdownFiles(filePath, fileList);
        } else if (file.endsWith('.md')) {
          fileList.push(filePath);
        }
      }
    } catch (err) {
      if (logger) {
        logger.log(`Warning: Could not read directory ${dir}: ${err.message}`);
      }
    }

    return fileList;
  }

  // Helper to clean HTML/JSX tags from text
  function cleanHtmlTags(text) {
    return text.replace(/<[^>]+>/g, '').trim();
  }

  // Get all markdown files
  const markdownFiles = await findMarkdownFiles(rootDir);

  // Organize files by section
  const sections = {
    Components: [],
    'Preview Components': [],
    'Labs Components': [],
    Guides: [],
    Accessibility: [],
    'Style Props': [],
    Tokens: [],
    Styling: [],
  };

  for (const file of markdownFiles) {
    // Normalize path separators for cross-platform compatibility
    const relativePath = path.relative(rootDir, file).split(path.sep).join('/');

    let fileContent;
    try {
      fileContent = await fs.readFile(file, 'utf8');
    } catch (err) {
      if (logger) {
        logger.log(`Warning: Could not read file ${file}: ${err.message}`);
      }
      continue;
    }

    const titleMatch = fileContent.match(/^# (.+)$/m);
    const rawTitle = titleMatch ? titleMatch[1] : path.basename(file, '.md');
    const title = cleanHtmlTags(rawTitle);

    // More flexible description matching - find first non-empty paragraph after title
    const descMatch = fileContent.match(/^# .+\n+([^#\n][^\n]*)/m);
    const rawDescription = descMatch ? descMatch[1].trim() : '';
    const description = cleanHtmlTags(rawDescription);

    const liveUrl = `${baseUrl}/llm/markdown/${relativePath}`;
    const entry = `- [${title}](${liveUrl}): ${description}`;

    if (relativePath.startsWith('react/')) {
      sections['Components'].push(entry);
    } else if (relativePath.startsWith('preview-react/')) {
      sections['Preview Components'].push(entry);
    } else if (relativePath.startsWith('labs-react/')) {
      sections['Labs Components'].push(entry);
    } else if (relativePath.startsWith('docs/mdx/accessibility/')) {
      sections['Accessibility'].push(entry);
    } else if (relativePath.startsWith('docs/mdx/style-props/')) {
      sections['Style Props'].push(entry);
    } else if (relativePath.startsWith('docs/mdx/tokens/')) {
      sections['Tokens'].push(entry);
    } else if (relativePath.startsWith('docs/')) {
      sections['Guides'].push(entry);
    } else if (relativePath.startsWith('styling/')) {
      sections['Styling'].push(entry);
    }
  }

  // Generate output content
  let output = '# Markdown Docs\n\n';

  for (const [section, entries] of Object.entries(sections)) {
    if (entries.length > 0) {
      output += `## ${section}\n\n`;
      output += entries.join('\n');
      output += '\n\n';
    }
  }

  // Write to output file
  await fs.writeFile(outputFile, output);

  // Log output based on logger availability
  if (logger) {
    logger.log(`Generated reference file at ${outputFile}`);
  }
}
