import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/InformationHighlight';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <InformationHighlight variant={'attention'} emphasis={'high'}>
        <InformationHighlight.Icon icon={undefined} />
        <InformationHighlight.Heading> انتباه! من اليمين إلى اليسار </InformationHighlight.Heading>
        <InformationHighlight.Body>نحن ندعم اللغات من اليمين إلى اليسار</InformationHighlight.Body>
        <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
      </InformationHighlight>
    </CanvasProvider>
  );
};
