import fs from 'node:fs/promises';
import path from 'node:path';
import typescript from 'typescript';

export interface DescribeBlock {
  type: 'describe';
  name: string;
  children: (DescribeBlock | ItBlock)[];
}

export interface ItBlock {
  type: 'it';
  name: string;
}

export interface FileBlock {
  type: 'file';
  name: string;
  children: (DescribeBlock | ItBlock)[];
}

/**
 * Reads a spec file by getting the file contents as a string, passing through the TypeScript
 * transpiler, setting up custom `describe`, `it`, `beforeEach`, etc functions and runs the file
 * contents through `eval()` with those custom functions to extract out a JSON object representing
 * the structure of a Spec file. We use `eval` instead of an AST parser to handle meta coding like
 * `[a, b].forEach(() => { it('...') })`. Running the contents through a JavaScript context means
 * the file contents can be extracted via any runtime tricks used in spec files.
 */
export async function parseSpecFile(file: string): Promise<FileBlock | null> {
  const [_, fileName] = file.match(/.+(cypress\/.+)$/) || [];
  if (fileName) {
    const contents = await fs
      .readFile(file)
      .then(contents => contents.toString())
      .then(contents =>
        contents.replace(/import (.+) from .+/g, (substr: string, imports: string) => {
          if (imports.includes('{')) {
            return `const ${imports.replace(/[{}]/g, '')} = () => {}`;
          }
          if (/react/g.test(imports)) {
            return `const React = {createElement: () => {}}`;
          }
          return '';
        })
      ) // remove imports
      .then(contents => typescript.transpile(contents, {jsx: typescript.JsxEmit.React}))
      .then(contents => {
        let children: (DescribeBlock | ItBlock)[] = [];

        // eslint-disable-next-line no-empty-function
        const noop = () => {};

        // define for the eval()
        // @ts-ignore
        const before = noop;
        // @ts-ignore
        const beforeEach = noop;
        // @ts-ignore
        const after = noop;
        // @ts-ignore
        const afterEach = noop;

        const describe = (name: string, optionsOrCb: Function | Object, cb: Function | void) => {
          const childrenBefore = children;
          const obj: DescribeBlock = {
            type: 'describe',
            name,
            children: [],
          };
          children.push(obj);
          children = obj.children;
          if (typeof optionsOrCb === 'function') {
            optionsOrCb();
          } else if (typeof cb === 'function') {
            cb();
          }
          children = childrenBefore;
        };
        describe.skip = noop;
        describe.only = noop;
        // @ts-ignore
        const context = describe;

        const it = (name: string) => {
          const obj: ItBlock = {
            type: 'it',
            name,
          };
          children.push(obj);
        };
        it.skip = noop;
        it.only = noop;

        // eslint-disable-next-line no-eval
        eval(contents);

        return {
          type: 'file',
          name: path.basename(file).replace(`.spec${path.extname(file)}`, ''),
          children,
        } satisfies FileBlock;
      });

    return contents;
  }

  return null;
}
