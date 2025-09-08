import {colors, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import {
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
  styled,
  StyledType,
  focusRing,
} from '@workday/canvas-kit-react/common';
import {ButtonColors} from './types';
import {BaseButton} from './BaseButton';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButtonProps} from './ToolbarIconButton';
import {brand} from '@workday/canvas-tokens-web';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'>,
    Themeable {}

const StyledToolbarDropdownButton = styled(BaseButton)<StyledType & ToolbarDropdownButtonProps>({
  padding: space.zero,
  minWidth: space.l,
  width: 'auto',
  height: space.l,
  borderRadius: borderRadius.m,
  gap: space.zero,
  '& .wd-icon': {
    display: 'inline-block',
    width: 20,
    height: 20,
  },
  '& .wdc-toolbar-dropdown-btn-arrow': {
    margin: '0 2px 0 0',
  },
  '& .wdc-toolbar-dropdown-btn-custom-icon': {
    marginLeft: `${space.xxxs}`,
    marginRight: 0,
    width: 18, // decrease the space between a custom icon and the chevron per design
  },
  '&:focus-visible, &.focus': {
    ...focusRing({
      width: 2,
      separation: 0,
      innerColor: 'transparent',
      outerColor: brand.common.focusOutline,
    }),
  },
});

export const ToolbarDropdownButton = createComponent('button')({
  displayName: 'ToolbarDropdownButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: ToolbarDropdownButtonProps,
    ref,
    Element
  ) => {
    return (
      <StyledToolbarDropdownButton
        ref={ref}
        as={Element}
        colors={getToolbarDropdownButtonColors(theme)}
        {...elemProps}
      >
        {icon ? (
          <BaseButton.Icon
            className={'wdc-toolbar-dropdown-btn-custom-icon'}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        ) : (
          children
        )}
        <BaseButton.Icon
          className={'wdc-toolbar-dropdown-btn-arrow'}
          icon={chevronDownSmallIcon}
          shouldMirrorIcon={shouldMirrorIcon}
        />
      </StyledToolbarDropdownButton>
    );
  },
});

const getToolbarDropdownButtonColors = (theme: EmotionCanvasTheme): ButtonColors => {
  return {
    default: {
      icon: colors.licorice200,
    },
    hover: {
      icon: colors.licorice500,
      background: colors.soap300,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap500,
    },
    focus: {
      icon: colors.licorice200,
      background: 'transparent',
    },
    disabled: {
      icon: colors.soap600,
      background: 'transparent',
      opacity: '1',
    },
  };
};
