import React from 'react';
import {TypeHeadingLevel} from '@workday/canvas-kit-preview-react/text';

export const TypeLevelHeading = () => (
  <>
    <TypeHeadingLevel as="h4" size="large">
      Large Heading Text
    </TypeHeadingLevel>
    <TypeHeadingLevel as="h5" size="medium">
      Medium Heading Text
    </TypeHeadingLevel>
    <TypeHeadingLevel as="h6" size="small">
      Small Heading Text
    </TypeHeadingLevel>
  </>
);
