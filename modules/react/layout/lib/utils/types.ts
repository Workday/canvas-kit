import {
  Globals,
  GlobalsNumber,
  SelfPosition,
  DisplayOutside,
  DisplayInside,
  DisplayInternal,
  DisplayLegacy,
  LineStyle,
  ContentDistribution,
  ContentPosition,
} from 'csstype';

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

//Grid
export type PropertyGridTemplate = Globals | string;

export type PropertyGridTemplateColumns = Globals | 'max-content' | 'min-content' | string;

export type PropertyGridTemplateRows = Globals | 'max-content' | 'min-content' | string;

export type PropertyGridGap = Globals | string;

export type PropertyGridColumnsGap = Globals | string;

export type PropertyGridRowGap = Globals | string;

export type PropertyPlaceItems =
  | Globals
  | 'baseline'
  | 'center'
  | 'end'
  | 'normal'
  | 'self-start'
  | 'self-end'
  | 'start'
  | 'stretch'
  | string;

export type PropertyAutoColumns = Globals | 'max-content' | 'min-content' | string;

export type PropertyAutoRows = Globals | 'max-content' | 'min-content' | string;

export type PropertyGridAutoFlow = Globals | 'row' | 'column' | 'dense';

export type PropertyGrid = Globals | string;

export type PropertyColumnStart = Globals | 'none' | 'auto' | string;

export type PropertyColumnEnd = Globals | 'none' | 'auto' | string;

export type PropertyRowStart = Globals | 'none' | 'auto' | string;

export type PropertyRowEnd = Globals | 'none' | 'auto' | string;

export type PropertyGridColumn = Globals | 'none' | 'auto' | string;

export type PropertyGridRow = Globals | 'none' | 'auto' | string;

export type PropertyGridArea = Globals | 'none' | 'auto' | string;

export type PropertyPlaceSelf =
  | Globals
  | 'baseline'
  | 'center'
  | 'end'
  | 'normal'
  | 'self-start'
  | 'self-end'
  | 'start'
  | 'stretch';
