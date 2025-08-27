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
  Error = 'error',
  Caution = 'caution',
}

/**
 * Type to Pick props from an interface, making some required and leaving others as is
 */
export type PickRequired<T, Req extends keyof T, AsIs extends keyof T> = Required<Pick<T, Req>> &
  Pick<T, AsIs>;
