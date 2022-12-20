import React from 'react';
import {ExportedSymbol} from '../docgen/docTypes';

export const GithubUrl = React.createContext('https://github.com/Workday/canvas-kit/');
export const GithubBranch = React.createContext('master');
export const StorybookUrl = React.createContext(
  typeof location !== 'undefined' && location.pathname.indexOf('/canvas-kit/') === 0
    ? '/canvas-kit/'
    : '/'
);

// Don't screw up our webpack replace, Prettier!
// prettier-ignore
export const docs: ExportedSymbol[] = [/* DOCS_REPLACE_BY_WEBPACK */];
