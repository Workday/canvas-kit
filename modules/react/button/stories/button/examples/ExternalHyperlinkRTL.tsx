import {ExternalHyperlink} from '@workday/canvas-kit-react/button';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const ExternalLinkRTL = () => (
  <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
    <ExternalHyperlink href="https://workday.com" iconLabel="Opens link in new window">
      השועל החום המהיר קופץ מעל הכלב העצל
    </ExternalHyperlink>
  </CanvasProvider>
);
