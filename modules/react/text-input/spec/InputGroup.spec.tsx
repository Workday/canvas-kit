import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {searchIcon} from '@workday/canvas-system-icons-web';
import {InputGroup, useInputGroupModel} from '../lib/InputGroup';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

describe('InputGroup', () => {
  verifyComponent(InputGroup, {modelFn: useInputGroupModel});
  verifyComponent(InputGroup.InnerStart, {modelFn: useInputGroupModel});
  verifyComponent(InputGroup.InnerEnd, {modelFn: useInputGroupModel});
  verifyComponent(InputGroup.ClearButton, {modelFn: useInputGroupModel});
  verifyComponent(InputGroup.Input, {modelFn: useInputGroupModel});

  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <InputGroup>
          <InputGroup.InnerStart pointerEvents="none">
            <SystemIcon icon={searchIcon} size="small" />
          </InputGroup.InnerStart>
          <InputGroup.Input />
          <InputGroup.InnerEnd>
            <InputGroup.ClearButton />
          </InputGroup.InnerEnd>
        </InputGroup>
      );

    expect(ssrRender).not.toThrow();
  });
});
