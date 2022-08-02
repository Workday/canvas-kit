import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-react/text';

/**
 * Props interface for type level specific component:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'tokenLevel'> {
  size: 'large' | 'medium' | 'small';
}

export const Subtext = createComponent('p')({
  displayName: 'Subtext',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const tokenLevel = `subtext.${size}` as TextProps['tokenLevel'];
    return <Text ref={ref} as={Element} tokenLevel={tokenLevel} {...elemProps} />;
  },
});

export const BodyText = createComponent('p')({
  displayName: 'BodyText',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const tokenLevel = `body.${size}` as TextProps['tokenLevel'];
    return <Text ref={ref} as={Element} tokenLevel={tokenLevel} {...elemProps} />;
  },
});

export const Heading = createComponent('h2')({
  displayName: 'Heading',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const tokenLevel = `heading.${size}` as TextProps['tokenLevel'];
    return <Text ref={ref} as={Element} tokenLevel={tokenLevel} {...elemProps} />;
  },
});

export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const tokenLevel = `title.${size}` as TextProps['tokenLevel'];
    return <Text ref={ref} as={Element} tokenLevel={tokenLevel} {...elemProps} />;
  },
});
