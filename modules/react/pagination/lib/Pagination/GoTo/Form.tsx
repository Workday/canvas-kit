import * as React from 'react';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {useRTL} from '../common/utils/useRTL';

export type GoToFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Omit<FlexProps, 'gap'> & {
    gap?: FlexProps['gap'];
  };

export const GoToForm = ({children, onSubmit, gap = 'xxs', ...elemProps}: GoToFormProps) => {
  const {shouldUseRTL} = useRTL();
  return (
    <Flex
      as="form"
      alignItems="center"
      gap={gap}
      paddingLeft={shouldUseRTL ? 'xxs' : undefined}
      paddingRight={shouldUseRTL ? 'xxs' : undefined}
      onSubmit={onSubmit}
      {...elemProps}
    >
      {children}
    </Flex>
  );
};
