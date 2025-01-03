import * as React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStyles, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {Heading, TypeLevelProps} from '@workday/canvas-kit-react/text';

const headingStyles = createStyles({
  ...system.type.body.small,
  color: base.blackPepper400,
  gridColumn: '2',
  fontWeight: system.fontWeight.bold,
  marginTop: system.space.zero,
  marginBottom: system.space.zero,
});

export interface InformationHighlightHeadingProps
  extends Omit<Partial<ExtractProps<typeof Heading, never>>, 'size'> {
  size?: TypeLevelProps['size'];
}

export const InformationHighlightHeading = createComponent('h3')({
  displayName: 'Heading',
  Component: ({size = 'small', ...elemProps}: InformationHighlightHeadingProps, ref, Element) => {
    return (
      <Heading as={Element} ref={ref} size={size} {...handleCsProp(elemProps, headingStyles)} />
    );
  },
});
