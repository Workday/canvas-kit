import * as React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';

export const PopupBody = createComponent('div')({
  displayName: 'Popup.Body',
  Component: (props: ExtractProps<typeof Card.Body, never>, ref) => {
    return <Card.Body overflowY="auto" {...props} />;
  },
});
