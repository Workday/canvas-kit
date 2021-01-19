import * as React from 'react';
import {HStack} from '../common/Stack';
import {useRTL} from '../common/utils/useRTL';

export type GoToFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const GoToForm = ({children, onSubmit, ...elemProps}: GoToFormProps) => {
  const {shouldUseRTL} = useRTL();
  return (
    <HStack
      as="form"
      alignItems="center"
      spacing="xxs"
      pl={shouldUseRTL ? 'xxs' : undefined}
      pr={shouldUseRTL ? 'xxs' : undefined}
      onSubmit={onSubmit}
      {...elemProps}
    >
      {children}
    </HStack>
  );
};
