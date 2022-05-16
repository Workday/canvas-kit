import {ActionBar} from '../lib/ActionBar';
import {useActionBarModel} from '../lib/useActionBarModel';

describe('ActionBar', () => {
  verifyComponent(ActionBar, {modelFn: useActionBarModel});
});
