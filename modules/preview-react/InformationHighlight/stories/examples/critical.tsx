import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {system} from '@workday/canvas-tokens-web';

export const Critical = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      The Critical Variant “must know” information that could otherwise cause failure if the user is
      unaware
      <InformationHighlight variant={'critical'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading>
          {' '}
          Attention! Highlight Something{' '}
        </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'critical'} emphasis={'high'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading>
          {' '}
          Attention! Highlight Something{' '}
        </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will just reroute you back to this page
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
