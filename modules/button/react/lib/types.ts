/**
 * The different button sizes.
 */
export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum IconButtonSize {
  Small = 'small',
  Medium = 'medium',
}

// TODO (beta button): consolidate all these button types
/**
 * The different button types.
 */
export enum DeprecatedButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Delete = 'delete',
}

export enum ButtonVariant {
  Primary = 'betaPrimary',
  Secondary = 'betaSecondary',
  Delete = 'betaDelete',
  Highlight = 'highlight',
  OutlinePrimary = 'outlinePrimary',
  OutlineSecondary = 'outlineSecondary',
  OutlineInverse = 'outlineInverse',
}

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
 * The different icon positions.
 */
export enum IconPosition {
  Left = 'iconPositionLeft',
  Right = 'iconPositionRight',
}

export enum TextButtonVariant {
  Default = 'text',
  Inverse = 'textInverse',
  AllCaps = 'textAllCaps',
  InverseAllCaps = 'textInverseAllCaps',
}

export type AllButtonVariants =
  | DeprecatedButtonVariant
  | ButtonVariant
  | TextButtonVariant
  | IconButtonVariant;
