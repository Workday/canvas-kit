import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Body = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Body>
        {' '}
        Booking is not avaliable from this page{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
