import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {system} from '@workday/canvas-tokens-web';

export const Caution = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'caution'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the button below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Button href="#hyperlink">View the Docs</InformationHighlight.Button>
      </InformationHighlight>
      <InformationHighlight variant={'caution'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the button below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Button href="#hyperlink">View the Docs</InformationHighlight.Button>
      </InformationHighlight>
    </Flex>
  );
};
