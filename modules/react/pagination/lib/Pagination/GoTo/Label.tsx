import * as React from 'react';
import {PaginationModel} from '../types';
import {Label} from '@workday/canvas-kit-preview-react/text';

export interface GoToLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  model: PaginationModel;
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

export const GoToLabel = ({model, children, ...elemProps}: GoToLabelProps) => {
  return (
    <Label asToken="subtext.medium" variant="hint" whiteSpace="nowrap" {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </Label>
  );
};
