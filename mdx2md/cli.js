/**
 * CLI Arguments Parser Module
 *
 * Handles command-line argument parsing and validation for the MDX to Markdown converter.
 */

/**
 * Parses command line arguments into a structured options object.
 *
 * @returns {Object} Parsed CLI options
 */
export function parseCliArgs() {
  // Define default directories for canvas-kit
  const DEFAULT_INPUT_DIR = './modules';
  const DEFAULT_OUTPUT_DIR = './modules/docs/llm/markdown';

  // Extract arguments and handle defaults
  const args = process.argv.slice(2);
  const options = {
    inputDir: DEFAULT_INPUT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR,
    baseUrl: 'https://workday.github.io/canvas-kit',
    showHelp: false,
    debug: false,
  };

  // Handle positional arguments (input/output directories)
  if (args.length >= 1 && !args[0].startsWith('--')) {
    options.inputDir = args[0];
  }

  if (args.length >= 2 && !args[1].startsWith('--')) {
    options.outputDir = args[1];
  }

  // Parse flag arguments
  args.forEach(arg => {
    if (arg.startsWith('--base-url=')) {
      options.baseUrl = arg.split('=')[1];
    } else if (arg === '--help' || arg === '-h') {
      options.showHelp = true;
    } else if (arg === '--debug') {
      options.debug = true;
    }
  });

  return options;
}

/**
 * Displays help information for the CLI.
 *
 * @param {Object} options - Default options to show in the help text
 */
export function displayHelp(options) {
  console.log(
    `MDX to Markdown Converter

Usage: node index.js [input-dir] [output-dir] [options]

Options:
  --base-url=URL        Specify the base URL for live links
  --debug               Enable detailed debug output
  --help, -h            Display this help information

Defaults:
  - input-dir:  ${options.inputDir}
  - output-dir: ${options.outputDir}
  - base-url:   ${options.baseUrl}
`
  );
}
