# Canvas Kit CSS

The bundle package containing all modules of the Canvas CSS Kit.

## Usage

Canvas Kit CSS uses tilde `~` imports to resolve imports to your project's node_modules directory.

This is done automatically in Webpack's sass-loader.

If you would like to import outside of webpack you have a few options you can pass to the SASS `importer` option.

* If you are using `node_sass` you can try a third part importer such as `node-sass-tilde-importer`

* If you are using `dart_sass` you will need your own custom importer, e.g.:

```ts
const tildeImporter = (url: string): {file: string} => {
  if (url[0] === '~') {
    url = `./node_modules/${url.substr(1)}`;
  }

  return {file: url};
}
```

Troubleshooting:

In some cases your may need to add your `node_modules` directory to your the SASS `includePaths` option.

------------

You will then be able to import any scss file `index.scss`.

```scss
@import '~@workday/canvas-kit-css/index.scss';
```
