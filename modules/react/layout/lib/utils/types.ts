// We're temporarily creating these types from csstype
// to improve type completion until we move to csstype v3.

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
