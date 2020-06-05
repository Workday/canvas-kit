// CSS stories template

module.exports = (storyPath, name, titleCaseName) => `
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import README from '../README.md';
import '../index.scss';

export default {
  title: '${storyPath}',
  decorators: [withReadme(README)],
};

export const Default = () => <div className="wdc-${name}">${titleCaseName}</div>;
`;
