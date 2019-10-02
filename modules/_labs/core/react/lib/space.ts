import {CSSObject} from 'create-emotion';

export function stripUnit(value: string): number {
  return parseInt(`${value}`.replace('px', ''), 10);
}

export interface SpaceStyle {
  prop: string;
  direction: Array<string>;
}

const margin: SpaceStyle = {
  prop: 'margin',
  direction: ['Top', 'Right', 'Bottom', 'Left'],
};

const marginTop: SpaceStyle = {
  prop: 'margin',
  direction: ['Top'],
};

const marginRight: SpaceStyle = {
  prop: 'margin',
  direction: ['Right'],
};

const marginBottom: SpaceStyle = {
  prop: 'margin',
  direction: ['Bottom'],
};

const marginLeft: SpaceStyle = {
  prop: 'margin',
  direction: ['Left'],
};

const marginX: SpaceStyle = {
  prop: 'margin',
  direction: ['Left', 'Right'],
};

const marginY: SpaceStyle = {
  prop: 'margin',
  direction: ['Top', 'Bottom'],
};

const padding: SpaceStyle = {
  prop: 'padding',
  direction: ['Top', 'Right', 'Bottom', 'Left'],
};

const paddingTop: SpaceStyle = {
  prop: 'padding',
  direction: ['Top'],
};

const paddingRight: SpaceStyle = {
  prop: 'padding',
  direction: ['Right'],
};

const paddingBottom: SpaceStyle = {
  prop: 'padding',
  direction: ['Bottom'],
};

const paddingLeft: SpaceStyle = {
  prop: 'padding',
  direction: ['Left'],
};

const paddingX: SpaceStyle = {
  prop: 'padding',
  direction: ['Left', 'Right'],
};

const paddingY: SpaceStyle = {
  prop: 'padding',
  direction: ['Top', 'Bottom'],
};

const spacingProps = {
  m: margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginX,
  my: marginY,
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingX,
  py: paddingY,
};

type SpaceProp = keyof typeof spacingProps;
export type StyleValueTypes = string | number;
export type SpaceProps = {[p in SpaceProp]?: StyleValueTypes};

export const space = (props: SpaceProps) => {
  const spacingReg = /^[mp][trblxy]?$/;
  const keys = Object.keys(props)
    .filter(key => spacingReg.test(key))
    .sort();

  const styles: CSSObject = {};

  keys.forEach((key: SpaceProp) => {
    const value = props[key];

    if (typeof value === 'undefined') {
      return;
    }

    const numericValue = typeof value === 'string' ? stripUnit(value) : value;
    const style = spacingProps[key];

    style.direction.forEach(d => {
      const cssAttribute = `${style.prop}${d}`;

      styles[cssAttribute] = `${numericValue}px`;
    });
  });

  return styles;
};

export default space;
