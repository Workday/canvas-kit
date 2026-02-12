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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartStartRadius: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartEndRadius: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndStartRadius: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndEndRadius: cssVar(system.shape.sm, system.shape.x1),
    borderWidth: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderInlineStartWidth: 0,
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.xs, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.size.xs, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `0 ${cssVar(system.padding.xxs, system.space.x1)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    // Using the `padding` token here as we don't have a `margin` token
    marginInlineEnd: calc.negate(cssVar(system.gap.sm, system.space.x3)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginInlineStart: cssVar(system.gap.xs, system.space.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
