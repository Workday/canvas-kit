import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
export const Informational = () => {
  return (
    <InformationHighlight variant={'informational'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
export const InformationalHigh = () => {
  return (
    <InformationHighlight variant={'informational'} emphasis={'high'}>
      <InformationHighlight.Icon icon={undefined} />
      <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
      <InformationHighlight.Body>
        If you select the link below it will just reroute you back to this page
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
