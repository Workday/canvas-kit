import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';

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
      <InformationHighlight.Link
        as={ExternalHyperlink}
        href="https://workday.github.io/canvas-kit/?path=/docs/preview-information-highlight--docs"
      >
        View the Docs
      </InformationHighlight.Link>
    </InformationHighlight>
  );
};
