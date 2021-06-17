import {Globals, SelfPosition, ContentDistribution, ContentPosition} from 'csstype';

// We're temporarily creating these types from csstype
// to improve type completion until we move to csstype v3.

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
