import {Property} from 'csstype';

import {buildStyleFns, buildStylePropFn, StyleFnConfig} from './buildStyleFns';

/** style props to for other CSS properties */
export type OtherStyleProps = {
  /** sets CSS animation property */
  animation?: Property.Animation;
  /** sets CSS appearance property */
  appearance?: Property.Appearance;
  /** sets CSS box-sizing property */
  boxSizing?: Property.BoxSizing;
  /** sets CSS content property */
  content?: Property.Content;
  /** sets CSS cursor property */
  cursor?: Property.Cursor;
  /** sets CSS fill property */
  fill?: Property.Fill;
  /** sets CSS float property */
  float?: Property.Float;
  /** sets CSS object-fit property */
  objectFit?: Property.ObjectFit;
  /** sets CSS object-position property */
  objectPosition?: Property.ObjectPosition;
  /** sets CSS outline property */
  outline?: Property.Outline;
  /** sets CSS overflow-wrap property */
  overflowWrap?: Property.OverflowWrap;
  /** sets CSS pointer-events property */
  pointerEvents?: Property.PointerEvents;
  /** sets CSS resize property */
  resize?: Property.Resize;
  /** sets CSS stroke property */
  stroke?: Property.Stroke;
  /** sets CSS transform property */
  transform?: Property.Transform;
  /** sets CSS transform-origin property */
  transformOrigin?: Property.TransformOrigin;
  /** sets CSS transition property */
  transition?: Property.Transition;
  /** sets CSS user-select property */
  userSelect?: Property.UserSelect;
  /** sets CSS visibility property */
  visibility?: Property.Visibility;
};

const otherStyleFnConfigs: StyleFnConfig[] = [
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
    name: 'transformOrigin',
    properties: ['transformOrigin'],
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
