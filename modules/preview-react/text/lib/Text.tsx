import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType, styled, useConstant} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {colorStyle} from './utils/colorStyle';
import {fontStyles} from './utils/fontStyles';
import {lineStyles} from './utils/lineStyles';
import {textStyles} from './utils/textStyles';
import {TextProps} from './utils/types';

const omittedProps = [
  'color',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textDecoration',
  'textTransform',
  'textShadow',
  'whiteSpace',
  'wordBreak',
];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
};

const StyledTextComponent = styled('p', {shouldForwardProp})<StyledType & TextProps>(
  colorStyle,
  fontStyles,
  lineStyles,
  textStyles,
  ({variant}) => variant && type.variants[variant],
  ({isTruncated}) =>
    isTruncated && {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }
);

export const Text = createComponent('p')({
  displayName: 'Text',
  Component: ({children, ...elemProps}: TextProps, ref, Element) => {
    const TextComponent = useConstant(() => StyledTextComponent);

    return (
      <TextComponent ref={ref} as={Element} {...elemProps}>
        {children}
      </TextComponent>
    );
  },
});
