import React from 'react';
import {ExportedSymbol, Value} from '../docgen/docTypes';

export const GithubUrl = React.createContext('https://github.com/Workday/canvas-kit/');
export const GithubBranch = React.createContext('master');
export const StorybookUrl = React.createContext(
  typeof location !== 'undefined' && location.pathname.indexOf('/canvas-kit/') === 0
    ? '/canvas-kit/'
    : '/'
);

export const docs =
  (typeof window !== 'undefined' && ((window as any).__docs as ExportedSymbol<Value>[])) ||
  [
    /* DOCS_REPLACED_BY_BUILD */
  ];

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
  updatedDocs.forEach(doc => {
    const foundIndex = docs.findIndex(d => d.fileName === doc.fileName && d.name === doc.name);
    if (foundIndex !== -1) {
      console.log('replacing', docs[foundIndex].name);
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

if (typeof window !== 'undefined') {
  (window as any).__updateDocs = updateDocs;
}
