#!/usr/bin/env node
'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const terser = require('rollup-plugin-terser').terser;

function minFilename(filename) {
  const lastPeriod = filename.lastIndexOf('.');
  return `${filename.substring(0, lastPeriod)}.min${filename.substring(lastPeriod)}`;
}

function makeBundle(inputOptions, outputOptions) {
  rollup.rollup(inputOptions).then(bundle => bundle.write(outputOptions));
}

const cwd = process.cwd();
const sourceFile = path.join(cwd, process.argv[2]);
const outputDir = path.join(cwd, 'dist');
const outputFile = path.join(outputDir, path.basename(sourceFile));

// Make the build directory if it doesn't exist
mkdirp.sync(outputDir);

// Standard bundle
const inputOptions = {
  input: sourceFile,
  plugins: [resolve(), commonjs()],
};

const outputOptions = {
  file: outputFile,
  format: 'umd',
  name: path.basename(sourceFile),
  sourcemap: true,
};

// Minified bundle
const minInputOptions = {
  ...inputOptions,
  plugins: inputOptions.plugins.concat([terser()]),
};

const minOutputOptions = {
  ...outputOptions,
  file: minFilename(outputFile),
  sourcemap: false,
};

makeBundle(inputOptions, outputOptions);
makeBundle(minInputOptions, minOutputOptions);
