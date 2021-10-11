export type CanvasDepth = {
  /**
   * ### Depth Inset
   * 	Used for inset containers
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const insetCardStyles = {
   *   ...depth.inset,
   * };
   * ```
   */
  inset: {
    boxShadow: 'inset 0px 0px 8px 0 rgba(82, 97, 115, 0.09)';
  };
  /**
   * ### Depth 1
   * Used for minimal offset
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[1],
   * };
   * ```
   */
  1: {
    boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.08)';
  };
  /**
   * ### Depth 2
   * Used for Cards, Popups, and Menus — our most common depth
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[2],
   * };
   * ```
   */
  2: {
    boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.1)';
  };
  /**
   * ### Depth 3
   * Used for interactive Cards on hover
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[3],
   * };
   * ```
   */
  3: {
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)';
  };
  /**
   * ### Depth 4
   * Used for Cards on white backgrounds — adds border styles for more contrast
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[4],
   * };
   * ```
   */
  4: {
    border: '1px solid rgba(218, 226, 230, 1)';
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)';
  };
};

type ValueOf<T> = T[keyof T];
export type CanvasDepthValues = ValueOf<CanvasDepth>;

/**
 * ### Depth Tokens
 *
 * Depth is the relative distance between surfaces in the z-axis.
 * It provides delineation, focus, and priority with shadows and layering.
 * There are five depth levels, `inset`, `1`, `2`, `3`, and `4`.
 * Most levels only apply box-shadow styles, but `depth[4]` also applies border styles.
 *
 * @example
 * ```tsx
 * import { depth } from '@workday/canvas-kit-react/tokens';
 *
 * const CustomCard = () => {
 *   return (
 *     <div css={depth[2]}>
 *       A standard-depth card
 *     </div>
 *   );
 * }
 * ```
 *
 */
export const depth: CanvasDepth = {
  inset: {
    boxShadow: 'inset 0px 0px 8px 0 rgba(82, 97, 115, 0.09)',
  },
  1: {
    boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.08)',
  },
  2: {
    boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 0.1)',
  },
  3: {
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)',
  },
  4: {
    border: '1px solid rgba(218, 226, 230, 1)',
    boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)',
  },
};
