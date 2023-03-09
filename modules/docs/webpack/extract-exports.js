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

module.exports = extractExports;
