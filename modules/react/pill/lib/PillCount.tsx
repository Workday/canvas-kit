import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface PillCountProps extends FlexProps {}

export const pillCountStencil = createStencil({
  vars: {
    backgroundColor: '',
    borderColor: '',
  },
  base: ({backgroundColor, borderColor}) => ({
    borderStartStartRadius: 0,
    borderStartEndRadius: system.shape.sm,
    borderEndStartRadius: 0,
    borderEndEndRadius: system.shape.sm,
    borderWidth: 0,
    borderInlineStartWidth: 0,
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: system.size.xs,
    width: system.size.xs,
    padding: `0 ${system.padding.xxs}`,
    // Using the `padding` token here as we don't have a `margin` token
    marginInlineEnd: calc.negate(system.gap.sm),
    marginInlineStart: system.gap.xs,
    backgroundColor: cssVar(
      backgroundColor,
      cssVar(system.color.surface.alt.strong, system.color.bg.alt.stronger)
    ),
    flex: '0 0 auto',
  }),
});

export const PillCount = createComponent('span')({
  displayName: 'Pill.Count',
  Component: ({children, ...elemProps}: PillCountProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, pillCountStencil())}>
        {children}
      </Element>
    );
  },
});
