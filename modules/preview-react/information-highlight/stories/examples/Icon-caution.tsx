import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
export const IconCaution = () => {
  return (
    <InformationHighlight variant={'caution'}>
      <InformationHighlight.Icon variant={undefined} icon={undefined} />
      <InformationHighlight.Heading> Select Complete Module </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        If you exit instead of selecting complete module progress will not be saved, and progress
        will show as incomplete/failed.
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
