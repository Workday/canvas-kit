import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {TextProps, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface StatusIndicatorLabelProps extends TextProps {}

export const statusIndicatorLabelStencil = createStencil({
  extends: textStencil,
  vars: {
    /**
     * Text shadow for the label. Only set by `StatusIndicator`'s `transparent` variant, which
     * needs the extra legibility when overlaid on imagery/video.
     */
    textShadow: '',
  },
  base: ({textShadow}) => ({
    fontWeight: system.fontWeight.medium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    color: 'inherit',
    textShadow: cssVar(textShadow, 'none'),
  }),
  defaultModifiers: {typeLevel: 'subtext.medium'},
});

export const StatusIndicatorLabel = createComponent('span')({
  displayName: 'StatusIndicator.Label',
  Component: ({children, typeLevel, ...elemProps}: StatusIndicatorLabelProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, statusIndicatorLabelStencil({typeLevel}))}>
        {children}
      </Element>
    );
  },
});
