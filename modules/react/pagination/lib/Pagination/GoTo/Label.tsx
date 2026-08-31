import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

import {PaginationModel} from '../types';
import {PaginationContext} from '../usePaginationModel';

export interface GoToLabelProps {
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

export const paginationGoToLabelStencil = createStencil({
  base: {
    whiteSpace: 'nowrap',
  },
});

export const GoToLabel = createComponent('label')({
  displayName: 'Pagination.GoToLabel',
  Component({children, ...elemProps}: GoToLabelProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    return (
      <Subtext
        ref={ref}
        as={Element}
        size="medium"
        variant="hint"
        {...handleCsProp(elemProps, paginationGoToLabelStencil())}
      >
        {typeof children === 'function' ? children(model) : children}
      </Subtext>
    );
  },
});
