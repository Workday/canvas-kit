import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {plusIcon, caretDownIcon} from '@workday/canvas-system-icons-web';
import {space, colors} from '@workday/canvas-kit-react/tokens';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import styled from '@emotion/styled';

const getDropdownColors = () => {
  return {
    default: {
      background: colors.berrySmoothie400,
      icon: colors.frenchVanilla100,
      label: colors.frenchVanilla100,
    },
    hover: {
      background: colors.berrySmoothie500,
      label: colors.frenchVanilla100,
    },
    active: {},
    focus: {},
    disabled: {},
  };
};

const StyledPrimaryButton = styled(PrimaryButton)({
  height: space.l,
  padding: space.xxs,
});

const customColorTheme = {
  palette: {
    primary: {
      main: 'purple',
      contrast: 'turquoise',
    },
    alert: {
      main: 'coral',
    },
    error: {
      main: 'crimson',
    },
    success: {
      main: 'aquamarine',
    },
    neutral: {
      main: 'gray',
    },
    common: {
      focusOutline: 'turquoise',
    },
  },
};

export const CustomStyles = () => (
  <Flex gap="s" padding="s">
    <PrimaryButton
      padding={space.l}
      border="3px dotted red"
      backgroundColor="cyan"
      color={colors.blackPepper400}
    >
      Styled with style properties
    </PrimaryButton>
    <PrimaryButton colors={getDropdownColors()} icon={plusIcon} iconPosition="start">
      Styled with colors prop
    </PrimaryButton>
    <StyledPrimaryButton icon={caretDownIcon} iconPosition="end">
      Overwrite styles with emotion
    </StyledPrimaryButton>
    <CanvasProvider theme={{canvas: customColorTheme}}>
      <PrimaryButton>Custom Theme</PrimaryButton>
    </CanvasProvider>
  </Flex>
);
