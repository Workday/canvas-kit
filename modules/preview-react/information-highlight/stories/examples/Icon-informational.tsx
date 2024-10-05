import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {infoIcon} from '@workday/canvas-system-icons-web';
export const IconInformational = () => {
  return (
    <InformationHighlight variant={'informational'}>
      <InformationHighlight.Icon variant={undefined} icon={undefined} />
      <InformationHighlight.Heading> Layouts </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        Layouts can be used to draw important information to the clients attention{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
