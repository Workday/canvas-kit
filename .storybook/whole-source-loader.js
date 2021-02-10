module.exports = function sourceAndPropTypeLoader(/** @type string */ source) {
  const raw = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  /* This will match the following patterns:
    export default class Banner
    export default class Banner<T> {
    export default Banner = (
    export default Banner;
    export default Banner: React.FC<any> =
    export const Banner = (
    export const Banner: React.FC =
    export const Banner;
    export default function Banner (
    export default function Banner<T> (
    export function Banner(
    export function Banner<T>(
    export default (
    It will extract out the export name only if it starts with a capital. In the examples here, that would be
    "Banner" in all cases except for the last one which would be "Example"
  */
  const exportPattern = /export (?:default|const|function)(?: class)?(?: function)? ([^:\s<();]*)/;
  const exportSet = new Set();
  source
    .match(new RegExp(exportPattern, 'g'))
    .map(match => match.match(exportPattern)[1] || 'Example') // default export name to "Example"
    .filter(name => name.charAt(0).toUpperCase() === name.charAt(0))
    .forEach(m => exportSet.add(m));
  const exports = [...exportSet]; // Make sure export names are unique

  // rewrite out example files so that we can attach the __RAW__ property
  // This will rewrite this:
  //  export default () => <div />;
  // to this:
  //  const Example = () => <div />;
  //  export default Example;
  //  Example.__RAW__ = 'export default () => <div />;';
  // We do this so that the whole source code can be used in Storybook examples
  const rewriteExampleSource = source.includes('export default (')
    ? source.replace('export default (', 'const Example = (') + '\nexport default Example;'
    : source;

  return `${rewriteExampleSource}
${exports.map(name => `${name}.__RAW__ = ${raw};`).join('\n')}
`;
};
