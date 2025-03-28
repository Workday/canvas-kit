import {Transform} from 'jscodeshift';
import addPillLabel from './addPillLabel';
import renameDubLogosImports from './renameDubLogosImports';
import renameDubLogosReferences from './renameDubLogosReferences';
import promoteExpandable from './promoteExpandable';

const transform: Transform = (file, api, options) => {
  // These will run in order. If your transform depends on others, place yours after dependent transforms
  const fixes = [
    // add codemods here
    addPillLabel,
    promoteExpandable,
    renameDubLogosImports,
    renameDubLogosReferences,
  ];
  return fixes.reduce((source, fix) => fix({...file, source}, api, options) as string, file.source);
};

export default transform;
