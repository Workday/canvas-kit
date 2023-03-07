import * as React from 'react';
import {createComponent, useIsRTL} from '@workday/canvas-kit-react/common';
import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-react/layout';

import {PaginationContext} from '../usePaginationModel';
import {GoToContext, useGoToForm} from './useGoToForm';

export interface GoToFormProps extends Omit<HStackProps, 'spacing'> {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  spacing?: StackSpacing;
}

export const GoToForm = createComponent('form')({
  Component({children, onSubmit, ...elemProps}: GoToFormProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const goToContext = useGoToForm({model, onSubmit});
    const {formProps} = goToContext;
    const shouldUseRTL = useIsRTL();

    return (
      <GoToContext.Provider value={goToContext}>
        <HStack
          ref={ref}
          as={Element}
          alignItems="center"
          spacing="xxs"
          paddingLeft={shouldUseRTL ? 'xxs' : undefined}
          paddingRight={shouldUseRTL ? 'xxs' : undefined}
          {...formProps}
          {...elemProps}
        >
          {children}
        </HStack>
      </GoToContext.Provider>
    );
  },
});
