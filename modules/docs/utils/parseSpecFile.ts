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
      .readFile(path.join(__dirname, '../../..', fileName))
      .then(contents => contents.toString())
      .then(contents => {
        // We need to remove the import statements from the file contents and replace them with
        // `const` declarations so that we can run the file contents through `eval()`. We will
        // assume all imports within the spec files are functions or objects with function keys.
        // For example, `import {render} from '@testing-library/react'; render(<div />);`
        //
        // The following will transform code like this:
        // ```tsx
        // // input
        // import React from 'react';
        // import {render} from '@testing-library/react';
        // import {
        //  Default,
        //  Disabled,
        // } from './examples';
        //
        // // output
        // const React = new Proxy(noop, {get() { return noop }});
        // const render = noop;
        // const Default = noop;
        // const Disabled = noop;
        // ```
        // This is required so the spec contents can be run through `eval()`. `noop` and all
        // `describe`, `it`, etc will be defined in the context of the `eval()` call.

        return contents
          .replace(/import\s\*\sas/g, 'import') // Remove `import * as`
          .replace(/^import\s+([\s\S]+?)\s+from\s+.+;?/gm, (_substr: string, imports: string) => {
            if (imports.includes('{')) {
              return imports //?
                .replace(/\n/g, '') // Remove newlines
                .replace(/[{}]/g, '') // Remove curly braces
                .replace(/,/g, '') // Remove commas
                .trim() // Trim whitespace
                .replace(/[\s]+/g, ' ') // Normalize spaces
                .split(' ') // Split into individual imports
                .map(i => `const ${i} = myImport('${i}');`) // Map to `const` declarations
                .join('\n'); // Join with newlines
            }
            return `const ${imports} = new Proxy(noop, {get(target, prop) { if (prop === 'name') { return '${imports}'; } return noop; }});`;
          });
      })
      .then(contents => typescript.transpile(contents, {jsx: typescript.JsxEmit.React}))
      .then(contents => {
        let children: (DescribeBlock | ItBlock)[] = [];

        // eslint-disable-next-line no-empty-function
        const noop = () => {};

        const myImport = (name: string) =>
          new Proxy(noop, {
            get(target, prop) {
              if (prop === 'name') {
                return name;
              }
              return noop;
            },
          });

        // call `myImport` to keep TS happy. It is used inside our eval, but TS doesn't know about it.
        myImport('myImport');

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
