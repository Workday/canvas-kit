import {render} from '@testing-library/react';
import {renderToString} from 'react-dom/server';

import {searchIcon} from '@workday/canvas-system-icons-web';

import {SystemIcon} from '../lib/SystemIcon';

describe('System Icon', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<SystemIcon icon={searchIcon} />);

    expect(ssrRender).not.toThrow();
  });

  it('should forward extra props to containing element', () => {
    const {container} = render(<SystemIcon icon={searchIcon} data-propspread="test" />);
    // container is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
