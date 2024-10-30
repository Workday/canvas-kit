import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
export const AttentionLow = () => {
  return (
    <InformationHighlight variant={'attention'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Select Complete Module </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        If you exit instead of selecting complete module progress will not be saved, and progress
        will show as incomplete/failed{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
