// @ts-check

/**
 * Creates styled-root collection utilities for rules that inspect Canvas style objects.
 * @param {import('eslint').Rule.RuleContext} context
 * @param {Set<string>} styledCallees
 */
export function createStyledRootsTracker(context, styledCallees) {
  /**
   * Set of ObjectExpression nodes that are the root of a styled-call argument.
   * @type {Set<import('estree').Node>}
   */
  const styledRoots = new Set();

  /** @param {import('estree').Node} scopeNode */
  function lookupVariable(scopeNode, /** @type {string} */ name) {
    let scope = context.sourceCode.getScope(scopeNode);

    while (scope) {
      const variable = scope.variables.find(v => v.name === name);
      if (variable) {
        return variable;
      }
      scope = scope.upper;
    }

    return null;
  }

  /**
   * Register a candidate styled-call argument.
   * @param {import('estree').Node} arg
   */
  function registerStyledArg(arg) {
    if (!arg) {
      return;
    }

    if (
      arg.type === 'TSAsExpression' ||
      arg.type === 'TSSatisfiesExpression' ||
      arg.type === 'TSTypeAssertion' ||
      arg.type === 'TSNonNullExpression'
    ) {
      // @ts-ignore - TS assertion expressions expose `expression`.
      registerStyledArg(arg.expression);
      return;
    }

    if (arg.type === 'ObjectExpression') {
      styledRoots.add(arg);
      for (const property of arg.properties) {
        if (property.type === 'SpreadElement') {
          registerStyledArg(property.argument);
        }
      }
      return;
    }

    if (arg.type === 'Identifier') {
      const variable = lookupVariable(arg, arg.name);
      if (!variable) {
        return;
      }

      for (const definition of variable.defs) {
        if (definition.node.type === 'VariableDeclarator' && definition.node.init) {
          registerStyledArg(definition.node.init);
        }
      }
    }
  }

  /** @param {import('estree').Node} root */
  function collectStyledRoots(root) {
    /** @param {unknown} node */
    function visit(node) {
      if (!node || typeof node !== 'object') {
        return;
      }
      // @ts-ignore - duck-typed AST walk
      if (typeof node.type !== 'string') {
        return;
      }

      // @ts-ignore
      if (
        node.type === 'CallExpression' &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        styledCallees.has(node.callee.name) &&
        Array.isArray(node.arguments) &&
        node.arguments.length > 0
      ) {
        registerStyledArg(node.arguments[0]);
      }

      for (const key of Object.keys(node)) {
        if (key === 'parent' || key === 'loc' || key === 'range') {
          continue;
        }
        // @ts-ignore
        const child = node[key];
        if (Array.isArray(child)) {
          for (const item of child) {
            visit(item);
          }
        } else if (child && typeof child === 'object') {
          visit(child);
        }
      }
    }

    visit(root);
  }

  /**
   * Return true when `node` is inside one of the styled-call root objects.
   * @param {import('estree').Node} node
   */
  function isInsideStyledRoot(node) {
    // @ts-ignore - parent is attached by ESLint.
    let current = node.parent;

    while (current) {
      if (current.type === 'ObjectExpression' && styledRoots.has(current)) {
        return true;
      }
      current = current.parent;
    }

    return false;
  }

  return {collectStyledRoots, isInsideStyledRoot};
}
