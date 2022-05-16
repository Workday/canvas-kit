import {screen, render} from '@testing-library/react';

import {ActionBar} from '../lib/ActionBar';
import {useActionBarModel} from '../lib/useActionBarModel';

describe('Tab', () => {
  verifyComponent(ActionBar.Item, {modelFn: useActionBarModel});
});
