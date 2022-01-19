import * as React from 'react';
import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-labs-react/layout';
import {useRTL} from '../common/utils/useRTL';

export type GoToFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Omit<HStackProps, 'spacing'> & {
    spacing?: StackSpacing;
  };

export const GoToForm = ({children, onSubmit, spacing = 'xxs', ...elemProps}: GoToFormProps) => {
  const {shouldUseRTL} = useRTL();
  return (
    <HStack
      as="form"
      alignItems="center"
      spacing={spacing}
      paddingLeft={shouldUseRTL ? 'xxs' : undefined}
      paddingRight={shouldUseRTL ? 'xxs' : undefined}
      onSubmit={onSubmit}
      {...elemProps}
    >
      {children}
    </HStack>
  );
};
