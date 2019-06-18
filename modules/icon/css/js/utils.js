import canvasColors from '@workday/canvas-colors-web';

function getBrandingColors(colors) {
  const brandingColors = Object.keys(colors.gradients).map(c => `${c}500`);

  return Object.entries(colors)
    .filter(([colorName]) => brandingColors.includes(colorName))
    .reduce((result, [name, value]) => {
      const obj = {};
      obj[name.replace('500', '')] = value;
      return Object.assign({}, result, obj);
    }, {});
}

export const brandingColors = getBrandingColors(canvasColors);

export function getHue(color) {
  const hue = Object.entries(canvasColors).filter(
    ([colorName]) => color === colorName.replace(/[0-9]*$/, '')
  );

  if (hue.length > 0) {
    return hue.reduce((result, [name, value]) => {
      const obj = {};
      obj[name.replace(/^[a-zA-Z]*/g, '')] = value;
      return Object.assign({}, result, obj);
    });
  }

  return null;
}

export function getColor(color) {
  if (color === 'transparent' || color === null) return color;

  let findColor = color;

  if (!/[0-9]{3}$/.test(color)) {
    findColor = `${color}500`;
  }

  const foundColor = Object.entries(canvasColors).find(([colorName]) => colorName === findColor);

  if (!foundColor) return null;

  return foundColor[1];
}
