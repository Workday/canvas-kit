import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
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
    gap: system.space.x2,
    ':dir(rtl)': {
      paddingInlineStart: system.space.x2,
      paddingInlineEnd: system.space.x2,
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
