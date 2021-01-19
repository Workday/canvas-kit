/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';
import {type, typeColors} from '@workday/canvas-kit-react-core';

import {PaginationModel} from '../types';

export interface GoToLabelProps
  extends PaginationModel,
    React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

const labelStyles = css({
  ...type.body,
  color: typeColors.hint,
});

export const GoToLabel = ({state, events, children, htmlFor, ...elemProps}: GoToLabelProps) => {
  return (
    <label css={labelStyles} htmlFor={htmlFor} {...elemProps}>
      {typeof children === 'function' ? children({state, events}) : children}
    </label>
  );
};
