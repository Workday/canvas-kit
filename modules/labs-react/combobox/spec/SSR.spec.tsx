/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';

import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';

import {Combobox} from '../lib/Combobox';

describe('InputProvider', () => {
  it('should render on a server without crashing', () => {
    const autocompleteItems = [<StyledMenuItem>test</StyledMenuItem>];
    const ssrRender = () =>
      renderToString(
        <Combobox autocompleteItems={autocompleteItems}>
          <TextInput />
        </Combobox>
      );
    expect(ssrRender).not.toThrow();
  });
});
