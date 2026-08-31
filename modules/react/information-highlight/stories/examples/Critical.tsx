import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const Critical = () => {
  return (
    <Flex cs={{gap: system.gap.sm, flexDirection: 'column'}}>
      <InformationHighlight variant={'critical'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Attention! Highlight Something</InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will reroute you back to this page.
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'critical'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading>Attention! Highlight Something</InformationHighlight.Heading>
        <InformationHighlight.Body>
          If you select the link below it will reroute you back to this page.
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">View the Docs</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
