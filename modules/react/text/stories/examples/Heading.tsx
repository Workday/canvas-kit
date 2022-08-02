import React from 'react';
import {Heading as HeadingComponent} from '@workday/canvas-kit-react/text';

export const Heading = () => (
  <>
    <HeadingComponent as="h4" size="large">
      Large Heading Text
    </HeadingComponent>
    <HeadingComponent as="h5" size="medium">
      Medium Heading Text
    </HeadingComponent>
    <HeadingComponent as="h6" size="small">
      Small Heading Text
    </HeadingComponent>
  </>
);
