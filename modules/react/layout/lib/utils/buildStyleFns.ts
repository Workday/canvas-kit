import {
  borderRadius as borderRadiusTokens,
  colors as colorTokens,
  depth as depthTokens,
  space as spaceTokens,
  type as typeTokens,
} from '@workday/canvas-kit-react/tokens';

import {CanvasSystemPropValues, SystemPropNames, SystemPropValues} from './systemProps';

export type StyleFnConfig = {
  name: string;
  properties: string[];
  system: SystemPropNames | 'none';
};

export type StyleFns = {
  [key: string]: (value: unknown) => {};
};

const getColor = (value: SystemPropValues['color']) => {
  return colorTokens[value] || value;
};

const getDepth = (value: SystemPropValues['depth']) => {
  return depthTokens[value];
};

const getShape = (value: SystemPropValues['shape']) => {
  return borderRadiusTokens[value as CanvasSystemPropValues['shape']] || value;
};

const getSpace = (value: SystemPropValues['space']) => {
  return spaceTokens[value as CanvasSystemPropValues['space']] || value;
};

const getFont = (value: SystemPropValues['font']) => {
  return typeTokens.properties.fontFamilies[value as CanvasSystemPropValues['font']] || value;
};

const getFontSize = (value: SystemPropValues['fontSize'] | string) => {
  return typeTokens.properties.fontSizes[value as CanvasSystemPropValues['fontSize']] || value;
};

const getFontWeight = (value: SystemPropValues['fontWeight'] | string) => {
  return typeTokens.properties.fontWeights[value as CanvasSystemPropValues['fontWeight']] || value;
};

export function buildStyleFns(styleFnConfigs: StyleFnConfig[]): StyleFns {
  return styleFnConfigs.reduce((styleFns = {}, styleFnConfig) => {
    const styleFn = (value: unknown) => {
      return styleFnConfig.properties.reduce((styles = {}, property: string) => {
        if (styleFnConfig.system === 'color') {
          return {...styles, [property]: getColor(value as SystemPropValues['color'])};
        }

        if (styleFnConfig.system === 'depth') {
          // Depth tokens return the style property (box-shadow) and the value
          const depthStyle = getDepth(value as SystemPropValues['depth']);
          return {...styles, ...depthStyle};
        }

        if (styleFnConfig.system === 'font') {
          return {
            ...styles,
            [property]: getFont(value as SystemPropValues['font']),
          };
        }

        if (styleFnConfig.system === 'fontSize') {
          return {
            ...styles,
            [property]: getFontSize(value as SystemPropValues['fontSize']),
          };
        }

        if (styleFnConfig.system === 'fontWeight') {
          return {
            ...styles,
            [property]: getFontWeight(value as SystemPropValues['fontWeight']),
          };
        }

        if (styleFnConfig.system === 'shape') {
          return {
            ...styles,
            [property]: getShape(value as SystemPropValues['shape']),
          };
        }

        if (styleFnConfig.system === 'space') {
          return {...styles, [property]: getSpace(value as SystemPropValues['space'])};
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
