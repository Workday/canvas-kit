/** @deprecated ⚠️ `CanvasDepth` has been deprecated in a future major version. Please use our css var based [`depth tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-depth--docs) tokens. */
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
   * Used for minimal offset and Cards
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
    boxShadow: '0 0.0625rem 0.25rem rgba(31, 38, 46, 0.12), 0 0.125rem 0.5rem rgba(31, 38, 46, 0.08)';
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
    boxShadow: '0 0.125rem 0.5rem rgba(31, 38, 46, 0.12), 0 0.25rem 1rem rgba(31, 38, 46, 0.08)';
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
    boxShadow: '0 0.1875rem 0.75rem rgba(31, 38, 46, 0.12), 0 0.375rem 1.5rem rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 4
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
    boxShadow: '0 0.25rem 1rem rgba(31, 38, 46, 0.12), 0 0.5rem 2rem rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 5
   * Used for Popups, Toast Messages, Dialogs, Side Panels without opacity overlay behavior
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
    boxShadow: '0 0.3125rem 1.25rem rgba(31, 38, 46, 0.12), 0 0.625rem 2.5rem rgba(31, 38, 46, 0.08)';
  };
  /**
   * ### Depth 6
   * Used for components with opacity overlay behavior such as Modal or Side Panels
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
    boxShadow: '0 0.375rem 1.5rem rgba(31, 38, 46, 0.12), 0 0.75rem 3rem rgba(31, 38, 46, 0.08)';
  };
};

type ValueOf<T> = T[keyof T];
/** @deprecated ⚠️ `CanvasDepthValues` has been deprecated in a future major version. Please use our css var based [`depth tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-depth--docs) tokens. */
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
 * @deprecated ⚠️ `depth` has been deprecated in a future major version. Please use our css var based [`depth tokens`](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-depth--docs) tokens.
 */
export const depth: CanvasDepth = {
  none: {
    boxShadow: 'none',
  },
  1: {
    boxShadow:
      '0 0.0625rem 0.25rem rgba(31, 38, 46, 0.12), 0 0.125rem 0.5rem rgba(31, 38, 46, 0.08)',
  },
  2: {
    boxShadow: '0 0.125rem 0.5rem rgba(31, 38, 46, 0.12), 0 0.25rem 1rem rgba(31, 38, 46, 0.08)',
  },
  3: {
    boxShadow:
      '0 0.1875rem 0.75rem rgba(31, 38, 46, 0.12), 0 0.375rem 1.5rem rgba(31, 38, 46, 0.08)',
  },
  4: {
    boxShadow: '0 0.25rem 1rem rgba(31, 38, 46, 0.12), 0 0.5rem 2rem rgba(31, 38, 46, 0.08)',
  },
  5: {
    boxShadow:
      '0 0.3125rem 1.25rem rgba(31, 38, 46, 0.12), 0 0.625rem 2.5rem rgba(31, 38, 46, 0.08)',
  },
  6: {
    boxShadow: '0 0.375rem 1.5rem rgba(31, 38, 46, 0.12), 0 0.75rem 3rem rgba(31, 38, 46, 0.08)',
  },
};
