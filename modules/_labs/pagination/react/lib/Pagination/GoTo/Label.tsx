/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';
import {type, typeColors} from '@workday/canvas-kit-react-core';

import {PaginationModel} from '../types';

export interface GoToLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  htmlFor?: string;
  model: PaginationModel;
}

const labelStyles = css({
  ...type.body,
  color: typeColors.hint,
});

export const GoToLabel = ({model, children, htmlFor, ...elemProps}: GoToLabelProps) => {
  return (
    <label css={labelStyles} htmlFor={htmlFor} {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </label>
  );
};
