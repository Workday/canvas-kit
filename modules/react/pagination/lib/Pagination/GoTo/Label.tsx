import * as React from 'react';
import {PaginationModel} from '../types';
import {LabelText} from '@workday/canvas-kit-react/text';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface GoToLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  model: PaginationModel;
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

export const GoToLabel = createComponent('label')({
  displayName: 'Pagination.GoToLabel',
  Component({model, children, ...elemProps}: GoToLabelProps, ref, Element) {
    return (
      <LabelText typeLevel="subtext.medium" variant="hint" whiteSpace="nowrap" {...elemProps}>
        {typeof children === 'function' ? children(model) : children}
      </LabelText>
    );
  },
});
