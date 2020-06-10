import SVGInjector from 'svg-injector';
import toSlug from 'to-slug-case';
import canvasColors, {iconColors} from '@workday/canvas-colors-web';
import {appendStyle, getHue, getColor, pickForegroundColor} from './utils';

const cdnUrl = 'https://design.workdaycdn.com/beta/assets/web-icons';

const colorableKeys = {
  fill: 'data-fill-color',
  accent: 'data-accent-color',
  background: 'data-background-color',
  color: 'data-color',
  hover: 'data-hover-color',
  hoverFill: 'data-hover-fill-color',
  hoverAccent: 'data-hover-accent-color',
  hoverBackground: 'data-hover-background-color',
};

function getColorableFn(classNames, defaultColor = null) {
  return attrVal =>
    classNames.reduce((colors, className) => {
      if (attrVal) {
        // Assume valid color value if not in palette
        colors[className] = getColor(attrVal) || attrVal;
      } else if (defaultColor !== null) {
        colors[className] = defaultColor;
      }

      return colors;
    }, {});
}

const categories = {
  system: {
    path: 'system',
    version: '0.11.16', // TODO: Update to use 'latest' when available
    prefix: 'wd-icon',
    colorables: {
      [colorableKeys.color]: getColorableFn(
        ['.wd-icon-fill', '.wd-icon-accent'],
        iconColors.standard
      ),
      [colorableKeys.fill]: getColorableFn(['.wd-icon-fill']),
      [colorableKeys.accent]: getColorableFn(['.wd-icon-accent']),
      [colorableKeys.background]: getColorableFn(['.wd-icon-background'], 'transparent'),
    },
  },
  accent: {
    path: 'accent',
    version: '0.11.13', // TODO: Update to use 'latest' when available
    prefix: 'wd-accent',
    colorables: {
      [colorableKeys.color]: getColorableFn(['.color-500'], canvasColors.blueberry500),
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

function colorIconHoverClasses(iconSelector, classNames, fillColor) {
  if (fillColor) {
    classNames.forEach(className => {
      appendStyle(`
        ${iconSelector}:hover ${className} {
          fill: ${getColor(fillColor) || fillColor};
        }
      `);
    });
  }
}

function colorIcons(selector, iconRoot = document) {
  const icons = iconRoot.querySelectorAll(selector);

  icons.forEach(i => {
    const category = getIconCategory(i);

    Object.keys(category.colorables).forEach(attr => {
      const className = category.colorables[attr];
      if (typeof className === 'function') {
        const classnames = className(i.getAttribute(attr));
        Object.keys(classnames).forEach(cName => {
          colorIconClass(i, cName, classnames[cName]);
        });
        return;
      }

      const fillColor = i.getAttribute(attr);
      colorIconClass(i, className, fillColor);
    });
  });
}

function sizeIcons(selector, iconRoot = document) {
  const icons = iconRoot.querySelectorAll(selector);

  icons.forEach(i => {
    const size = i.getAttribute('data-size');
    if (size) {
      i.style.height = `${size}px`;
      i.style.width = `${size}px`;
    }
  });
}

function styleAccentIcons(selector, iconRoot = document) {
  // Style transparent accent icons
  const selectorFragment = '[data-category="accent"][data-transparent]';
  const transparentSelector = `${selector}${selectorFragment}`;
  const transparentIcons = iconRoot.querySelectorAll(transparentSelector);

  transparentIcons.forEach(i => {
    i.querySelector('.french-vanilla-100').style.fill = 'transparent';
  });
}

function styleSystemIcons(selector, iconRoot = document) {
  styleSystemIconCircles(selector, iconRoot);
  styleSystemIconHovers(selector, iconRoot);
}

function styleSystemIconCircles(selector, iconRoot = document) {
  const selectorFragment = '[data-category="system"][data-circle-background]';
  const circleSelector = `${selector}${selectorFragment}`;
  const iconCircles = iconRoot.querySelectorAll(circleSelector);

  iconCircles.forEach(i => {
    const circle = iconRoot.createElement('div');
    circle.setAttribute('class', 'wdc-icon-circle-container');

    const size = i.getAttribute('data-size') || 40;
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    i.style.height = `${size * 0.625}px`;
    i.style.width = `${size * 0.625}px`;

    let circleBgColor = i.getAttribute('data-circle-background');
    circleBgColor = circleBgColor === 'true' ? 'soap300' : circleBgColor;
    circleBgColor = getColor(circleBgColor) || circleBgColor;
    circle.style.backgroundColor = circleBgColor;

    const iconColor = pickForegroundColor(circleBgColor, 'rgba(0,0,0,0.65)');
    i.setAttribute(colorableKeys.fill, iconColor);
    i.setAttribute(colorableKeys.accent, iconColor);

    circle.innerHTML = i.outerHTML;
    i.parentNode.replaceChild(circle, i);
  });
}

function styleSystemIconHovers(selector, iconRoot = document) {
  const selectorFragment = '[data-category="system"]:not([data-circle-background])';
  const hoverableSelector = `${selector}${selectorFragment}`;

  // Style default hovers
  colorIconHoverClasses(hoverableSelector, ['.wd-icon-background'], 'transparent');
  colorIconHoverClasses(
    hoverableSelector,
    ['.wd-icon-accent', '.wd-icon-fill'],
    canvasColors.primary.iconHover
  );

  // Style individual hovers
  const hoverableSystemIcons = iconRoot.querySelectorAll(hoverableSelector);

  hoverableSystemIcons.forEach((i, index) => {
    const iconClassName = `hoverable-system-icon-${index}`;
    const iconSelector = `.${iconClassName}${selectorFragment}`;

    i.classList.add(iconClassName);

    colorIconHoverClasses(
      iconSelector,
      ['.wd-icon-accent', '.wd-icon-fill'],
      i.getAttribute(colorableKeys.hover)
    );
    colorIconHoverClasses(iconSelector, ['.wd-icon-fill'], i.getAttribute(colorableKeys.hoverFill));
    colorIconHoverClasses(
      iconSelector,
      ['.wd-icon-accent'],
      i.getAttribute(colorableKeys.hoverAccent)
    );
    colorIconHoverClasses(
      iconSelector,
      ['.wd-icon-background'],
      i.getAttribute(colorableKeys.hoverBackground)
    );
  });
}

function injectIcons(iconsPath = null, selector = '.wdc-icon', iconRoot = document) {
  const icons = iconRoot.querySelectorAll(selector);

  // Add data source
  icons.forEach(i => {
    const icon = getIcon(i.getAttribute('data-icon'), i.getAttribute('data-category'), iconsPath);

    i.setAttribute('data-src', icon);
  });

  SVGInjector(icons, {}, () => {
    sizeIcons(selector, iconRoot);

    styleAccentIcons(selector, iconRoot);
    styleSystemIcons(selector, iconRoot);

    // colorIcons must be called at the end of this block (since previous calls
    // in this block may have adjusted coloring)
    colorIcons(selector, iconRoot);
  });
}

export default injectIcons;
