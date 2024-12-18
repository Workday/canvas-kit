import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {chartIcon} from '@workday/canvas-system-icons-web';
export const IconAttentionLow = () => {
  return (
    <InformationHighlight variant={'attention'} emphasis={'low'}>
      <InformationHighlight.Icon icon={chartIcon} />
      <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        A custom Icon can be added to the Information Highlight component
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
export const IconAttentionHigh = () => {
  return (
    <InformationHighlight variant={'attention'} emphasis={'high'}>
      <InformationHighlight.Icon icon={chartIcon} />
      <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        A custom Icon can be added to the Information Highlight component
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
