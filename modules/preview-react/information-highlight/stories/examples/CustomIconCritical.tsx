import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {chartIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export const IconCritical = () => {
  return (
    <Flex cs={{gap: cssVar(system.space.x2), flexDirection: 'column'}}>
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
