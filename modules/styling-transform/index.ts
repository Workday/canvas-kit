import styleTransformer from './lib/styleTransform';
export {Config} from './lib/utils/types';
export {parseNodeToStaticValue} from './lib/utils/parseNodeToStaticValue';
export {parseObjectToStaticValue} from './lib/utils/parseObjectToStaticValue';
export {createObjectTransform} from './lib/createObjectTransform';
export {createPropertyTransform} from './lib/createPropertyTransform';
export {styleTransformer};

// be compatible with ttypescript which expects a default export
export default styleTransformer;
