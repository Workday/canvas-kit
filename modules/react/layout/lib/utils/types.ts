import {
  AbsoluteSize,
  ContentDistribution,
  ContentPosition,
  Color,
  Globals,
  GlobalsNumber,
  SelfPosition,
  DisplayOutside,
  DisplayInside,
  DisplayInternal,
  DisplayLegacy,
  LineStyle,
} from 'csstype';
import {FontFamilyTokens, FontSizeTokens, FontWeightTokens} from './font';

// We're temporarily creating these types from csstype
// to improve type completion until we move to csstype v3.

// Border
export type PropertyBorder = Globals | LineStyle | (string & {});

// Flex Item
export type PropertyJustifySelf =
  | Globals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {});

export type PropertyAlignSelf =
  | Globals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {});

export type PropertyOrder = GlobalsNumber;

// Layout
export type PropertyDisplay =
  | Globals
  | DisplayOutside
  | DisplayInside
  | DisplayInternal
  | DisplayLegacy
  | 'contents'
  | 'list-item'
  | 'none'
  | (string & {});

export type PropertyListStyle = Globals | 'inside' | 'none' | 'outside' | (string & {});

export type PropertyOverflow =
  | Globals
  | '-moz-hidden-unscrollable'
  | 'auto'
  | 'clip'
  | 'hidden'
  | 'scroll'
  | 'visible'
  | (string & {});

export type PropertyOverflowX =
  | Globals
  | '-moz-hidden-unscrollable'
  | 'auto'
  | 'clip'
  | 'hidden'
  | 'scroll'
  | 'visible';

export type PropertyOverflowY =
  | Globals
  | '-moz-hidden-unscrollable'
  | 'auto'
  | 'clip'
  | 'hidden'
  | 'scroll'
  | 'visible';

export type PropertyVerticalAlign =
  | Globals
  | 'baseline'
  | 'bottom'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top'
  | (string & {});

// Position
export type PropertyPosition =
  | Globals
  | '-webkit-sticky'
  | 'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky';

export type PropertyZIndex = GlobalsNumber | 'auto';

// Flex
export type PropertyAlignItems =
  | Globals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {});

export type PropertyAlignContent =
  | Globals
  | ContentDistribution
  | ContentPosition
  | 'baseline'
  | 'normal'
  | (string & {});

export type PropertyJustifyItems =
  | Globals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {});

export type PropertyJustifyContent =
  | Globals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {});

export type PropertyFlexWrap = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';

export type PropertyFlexDirection = Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse';

/* Font Props */
export type FontFamily = Globals | FontFamilyTokens | string;

export type FontSize = Globals | FontSizeTokens | AbsoluteSize | 'larger' | 'smaller' | string;

export type FontStyle = Globals | 'italic' | 'normal' | 'oblique' | string;

export type FontWeight =
  | Globals
  | FontWeightTokens
  | number
  | 'bold'
  | 'normal'
  | 'bolder'
  | 'lighter';

/* Text Props */

export type TextAlign =
  | Globals
  | 'center'
  | 'end'
  | 'justify'
  | 'left'
  | 'match-parent'
  | 'right'
  | 'start';

export type TextDecoration =
  | Globals
  | Color
  | 'auto'
  | 'blink'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'from-font'
  | 'grammar-error'
  | 'line-through'
  | 'none'
  | 'overline'
  | 'solid'
  | 'spelling-error'
  | 'underline'
  | 'wavy'
  | string;

export type TextTransform =
  | Globals
  | 'capitalize'
  | 'full-size-kana'
  | 'full-width'
  | 'lowercase'
  | 'none'
  | 'uppercase';

export type TextShadow = Globals | 'none' | string;

export type LineHeight = Globals | 'normal' | string | number;

export type LetterSpacing = Globals | 'normal' | string;

export type WhiteSpace =
  | Globals
  | '-moz-pre-wrap'
  | 'break-spaces'
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap';

export type WordBreak = Globals | 'break-all' | 'break-word' | 'keep-all' | 'normal';
