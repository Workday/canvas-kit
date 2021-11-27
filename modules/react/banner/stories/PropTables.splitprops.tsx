import {BannerModel, BannerModelConfig} from '@workday/canvas-kit-react/banner';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {BannerActionProps} from '../lib/BannerAction';

// <ArgsTable of={Banner} /> generates a very large props table given that
// BannerProps includes FlexProps. Use this dummy component instead to
// limit the props shown.
export const BannerHoistedComponent = (_: {model: BannerModel}) => <div />;

// <ArgsTable of={Banner.Icon} /> generates a props table with
// SystemIcon props. Use this dummy component instead to limit the props shown.
export const BannerIconComponent = (_: {
  /**
   * Icon to show next to label
   * @default `exclamationTriangleIcon` or `exclamationCircleIcon` when hasError is true
   */
  icon?: CanvasSystemIcon;
}) => <div />;

// <ArgsTable of={Banner.Label} /> generates a props table with
// Flex props. Use this dummy component instead to limit the props shown.
export const BannerLabelComponent = (_: {
  /**
   * The text of the Banner.
   */
  children: React.ReactNode;
}) => <div />;

// <ArgsTable of={Banner.Action} /> generates a props table with
// Box props. Use this dummy component instead to limit the props shown.
export const BannerActionComponent = (_: {
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}) => <div />;

export const BannerModelConfigComponent = (_: BannerModelConfig) => <div />;
