import styleTransformer from './lib/styleTransform';
import {type Config} from './lib/utils/types';
export {type Config};
export {parseNodeToStaticValue} from './lib/utils/parseNodeToStaticValue';
export {parseObjectToStaticValue} from './lib/utils/parseObjectToStaticValue';
export {createObjectTransform} from './lib/createObjectTransform';
export {createPropertyTransform} from './lib/createPropertyTransform';
export {styleTransformer};
export {withDefaultContext} from './lib/styleTransform';
export {getClassName} from './lib/utils/handleCreateStencil';

// be compatible with ts-patch which expects a default export
export default styleTransformer;

export function createConfig(config: Config): Config;
