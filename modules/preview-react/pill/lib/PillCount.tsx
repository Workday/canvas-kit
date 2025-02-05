import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface PillCountProps extends FlexProps {}

export const pillCountStencil = createStencil({
  base: {
    borderTopLeftRadius: system.shape.zero,
    borderTopRightRadius: system.shape.x1,
    borderBottomLeftRadius: system.shape.zero,
    borderBottomRightRadius: system.shape.x1,
    borderTop: `${px2rem(1)} solid  ${cssVar(system.color.border.transparent)}`,
    borderBottom: `${px2rem(1)} solid ${cssVar(system.color.border.transparent)}`,
    borderRight: `${px2rem(1)} solid ${cssVar(system.color.border.transparent)}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: px2rem(22),
    width: px2rem(22),
    padding: `0 ${cssVar(system.space.x1)}`,
    marginInlineEnd: calc.negate(system.space.x2),
    marginInlineStart: system.space.x1,
    backgroundColor: system.color.bg.alt.stronger,
    flex: '0 0 auto',
  },
});

export const PillCount = createComponent('span')({
  displayName: 'Pill.Count',
  Component: ({children, backgroundColor, ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <Element
        data-part="pill-count"
        ref={ref}
        {...mergeStyles(elemProps, pillCountStencil({backgroundColor}))}
      >
        {children}
      </Element>
    );
  },
});
