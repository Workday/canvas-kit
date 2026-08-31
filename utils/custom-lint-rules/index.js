/**
 * Note: you need to run `yarn add -WD file:./utils/custom-lint-rules` after changes for them to be reflected locally
 */
import restrictedImports from './restricted-imports.js';
import useCKSlashImports from './use-ck-slash-imports.js';

export default {
  rules: {
    'restricted-imports': restrictedImports,
    'use-ck-slash-imports': useCKSlashImports,
  },
};
