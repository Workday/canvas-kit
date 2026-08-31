import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCaptionStencil = createStencil({
  base: {
    padding: `${system.legacy.padding.xs} ${system.legacy.padding.md}`,
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
