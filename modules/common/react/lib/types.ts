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
