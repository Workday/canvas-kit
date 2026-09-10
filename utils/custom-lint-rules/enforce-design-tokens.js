// @ts-check
import {BORDER_RADIUS_PROPERTIES, SPACING_PROPERTIES} from './canvas-tokens-matrix.js';

const HARDCODED_VALUE_PATTERN = /(\d+(\.\d+)?(px|rem|em|vh|vw|dvh|svh))|(#[0-9a-fA-F]{3,8}\b)/;
const CANVAS_VAR_PATTERN = /var\(--cnvs-[^)]+\)/;
const NAMED_COLOR_PATTERN = /^[a-zA-Z]+$/;
const BARE_NUMBER_PATTERN = /^\d+(\.\d+)?$/;
const CSS_COLOR_KEYWORD_ALLOWLIST = new Set([
  'auto',
  'currentcolor',
  'inherit',
  'initial',
  'none',
  'revert',
  'transparent',
  'unset',
]);

const COLOR_PROPERTIES = new Set(['backgroundColor', 'borderColor', 'color']);

const FONT_PROPERTIES = new Set(['fontSize', 'fontWeight', 'lineHeight']);

const ALL_TOKEN_PROPERTIES = new Set([
  ...SPACING_PROPERTIES,
  ...COLOR_PROPERTIES,
  ...BORDER_RADIUS_PROPERTIES,
  ...FONT_PROPERTIES,
]);

/**
 * Given some CSS property get a token suggestion
 * @param {String} propertyName
 * @returns
 */
function getSuggestion(propertyName) {
  if (SPACING_PROPERTIES.has(propertyName)) {
    return 'cssVar(system.space.*)';
  }
  if (COLOR_PROPERTIES.has(propertyName)) {
    return 'cssVar(system.color.*)';
  }
  if (BORDER_RADIUS_PROPERTIES.has(propertyName)) {
    return 'cssVar(system.shape.*)';
  }
  if (FONT_PROPERTIES.has(propertyName)) {
    return 'cssVar(system.type.*)';
  }

  return 'a design token from @workday/canvas-tokens-web';
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  create(context) {
    let createStylesDepth = 0;

    return {
      'CallExpression[callee.name="createStyles"]'() {
        createStylesDepth += 1;
      },
      'CallExpression[callee.name="createStyles"]:exit'() {
        createStylesDepth -= 1;
      },
      Property(node) {
        if (createStylesDepth === 0) {
          return;
        }

        if (node.value.type !== 'Literal' || typeof node.value.value !== 'string') {
          return;
        }

        let propertyName;
        if (node.key.type === 'Identifier') {
          propertyName = node.key.name;
        } else if (node.key.type === 'Literal') {
          propertyName = String(node.key.value);
        } else {
          return;
        }

        const value = node.value.value;
        const normalizedValue = value.toLowerCase();
        const isHardcodedWithUnit = HARDCODED_VALUE_PATTERN.test(value);
        const isCanvasVar = CANVAS_VAR_PATTERN.test(value);
        const isNamedColor =
          COLOR_PROPERTIES.has(propertyName) &&
          NAMED_COLOR_PATTERN.test(value) &&
          !CSS_COLOR_KEYWORD_ALLOWLIST.has(normalizedValue);
        const isBareNumber =
          BARE_NUMBER_PATTERN.test(value) && ALL_TOKEN_PROPERTIES.has(propertyName);

        if (!isHardcodedWithUnit && !isCanvasVar && !isNamedColor && !isBareNumber) {
          return;
        }

        const suggestion = getSuggestion(propertyName);

        context.report({
          message: `Avoid hardcoded value '{{value}}' in createStyles. Use ${suggestion} instead.`,
          data: {value},
          node: node.value,
        });
      },
    };
  },
  meta: {
    docs: {
      description: 'Enforce design tokens instead of hardcoded CSS values inside createStyles',
    },
    messages: {},
    schema: [],
    type: 'suggestion',
  },
};
