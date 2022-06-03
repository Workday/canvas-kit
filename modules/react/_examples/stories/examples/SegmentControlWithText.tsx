import * as React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {
  styled,
  StyledType,
  ExtractProps,
  mouseFocusBehavior,
} from '@workday/canvas-kit-react/common';
import {colors, borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {BaseButton, ButtonColors} from '@workday/canvas-kit-react/button';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/design-assets-types';
const placeholderIcon: CanvasSystemIcon = {
  name: '',
  svg: '',
  filename: '',
  type: CanvasIconTypes.System,
};

const getIconButtonColors = (toggled?: boolean): ButtonColors => {
  return {
    default: {
      background: toggled ? colors.blueberry400 : colors.soap200,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice200,
      label: toggled ? colors.frenchVanilla100 : colors.licorice200,
    },
    hover: {
      background: toggled ? colors.blueberry400 : colors.soap300,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
      label: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    active: {
      background: toggled ? colors.blueberry400 : colors.soap500,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
      label: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    focus: {
      background: toggled ? colors.blueberry400 : undefined,
      icon: toggled ? colors.frenchVanilla100 : colors.licorice500,
      label: toggled ? colors.frenchVanilla100 : colors.licorice500,
    },
    disabled: {
      background: toggled ? colors.soap100 : colors.soap100,
      icon: colors.soap600,
      label: colors.soap600,
      opacity: '1',
    },
  };
};

const StyledBaseButton = styled(BaseButton)<
  ExtractProps<typeof SegmentedControl.Button> & StyledType
>({
  borderRadius: borderRadius.zero,
  border: `1px solid ${colors.soap500}`,
  borderLeft: 'none',
  minWidth: space.xl,
  '&:first-of-type': {
    borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
    borderLeft: `1px solid ${colors.soap500}`,
  },
  '&:last-of-type': {
    borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
  },
  '&[aria-pressed="true"]': {
    borderColor: `${colors.blueberry400} !important`,
    '&:hover, &:focus:hover': {
      background: colors.blueberry400,
    },
  },
  '&:focus': {
    borderRadius: borderRadius.m,
    zIndex: 1,
    animation: 'none', // reset focusRing animation
    transition: 'all 120ms, border-radius 1ms',
    ...mouseFocusBehavior({
      '&': {
        borderRadius: borderRadius.zero,
        '&:first-of-type': {
          borderRadius: `${borderRadius.m} 0 0 ${borderRadius.m}`,
        },
        '&:last-of-type': {
          borderRadius: `0 ${borderRadius.m} ${borderRadius.m} 0`,
        },
      },
    }),
  },
});

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('day');
  const handleToggle = (selectedValue: string | number) => {
    setValue(selectedValue);
  };

  const isDayToggled = value === 'day';
  const isWeekToggled = value === 'week';

  return (
    <SegmentedControl value={value} onChange={handleToggle}>
      <StyledBaseButton
        icon={{...placeholderIcon}}
        colors={getIconButtonColors(isDayToggled)}
        value="day"
        onClick={() => setValue('day')}
      >
        Day
      </StyledBaseButton>
      <StyledBaseButton
        icon={placeholderIcon}
        colors={getIconButtonColors(isWeekToggled)}
        value="week"
        onClick={() => setValue('week')}
      >
        Week
      </StyledBaseButton>
    </SegmentedControl>
  );
};
