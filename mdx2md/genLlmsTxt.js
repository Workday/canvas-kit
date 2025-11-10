// genLlmsTxt.js
import fs from 'fs/promises'; // Change to promises API
import path from 'path';

export async function genLlmsTxt(rootDir, outputFile, logger) {
  // Make async
  // Helper function to find all markdown files recursively
  async function findMarkdownFiles(dir, fileList = []) {
    // Make async
    const files = await fs.readdir(dir);

    for (const file of files) {
      // Use for...of for async operations
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await findMarkdownFiles(filePath, fileList);
      } else if (file.endsWith('.md')) {
        fileList.push(filePath);
      }
    }

    return fileList;
  }

  // Get all markdown files
  const markdownFiles = await findMarkdownFiles(rootDir);

  // Organize files by section
  const sections = {
    Docs: [],
    Guidelines: [],
    'Content Guidelines': [],
    Styles: [],
    'Get Started': [],
    Help: [],
    Frameworks: [],
    Patterns: [],
  };

  for (const file of markdownFiles) {
    // Use for...of for async operations
    const relativePath = path.relative(rootDir, file);
    const fileContent = await fs.readFile(file, 'utf8');
    const titleMatch = fileContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(file, '.md');

    const descMatch = fileContent.match(/^# .+\n\n(.+)$/m);
    const description = descMatch ? descMatch[1] : '';

    const entry = `- [${title}](markdown/${relativePath}): ${description}`;

    if (relativePath.startsWith('components/')) {
      sections['Docs'].push(entry);
    } else if (
      relativePath.startsWith('guidelines/accessibility/') ||
      relativePath.startsWith('guidelines/ai-guidance/')
    ) {
      sections['Guidelines'].push(entry);
    } else if (relativePath.startsWith('guidelines/content/')) {
      sections['Content Guidelines'].push(entry);
    } else if (relativePath.startsWith('styles/')) {
      sections['Styles'].push(entry);
    } else if (relativePath.startsWith('get-started/')) {
      sections['Get Started'].push(entry);
    } else if (relativePath.startsWith('help/')) {
      sections['Help'].push(entry);
    } else if (relativePath.startsWith('frameworks/')) {
      sections['Frameworks'].push(entry);
    } else if (relativePath.startsWith('patterns/')) {
      sections['Patterns'].push(entry);
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
