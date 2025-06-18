import React from 'react';

import {ExportedSymbol, Value} from '../docgen/docTypes';
import docsObject from './docs.json';

export const GithubUrl = React.createContext('https://github.com/Workday/canvas-kit/');
export const GithubBranch = React.createContext('master');
export const StorybookUrl = React.createContext(
  typeof location !== 'undefined' && location.pathname.indexOf('/canvas-kit/') === 0
    ? '/canvas-kit/'
    : '/'
);

export const docs =
  (typeof window !== 'undefined' && ((window as any).__docs as ExportedSymbol<Value>[])) ||
  docsObject;

export function getDoc(name: string, fileName?: string) {
  return docs.find(d => {
    return d.name === name && (fileName ? d.fileName.includes(fileName) : true);
  });
}

type Unsubscribe = () => void;
type CallbackFn = (doc: ExportedSymbol) => void;
type Subscription = {
  name: string;
  fileName?: string;
  callback: CallbackFn;
};

const subscriptions: Subscription[] = [];

export function subscribe(listener: Subscription): Unsubscribe {
  subscriptions.push(listener);

  return () => {
    const index = subscriptions.findIndex(s => s === listener);
    if (index > 0) {
      subscriptions.splice(index, 1);
    }
  };
}

export function updateDocs(updatedDocs: ExportedSymbol[]) {
  console.log('updating docs', updateDocs, subscriptions.length);

  updatedDocs.forEach(doc => {
    const foundIndex = docs.findIndex(d => d.fileName === doc.fileName && d.name === doc.name);
    if (foundIndex !== -1) {
      // we need to replace the doc with updates
      subscriptions.forEach(s => {
        if (s.name === doc.name && s.fileName ? s.fileName === doc.fileName : true) {
          s.callback(doc);
        }
      });
      docs[foundIndex] = doc;
    } else {
      docs.push(doc);
    }
  });
}

// Catch dev-mode docs
if ((import.meta as any).hot) {
  (import.meta as any).hot.on('docs:update', (data: ExportedSymbol[]) => {
    console.log('hot reload updating docs', data);
    updateDocs(data);
  });
}

if (typeof window !== 'undefined') {
  (window as any).__updateDocs = updateDocs;
  (window as any).docs = docs;
}
