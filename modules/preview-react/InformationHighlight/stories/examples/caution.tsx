import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
export const Caution = () => {
  return (
    <InformationHighlight variant={'caution'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
export const CautionHigh = () => {
  return (
    <InformationHighlight variant={'caution'} emphasis={'high'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
