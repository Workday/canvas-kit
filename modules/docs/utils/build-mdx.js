const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');

const args = process.argv.slice(2);
const inputPath = path.resolve(args[0]);
const distFolder = path.join(__dirname, '../dist');
const srcFolders = ['react', 'labs-react', 'preview-react', 'docs/mdx/style-props'];

if (!inputPath) {
  console.error('You must supply a valid path');
  process.exit(1);
}

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

const sanitizeMdxFile = (inFile, outFile) => {
  fs.readFile(inFile, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    const result = data
      // Remove storybook stuff
      .replace(/import {.*} from '@storybook\/addon-docs';/g, '')
      .replace(/<Meta.* \/>\n/g, '')
      .replace(/^\s+|\s+$/g, '')
      // TODO: Remove this replace when there's no longer any use of `<ArgsTable>`
      // The replace below converts named imports from files in the examples
      // folder to default imports (this is required by canvas-site in order
      // for examples to work). The regex specifically targets import
      // statements which exist on on a single line, which is fine because
      // example imports almost always fall on a single line. For example:
      //
      // import {FlexCard} from './examples/Flex/FlexCard';
      //
      // The line above will be converted (as desired) to:
      //
      // import FlexCard from './examples/Flex/FlexCard';
      //
      // This build process contains logic elsewhere to convert the named
      // exports in those example files to default exports.
      //
      // That said, we do NOT want to convert imports for splitprops files.
      // Splitprops files include dummy components which are used to display
      // prop tables for things that aren't actually components such as a
      // model's config, state, and event objects. Splitprops files must remain
      // named imports since they often export multiple components.
      //
      // Most splitprops imports span multiple lines so our regex wouldn't
      // catch them anyway:
      //
      // import {
      //   TabsModelConfigComponent,
      //   TabsStateComponent,
      //   TabsEventsComponent,
      // } from './TabsModel.splitprops.tsx';
      //
      // Note that the TabsModel splitprops file isn't in the examples folder,
      // so it wouldn't have been caught by the regex even if it was on a
      // single line. However, it's possible a splitprops file may be placed in
      // an examples folder AND fall on a single line:
      //
      // import {FlexStyle} from './examples/PropTables.splitprops.tsx';
      //
      // We add the `(?!.*splitprops)` negative lookahead to the regex to
      // ensure the named import is preserved in this case. The part before
      // the negative lookahead (import ... examples) will only match if
      // "splitprops" is NOT present later in the line.
      //
      // More info on negative lookahead:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions#other_assertions
      .replace(
        /import {\s?(\w+)\s?} from '\.\/examples(?!.*splitprops)/g,
        "import $1 from './examples"
      );

    fs.writeFile(outFile, result, 'utf8', err => {
      if (err) return console.error(err);
    });
  });
};

/**
 * Build files in the docs module
 */
glob(inputPath + '/**/*.md?(x)', {}, (err, files) => {
  files.forEach(file => {
    const relativePath = file.replace(path.join(__dirname, '../'), '');
    const destFile = path.join(distFolder, relativePath);
    fse.ensureDirSync(path.dirname(destFile));
    sanitizeMdxFile(file, destFile);
  });
});

/**
 * Build component files in react module, and copy them into the dist folder of the docs module
 */
srcFolders.forEach(folder => {
  const srcFolder = path.join(__dirname, '../../', folder);

  glob(srcFolder + '/**/*.mdx', {}, (err, files) => {
    const mdxDestinations = files.map(file => {
      return path.join(
        distFolder,
        'mdx',
        file
          .replace(path.join(srcFolder, '../'), '')
          .replace('/stories', '')
          .replace('.stories', '')
      );
    });

    mdxDestinations.forEach((destFile, index) => {
      const sourceMdx = files[index];
      const storiesDir = path.dirname(sourceMdx);
      const sourceExamplesDir = path.join(storiesDir, 'examples');
      const destDir = path.dirname(destFile);

      fs.mkdirSync(destDir, {recursive: true});
      sanitizeMdxFile(sourceMdx, destFile);

      // Copy examples if they exist
      if (fs.existsSync(sourceExamplesDir)) {
        const destExamplesDir = path.join(destDir, 'examples');
        fse.copySync(sourceExamplesDir, destExamplesDir);

        // Change exports from named to default
        glob(destExamplesDir + '/**/*.@(js|jsx|ts|tsx)', {}, (err, examples) => {
          examples.forEach(example => {
            // Only convert examples - not splitprops files
            if (!path.basename(example).includes('.splitprops')) {
              fs.readFile(example, 'utf8', (err, data) => {
                fs.writeFileSync(
                  example,
                  data.replace(/export const (\w)* =/g, 'export default'), // Convert named export to default export
                  'utf8'
                );
              });
            }
          });
        });
      }

      // Copy files that split the props of a Compound Component model.
      glob(storiesDir + '/*.splitprops.tsx', {}, (err, files) =>
        files.forEach(file => fse.copySync(file, path.join(destDir, path.basename(file))))
      );
    });
  });
});
