/** @jsx jsx */
import * as React from 'react';
import {jsx, css, Interpolation} from '@emotion/core';
import {type, typeColors} from '@workday/canvas-kit-react/tokens';

import {PaginationModel} from '../types';

export interface GoToLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  model: PaginationModel;
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

const labelStyles = css({
  ...type.levels.subtext.medium,
  color: typeColors.hint,
  whiteSpace: 'nowrap',
});

export const GoToLabel = ({css: cssProp, model, children, ...elemProps}: GoToLabelProps) => {
  return (
    <label css={[labelStyles, cssProp as Interpolation<undefined>]} {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </label>
  );
};
