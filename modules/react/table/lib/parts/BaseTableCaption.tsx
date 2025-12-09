import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';

export const baseTableCaptionStencil = createStencil({
  base: {
    padding: `${forwardFitTokens.system.padding.xs} ${forwardFitTokens.system.padding.md}`,
  },
});

export const BaseTableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableCaptionStencil())}>
        {children}
      </Element>
    );
  },
});
