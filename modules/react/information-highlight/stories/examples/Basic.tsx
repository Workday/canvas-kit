import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';

export const Basic = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon />
      <InformationHighlight.Heading>Information Highlight</InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        This is what an information highlight looks like with the default `variant` and `emphasis`
        and every field filled in{' '}
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
