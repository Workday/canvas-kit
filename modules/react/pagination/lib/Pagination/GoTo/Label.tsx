import * as React from 'react';
import {type, typeColors} from '@workday/canvas-kit-react/tokens';

import {PaginationModel} from '../types';
import {StyledType, styled} from '@workday/canvas-kit-react/common';

export interface GoToLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  model: PaginationModel;
  /**
   * Accepts child elements or a render prop.
   */
  children?: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}

const StyledLabel = styled('label')<StyledType>({
  ...type.levels.subtext.medium,
  color: typeColors.hint,
  whiteSpace: 'nowrap',
});

export const GoToLabel = ({model, children, ...elemProps}: GoToLabelProps) => {
  return (
    <StyledLabel {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </StyledLabel>
  );
};
