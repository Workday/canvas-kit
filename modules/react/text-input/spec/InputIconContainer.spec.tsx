import * as React from 'react';
import {render} from '@testing-library/react';

import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import InputIconContainer from '../lib/InputIconContainer';

describe('InputIconContainer', () => {
  it('should render an Icon', () => {
    const {container} = render(
      <InputIconContainer icon={<SystemIcon icon={exclamationCircleIcon} />} />
    );

    expect(container).toContainHTML('wd-icon-exclamation');
  });
});
