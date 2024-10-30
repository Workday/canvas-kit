import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
export const InformationalHigh = () => {
  return (
    <InformationHighlight variant={'informational'} emphasis={'high'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Layouts </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        Layouts can be used to draw important information to the clients attention{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
