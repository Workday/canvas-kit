import * as React from 'react';
import {createComponent, useIsRTL} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

import {PaginationContext} from '../usePaginationModel';
import {GoToContext, useGoToForm} from './useGoToForm';

export interface GoToFormProps extends FlexProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const GoToForm = createComponent('form')({
  Component({children, onSubmit, ...elemProps}: GoToFormProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const goToContext = useGoToForm({model, onSubmit});
    const {formProps} = goToContext;
    const shouldUseRTL = useIsRTL();

    return (
      <GoToContext.Provider value={goToContext}>
        <Flex
          ref={ref}
          as={Element}
          alignItems="center"
          gap="xxs"
          paddingLeft={shouldUseRTL ? 'xxs' : undefined}
          paddingRight={shouldUseRTL ? 'xxs' : undefined}
          {...formProps}
          {...elemProps}
        >
          {children}
        </Flex>
      </GoToContext.Provider>
    );
  },
});
