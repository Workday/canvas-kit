import * as React from 'react';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {ButtonColors} from './types';
import {BaseButton} from './BaseButton';
import {TertiaryButtonProps} from './TertiaryButton';
import {brand} from '@workday/canvas-tokens-web';

export interface ToolbarIconButtonProps
  extends Omit<TertiaryButtonProps, 'size' | 'variant'>,
    Themeable {
  onToggleChange?: (toggled: boolean | undefined) => void;
  toggled?: boolean;
  shouldMirrorIcon?: boolean;
}

const StyledToolbarIconButton = styled(BaseButton)<StyledType & ToolbarIconButtonProps>({
  ['& .wd-icon']: {
    display: 'inline-block',
    width: 20,
    height: 20,
  },
  '&:focus-visible, &.focus': {
    ...focusRing({
      width: 2,
      separation: 0,
      innerColor: 'transparent',
      outerColor: cssVar(brand.common.focusOutline, 'rgba(8,117,226,1)'),
    }),
  },
});

export const ToolbarIconButton = createComponent('button')({
  displayName: 'ToolbarIconButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      onToggleChange,
      icon,
      shouldMirrorIcon = false,
      toggled,
      children,
      ...elemProps
    }: ToolbarIconButtonProps,
    ref,
    Element
  ) => {
    const isInitialMount = React.useRef(true);

    // Only call onToggleChange on update - not on first mount
    React.useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        if (toggled && typeof onToggleChange === 'function') {
          onToggleChange(toggled);
        }
      }
    }, [toggled, onToggleChange]);

    return (
      <StyledToolbarIconButton
        ref={ref}
        as={Element}
        colors={getToolbarIconButtonColors(theme, toggled)}
        size={'small'}
        fillIcon={toggled}
        aria-pressed={toggled}
        padding="zero"
        minWidth={space.l}
        width={space.l}
        height={space.l}
        borderRadius={borderRadius.m}
        {...elemProps}
      >
        {icon ? <BaseButton.Icon icon={icon} shouldMirrorIcon={shouldMirrorIcon} /> : children}
      </StyledToolbarIconButton>
    );
  },
});

const getToolbarIconButtonColors = (theme: EmotionCanvasTheme, toggled?: boolean): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;
  return {
    default: {
      icon: toggled ? themePrimary.main : colors.licorice200,
      background: toggled ? themePrimary.lightest : 'transparent',
    },
    hover: {
      icon: toggled ? themePrimary.dark : colors.licorice500,
      background: colors.soap300,
    },
    active: {
      icon: toggled ? themePrimary.dark : colors.licorice500,
      background: colors.soap500,
    },
    focus: {
      icon: toggled ? themePrimary.main : colors.licorice200,
      background: toggled ? themePrimary.lightest : 'transparent',
    },
    disabled: {
      icon: toggled ? themePrimary.light : colors.soap600,
      background: toggled ? themePrimary.lightest : 'transparent',
      opacity: '1',
    },
  };
};
