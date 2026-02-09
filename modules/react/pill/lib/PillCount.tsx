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
    borderStartStartRadius: system.shape.zero,
    borderStartEndRadius: system.shape.x1,
    borderEndStartRadius: system.shape.zero,
    borderEndEndRadius: system.shape.x1,
    borderWidth: 0,
    borderInlineStartWidth: system.space.zero,
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: system.size.xs,
    width: system.space.x6,
    padding: `${system.space.zero} ${system.space.x1}`,
    marginInlineEnd: calc.negate(system.space.x3),
    marginInlineStart: system.space.x1,
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.stronger),
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
