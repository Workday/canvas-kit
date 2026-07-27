import * as React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const CtaPlacementEnd = () => {
  const [containerWidth, setContainerWidth] = React.useState('100%');

  return (
    <div>
      <Box cs={{width: containerWidth, marginBlockEnd: system.gap.lg}}>
        <Flex cs={{gap: system.gap.sm, flexDirection: 'column'}}>
          <InformationHighlight variant="informational" ctaPlacement="end">
            <InformationHighlight.Icon />
            <InformationHighlight.Heading>Informational Highlight</InformationHighlight.Heading>
            <InformationHighlight.Body>
              <Text cs={{margin: 0}}>
                With `ctaPlacement="end"`, the link renders beside the content, vertically centered
                at the inline end. DOM and keyboard tab order stay heading, body, then link.
              </Text>
            </InformationHighlight.Body>
            <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
          </InformationHighlight>
          <InformationHighlight variant="caution" emphasis="high" ctaPlacement="end">
            <InformationHighlight.Icon />
            <InformationHighlight.Heading>Caution Highlight</InformationHighlight.Heading>
            <InformationHighlight.Body>
              <Text cs={{margin: 0}}>CTA placement works across variants and emphasis levels.</Text>
            </InformationHighlight.Body>
            <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
          </InformationHighlight>
          <InformationHighlight variant="informational" ctaPlacement="end">
            <InformationHighlight.Icon />
            <InformationHighlight.Heading>Long link label</InformationHighlight.Heading>
            <InformationHighlight.Body>
              <Text cs={{margin: 0}}>
                In narrow layouts or with longer link labels, the link appears below the body,
                aligned to the inline end.
              </Text>
            </InformationHighlight.Body>
            <InformationHighlight.Link href="#hyperlink">
              View supplementary documentation and configuration information
            </InformationHighlight.Link>
          </InformationHighlight>
        </Flex>
      </Box>
      <h4>Change Information Highlight container size</h4>
      <SegmentedControl initialValue="100%" onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List
          aria-label="container width control"
          cs={{marginBlockEnd: system.gap.lg}}
        >
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="480px">480px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="320px">320px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="250px">250px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <p>Selected: {containerWidth}</p>
    </div>
  );
};
