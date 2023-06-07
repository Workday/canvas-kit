import {API, FileInfo, Options} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // codemode goes here ...

  return root.toSource();
}
