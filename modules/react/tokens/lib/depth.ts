export type CanvasDepth = {
  /**
   * ### Depth None
   * 	Used for removing existing depth
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const noDepthCardStyles = {
   *   ...depth.none,
   * };
   * ```
   */
  none: {
    boxShadow: 'none';
  };
  /**
   * ### Depth 1
   * Used for minimal offset and Cards resting on a white background
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
    boxShadow: '0px 1px 4px rgba(31, 38, 46, 0.12), 0px 2px 8px rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 2
   * Used for Top navigation, Bottom navigation
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
    boxShadow: '0px 2px 8px rgba(31, 38, 46, 0.12), 0px 4px 16px rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 3
   * Used for FABs, Menus
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
    boxShadow: '0px 3px 12px rgba(31, 38, 46, 0.12), 0px 6px 24px rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 4
   * Used for bottom sheets or Menus
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
    boxShadow: '0px 4px 16px rgba(31, 38, 46, 0.12), 0px 8px 32px rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 5
   * Used for Popups, Toast Messages, Dialogs, Side Panels without opacity overlay behavior as well
   * as Snackbars and Toast Messaged
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[5],
   * };
   * ```
   */
  5: {
    boxShadow: '0px 5px 20px rgba(31, 38, 46, 0.12), 0px 10px 40px rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 6
   * Used for components with opacity overlay behavior such as Modal, Dialogs or Side Panels
   *
   * @example
   * ```ts
   * import { depth } from '@workday/canvas-kit-react/tokens';
   *
   * const cardStyles = {
   *   ...depth[6],
   * };
   * ```
   */
  6: {
    boxShadow: '0px 6px 24px rgba(31, 38, 46, 0.12), 0px 12px 48px rgba(31, 38, 46, 0.08)';
  };
};

type ValueOf<T> = T[keyof T];
export type CanvasDepthValues = ValueOf<CanvasDepth>;

/**
 * ### Depth Tokens
 *
 * Depth is the relative distance between surfaces in the z-axis.
 * It provides delineation, focus, and priority with shadows and layering.
 * There are seven depth levels, `none`, `1`, `2`, `3`, `4`, `5` and `6`.
 * `none` is a special value to remove depth styles. All other levels only apply box-shadow styles.
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
  none: {
    boxShadow: 'none',
  },
  1: {
    boxShadow: '0px 1px 4px rgba(31, 38, 46, 0.12), 0px 2px 8px rgba(31, 38, 46, 0.08)',
  },
  2: {
    boxShadow: '0px 2px 8px rgba(31, 38, 46, 0.12), 0px 4px 16px rgba(31, 38, 46, 0.08)',
  },
  3: {
    boxShadow: '0px 3px 12px rgba(31, 38, 46, 0.12), 0px 6px 24px rgba(31, 38, 46, 0.08)',
  },
  4: {
    boxShadow: '0px 4px 16px rgba(31, 38, 46, 0.12), 0px 8px 32px rgba(31, 38, 46, 0.08)',
  },
  5: {
    boxShadow: '0px 5px 20px rgba(31, 38, 46, 0.12), 0px 10px 40px rgba(31, 38, 46, 0.08)',
  },
  6: {
    boxShadow: '0px 6px 24px rgba(31, 38, 46, 0.12), 0px 12px 48px rgba(31, 38, 46, 0.08)',
  },
};
