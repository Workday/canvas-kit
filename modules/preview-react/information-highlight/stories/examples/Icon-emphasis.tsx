import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {infoIcon} from '@workday/canvas-system-icons-web';
export const IconEmphasis = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon variant={'emphasis'} icon={infoIcon} />
      <InformationHighlight.Heading> Booking Info </InformationHighlight.Heading>
      <InformationHighlight.Body> No longer taking new appointments </InformationHighlight.Body>
    </InformationHighlight>
  );
};
