import {Transform} from 'jscodeshift';
import migrateColorTokens from './migrateColorTokens';
import migrateDepthTokens from './migrateDepthTokens';
import migrateOtherTokens from './migrateOtherTokens';
import migrateTypeTokens from './migrateTypeTokens';

const transform: Transform = (file, api, options) => {
  const fixes = [migrateColorTokens, migrateDepthTokens, migrateTypeTokens, migrateOtherTokens];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
