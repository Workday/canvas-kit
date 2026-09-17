// @ts-check

/** @type {import('eslint').Rule.RuleModule} */
export default {
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.type === 'JSXIdentifier' &&
          node.name.name === 'style' &&
          node.value !== null
        ) {
          context.report({
            message:
              'Inline styles are not allowed. Use createStyles from @workday/canvas-kit-styling instead.',
            node,
          });
        }
      },
    };
  },
  meta: {
    docs: {
      description: 'Disallow JSX inline style attributes',
    },
    messages: {},
    schema: [],
    type: 'problem',
  },
};
