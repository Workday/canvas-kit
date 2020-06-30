module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'prevent references to global objects before a component is mounted/hydrated in an SSR context',
      category: 'Possible Errors',
      recommended: true,
    },
  },
  create: function(context) {
    return {
      // Checks function calls (e.g. `window.addEventListener()`)
      CallExpression: function(node) {
        const callee = node.callee;

        const useWindow =
          callee.name === 'window' || (callee.object && callee.object.name === 'window');
        const useDocument =
          callee.name === 'document' || (callee.object && callee.object.name === 'document');
        if (!useWindow && !useDocument) {
          return;
        }

        const ancestors = context.getAncestors(callee).reverse();

        if (isCallStackValid(ancestors) || isGlobalAccessSafeguarded(ancestors)) {
          return;
        }

        context.report({
          node: callee,
          message: errorMsg(useWindow ? 'window' : 'document'),
        });
      },
      // Checks object references (e.g. `window.foo`)
      MemberExpression: function(node) {
        const obj = node.object;
        const useWindow = obj.name === 'window';
        const useDocument = obj.name === 'document';
        if (!useWindow && !useDocument) {
          return;
        }

        const ancestors = context.getAncestors(obj).reverse();

        if (isCallStackValid(ancestors) || isGlobalAccessSafeguarded(ancestors)) {
          return;
        }

        context.report({
          node: obj,
          message: errorMsg(useWindow ? 'window' : 'document'),
        });
      },
    };
  },
};

const errorMsg = globalObj =>
  `Do not use ${globalObj} outside of componentDidMount, useEffect, or useLayoutEffect without checking \`typeof ${globalObj} !== undefined\` first`;

/**
 * Walk up the ancestor tree and return true if the window/document usage is within componentDidMount, useEffect, or useLayoutEffect
 */
const isCallStackValid = ancestors => {
  for (let i = 0; i < ancestors.length; i++) {
    if (
      ancestors[i].type === 'MethodDefinition' &&
      ['componentDidMount', 'useEffect', 'useLayoutEffect'].includes(ancestors[i].key.name)
    ) {
      return true;
    }
  }
  return false;
};

/**
 * At this point, we know the window/document object is not being referenced within a mount/hydrate function.
 * Now we check to see if there is an undefined check.
 */
const isGlobalAccessSafeguarded = ancestors => {
  for (let i = 0; i < ancestors.length; i++) {
    if (
      ancestors[i].type === 'LogicalExpression' || // typeof window !== undefined && window.foo
      ancestors[i].type === 'ConditionalExpression' // typeof window !== undefined ? window.foo : undefined
    ) {
      const check =
        ancestors[i].type === 'LogicalExpression' ? ancestors[i].left : ancestors[i].test;

      if (
        check.left.operator === 'typeof' &&
        ['window', 'document'].includes(check.left.argument.name) &&
        check.operator === '!==' &&
        check.right.name === 'undefined'
      ) {
        return true;
      }
    }
  }
  return false;
};
