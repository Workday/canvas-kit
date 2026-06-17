import {renderToString} from 'react-dom/server';

import {px2rem} from '@workday/canvas-kit-styling';

import {Combobox} from '../';

describe('Combobox', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Combobox>
          <Combobox.Input />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              <Combobox.Menu.List cs={{maxHeight: px2rem(200)}}>
                <Combobox.Menu.Item>Option 1</Combobox.Menu.Item>
              </Combobox.Menu.List>
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
        </Combobox>
      );
    expect(ssrRender).not.toThrow();
  });
});
