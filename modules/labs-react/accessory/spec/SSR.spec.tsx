/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';

import {checkIcon} from '@workday/canvas-system-icons-web';

import {Accessory} from '../lib/Accessory';

const imageSrc =
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"/>');

describe('Accessory', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Accessory>
          <Accessory.Icon icon={checkIcon} variant="green" />
          <Accessory.Image alt="Four dark spheres" icon={checkIcon} src={imageSrc} />
        </Accessory>
      );

    expect(ssrRender).not.toThrow();
  });
});
