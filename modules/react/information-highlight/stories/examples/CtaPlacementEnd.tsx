import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const contentTextStyles = createStyles({
  margin: 0,
});

export const CtaPlacementEnd = () => {
  return (
    <Flex cs={{gap: system.gap.sm, flexDirection: 'column'}}>
      <InformationHighlight variant="informational" ctaPlacement="end">
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Informational Highlight</InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            With `ctaPlacement="end"`, the link renders beside the content and is vertically
            centered on the right.
          </p>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant="caution" emphasis="high" ctaPlacement="end">
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Caution Highlight</InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            CTA placement works across variants and emphasis levels.
          </p>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
