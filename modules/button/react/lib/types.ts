/**
 * The different button sizes.
 */
export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// TODO (beta button): consolidate all these button types
/**
 * The different button types.
 */
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Delete = 'delete',
}

export enum BetaButtonType {
  Primary = 'betaPrimary',
  Secondary = 'betaSecondary',
  Delete = 'betaDelete',
  Highlight = 'highlight',
  OutlinePrimary = 'outlinePrimary',
  OutlineSecondary = 'outlineSecondary',
  OutlineInverse = 'outlineInverse',
}

export enum IconButtonType {
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

export enum TextButtonType {
  Default = 'text',
  Inverse = 'textInverse',
  AllCaps = 'textAllCaps',
  InverseAllCaps = 'textInverseAllCaps',
}

export type AllButtonTypes = ButtonType | BetaButtonType | TextButtonType | IconButtonType;
