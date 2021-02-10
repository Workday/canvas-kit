/** @jsx jsx */
import * as React from 'react';
import {jsx, css, Interpolation} from '@emotion/core';
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
  whiteSpace: 'nowrap',
});

export const GoToLabel = ({
  css: cssProp,
  model,
  children,
  htmlFor,
  ...elemProps
}: GoToLabelProps) => {
  return (
    <label
      css={[labelStyles, cssProp as Interpolation<undefined>]}
      htmlFor={htmlFor}
      {...elemProps}
    >
      {typeof children === 'function' ? children(model) : children}
    </label>
  );
};
