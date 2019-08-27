import SVGInjector from 'svg-injector';
import toSlug from 'to-slug-case';
import canvasColors from '@workday/canvas-colors-web';
import {pickForegroundColor} from '@workday/canvas-kit-react-common';
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

function sizeIcons(selector) {
  const icons = document.querySelectorAll(selector);

  icons.forEach(i => {
    const size = i.getAttribute('data-size');
    if (size) {
      i.style.height = `${size}px`;
      i.style.width = `${size}px`;
    }
  });
}

function circleIcons(selector) {
  const icons = document.querySelectorAll(selector);

  icons.forEach(i => {
    const circle = document.createElement('div');
    circle.setAttribute('class', 'wdc-icon-circle-container');

    const size = i.getAttribute('data-size') || 40;
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    i.style.height = `${size * 0.625}px`;
    i.style.width = `${size * 0.625}px`;

    let circleBgColor = i.getAttribute('data-circle-background') || 'soap300';
    circleBgColor = getColor(circleBgColor);
    circle.style.backgroundColor = circleBgColor;

    const iconColor = pickForegroundColor(circleBgColor, 'rgba(0,0,0,0.65)');
    i.setAttribute('data-fill-color', iconColor);
    i.setAttribute('data-accent-color', iconColor);

    circle.innerHTML = i.outerHTML;
    i.parentNode.replaceChild(circle, i);
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
    // Do not size system icon circles (they'll be sized later in circleIcons)
    sizeIcons('.wdc-icon:not([data-circle])');

    // Add markup and styling for system icon circles
    circleIcons('.wdc-icon[data-circle][data-category="system"]');

    // colorIcons must be called AFTER circleIcons (since circleIcons applies
    // coloring via the data-* attributes)
    colorIcons(selector);
  });
}

export default injectIcons;
