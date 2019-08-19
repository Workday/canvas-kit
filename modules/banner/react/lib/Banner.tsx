import * as React from 'react';
import styled from 'react-emotion';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {BannerVariant, BannerTheme} from './types';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {focusRing} from '@workday/canvas-kit-react-common';

export interface BannerProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Action when interacting with the banner
   */
  onClick?: (e: React.SyntheticEvent) => void;
  /**
   * Text inside the banner
   */
  label?: React.ReactNode;
  /**
   * Size and position of the banner
   */
  variant?: BannerVariant;
  /**
   * Color theme of the banner
   */
  theme?: BannerTheme;
  /**
   * Text on the right, call to action
   */
  actionText?: string;
}

const BannerWrapper = styled('button')<BannerProps>(
  {
    ...type.body2,
    backgroundColor: colors.cantaloupe400,
    boxSizing: 'border-box',
    color: colors.blackPepper400,
    fontSize: 14,
    fontWeight: 500,
    padding: `${spacing.xxs} ${spacing.s}`,
    textAlign: 'left',
    border: 0,
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 120ms',
    '&:focus': {
      outline: 'none',
      ...focusRing(2, 2),
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ({theme, variant}) => ({
    backgroundColor: theme === BannerTheme.Error ? colors.cinnamon500 : colors.cantaloupe400,
    color: theme === BannerTheme.Error ? colors.frenchVanilla100 : colors.blackPepper400,
    borderRadius:
      variant === BannerVariant.Sticky ? `${spacing.xxxs} 0 0 ${spacing.xxxs}` : spacing.xxxs,
    width: variant === BannerVariant.Sticky ? '222px' : '328px',
    '&:hover': {
      backgroundColor: theme === BannerTheme.Error ? colors.cinnamon600 : colors.cantaloupe500,
    },
  })
);

const BannerIcon = styled(SystemIcon)({
  marginRight: spacing.xs,
});

const BannerLabel = styled('div')({
  flex: 1,
});

const BannerViewAll = styled('span')<BannerProps>(
  {
    textDecoration: 'underline',
  },
  ({variant}) => ({
    display: variant === BannerVariant.Sticky ? 'none' : undefined,
  })
);

export default class Banner extends React.Component<BannerProps> {
  static Variant = BannerVariant;
  static Theme = BannerTheme;

  public static defaultProps = {
    actionText: 'View All',
    theme: BannerTheme.Alert,
    variant: BannerVariant.Full,
  };

  public render() {
    const {label, onClick, actionText, variant, ...props} = this.props;

    const bannerIcon =
      this.props.theme === BannerTheme.Error ? exclamationCircleIcon : exclamationTriangleIcon;
    const iconColor =
      this.props.theme === BannerTheme.Error ? colors.frenchVanilla100 : colors.blackPepper400;
    const iconSize = 24;

    return (
      <BannerWrapper
        aria-label={actionText + ': ' + label}
        role="button"
        variant={variant}
        tabIndex={0}
        onClick={onClick}
        {...props}
      >
        <BannerIcon icon={bannerIcon} color={iconColor} colorHover={iconColor} size={iconSize} />
        <BannerLabel>{this.props.label}</BannerLabel>
        <BannerViewAll variant={variant}>{this.props.actionText}</BannerViewAll>
      </BannerWrapper>
    );
  }
}
