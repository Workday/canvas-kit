import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {chartIcon} from '@workday/canvas-system-icons-web';
export const IconAttentionHigh = () => {
  return (
    <InformationHighlight variant={'attention'} emphasis={'high'}>
      <InformationHighlight.Icon icon={chartIcon} />
      <InformationHighlight.Heading> Information Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        A custom Icon can be added to the Information Highlight component
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
