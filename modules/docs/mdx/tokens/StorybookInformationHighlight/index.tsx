import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';

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
    <InformationHighlight className="sb-unstyled" variant={variant} emphasis={emphasis}>
      <InformationHighlight.Icon />
      <InformationHighlight.Heading>{title}</InformationHighlight.Heading>
      <InformationHighlight.Body>{description}</InformationHighlight.Body>
      <InformationHighlight.Link as={isExternal && ExternalHyperlink} href={link}>
        {linkText}
      </InformationHighlight.Link>
    </InformationHighlight>
  );
};
