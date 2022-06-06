import * as React from 'react';
import {PaginationModel} from '../types';
import {Label} from '@workday/canvas-kit-preview-react/text';

export interface GoToLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  model: PaginationModel;
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

export const GoToLabel = ({model, children, ...elemProps}: GoToLabelProps) => {
  return (
    <Label size="medium" color="hint" whiteSpace="nowrap" {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </Label>
  );
};
