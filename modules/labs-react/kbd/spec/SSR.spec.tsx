/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';

import {KBD} from '../lib/KBD';

describe('KBD', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <KBD>
          <KBD.Item>Ctrl</KBD.Item>
          <KBD.Item>C</KBD.Item>
        </KBD>
      );
    expect(ssrRender).not.toThrow();
  });
});
