import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/**
 * style props to for other CSS properties
 * @deprecated
 */
export type OtherStyleProps = {
  /** sets [CSS animation property](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
   * @deprecated
   */
  animation?: Property.Animation;
  /** sets [CSS appearance property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
   * @deprecated
   */
  appearance?: Property.Appearance;
  /** sets [CSS box-sizing property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
   * @deprecated
   */
  boxSizing?: Property.BoxSizing;
  /** sets [CSS content property](https://developer.mozilla.org/en-US/docs/Web/CSS/content)
   * @deprecated
   */
  content?: Property.Content;
  /** sets [CSS cursor property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
   * @deprecated
   */
  cursor?: Property.Cursor;
  /** sets [CSS fill property](https://developer.mozilla.org/en-US/docs/Web/CSS/fill)
   * @deprecated
   */
  fill?: Property.Fill;
  /** sets [CSS float property](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
   * @deprecated
   */
  float?: Property.Float;
  /** sets [CSS object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   * @deprecated
   */
  objectFit?: Property.ObjectFit;
  /** sets [CSS object-position property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
   * @deprecated
   */
  objectPosition?: Property.ObjectPosition;
  /** sets [CSS opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   * @deprecated
   */
  opacity?: Property.Opacity;
  /** sets [CSS outline property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
   * @deprecated
   */
  outline?: Property.Outline;
  /** sets [CSS outline-offset property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset)
   * @deprecated
   */
  outlineOffset?: Property.OutlineOffset;
  /** sets [CSS overflow-wrap property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
   * @deprecated
   */
  overflowWrap?: Property.OverflowWrap;
  /** sets [CSS pointer-events property](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
   * @deprecated
   */
  pointerEvents?: Property.PointerEvents;
  /** sets [CSS resize property](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
   * @deprecated
   */
  resize?: Property.Resize;
  /** sets [CSS scroll margin property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin)
   * @deprecated
   */
  scrollMargin?: Property.ScrollMargin;
  /** sets [CSS scroll margin bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom)
   * @deprecated
   */
  scrollMarginBottom?: Property.ScrollMarginBottom;
  /** sets [CSS scroll margin top property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top)
   * @deprecated
   */
  scrollMarginTop?: Property.ScrollMarginTop;
  /** sets [CSS scroll margin inline start property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start)
   * @deprecated
   */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart;
  /** sets [CSS scroll margin inline end property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end)
   * @deprecated
   */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd;
  /** sets [CSS scroll padding property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)
   * @deprecated
   */
  scrollPadding?: Property.ScrollPadding;
  /** sets [CSS scroll padding bottom property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom)
   * @deprecated
   */
  scrollPaddingBottom?: Property.ScrollPaddingBottom;
  /** sets [CSS scroll padding top property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top)
   * @deprecated
   */
  scrollPaddingTop?: Property.ScrollPaddingTop;
  /** sets [CSS scroll padding inline start property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start)
   * @deprecated
   */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart;
  /** sets [CSS scroll padding inline end property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end)
   * @deprecated
   */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd;
  /** sets [CSS scroll snap align property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align)
   * @deprecated
   */
  scrollSnapAlign?: Property.ScrollSnapAlign;
  /** sets [CSS scroll snap stop property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop)
   * @deprecated
   */
  scrollSnapStop?: Property.ScrollSnapStop;
  /** sets [CSS scroll snap type property](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type)
   * @deprecated
   */
  scrollSnapType?: Property.ScrollSnapType;
  /** sets [CSS stroke property](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke)
   * @deprecated
   */
  stroke?: Property.Stroke;
  /** sets [CSS transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
   * @deprecated
   */
  transform?: Property.Transform;
  /** sets [CSS transition property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
   * @deprecated
   */
  transition?: Property.Transition;
  /** sets [CSS user-select property](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
   * @deprecated
   */
  userSelect?: Property.UserSelect;
  /** sets [CSS visibility property](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
   * @deprecated
   */
  visibility?: Property.Visibility;
};

/** @deprecated */
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

/** @deprecated */
export const otherStyleFns = buildStyleFns(otherStyleFnConfigs);

/** @deprecated */
export const other = buildStylePropFn<OtherStyleProps>(otherStyleFns);
