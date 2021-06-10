# Canvas Kit Codemods

This package is designed to help you migrate between major versions of Canvas Kit and adopt API changes. 

## Usage

```sh
> npx @workday/canvas-kit-codemod <transform> [path]
```

```sh
Commands (transforms):
  canvas-kit-codemod v5 [path]  Canvas Kit v4 > v5 migration transform

Options:
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
```

> Note: These codemods only work on .js, .jsx, .ts, and .tsx extensions. You may need to make some manual changes in other file types (.json, .mdx, .md, etc.).

> Note: You may need to run your linter after executing the codemod, as it's resulting formatting (spacing, quotes, etc.) may not match your project's styling.

## Installation

Alternatively, you can install the codemod package and run it without npx.

```sh
> yarn add @workday/canvas-kit-codemod
> canvas-kit-codemod <transform> [path]
```
