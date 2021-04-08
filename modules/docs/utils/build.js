const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const args = process.argv.slice(2);
const inputPath = path.resolve(args[0]);
const distFolder = path.join(__dirname, '../dist');

const buildFile = (inFile, outFile) => {
  fs.readFile(inFile, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    const result = data
      .replace(/import {.*} from '@storybook\/addon-docs\/blocks';/g, '')
      .replace(/<Meta.* \/>/g, '')
      .replace(/^\s+|\s+$/g, '');

    fs.writeFile(outFile, result, 'utf8', err => {
      if (err) return console.error(err);
    });
  });
};

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

const build = (source, target) => {
  var files = [];

  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(file => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        build(curSource, targetFolder);
      } else {
        buildFile(curSource, path.join(targetFolder, path.basename(curSource)));
      }
    });
  }
};

if (!inputPath) {
  console.error('You must supply a valid path');
  process.exit(1);
}

build(inputPath, distFolder);
