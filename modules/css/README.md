# Canvas Kit CSS

The bundle package containing all modules of the Canvas CSS Kit.

<img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />

**In Canvas Kit v5, this package and it's components will be going into maintenance mode due to the infrequent use of our CSS modules. We will still support `@workday/canvas-kit-css` with bug fixes and significant visual updates, but it generally won't be receiving new components, additional features, etc. This will allow us to provide more focused support, and dedicate our efforts to making bigger and better improvements to our most used components: Canvas Kit React. If you have questions or concerns, please [let us know](https://github.com/Workday/canvas-kit/issues/new?labels=&template=question.md).**

## Usage

Canvas Kit CSS uses tilde `~` imports to resolve imports to your project's node_modules directory.

This is done automatically in Webpack's sass-loader.

If you would like to import outside of webpack you have a few options you can pass to the SASS
`importer` option.

- If you are using `node_sass` you can try a third part importer such as `node-sass-tilde-importer`

- If you are using `dart_sass` you will need your own custom importer, e.g.:

```ts
const tildeImporter = (url: string): {file: string} => {
  if (url[0] === '~') {
    url = `./node_modules/${url.substr(1)}`;
  }

  return {file: url};
};
```

Troubleshooting:

In some cases your may need to add your `node_modules` directory to your the SASS `includePaths`
option.

---

You will then be able to import any scss file `index.scss`.

```scss
@import '~@workday/canvas-kit-css/index.scss';
```
