import * as React from 'react';
import {HStack, HStackProps} from '../common/Stack';
import {Spacing} from '../common/utils/space';
import {useRTL} from '../common/utils/useRTL';

export type GoToFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Omit<HStackProps, 'spacing'> & {
    spacing?: Spacing;
  };

export const GoToForm = ({children, onSubmit, spacing = 'xxs', ...elemProps}: GoToFormProps) => {
  const {shouldUseRTL} = useRTL();
  return (
    <HStack
      as="form"
      alignItems="center"
      spacing={spacing}
      pl={shouldUseRTL ? 'xxs' : undefined}
      pr={shouldUseRTL ? 'xxs' : undefined}
      onSubmit={onSubmit}
      {...elemProps}
    >
      {children}
    </HStack>
  );
};
