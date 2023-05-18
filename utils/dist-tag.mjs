#!/usr/bin/env node
// @ts-check
'use strict';

import {promisify} from 'util';
import * as childProcess from 'child_process';
const exec = promisify(childProcess.exec);

const {DIST_TAG = '', VERSION} = process.env;

/**
 * @description
 * A util to add and update dist tags from packages
 *
 * @param {Object[]} packages - an array of package names
 * @param {string} version - the package version to be tagged
 * @param {string} distTag - the dist tag name to associate with the version
 *
 * @example
 * ```ts
 * const packages = ['@workday/canvas-kit-react'];
 * updatePackageDistTags(packages, '10.4.2' 'canary', '000000');
 * ```
 *
 */
export function updatePackageDistTags(packages = [], version = '', distTag = '') {
  packages.forEach(({name}) => {
    console.log(`Updating ${distTag} tag on ${name} to ${version}`);
    exec(`npm dist-tag add "${name}@${version}" ${distTag}`, (error, stdout) => {
      if (error) {
        console.warn(error.message);
      }
      console.log(stdout);
    });
  });
}

/**
 * @description
 * A util to remove unwanted dist tags from packages
 *
 * @param {Object[]} packages - an array of package names
 * @param {string} distTag - the dist tag name to be removed
 *
 * @example
 * ```ts
 * const packages = ['@workday/canvas-kit-react'];
 * removePackageDistTags(packages, 'canary', '000000');
 * ```
 *
 */
export function removePackageDistTags(packages, distTag) {
  packages.forEach(({name}) => {
    console.log(`Removing ${distTag} tag for ${name}`);
    exec(`npm dist-tag remove "${name}" ${distTag}`, (error, stdout) => {
      if (error) {
        console.warn(error.message);
      }
      console.log(stdout);
    });
  });
}

exec('lerna ls --json')
  .then(({stdout}) => {
    const packages = JSON.parse(stdout);
    if (!VERSION || !DIST_TAG) {
      console.log('Please review your inputs. Version and dist tag are required');
      process.exit(1);
    }

    updatePackageDistTags(packages, VERSION, DIST_TAG);
  })
  .catch(err => {
    console.error(err);

    process.exit(1);
  });
