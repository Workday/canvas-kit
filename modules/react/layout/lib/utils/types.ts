import {FontFamilyTokens, FontSizeTokens, FontWeightTokens} from './font';

// We're temporarily creating these types from csstype
// to improve type completion until we move to csstype v3.
type AbsoluteSize =
  | 'large'
  | 'medium'
  | 'small'
  | 'x-large'
  | 'x-small'
  | 'xx-large'
  | 'xx-small'
  | 'xxx-large';

type NamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'transparent'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen';

type Color = NamedColor | 'currentcolor' | string;
type Globals = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type GlobalsNumber = Globals | number;

type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

type DisplayOutside = 'block' | 'inline' | 'run-in';

type DisplayInside =
  | '-ms-flexbox'
  | '-ms-grid'
  | '-webkit-flex'
  | 'flex'
  | 'flow'
  | 'flow-root'
  | 'grid'
  | 'ruby'
  | 'table';

type DisplayInternal =
  | 'ruby-base'
  | 'ruby-base-container'
  | 'ruby-text'
  | 'ruby-text-container'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row'
  | 'table-row-group';

type DisplayLegacy =
  | '-ms-inline-flexbox'
  | '-ms-inline-grid'
  | '-webkit-inline-flex'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-list-item'
  | 'inline-table';

type LineStyle =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'hidden'
  | 'inset'
  | 'none'
  | 'outset'
  | 'ridge'
  | 'solid';

type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';

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
