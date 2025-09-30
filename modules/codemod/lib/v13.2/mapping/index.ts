import {generateLevelTokens} from '../utils/generateLevelTokens';

const typeLevelsMap = {
  subtext: {
    small: generateLevelTokens(['subtext', 'small']),
    medium: generateLevelTokens(['subtext', 'medium']),
    large: generateLevelTokens(['subtext', 'large']),
  },
  body: {
    small: generateLevelTokens(['body', 'small']),
    medium: generateLevelTokens(['body', 'medium']),
    large: generateLevelTokens(['body', 'large']),
  },
  heading: {
    small: generateLevelTokens(['heading', 'small']),
    medium: generateLevelTokens(['heading', 'medium']),
    large: generateLevelTokens(['heading', 'large']),
  },
  title: {
    small: generateLevelTokens(['title', 'small']),
    medium: generateLevelTokens(['title', 'medium']),
    large: generateLevelTokens(['title', 'large']),
  },
};

const shapeMap = {
  zero: 'zero',
  s: 'half',
  m: 'x1',
  l: 'x2',
  circle: 'round',
};

const spaceMap = {
  zero: 'zero',
  xxxs: 'x1',
  xxs: 'x2',
  xs: 'x3',
  s: 'x4',
  m: 'x6',
  l: 'x8',
  xl: 'x10',
  xxl: 'x16',
  xxxl: 'x20',
};

const typeMap = {
  fontFamilies: {
    name: 'fontFamily',
    values: {
      default: 'default',
      monospace: 'mono',
    },
  },
  fontSizes: {
    name: 'fontSize',
    values: {
      10: 'subtext.small',
      12: 'subtext.medium',
      14: 'subtext.large',
      16: 'body.small',
      18: 'body.medium',
      20: 'body.large',
      24: 'heading.small',
      28: 'heading.medium',
      32: 'heading.large',
      40: 'title.small',
      48: 'title.medium',
      56: 'title.large',
    },
  },
  fontWeights: {
    name: 'fontWeight',
    values: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold',
    },
  },
  levels: {
    name: 'type',
    values: typeLevelsMap,
  },
};

export const mapping = {
  colors: {
    type: 'base',
    name: 'colors',
  },
  borderRadius: {
    name: 'shape',
    type: 'system',
    keys: shapeMap,
  },
  space: {
    name: 'space',
    type: 'system',
    keys: spaceMap,
  },
  type: {
    type: 'system',
    name: 'type',
    keys: typeMap,
  },
  depth: {
    type: 'system',
    name: 'depth',
    keys: {},
  },
} as const;

export const systemColors = {
  'background,backgroundColor,backgroundColorHover,backgroundColorFocus,backgroundColorActive': {
    blackPepper400: 'system.color.bg.contrast.default',
    blackPepper500: 'system.color.bg.contrast.strong',
    blueberry200: 'system.color.bg.primary.soft',
    blueberry400: 'system.color.bg.primary.default',
    blueberry500: 'system.color.bg.primary.strong',
    blueberry600: 'system.color.bg.primary.stronger',
    cantaloupe100: 'system.color.bg.caution.softer',
    cantaloupe400: 'system.color.bg.caution.default',
    cantaloupe500: 'system.color.bg.caution.strong',
    cantaloupe600: 'system.color.bg.caution.stronger',
    cinnamon100: 'system.color.bg.critical.softer',
    cinnamon500: 'system.color.bg.critical.default',
    cinnamon600: 'system.color.bg.critical.strong',
    frenchVanilla100: 'system.color.bg.default',
    greenApple100: 'system.color.bg.positive.softer',
    greenApple400: 'system.color.bg.positive.default',
    greenApple500: 'system.color.bg.positive.strong',
    greenApple600: 'system.color.bg.positive.stronger',
    licorice100: 'system.color.bg.muted.softer',
    licorice200: 'system.color.bg.muted.soft',
    licorice300: 'system.color.bg.muted.default',
    licorice500: 'system.color.bg.muted.strong',
    soap100: 'system.color.bg.alt.softer',
    soap200: 'system.color.bg.alt.soft',
    soap300: 'system.color.bg.alt.default',
    soap400: 'system.color.bg.alt.strong',
    soap500: 'system.color.bg.alt.stronger',
  },
  'color,fill,colorFocus,colorHover,colorActive,icon,iconColor,textShadow': {
    blackPepper300: 'system.color.fg.default',
    blackPepper400: 'system.color.fg.strong',
    blackPepper500: 'system.color.fg.stronger',
    blueberry400: 'system.color.fg.primary.default',
    blueberry500: 'system.color.fg.primary.strong',
    cinnamon500: 'system.color.fg.critical.default',
    frenchVanilla100: 'system.color.fg.inverse',
    licorice100: 'system.color.fg.disabled',
    licorice200: 'system.color.fg.muted.soft',
    licorice300: 'system.color.fg.muted.default',
    licorice400: 'system.color.fg.muted.strong',
    licorice500: 'system.color.fg.muted.stronger',
  },
  'border,borderColor,borderTopColor,borderRightColor,borderBottomColor,borderLeftColor,borderInline,borderInlineStart,borderInlineEnd,borderBlock,borderBlockStart,borderBlockEnd,borderInlineColor,borderBlockColor,borderInlineStartColor,borderInlineEndColor,borderBlockStartColor,borderBlockEndColor,borderColorFocus,borderColorHover,borderColorActive':
    {
      blackPepper400: 'system.color.border.contrast.default',
      blackPepper500: 'system.color.border.contrast.strong',
      blueberry400: 'system.color.border.primary.default',
      cantaloupe400: 'system.color.border.caution.default',
      cantaloupe600: 'system.color.border.caution.strong',
      cinnamon500: 'system.color.border.critical.default',
      frenchVanilla100: 'system.color.border.inverse',
      licorice100: 'system.color.border.input.disabled',
      licorice200: 'system.color.border.input.default',
      licorice500: 'system.color.border.input.strong',
      soap300: 'system.color.border.input.inverse',
      soap400: 'system.color.border.divider',
      soap500: 'system.color.border.container',
    },
};
