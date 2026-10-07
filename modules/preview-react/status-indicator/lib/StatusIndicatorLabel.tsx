import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {TextProps, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface StatusIndicatorLabelProps extends TextProps {}

export const statusIndicatorLabelStencil = createStencil({
  extends: textStencil,
  base: {
    fontWeight: system.fontWeight.medium,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    color: 'inherit',
  },
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
