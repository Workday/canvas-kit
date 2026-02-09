import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface PillCountProps extends FlexProps {}

export const pillCountStencil = createStencil({
  vars: {
    backgroundColor: '',
    borderColor: '',
  },
  base: ({backgroundColor, borderColor}) => ({
    borderStartStartRadius: cssVar(system.shape.none, system.shape.zero),
    borderStartEndRadius: cssVar(system.shape.sm, system.shape.x1),
    borderEndStartRadius: cssVar(system.shape.none, system.shape.zero),
    borderEndEndRadius: cssVar(system.shape.sm, system.shape.x1),
    borderWidth: 0,
    borderInlineStartWidth: cssVar(system.shape.none, system.space.zero),
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: system.size.xs,
    width: cssVar(system.size.xs, system.space.x6),
    padding: `${cssVar(system.padding.none, system.space.zero)} ${cssVar(system.padding.xxs, system.space.x1)}`,
    // Using the `padding` token here as we don't have a `margin` token
    marginInlineEnd: calc.negate(cssVar(system.padding.sm, system.space.x3)),
    marginInlineStart: cssVar(system.padding.xxs, system.space.x1),
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.stronger),
    flex: '0 0 auto',
  }),
});

export const PillCount = createComponent('span')({
  displayName: 'Pill.Count',
  Component: ({children, ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, pillCountStencil())}>
        {children}
      </Element>
    );
  },
});
