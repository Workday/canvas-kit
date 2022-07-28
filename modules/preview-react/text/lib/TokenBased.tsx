import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-preview-react/text';

/**
 * Props interface for type level specific component:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'asToken'> {
  size: 'large' | 'medium' | 'small';
}

export const Subtext = createComponent('p')({
  displayName: 'Subtext',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const asToken = `subtext.${size}` as TextProps['asToken'];
    return <Text ref={ref} as={Element} asToken={asToken} {...elemProps} />;
  },
});

export const BodyText = createComponent('p')({
  displayName: 'BodyText',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const asToken = `body.${size}` as TextProps['asToken'];
    return <Text ref={ref} as={Element} asToken={asToken} {...elemProps} />;
  },
});

export const Heading = createComponent('h2')({
  displayName: 'Heading',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const asToken = `heading.${size}` as TextProps['asToken'];
    return <Text ref={ref} as={Element} asToken={asToken} {...elemProps} />;
  },
});

export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const asToken = `title.${size}` as TextProps['asToken'];
    return <Text ref={ref} as={Element} asToken={asToken} {...elemProps} />;
  },
});
