import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {PaginationContext} from '../usePaginationModel';
import {GoToContext, useGoToForm} from './useGoToForm';

export interface GoToFormProps extends FlexProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const paginationGoToFormStencil = createStencil({
  base: {
    display: 'flex',
    alignItems: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.sm, system.space.x2),
    ':dir(rtl)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      paddingInline: cssVar(system.padding.xs, system.space.x2),
    },
  },
});

export const GoToForm = createComponent('form')({
  Component({children, onSubmit, ...elemProps}: GoToFormProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const goToContext = useGoToForm({model, onSubmit});
    const {formProps} = goToContext;

    return (
      <GoToContext.Provider value={goToContext}>
        <Element
          ref={ref}
          {...mergeStyles({...formProps, ...elemProps}, paginationGoToFormStencil())}
        >
          {children}
        </Element>
      </GoToContext.Provider>
    );
  },
});
