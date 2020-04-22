import {CSSObject} from '@emotion/core';

/**
 * Standard Button
 */
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}
export enum ButtonIconPosition {
  Left = 'iconPositionLeft',
  Right = 'iconPositionRight',
}
export const ButtonSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;

/**
 * Outline Button
 */
export enum OutlineButtonVariant {
  Primary = 'outlinePrimary',
  Secondary = 'outlineSecondary',
  Inverse = 'outlineInverse',
}

/**
 * Dropdown Button
 */
export enum DropdownButtonVariant {
  Primary = 'dropdownPrimary',
  Secondary = 'dropdownSecondary',
}

/**
 * Icon Button
 */
export enum IconButtonVariant {
  Square = 'square',
  SquareFilled = 'squareFilled',
  Plain = 'plain',
  Circle = 'circle',
  CircleFilled = 'circleFilled',
  Inverse = 'inverse',
  InverseFilled = 'inverseFilled',
}

/**
 * Text Button
 */
export enum TextButtonVariant {
  Default = 'text',
  Inverse = 'textInverse',
}

/**
 * Old orange buttons
 * @deprecated These type are deprecated along with deprecated_Button component
 */
export enum DeprecatedButtonVariant {
  Primary = 'deprecatedPrimary',
  Secondary = 'deprecatedSecondary',
  Delete = 'deprecatedDelete',
}

export type AllButtonVariants =
  | ButtonVariant
  | DropdownButtonVariant
  | TextButtonVariant
  | IconButtonVariant
  | DeprecatedButtonVariant;

/**
 * The object used for passing in colors to the ButtonContainer
 */
export interface ButtonStateColors {
  background?: string;
  border?: string;
  icon?: string;
  iconFill?: boolean;
  label?: string;
  labelData?: string;
}
export interface ButtonColors {
  default: ButtonStateColors;
  hover: ButtonStateColors;
  active: ButtonStateColors;
  focus: ButtonStateColors & {
    focusRing?: CSSObject;
  };
  disabled: ButtonStateColors;
}

/**
 * Used to get the props of the anchor version of a button
 */
export type AnchorButtonProps<P> = Omit<P, keyof React.ButtonHTMLAttributes<HTMLButtonElement>> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Returns an overloaded functional component that uses props P by default,
 * but uses AnchorButtonProps<P> when `as="a"`.
 * Note: V must be `typeof ButtonVariant` since TS cannot assign enums as a type in a generic properly
 */
export type ButtonOrAnchorComponent<P, V = undefined> = {
  (props: P): React.ReactElement;
  (props: {as: 'a'} & AnchorButtonProps<P>): React.ReactElement;
  Variant?: V;
  Size: Partial<typeof ButtonSize>;
};
