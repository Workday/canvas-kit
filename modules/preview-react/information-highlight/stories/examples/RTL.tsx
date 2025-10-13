import {Flex} from '@workday/canvas-kit-react/layout';
import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };

  return (
    <Flex cs={{gap: cssVar(system.space.x2), flexDirection: 'column'}}>
      <CanvasProvider theme={theme}>
        <InformationHighlight variant={'caution'} emphasis={'low'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
      <CanvasProvider theme={theme}>
        <InformationHighlight variant={'caution'} emphasis={'high'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
    </Flex>
  );
};
