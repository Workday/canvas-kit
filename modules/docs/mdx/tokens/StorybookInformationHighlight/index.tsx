import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {Unstyled} from '@storybook/blocks';

export const StorybookInformationHighlight = ({
  variant,
  emphasis,
  title,
  description,
  link,
  linkText,
  isExternal,
}: any) => {
  return (
    <Unstyled>
      <InformationHighlight variant={variant} emphasis={emphasis}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>{title}</InformationHighlight.Heading>
        <InformationHighlight.Body>{description}</InformationHighlight.Body>
        <InformationHighlight.Link as={isExternal && ExternalHyperlink} href={link}>
          {linkText}
        </InformationHighlight.Link>
      </InformationHighlight>
    </Unstyled>
  );
};
