import {Transform} from 'jscodeshift';
import migrateColorTokens from './migrateColorTokens';
import migrateDepthTokens from '../v13.2/migrateDepthTokens';
import migrateOtherTokens from '../v13.2/migrateOtherTokens';
import migrateTypeTokens from '../v13.2/migrateTypeTokens';

const transform: Transform = (file, api, options) => {
  const fixes = [migrateColorTokens, migrateDepthTokens, migrateTypeTokens, migrateOtherTokens];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
