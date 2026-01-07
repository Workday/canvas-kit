import React from 'react';
import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {chartIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const IconCritical = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'critical'} emphasis={'low'}>
        <InformationHighlight.Icon icon={chartIcon} />
        <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          A custom Icon can be added to the Information Highlight component
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'critical'} emphasis={'high'}>
        <InformationHighlight.Icon icon={chartIcon} />
        <InformationHighlight.Heading> Attention! Custom Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          A custom Icon can be added to the Information Highlight component
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
