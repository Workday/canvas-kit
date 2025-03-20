import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-react/layout';

export const BaseTableRow = createComponent('tr')({
  displayName: 'Table.Row',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...elemProps}>
        {children}
      </Element>
    );
  },
});
