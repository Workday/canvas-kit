#!/usr/bin/env node
'use strict';

const path = require('path');
const pkg = require(path.resolve(__dirname, '../lerna.json'));
console.log(pkg.version);
