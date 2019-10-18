import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, borderRadius, type, Themeable} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon, exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {ErrorType, focusRing} from '@workday/canvas-kit-react-common';

export enum BannerVariant {
  Full,
  Sticky,
}

export interface BannerProps extends Themeable, React.ButtonHTMLAttributes<HTMLButtonElement> {
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
   * Color of the banner based on the type of the error
   */
  error?: ErrorType;
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
  ({error, theme}) => ({
    backgroundColor:
      error === ErrorType.Error ? theme.palette.error.main : theme.palette.alert.main,
    color: error === ErrorType.Error ? theme.palette.error.contrast : colors.blackPepper400,
    '&:hover': {
      backgroundColor:
        error === ErrorType.Error ? theme.palette.error.dark : theme.palette.alert.dark,
    },
    '&:focus': {
      outline: 'none',
      ...focusRing(2, 2, undefined, undefined, undefined, theme.palette.common.focusOutline),
    },
  }),
  ({variant}) => ({
    borderRadius:
      variant === BannerVariant.Sticky ? `${borderRadius.m} 0 0 ${borderRadius.m}` : borderRadius.m,
    width: variant === BannerVariant.Sticky ? '222px' : '328px',
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
  static ErrorType = ErrorType;

  public static defaultProps = {
    actionText: 'View All',
    error: ErrorType.Alert,
    variant: BannerVariant.Full,
  };

  public render() {
    const {label, onClick, actionText, variant, error, ...props} = this.props;

    const bannerIcon = error === ErrorType.Error ? exclamationCircleIcon : exclamationTriangleIcon;
    const iconColor = error === ErrorType.Error ? colors.frenchVanilla100 : colors.blackPepper400;
    const iconSize = 24;

    return (
      <BannerWrapper
        aria-label={actionText + ': ' + label}
        role="button"
        variant={variant}
        tabIndex={0}
        onClick={onClick}
        error={error}
        {...props}
      >
        <BannerIcon icon={bannerIcon} color={iconColor} colorHover={iconColor} size={iconSize} />
        <BannerLabel>{label}</BannerLabel>
        <BannerViewAll variant={variant}>{actionText}</BannerViewAll>
      </BannerWrapper>
    );
  }
}
