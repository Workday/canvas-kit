import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const contentTextStyles = createStyles({
  margin: 0,
});

const contentListStyles = createStyles({
  listStyle: 'inside',
  marginInlineStart: 0,
  marginBlockStart: system.space.x2,
  marginBlockEnd: 0,
  padding: 0,
});

export const Informational = () => {
  return (
    <Flex flexDirection={'column'} gap={system.space.x2}>
      <InformationHighlight variant={'informational'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            This is a low-emphasis, informational callout. You should use this for nice-to-have
            information, such as:
          </p>
          <ul className={contentListStyles}>
            <li>tangential information or context</li>
            <li>related features</li>
            <li>additional opportunities</li>
          </ul>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
      <InformationHighlight variant={'informational'} emphasis={'high'}>
        <InformationHighlight.Icon />
        <InformationHighlight.Heading> Informational Highlight </InformationHighlight.Heading>
        <InformationHighlight.Body>
          <p className={contentTextStyles}>
            This is a high-emphasis, informational callout. You should use this for nice-to-have
            information, such as:
          </p>
          <ul className={contentListStyles}>
            <li>tangential information or context</li>
            <li>related features</li>
            <li>additional opportunities</li>
          </ul>
        </InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">Learn More</InformationHighlight.Link>
      </InformationHighlight>
    </Flex>
  );
};
