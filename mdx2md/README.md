# MDX to Markdown Converter (mdx2md)

## Overview

`mdx2md` is a utility that converts MDX (Markdown with JSX) files from Canvas documentation to standard Markdown format. This tool helps migrate documentation from a React-based MDX system to a more portable Markdown format while preserving as much of the original content structure and component documentation as possible.

## Core Functionality

The script performs several key operations:

1. **MDX File Processing**: Scans directories recursively to find all MDX files and processes them into Markdown.
2. **Component Transformation**: Converts React components used in MDX to equivalent Markdown syntax.
3. **API Documentation Generation**: Extracts and formats component API documentation from a structured data source.
4. **Image Handling**: Copies and updates image references to maintain proper paths in the output.
5. **Code Example Inclusion**: Finds and includes referenced code examples from example files.
6. **Frontmatter Preservation**: Maintains YAML frontmatter with any necessary adjustments.
7. **Cross-referencing Resolution**: Resolves component cross-references and imports.
8. **LLMs Integration**: Generates a reference file (llms.txt) for AI tools and large language models.

## Architecture

The converter is organized into several specialized modules:

### Core Modules
- **cli.js**: Handles command-line argument parsing
- **config.js**: Manages configuration settings
- **fileProcessor.js**: Implements the main file processing pipeline
- **fileUtils.js**: Provides file system operations and utilities
- **genLlmsTxt.js**: Generates the LLMs reference file
- **index.js**: Serves as the main entry point and orchestration
- **mdxParser.js**: Handles MDX parsing and transformation

### Component Processors (in `/processors`)
- **apiComponents.js**: Processes API documentation components
- **basicComponents.js**: Handles common layout components
- **codeComponents.js**: Processes code examples and snippets
- **imageProcessor.js**: Manages image processing
- **tokenComponents.js**: Handles design token components like color grids and brand tokens

## Component Processors

The converter handles various React components including:

- `PackageInfo` → Markdown tables
- `CKDocs` → Included documentation
- `InternalContent` → Conditionally included sections
- `TabPanel` → Section headers and content
- `SymbolDoc` → API documentation tables
- `ExampleCodeBlock` → Code blocks with actual code
- `Specifications` → Component specification info
- `LegacyPatternLink` → Standard Markdown links
- `Suggestion` → Formatted suggestion blocks
- `SideBySide` → Comparison sections
- `BrandTokens` → Brand token documentation
- `ColorGrid` → Color system documentation

## Workflow

When executed, the script follows this flow:

1. **Initialization**: Parses command-line arguments and loads configuration
2. **Document Loading**: Loads component documentation data from the design system
3. **File Discovery**: Recursively finds all MDX files in the input directory
4. **Batch Processing**: Processes files in batches to manage memory usage
5. **For Each File**:
   - Reads MDX content
   - Processes frontmatter
   - Handles imports and component references
   - Transforms components to Markdown
   - Generates API documentation
   - Writes the resulting Markdown to the output directory
6. **LLMs File Generation**: Creates a reference file for AI tools
7. **Completion**: Reports processing statistics and completion status

## Key Features

- **Component Documentation**: Generates comprehensive API tables from component metadata
- **Code Examples**: Includes actual code for example components
- **Content Filtering**: Option to exclude internal documentation
- **Structure Preservation**: Maintains the original directory structure
- **Graceful Degradation**: Falls back to placeholder content when referenced elements can't be found
- **Memory Management**: Processes large documentation sets in batches to avoid memory issues
- **Cross-References**: Resolves relative and package imports
- **Image Handling**: Batched image copying for performance optimization
- **Type Formatting**: Sophisticated formatting of complex TypeScript types
- **Default Directories**: Uses sensible defaults if no directories are specified
- **Debug Mode**: Provides detailed logging with the `--debug` flag

## Usage

The script is executed from the command line with the following syntax:

```
node index.js [input-dir] [output-dir] [options]
```

Parameters:
- `input-dir`: The root directory containing MDX files to convert (defaults to './content')
- `output-dir`: The destination directory for generated Markdown files (defaults to './public/markdown')

Options:
- `--include-internal`: Include content marked as internal
- `--base-url=URL`: Specify a base URL for documentation links (defaults to canvas.workdaydesign.com)
- `--debug`: Enable detailed debug output
- `--help` or `-h`: Display usage information

Examples:
```bash
# Use default directories
node index.js

# Specify custom directories
node index.js ./docs ./converted-docs

# Include internal content with custom base URL
node index.js ./src/docs ./output --include-internal --base-url=https://canvas.workdaydesign.com

# Run with debug output
node index.js --debug

# Process a single file
node index.js ./content/components/button.mdx ./output/button.md
```

## Technical Implementation

The converter is implemented as an ES Module and uses modern JavaScript features:

- Factory pattern for creating utility modules with dependency injection
- Asynchronous file operations with `fs/promises`
- Regular expressions for content parsing
- Function composition for pipeline-style processing
- Caching mechanisms to avoid redundant processing
- Batched processing for performance optimization
- Careful error handling with appropriate logging
- Sensible defaults for easy execution

## Output Format

The generated Markdown files include:

- YAML frontmatter with metadata about the source file
- Live URL linking to the original documentation
- Properly formatted component API tables
- Correctly indented code blocks with language specification
- Transformed interactive components as static Markdown
- Maintained image references with correct relative paths

Additionally, the converter generates an `llms.txt` file that serves as a reference for AI tools and large language models, containing consolidated information about the documentation set.

The converter creates a faithful representation of the original MDX documentation in standard Markdown format, making it compatible with a wide range of documentation systems and platforms.