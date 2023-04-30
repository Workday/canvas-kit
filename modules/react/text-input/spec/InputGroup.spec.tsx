import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {searchIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {InputGroup} from '../lib/InputGroup';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

describe('InputGroup', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(InputGroup, {});

  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <InputGroup>
          <InputGroup.Start pointerEvents="none">
            <SystemIcon icon={searchIcon} size="small" />
          </InputGroup.Start>
          <InputGroup.Input />
          <InputGroup.End>
            <TertiaryButton role="presentation" icon={xSmallIcon} size="small" tabIndex={-1} />
          </InputGroup.End>
        </InputGroup>
      );

    expect(ssrRender).not.toThrow();
  });
});
