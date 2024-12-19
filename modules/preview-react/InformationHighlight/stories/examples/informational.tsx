import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {system} from '@workday/canvas-tokens-web';

export const Informational = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      The Informational Variant is for “nice to have” information, such as related features or
      opportunities.
      <InformationHighlight variant={'informational'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'informational'} emphasis={'high'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
