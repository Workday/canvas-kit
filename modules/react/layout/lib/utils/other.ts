import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for other CSS properties */
export type OtherStyleProps = {
  /** sets [CSS animation property](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) */
  animation?: Property.Animation;
  /** sets [CSS appearance property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) */
  appearance?: Property.Appearance;
  /** sets [CSS box-sizing property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) */
  boxSizing?: Property.BoxSizing;
  /** sets [CSS content property](https://developer.mozilla.org/en-US/docs/Web/CSS/content) */
  content?: Property.Content;
  /** sets [CSS cursor property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) */
  cursor?: Property.Cursor;
  /** sets [CSS fill property](https://developer.mozilla.org/en-US/docs/Web/CSS/fill) */
  fill?: Property.Fill;
  /** sets [CSS float property](https://developer.mozilla.org/en-US/docs/Web/CSS/float) */
  float?: Property.Float;
  /** sets [CSS object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) */
  objectFit?: Property.ObjectFit;
  /** sets [CSS object-position property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) */
  objectPosition?: Property.ObjectPosition;
  /** sets [CSS opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) */
  opacity?: Property.Opacity;
  /** sets [CSS outline property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline) */
  outline?: Property.Outline;
  /** sets [CSS outline-offset property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset) */
  outlineOffset?: Property.OutlineOffset;
  /** sets [CSS overflow-wrap property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap) */
  overflowWrap?: Property.OverflowWrap;
  /** sets [CSS pointer-events property](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) */
  pointerEvents?: Property.PointerEvents;
  /** sets [CSS resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) */
  resize?: Property.Resize;
  /** sets [CSS scroll margin property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin) */
  scrollMargin?: Property.ScrollMargin;
  /** sets [CSS scroll margin bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom) */
  scrollMarginBottom?: Property.ScrollMarginBottom;
  /** sets [CSS scroll margin top property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top) */
  scrollMarginTop?: Property.ScrollMarginTop;
  /** sets [CSS scroll margin inline start property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start) */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart;
  /** sets [CSS scroll margin inline end property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end) */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd;
  /** sets [CSS scroll padding property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) */
  scrollPadding?: Property.ScrollPadding;
  /** sets [CSS scroll padding bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom) */
  scrollPaddingBottom?: Property.ScrollPaddingBottom;
  /** sets [CSS scroll padding top property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top) */
  scrollPaddingTop?: Property.ScrollPaddingTop;
  /** sets [CSS scroll padding inline start property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start) */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart;
  /** sets [CSS scroll padding inline end property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end) */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd;
  /** sets [CSS scroll snap align property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) */
  scrollSnapAlign?: Property.ScrollSnapAlign;
  /** sets [CSS scroll snap stop property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) */
  scrollSnapStop?: Property.ScrollSnapStop;
  /** sets [CSS scroll snap type property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) */
  scrollSnapType?: Property.ScrollSnapType;
  /** sets [CSS stroke property](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke) */
  stroke?: Property.Stroke;
  /** sets [CSS transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) */
  transform?: Property.Transform;
  /** sets [CSS transition property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) */
  transition?: Property.Transition;
  /** sets [CSS user-select property](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) */
  userSelect?: Property.UserSelect;
  /** sets [CSS visibility property](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility) */
  visibility?: Property.Visibility;
};

export const otherStyleFnConfigs: StyleFnConfig[] = [
  {
    name: 'animation',
    properties: ['animation'],
    system: 'none',
  },
  {
    name: 'appearance',
    properties: ['appearance'],
    system: 'none',
  },
  {
    name: 'boxSizing',
    properties: ['boxSizing'],
    system: 'none',
  },
  {
    name: 'content',
    properties: ['content'],
    system: 'none',
  },
  {
    name: 'cursor',
    properties: ['cursor'],
    system: 'none',
  },
  {
    name: 'fill',
    properties: ['fill'],
    system: 'none',
  },
  {
    name: 'float',
    properties: ['float'],
    system: 'none',
  },
  {
    name: 'objectFit',
    properties: ['objectFit'],
    system: 'none',
  },
  {
    name: 'objectPosition',
    properties: ['objectPosition'],
    system: 'none',
  },
  {
    name: 'outline',
    properties: ['outline'],
    system: 'none',
  },
  {
    name: 'outlineOffset',
    properties: ['outlineOffset'],
    system: 'none',
  },
  {
    name: 'overflowWrap',
    properties: ['overflowWrap'],
    system: 'none',
  },
  {
    name: 'pointerEvents',
    properties: ['pointerEvents'],
    system: 'none',
  },
  {
    name: 'resize',
    properties: ['resize'],
    system: 'none',
  },
  {
    name: 'stroke',
    properties: ['stroke'],
    system: 'none',
  },
  {
    name: 'transform',
    properties: ['transform'],
    system: 'none',
  },
  {
    name: 'transition',
    properties: ['transition'],
    system: 'none',
  },
  {
    name: 'userSelect',
    properties: ['userSelect'],
    system: 'none',
  },
  {
    name: 'visibility',
    properties: ['visibility'],
    system: 'none',
  },
];

export const otherStyleFns = buildStyleFns(otherStyleFnConfigs);

export const other = buildStylePropFn<OtherStyleProps>(otherStyleFns);
