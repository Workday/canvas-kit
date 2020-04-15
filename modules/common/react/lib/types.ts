/**
 * The growth behavior of a component.
 */
export interface GrowthBehavior {
  /**
   * True if the component should grow to its container's width. False otherwise.
   */
  grow?: boolean;
}

/**
 * The overflow behavior of text within a component.
 */
export interface OverflowBehavior {
  /**
   * 'wrap' if the text should wrap. `undefined` if it should behave normally.
   * Note: this is not a boolean so that we can add truncation support without a breaking change.
   */
  overflow?: 'wrap';
}

/**
 * TransformOrigin behavior for things like popups and tooltips
 */
export interface TransformOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'center' | 'bottom';
}

/**
 * Error types
 */
export enum ErrorType {
  Error,
  Alert,
}
