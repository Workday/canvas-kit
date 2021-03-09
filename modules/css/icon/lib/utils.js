import canvasColors, {gradients} from '@workday/canvas-colors-web';

function getBrandingColors() {
  const brandingColors = Object.keys(gradients).map(c => `${c}500`);

  Object.keys(canvasColors)
    .filter(colorName => brandingColors.includes(colorName))
    .reduce((result, name) => {
      const obj = {};
      obj[name.replace('500', '')] = canvasColors[name];
      return {
        ...result,
        ...obj,
      };
    }, {});
}

export const brandingColors = getBrandingColors();

export function getHue(color) {
  const hue = Object.keys(canvasColors).filter(
    colorName => color === colorName.replace(/[0-9]*$/, '')
  );

  if (hue.length > 0) {
    return hue.reduce((result, name) => {
      const obj = {};
      obj[name.replace(/^[a-zA-Z]*/g, '')] = canvasColors[name];
      return {
        ...result,
        ...obj,
      };
    });
  }

  return null;
}

export function getColor(color) {
  if (color === 'transparent' || color === null) {
    return color;
  }

  let findColor = color;

  if (!/[0-9]{3}$/.test(color)) {
    findColor = `${color}500`;
  }
  const foundColor = canvasColors[findColor];

  return foundColor ? foundColor : null;
}

export function appendStyle(css) {
  const style = document.createElement('style');

  if (style.styleSheet) {
    // Required for IE8 and below
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
}

/**
 * The utility functions below are lifted from canvas-kit-react-common
 * (colorUtils). We've copied them here rather than adding
 * canvas-kit-react-common as a dependency (and thereby
 * introducing a number of react dependencies into the CSS kit).
 */

// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
function expandHex(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expandHex(hex));
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 *
 * Chooses luminance color depending on the rgb value of the background color.
 * Eventually should be replaced by by Chroma 2.0
 */
export function pickForegroundColor(
  background,
  darkColor = canvasColors.blackPepper600,
  lightColor = canvasColors.frenchVanilla100
) {
  const rgbColor = hexToRgb(background);
  if (rgbColor) {
    const r = rgbColor.r;
    const g = rgbColor.g;
    const b = rgbColor.b;
    /** Based on : https://www.w3.org/TR/WCAG20-TECHS/G18.html */
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
  } else {
    return;
  }
}
