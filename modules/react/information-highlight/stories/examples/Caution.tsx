import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const Caution = () => {
  return (
    <Flex cs={{gap: system.gap.sm, flexDirection: 'column'}}>
      <InformationHighlight variant={'caution'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'caution'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Caution: Highlight Something </InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below, nothing will happen
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
