import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-react/text';

/**
 * Props interface for type level specific component:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'typeLevel'> {
  size: 'large' | 'medium' | 'small';
}

export const Subtext = createComponent('p')({
  displayName: 'Subtext',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `subtext.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

export const BodyText = createComponent('p')({
  displayName: 'BodyText',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `body.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

export const Heading = createComponent('h2')({
  displayName: 'Heading',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `heading.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `title.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});
