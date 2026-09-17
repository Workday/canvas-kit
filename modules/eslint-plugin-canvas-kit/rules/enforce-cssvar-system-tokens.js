// @ts-check

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
      'Identifier[name="system"]'(node) {
        if (createStylesDepth === 0) {
          return;
        }

        // Walk up the ancestor chain to see if this system identifier is already
        // inside a cssVar() call. Stop searching once we hit the createStyles boundary.
        let current = node.parent;

        while (current) {
          if (
            current.type === 'CallExpression' &&
            current.callee.type === 'Identifier' &&
            current.callee.name === 'cssVar'
          ) {
            return;
          }

          if (current.type === 'SpreadElement') {
            return;
          }

          if (
            current.type === 'CallExpression' &&
            current.callee.type === 'Identifier' &&
            current.callee.name === 'createStyles'
          ) {
            break;
          }

          current = current.parent;
        }

        context.report({
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
          node,
        });
      },
    };
  },
  meta: {
    docs: {
      description: 'Require system design tokens to be wrapped with cssVar() inside createStyles',
    },
    messages: {},
    schema: [],
    type: 'problem',
  },
};
