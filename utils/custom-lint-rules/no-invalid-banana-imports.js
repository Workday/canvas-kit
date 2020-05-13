module.exports = {
  meta: {
    type: 'suggestion',
  },
  create: function(context) {
    return {
      ImportDeclaration(node) {
        const {value} = node.source;
        const splitPath = value.split('/');
        const levels = splitPath.length;
        if (splitPath[0] === '@workday' && splitPath[1].startsWith('canvas-kit-') && levels > 2) {
          context.report({
            node,
            message: `Only second level path imports are allowed. Prefer to import from '@workday/${
              splitPath[1]
            }'.`,
          });
        }
      },
    };
  },
};
