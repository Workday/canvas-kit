/// <reference path="../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {PopupStack} from '@workday/canvas-kit-popup-stack';
import README from '../README.md';

export default {
  title: 'Labs|Popups/Stack Manager',
  decorators: [withReadme(README)],
};

export const MixedPopupTypes = () => {
  return <div />;
};
