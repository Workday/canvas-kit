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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartStartRadius: cssVar(system.shape.none, system.shape.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartEndRadius: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndStartRadius: cssVar(system.shape.none, system.shape.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndEndRadius: cssVar(system.shape.sm, system.shape.x1),
    borderWidth: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderInlineStartWidth: cssVar(system.shape.none, system.space.zero),
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: system.size.xs,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.size.xs, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.none, system.space.zero)} ${cssVar(system.padding.xxs, system.space.x1)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    // Using the `padding` token here as we don't have a `margin` token
    marginInlineEnd: calc.negate(cssVar(system.padding.sm, system.space.x3)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginInlineStart: cssVar(system.padding.xxs, system.space.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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
