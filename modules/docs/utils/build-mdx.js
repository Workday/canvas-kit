const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');

const args = process.argv.slice(2);
const inputPath = path.resolve(args[0]);
const distFolder = path.join(__dirname, '../dist');
const ckrFolder = path.join(__dirname, '../../react');

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
      .replace(/import {.*} from '@storybook\/addon-docs\/blocks';/g, '')
      .replace(/<Meta.* \/>\n/g, '')
      .replace(/^\s+|\s+$/g, '')
      // Convert named example import to default
      .replace(/import {\s?(\w+)\s?} from '\.\/examples/g, "import $1 from './examples");

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
glob(ckrFolder + '/**/*.mdx', {}, (err, files) => {
  const mdxDestinations = files.map(file => {
    return path.join(
      distFolder,
      'mdx',
      file
        .replace(path.join(ckrFolder, '../'), '')
        .replace('/stories', '')
        .replace('.stories', '')
    );
  });

  mdxDestinations.forEach((destFile, index) => {
    const sourceMdx = files[index];
    const sourceExamplesDir = path.join(path.dirname(sourceMdx), 'examples');
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
          fs.readFile(example, 'utf8', (err, data) => {
            fs.writeFileSync(
              example,
              data.replace(/export const (\w)* =/g, 'export default'), // Convert named export to default export
              'utf8'
            );
          });
        });
      });
    }
  });
});
