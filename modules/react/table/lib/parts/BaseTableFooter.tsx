import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-react/layout';

export const BaseTableFooter = createComponent('tfoot')({
  displayName: 'Table.Footer',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...elemProps}>
        {children}
      </Element>
    );
  },
});
