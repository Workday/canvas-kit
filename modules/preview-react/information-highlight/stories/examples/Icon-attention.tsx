import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
export const IconAttention = () => {
  return (
    <InformationHighlight variant={'attention'}>
      <InformationHighlight.Icon variant={undefined} icon={undefined} />
      <InformationHighlight.Heading> Select Complete Module </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        If you exit instead of selecting complete module progress will not be saved, and progress
        will show as incomplete/failed{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
