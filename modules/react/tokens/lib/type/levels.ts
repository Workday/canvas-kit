import {typeColors} from '@workday/canvas-colors-web';

import {CanvasFonts, fonts} from './fonts';
import {CanvasFontSizes, fontSizes} from './fontSizes';
import {CanvasFontWeights, fontWeights} from './fontWeights';

/** ### Canvas Type Hierarchy
 * [View Storybook Docs](https://workday.github.io/canvas-kit/)
 *
 * ---
 * The hierarchy is organized into five levels, which correspond to levels defined in Figma.
 *
 * - `display`: Intended for use in large heroes and images.
 * - `title`: Intended to be used for large page titles.
 * - `heading`: Intended to be used for headings and large text.
 * - `body`: Intended to be used for standard body text.
 * - `subtext`: Intended to be used for small subtext content or in tight spaces.
 *
 * Each level has three sizes: `small`, `medium`, and `large`.
 *
 * The type hierarchy tokens are recommended for most type usage.
 * These objects handle font sizes, weights, line heights, letter spacing, and color for you,
 * making it really simple to implement consistent type without much effort
 *
 * You can find more detailed information by inspecting individual levels and sizes.
 *
 * @example
 * ```tsx
 * import { type } from '@workday/canvas-kit-react/tokens';
 *
 * const Heading = () => (
 *   <h3 css={type.levels.heading.medium}>
 *     Heading Text
 *   </h3>
 * );
 * ```
 */
