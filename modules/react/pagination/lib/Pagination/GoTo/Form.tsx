import * as React from 'react';
import {Flex, FlexProps, SystemPropValues} from '@workday/canvas-kit-react/layout';
import {useRTL} from '../common/utils/useRTL';

export type GoToFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Omit<FlexProps, 'spacing'> & {
    spacing?: SystemPropValues['space'];
  };

export const GoToForm = ({children, onSubmit, spacing = 'xxs', ...elemProps}: GoToFormProps) => {
  const {shouldUseRTL} = useRTL();
  return (
    <Flex
      as="form"
      alignItems="center"
      gap={spacing}
      paddingLeft={shouldUseRTL ? 'xxs' : undefined}
      paddingRight={shouldUseRTL ? 'xxs' : undefined}
      onSubmit={onSubmit}
      {...elemProps}
    >
      {children}
    </Flex>
  );
};
