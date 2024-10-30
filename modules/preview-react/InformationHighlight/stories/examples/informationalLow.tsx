import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
export const InformationalLow = () => {
  return (
    <InformationHighlight variant={'informational'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Information Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link
        as={ExternalHyperlink}
        href="https://workday.github.io/canvas-kit/?path=/docs/preview-information-highlight--docs"
      >
        View the Docs
      </InformationHighlight.Link>
    </InformationHighlight>
  );
};
