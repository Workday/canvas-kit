import {systemColors} from '../../v13.2/mapping';
import {addMissingImports} from '../../v13.2/utils';
import {varToMemberExpression} from '../../v13.2/utils/varToMemberExpression';
import {tokensMap} from './tokensMap';

const createSystemToken = (key: any, system: string) =>
  key ? `system.${system}${isNaN(key) ? `.${key}` : `[${key}]`}` : null;

export const getToken = (
  {j, root}: any,
  {system, prop, value}: {system: string; prop: string; value: any}
) => {
  if (system in tokensMap) {
    const tokens = tokensMap[system as keyof typeof tokensMap];
    let token = '';

    if (system === 'color') {
      const tokens = Object.entries(systemColors).find(([blockKey]) =>
        blockKey.split(',').some(prop => prop === prop)
      )?.[1];
      const key = tokens?.[value.value as keyof typeof tokens];
      token = key || `base.${value.value}`;
    } else {
      const key = tokens[(value?.value ?? value) as keyof typeof tokens];
      token = createSystemToken(key, system) || '';
    }

    if (token) {
      if (token.startsWith('system')) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );
      } else if (token.startsWith('base')) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
        );
      }

      return varToMemberExpression(j, token);
    }
  }

  return value.type === 'JSXExpressionContainer' ? value.expression : value;
};
