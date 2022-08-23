import React from 'react';
import {Title as TitleComponent} from '@workday/canvas-kit-react/text';

export const Title = () => (
  <>
    <TitleComponent as="h1" size="large">
      Large Title Text
    </TitleComponent>
    <TitleComponent as="h2" size="medium">
      Medium Title Text
    </TitleComponent>
    <TitleComponent as="h3" size="small">
      Small Title Text
    </TitleComponent>
  </>
);
