/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';

import {checkIcon} from '@workday/canvas-system-icons-web';

import {AccessoryFile} from '../lib/AccessoryFile';
import {AccessoryIcon} from '../lib/AccessoryIcon';
import {AccessoryMedia} from '../lib/AccessoryMedia';

const imageSrc =
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"/>');

describe('Accessory', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <>
          <AccessoryIcon icon={checkIcon} variant="green" />
          <AccessoryMedia alt="Four dark spheres" icon={checkIcon} src={imageSrc} />
          <AccessoryFile type="pdf" />
        </>
      );

    expect(ssrRender).not.toThrow();
  });
});
