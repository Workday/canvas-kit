import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
export const Attention = () => {
  return (
    <InformationHighlight variant={'attention'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Attention! Highlight Something </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
export const AttentionHigh = () => {
  return (
    <InformationHighlight variant={'attention'} emphasis={'high'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Attention! Highlight Something </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
