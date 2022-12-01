const docGen = require('react-docgen-typescript');

const ts = require('typescript');
const path = require('path');
const tsconfigPath = path.join(__dirname, '../tsconfig.json');
const fs = require('fs');

/**
 *
 * @param {string} fileName
 * @param {*} prop
 * @param {*} component
 */
function propFilter(fileName, prop, component) {
  // `PropTables.tsx` files are okay to pass through
  if (fileName.includes('PropTables.tsx')) {
    return true;
  }

  if (prop.declarations) {
    // filter out props that come from node_modules or style props
    return !prop.declarations.some(
      d => d.fileName.includes('react/layout/lib/utils') || d.fileName.includes('node_modules')
    );
  }

  return false;
}

function getConfig() {
  const basePath = path.dirname(tsconfigPath);
  const {config, error} = ts.readConfigFile(tsconfigPath, filename =>
    fs.readFileSync(filename, 'utf8')
  );

  const {options, errors} = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath
  );

  return options;
}

/**
 * Gets component doc info given a file
 * @param {string} file Full path to file to parse
 * @param {ts.Program} tsProgram A tsProgram to (re)use. Returned by getTsProgram
 */
function getComponentDocs(file, tsProgram) {
  const componentDocs = docGen
    .withCustomConfig(tsconfigPath, {
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true, // Make sure Storybook recognizes the enums for controls: https://github.com/storybookjs/storybook/blob/8d7fa4249cc73f315cfc15ebd8c6f0d574f341d5/addons/docs/src/lib/convert/proptypes/convert.ts#L44-L60
      propFilter: (prop, component) => propFilter(file, prop, component),
    })
    // Using `parseWithProgramProvider` because `.parse` would create a new TS program with each module
    // which is much slower
    .parseWithProgramProvider(file, () => tsProgram);

  // `as` shows up as required, but it is not. This fixes it
  componentDocs.forEach(d => {
    if (d.props.as) {
      d.props.as.required = false;
      // More useful than `ElementType<any>`
      d.props.as.type.raw =
        '"article" | "aside" | "button" | "section" | ... 161 more ... | React.ComponentType<any>';
    }
    if (d.props.ref) {
      // More useful than default output
      d.props.ref.type.name = 'React.Ref<any>';
      d.props.ref.type.raw = 'React.Ref<any>';
      d.props.ref.type.value = [{value: 'React.Ref<any>'}];
    }
  });

  return componentDocs;
}

/**
 * Creates a reusable TS program. The tsProgram should be reused for better performance. For
 * example, the same TS program can be run on many component files using the same program to
 * generate prop tables without having to create all types from scratch. The type definition files
 * will be kept in memory.
 * @param {string[]} rootFiles
 */
function getTsProgram(rootFiles) {
  return ts.createProgram(rootFiles, getConfig(tsconfigPath));
}

/**
 *  This will match the following patterns:
    export default class Banner
    export default class Banner<T> {
    export default Banner = (
    export default Banner;
    export default Banner: React.FC<any> =
    export const Banner = (
    export const Banner: React.FC =
    export const Banner;
    export var Banner;
    export default function Banner (
    export default function Banner<T> (
    export function Banner(
    export function Banner<T>(
    export default (
    It will extract out the export name only if it starts with a capital. In the examples here, that would be
    "Banner" in all cases except for the last one which would be "Example"
  * @param {string} source
  */
function extractExports(source) {
  const exportPattern = /export (?:default|const|var|function)(?: class)?(?: function)? ([^:\s<();]*)/;
  const exports = (source.match(new RegExp(exportPattern, 'g')) || [])
    .map(match => match.match(exportPattern)[1] || 'Example') // default export name to "Example"
    .filter(name => name.charAt(0).toUpperCase() === name.charAt(0))
    .filter((value, index, self) => self.indexOf(value) === index); // unique names only

  return exports;
}

module.exports = {
  getConfig,
  getTsProgram,
  getComponentDocs,
  extractExports,
};
