// TODO: Consider using CSSType instead
type Globals = '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type GlobalsNumber = number | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset';
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';
type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';
type AlignItemsProperty = Globals | SelfPosition | 'baseline' | 'normal' | 'stretch';
type AlignContentProperty = Globals | ContentDistribution | ContentPosition | 'baseline' | 'normal';
type JustifyItemsProperty =
  | Globals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch';
type JustifyContentProperty =
  | Globals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right';
type FlexWrapProperty =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse';

type FlexDirectionProperty =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';
type JustifySelfProperty =
  | Globals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch';
type AlignSelfProperty = Globals | SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch';
export interface FlexProps {
  alignItems?: AlignItemsProperty;
  alignContent?: AlignContentProperty;
  display?: 'flex' | 'inline-flex';
  justifyItems?: JustifyItemsProperty;
  justifyContent?: JustifyContentProperty;
  flexWrap?: FlexWrapProperty;
  wrap?: FlexWrapProperty; // a helpful alias for flexWrap
  flexDirection?: FlexDirectionProperty;
  direction?: FlexDirectionProperty; // a helpful alias for flexDirection
  flex?: number | string;
  flexGrow?: number | string;
  grow?: number | string; // a helpful alias for flexGrow
  flexShrink?: number | string;
  shrink?: number | string; // a helpful alias for flexShrink
  flexBasis?: number | string;
  basis?: number | string; // a helpful alias for flexBasis
  justifySelf?: JustifySelfProperty;
  alignSelf?: AlignSelfProperty;
  order?: GlobalsNumber;
}

export const flex = {
  alignItems: 'alignItems',
  alignContent: 'alignContent',
  display: 'display',
  justifyItems: 'justifyItems',
  justifyContent: 'justifyContent',
  flexWrap: 'flexWrap',
  wrap: 'flexWrap',
  flexDirection: 'flexDirection',
  direction: 'flexDirection',
  flex: 'flex',
  flexGrow: 'flexGrow',
  grow: 'flexGrow',
  flexShrink: 'flexShrink',
  shrink: 'flexShrink',
  flexBasis: 'flexBasis',
  basis: 'basis',
  justifySelf: 'justifySelf',
  alignSelf: 'alignSelf',
  order: 'order',
};
