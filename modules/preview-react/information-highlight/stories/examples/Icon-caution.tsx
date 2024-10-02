import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
export const IconCaution = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon variant={'caution'} icon={undefined} />
      <InformationHighlight.Heading> Booking Info </InformationHighlight.Heading>
      <InformationHighlight.Body> No longer taking new appointments </InformationHighlight.Body>
    </InformationHighlight>
  );
};
