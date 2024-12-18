import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';

export const Basic = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon variant={undefined} icon={undefined} />
      <InformationHighlight.Heading>Information Highlight</InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        This is what an information highlight would look like with with the default settings and
        every field filled in{' '}
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
