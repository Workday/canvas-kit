import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
export const IconAttention = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon variant={'attention'} icon={undefined} />
      <InformationHighlight.Heading> Booking Info </InformationHighlight.Heading>
      <InformationHighlight.Body> No longer taking new appointments </InformationHighlight.Body>
    </InformationHighlight>
  );
};