export const levels: CanvasTypeHierarchy = {
  display: {
    small: {
      fontFamily: fonts.normal,
      /** 64px converted to base-16 rem (4rem)*/
      fontSize: fontSizes[64],
      /** 80px converted to base-16 rem */
      lineHeight: '5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily: fonts.normal,
      /** 80px converted to base-16 rem (5rem)*/
      fontSize: fontSizes[80],
      /** 96px converted to base-16 rem (6rem) */
      lineHeight: '6rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily: fonts.normal,
      /** 96px converted to base-16 rem (6rem)*/
      fontSize: fontSizes[96],
      /** 112px converted to base-16 rem (7rem) */
      lineHeight: '7rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  title: {
    small: {
      fontFamily: fonts.normal,
      /** 40px converted to base-16 rem (2.5rem)*/
      fontSize: fontSizes[40],
      /** 48px converted to base-16 rem (3rem) */
      lineHeight: '3rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily: fonts.normal,
      /** 48px converted to base-16 rem (3rem)*/
      fontSize: fontSizes[48],
      /** 56px converted to base-16 rem (3.5rem) */
      lineHeight: '3.5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily: fonts.normal,
      /** 56px converted to base-16 rem (3.5rem)*/
      fontSize: fontSizes[56],
      /** 64px converted to base-16 rem (4rem) */
      lineHeight: '4rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  heading: {
    small: {
      fontFamily: fonts.normal,
      /** 24px converted to base-16 rem (1.5rem)*/
      fontSize: fontSizes[24],
      /** 32px converted to base-16 rem (2rem) */
      lineHeight: '2rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    medium: {
      fontFamily: fonts.normal,
      /** 28px converted to base-16 rem (1.75rem)*/
      fontSize: fontSizes[28],
      /** 36px converted to base-16 rem (2.25rem) */
      lineHeight: '2.25rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
    large: {
      fontFamily: fonts.normal,
      /** 32px converted to base-16 rem (2rem)*/
      fontSize: fontSizes[32],
      /** 40px converted to base-16 rem (2.5rem) */
      lineHeight: '2.5rem',
      fontWeight: fontWeights.bold,
      color: typeColors.heading,
    },
  },
  body: {
    small: {
      fontFamily: fonts.normal,
      /** 16px converted to base-16 rem (1rem)*/
      fontSize: fontSizes[16],
      /** 24px converted to base-16 rem (1.5rem) */
      lineHeight: '1.5rem',
      /** 0.16px converted to base-16 rem (0.01rem) */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    medium: {
      fontFamily: fonts.normal,
      /** 18px converted to base-16 rem (1.125rem)*/
      fontSize: fontSizes[18],
      /** 28px converted to base-16 rem (1.75rem) */
      lineHeight: '1.75rem',
      /** 0.16px converted to base-16 rem (0.01rem) */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    large: {
      fontFamily: fonts.normal,
      /** 20px converted to base-16 rem (1.25rem)*/
      fontSize: fontSizes[20],
      /** 28px converted to base-16 rem (1.75rem) */
      lineHeight: '1.75rem',
      /** 0.16px converted to base-16 rem (0.01rem) */
      letterSpacing: '0.01rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
  },
  subtext: {
    small: {
      fontFamily: fonts.normal,
      /** 10px converted to base-16 rem (0.625rem)*/
      fontSize: fontSizes[10],
      /** 16px converted to base-16 rem (1rem) */
      lineHeight: '1rem',
      /** 0.4px converted to base-16 rem (0.025rem) */
      letterSpacing: '0.025rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    medium: {
      fontFamily: fonts.normal,
      /** 12px converted to base-16 rem (0.75rem)*/
      fontSize: fontSizes[12],
      /** 16px converted to base-16 rem (1rem) */
      lineHeight: '1rem',
      /** 0.32px converted to base-16 rem (0.02rem) */
      letterSpacing: '0.02rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
    large: {
      fontFamily: fonts.normal,
      /** 14px converted to base-16 rem (0.875rem)*/
      fontSize: fontSizes[14],
      /** 20px converted to base-16 rem (1.25rem) */
      lineHeight: '1.25rem',
      /** 0.24px converted to base-16 rem (0.015rem) */
      letterSpacing: '0.015rem',
      fontWeight: fontWeights.regular,
      color: typeColors.body,
    },
  },
};

export type CanvasTypeHierarchy = {
  /** ### Display Type Level
   *
   * ---
   * The `display` level is intended to be used for use in large heroes and images.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size: 64px (4rem), font-weight: bold (700)
   * - `medium`: font-size: 80px (5rem), font-weight: bold (700)
   * - `large`: font-size: 96px (6rem), font-weight: bold (700)
   *
   * You can find more detailed styled information by inspecting individual sizes.
   *
   * Below is an example:
   *
   * @example
   * import { type } from '@workday/canvas-kit-labs-react/tokens'
   *
   * const Display = () => (
   *   <h1 css={type.levels.display.medium}>Display Text</h2>
   * );
   *
   */
  display: CanvasTypeDisplayLevel;
  /** ### Title Type Level
   * [View Storybook Docs](https://github.workday.io/canvas-kit/)
   *
   * ---
   * The `title` level is intended to be used for large page titles.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size: 40px (2.5rem), font-weight: bold (700)
   * - `medium`: font-size: 48px (3rem), font-weight: bold (700)
   * - `large`: font-size: 56px (3/5rem), font-weight: bold (700)
   *
   * You can find more detailed styled information by inspecting individual sizes.
   *
   * Below is an example:
   *
   * @example
   * import { type } from '@workday/canvas-kit-labs-react/tokens'
   *
   * const Title = () => (
   *   <h1 css={type.levels.title.medium}>Title Text</h2>
   * );
   *
   */
  title: CanvasTypeTitleLevel;
  /** ### Heading Type Level
   * [View Storybook Docs](https://github.workday.io/canvas-kit/)
   *
   * ---
   * The `heading` level is intended to be used for headings and large text.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size: 24px (1.5rem), font-weight: bold (700)
   * - `medium`: font-size: 28px (1.75rem), font-weight: bold (700)
   * - `large`: font-size: 32px (2rem), font-weight: bold (700)
   *
   * You can find more detailed styled information by inspecting individual sizes.
   *
   * Below is an example:
   *
   * @example
   * import { type } from '@workday/canvas-kit-labs-react/tokens'
   *
   * const Heading = () => (
   *   <h2 css={type.levels.heading.medium}>Heading Text</h2>
   * );
   *
   */
  heading: CanvasTypeHeadingLevel;
  /** ### Body Type Level
   * [View Storybook Docs](https://github.workday.io/canvas-kit/)
   *
   * ---
   * The `body` level is intended to be used for standard body text.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size: 16px (1rem), font-weight: regular (400)
   * - `medium`: font-size: 18px (1.125rem), font-weight: regular (400)
   * - `large`: font-size: 20px (1.25rem), font-weight: regular (400)
   *
   * You can find more detailed styled information by inspecting individual sizes.
   *
   * Below is an example:
   *
   * @example
   * import { type } from '@workday/canvas-kit-labs-react/tokens'
   *
   * const Body = () => (
   *   <p css={type.levels.body.medium}>Body text</p>
   * );
   *
   * */
  body: CanvasTypeBodyLevel;
  /** ### Subtext Type Level
   * [View Storybook Docs](https://github.workday.io/canvas-kit/)
   *
   * ---
   * The `subtext` level is intended to be used for small subtext content or in tight spaces.
   * It has three sizes: `small`, `medium`, and `large`.
   * Here's a quick reference for font-sizes and weights:
   *
   * - `small`: font-size: 10px (0.625rem), font-weight: regular (400)
   * - `medium`: font-size: 12px (0.75rem), font-weight: regular (400)
   * - `large`: font-size: 14px (0.875rem), font-weight: regular (400)
   *
   * You can find more detailed styled information by inspecting individual sizes.
   *
   * Below is an example:
   *
   * @example
   * import { type } from '@workday/canvas-kit-labs-react/tokens'
   *
   * const Subtext = () => (
   *   <span css={type.levels.subtext.medium}>subtext</h2>
   * );
   *
   * */
  subtext: CanvasTypeSubtextLevel;
};

type CanvasTypeDisplayLevel = {
  small: {
    fontFamily: CanvasFonts['normal'];
    /** 64px converted to base-16 rem (4rem)*/
    fontSize: CanvasFontSizes[64];
    /** 80px converted to base-16 rem */
    lineHeight: '5rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  medium: {
    fontFamily: CanvasFonts['normal'];
    /** 80px converted to base-16 rem (5rem)*/
    fontSize: CanvasFontSizes[80];
    /** 96px converted to base-16 rem (6rem) */
    lineHeight: '6rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  large: {
    fontFamily: CanvasFonts['normal'];
    /** 96px converted to base-16 rem (6rem)*/
    fontSize: CanvasFontSizes[96];
    /** 112px converted to base-16 rem (7rem) */
    lineHeight: '7rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
};

type CanvasTypeTitleLevel = {
  small: {
    fontFamily: CanvasFonts['normal'];
    /** 40px converted to base-16 rem (2.5rem)*/
    fontSize: CanvasFontSizes[40];
    /** 48px converted to base-16 rem (3rem) */
    lineHeight: '3rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  medium: {
    fontFamily: CanvasFonts['normal'];
    /** 48px converted to base-16 rem (3rem)*/
    fontSize: CanvasFontSizes[48];
    /** 56px converted to base-16 rem (3.5rem) */
    lineHeight: '3.5rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  large: {
    fontFamily: CanvasFonts['normal'];
    /** 56px converted to base-16 rem (3.5rem)*/
    fontSize: CanvasFontSizes[56];
    /** 64px converted to base-16 rem (4rem) */
    lineHeight: '4rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
};

type CanvasTypeHeadingLevel = {
  small: {
    fontFamily: CanvasFonts['normal'];
    /** 24px converted to base-16 rem (1.5rem)*/
    fontSize: CanvasFontSizes[24];
    /** 32px converted to base-16 rem (2rem) */
    lineHeight: '2rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  medium: {
    fontFamily: CanvasFonts['normal'];
    /** 28px converted to base-16 rem (1.75rem)*/
    fontSize: CanvasFontSizes[28];
    /** 36px converted to base-16 rem (2.25rem) */
    lineHeight: '2.25rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
  large: {
    fontFamily: CanvasFonts['normal'];
    /** 32px converted to base-16 rem (2rem)*/
    fontSize: CanvasFontSizes[32];
    /** 40px converted to base-16 rem (2.5rem) */
    lineHeight: '2.5rem';
    fontWeight: CanvasFontWeights['bold'];
    color: typeof typeColors.heading;
  };
};

type CanvasTypeBodyLevel = {
  small: {
    fontFamily: CanvasFonts['normal'];
    /** 16px converted to base-16 rem (1rem)*/
    fontSize: CanvasFontSizes[16];
    /** 24px converted to base-16 rem (1.5rem) */
    lineHeight: '1.5rem';
    /** 0.16px converted to base-16 rem (0.01rem) */
    letterSpacing: '0.01rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
  medium: {
    fontFamily: CanvasFonts['normal'];
    /** 18px converted to base-16 rem (1.125rem)*/
    fontSize: CanvasFontSizes[18];
    /** 28px converted to base-16 rem (1.75rem) */
    lineHeight: '1.75rem';
    /** 0.16px converted to base-16 rem (0.01rem) */
    letterSpacing: '0.01rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
  large: {
    fontFamily: CanvasFonts['normal'];
    /** 20px converted to base-16 rem (1.25rem)*/
    fontSize: CanvasFontSizes[20];
    /** 28px converted to base-16 rem (1.75rem) */
    lineHeight: '1.75rem';
    /** 0.16px converted to base-16 rem (0.01rem) */
    letterSpacing: '0.01rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
};

type CanvasTypeSubtextLevel = {
  small: {
    fontFamily: CanvasFonts['normal'];
    /** 10px converted to base-16 rem (0.625rem)*/
    fontSize: CanvasFontSizes[10];
    /** 16px converted to base-16 rem (1rem) */
    lineHeight: '1rem';
    /** 0.4px converted to base-16 rem (0.025rem) */
    letterSpacing: '0.025rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
  medium: {
    fontFamily: CanvasFonts['normal'];
    /** 12px converted to base-16 rem (0.75rem)*/
    fontSize: CanvasFontSizes[12];
    /** 16px converted to base-16 rem (1rem) */
    lineHeight: '1rem';
    /** 0.32px converted to base-16 rem (0.02rem) */
    letterSpacing: '0.02rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
  large: {
    fontFamily: CanvasFonts['normal'];
    /** 14px converted to base-16 rem (0.875rem)*/
    fontSize: CanvasFontSizes[14];
    /** 20px converted to base-16 rem (1.25rem) */
    lineHeight: '1.25rem';
    /** 0.24px converted to base-16 rem (0.015rem) */
    letterSpacing: '0.015rem';
    fontWeight: CanvasFontWeights['regular'];
    color: typeof typeColors.body;
  };
};
