/// <reference path="../../../../../typings.d.ts" />
import React, {useEffect} from 'react';
import withReadme from 'storybook-readme/with-readme';

import {PopupStack} from '@workday/canvas-kit-labs-react-popup-stack';
import README from '../README.md';

export default {
  title: 'Labs|Popups/Stack Manager',
  decorators: [withReadme(README)],
};

export const MixedPopupTypes = () => {
  return <div />;
};
