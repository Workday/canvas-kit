import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {chartIcon} from '@workday/canvas-system-icons-web';

export const IconCustom = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon variant={undefined} icon={chartIcon} />
      <InformationHighlight.Heading> Booking Info </InformationHighlight.Heading>
      <InformationHighlight.Body> No longer taking new appointments </InformationHighlight.Body>
    </InformationHighlight>
  );
};
