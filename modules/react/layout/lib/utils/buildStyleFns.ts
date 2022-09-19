import {
  borderRadius as borderRadiusTokens,
  CanvasBorderRadiusKeys,
  colors as colorTokens,
  CanvasColor,
  depth as depthTokens,
  CanvasDepth,
  space as spaceTokens,
  CanvasSpaceKeys,
  type,
  CanvasTypeProperties,
} from '@workday/canvas-kit-react/tokens';
import _ from 'lodash';

export type StyleFnConfig = {
  name: string;
  properties: string[];
  system: 'color' | 'depth' | 'font' | 'fontSize' | 'fontWeight' | 'shape' | 'space' | 'none';
};

export type StyleFns = {
  [key: string]: (value: unknown) => {};
};

const getColor = (value: CanvasColor | (string & {})) => {
  return colorTokens[value] || value;
};

const getDepth = (value: keyof CanvasDepth) => {
  return depthTokens[value];
};

const getShape = (value: CanvasBorderRadiusKeys | string | number) => {
  return borderRadiusTokens[value as CanvasBorderRadiusKeys] || value;
};

const getSpace = (value: CanvasSpaceKeys | string | number) => {
  return spaceTokens[value as CanvasSpaceKeys] || value;
};

const getFont = (value: keyof CanvasTypeProperties['fontFamilies'] | string) => {
  return type.properties.fontFamilies[value as keyof CanvasTypeProperties['fontFamilies']] || value;
};

const getFontSize = (value: keyof CanvasTypeProperties['fontSizes'] | string) => {
  return type.properties.fontSizes[value as keyof CanvasTypeProperties['fontSizes']] || value;
};

const getFontWeight = (value: keyof CanvasTypeProperties['fontWeights'] | string) => {
  return type.properties.fontWeights[value as keyof CanvasTypeProperties['fontWeights']] || value;
};

export function buildStyleFns(styleFnConfigs: StyleFnConfig[]): StyleFns {
  return styleFnConfigs.reduce((styleFns = {}, styleFnConfig) => {
    const styleFn = (value: unknown) => {
      return styleFnConfig.properties.reduce((styles = {}, property: string) => {
        if (styleFnConfig.system === 'color') {
          return {...styles, [property]: getColor(value as CanvasColor | (string & {}))};
        }

        if (styleFnConfig.system === 'depth') {
          // Depth tokens return the style property (box-shadow) and the value
          const depthStyle = getDepth(value as keyof CanvasDepth);
          return {...styles, ...depthStyle};
        }

        if (styleFnConfig.system === 'font') {
          return {
            ...styles,
            [property]: getFont(value as keyof CanvasTypeProperties['fontFamilies'] | string),
          };
        }

        if (styleFnConfig.system === 'fontSize') {
          return {
            ...styles,
            [property]: getFontSize(value as keyof CanvasTypeProperties['fontSizes'] | string),
          };
        }

        if (styleFnConfig.system === 'fontWeight') {
          return {
            ...styles,
            [property]: getFontWeight(value as keyof CanvasTypeProperties['fontWeights'] | string),
          };
        }

        if (styleFnConfig.system === 'shape') {
          return {
            ...styles,
            [property]: getShape(value as CanvasBorderRadiusKeys | string | number),
          };
        }

        if (styleFnConfig.system === 'space') {
          return {...styles, [property]: getSpace(value as CanvasSpaceKeys | string | number)};
        }

        return {...styles, [property]: value};
      }, {});
    };

    return {...styleFns, [styleFnConfig.name]: styleFn};
  }, {});
}

export function buildStylePropFn<P extends {}>(styleFns: StyleFns) {
  return (props: P) => {
    let styles = {};
    for (const key in props) {
      if (key in props && key in styleFns) {
        const styleFn = styleFns[key];
        const value = props[key];
        const style = styleFn(value);
        styles = {...styles, ...style};
        continue;
      }
    }
    return styles;
  };
}
