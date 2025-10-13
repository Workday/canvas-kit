import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';

export const Basic = () => {
  return (
    <InformationHighlight>
      <InformationHighlight.Icon />
      <InformationHighlight.Heading>Information Highlight</InformationHighlight.Heading>
      <InformationHighlight.Body>
        This is what an information highlight would look like with with the default settings and
        every field filled in
      </InformationHighlight.Body>
      <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
    </InformationHighlight>
  );
};
