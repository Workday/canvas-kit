/// <reference path="../../../../typings.d.ts" />

import React from 'react';

import withReadme from 'storybook-readme/with-readme';

import README from '../README.md';

export default {
  title: 'Components|Popups/Popup Stack',
  decorators: [withReadme(README)],
};

export const Default = () => {
  return (
    <div>
      <button className="wdc-btn" id="open-button">
        Create new popup stack item
      </button>
    </div>
  );
};
