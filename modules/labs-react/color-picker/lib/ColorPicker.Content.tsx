import React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ColorPickerModelContext} from './ColorPicker';
import {ColorPickerModel} from './useColorPickerModel';

export interface ColorPickerContentProps {
  model?: ColorPickerModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const ColorPickerContent = createComponent('div')({
  displayName: 'ColorPicker.Content',
  Component: ({children, model, ...elemProps}: ColorPickerContentProps, ref, Element) => {
    const {state} = useModelContext(ColorPickerModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});
