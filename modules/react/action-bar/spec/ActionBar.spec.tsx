import {ActionBar} from '../lib/ActionBar';
import {useActionBarModel} from '../lib/useActionBarModel';

describe('ActionBar.Item', () => {
  verifyComponent(ActionBar.Item, {modelFn: useActionBarModel});
});
