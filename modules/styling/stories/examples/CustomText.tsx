import React from 'react';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {system} from '@workday/canvas-tokens-web';
import {textStencil} from '@workday/canvas-kit-react/text';

const h1Stencil = createStencil({
  extends: textStencil,
  base: {
    marginBottom: system.space.x6,
    color: system.color.text.primary.default,
  },
  defaultModifiers: {typeLevel: 'title.medium'},
});

export const CustomText = ({variant, ...elemProps}) => (
  // variant extended from textStencil and can be error, hint or inverse
  <h1 {...handleCsProp(elemProps, h1Stencil({variant}))}>My Custom H1 Title</h1>
);
