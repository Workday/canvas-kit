import SVGInjector from 'svg-injector';
import toSlug from 'to-slug-case';
import canvasColors from '@workday/canvas-colors-web';
import {getHue, getColor} from './utils';

const cdnUrl = 'https://design.workdaycdn.com/beta/assets/web-icons';

const colorableKeys = {
  fill: 'data-fill-color',
  accent: 'data-accent-color',
  background: 'data-background-color',
  color: 'data-color',
};

function getColorableFn(className, defaultColor = null) {
  // Assume valid color value if not in palette
  return attrVal => ({[className]: getColor(attrVal) || attrVal || defaultColor});
}

const categories = {
  system: {
    path: 'system',
    version: '0.11.16', // TODO: Update to use 'latest' when available
    prefix: 'wd-icon',
    colorables: {
      [colorableKeys.fill]: getColorableFn('.wd-icon-fill', canvasColors.primary.iconStandard),
      [colorableKeys.accent]: getColorableFn('.wd-icon-accent', canvasColors.primary.iconStandard),
      [colorableKeys.background]: getColorableFn('.wd-icon-background', 'transparent'),
    },
  },
  accent: {
    path: 'accent',
    version: '0.11.13', // TODO: Update to use 'latest' when available
    prefix: 'wd-accent',
    colorables: {
      [colorableKeys.color]: getColorableFn('.color-500', canvasColors.blueberry500),
    },
  },
  applet: {
    path: 'applet',
    version: '0.12.0', // TODO: Update to use 'latest' when available
    prefix: 'wd-applet',
    colorables: {
      [colorableKeys.color]: attrVal => {
        const hue = getHue(attrVal) || getHue('blueberry');

        if (!hue) {
          throw new Error(`"${attrVal}" is not a valid applet color.`);
        }

        return {
          '.color-100': canvasColors.frenchVanilla100,
          '.color-200': hue[200],
          '.color-300': hue[300],
          '.color-400': hue[400],
          '.color-400-alpha-20': hue[400],
          '.color-500': hue[500],
        };
      },
    },
  },
};

function getIconCategory(elem) {
  return categories[elem.getAttribute('data-category')];
}

function getIcon(icon, category, iconsPath = null) {
  const categoryConfig = categories[category];
  const iconFileName = `${categoryConfig.prefix}-${toSlug(icon)}.svg`;

  if (iconsPath) {
    return `${iconsPath}/${categoryConfig.path}/${iconFileName}`;
  }

  return `${cdnUrl}/${categoryConfig.path}@${categoryConfig.version}/svg/${iconFileName}`;
}

function colorIconClass(icon, className, fillColor) {
  icon.querySelectorAll(className).forEach(f => {
    f.setAttribute('fill', fillColor); // eslint-disable-line no-param-reassign
  });
}

function colorIcons(selector) {
  const icons = document.querySelectorAll(selector);

  icons.forEach(i => {
    const category = getIconCategory(i);

    Object.entries(category.colorables).forEach(([attr, className]) => {
      if (typeof className === 'function') {
        Object.entries(className(i.getAttribute(attr))).forEach(([cName, color]) => {
          colorIconClass(i, cName, color);
        });
        return;
      }

      const fillColor = i.getAttribute(attr);
      colorIconClass(i, className, fillColor);
    });
  });
}

function injectIcons(iconsPath = null, selector = '.wdc-icon') {
  const icons = document.querySelectorAll(selector);

  // Add data source
  icons.forEach(i => {
    const icon = getIcon(i.getAttribute('data-icon'), i.getAttribute('data-category'), iconsPath);

    i.setAttribute('data-src', icon);
  });

  SVGInjector(icons, {}, () => {
    colorIcons(selector);
  });
}

export default injectIcons;
