import {render} from '@testing-library/react';
import * as React from 'react';

import {CanvasProvider} from '../lib/CanvasProvider';
import {sanaCanvasProviderTheme} from '../lib/theming/sanaTheme';

describe('CanvasProvider', () => {
  it('forwards data-theme onto the wrapper div', () => {
    const {container} = render(
      <CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
        <div>Test</div>
      </CanvasProvider>
    );

    expect(container.firstElementChild?.getAttribute('data-theme')).toBe('sana-canvas');
  });

  describe('console warnings', () => {
    it('should warn when sanaCanvasProviderTheme is used with global Sana theme', () => {
      const consoleSpy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});

      // Set data-theme on document
      document.documentElement.setAttribute('data-theme', 'sana-canvas');

      render(
        <CanvasProvider theme={sanaCanvasProviderTheme}>
          <div>Test</div>
        </CanvasProvider>
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('You are passing sanaCanvasProviderTheme to CanvasProvider but')
      );

      // Cleanup
      document.documentElement.removeAttribute('data-theme');
      consoleSpy.mockRestore();
    });

    it('should not warn when sanaCanvasProviderTheme is used without global Sana theme', () => {
      const consoleSpy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});

      render(
        <CanvasProvider theme={sanaCanvasProviderTheme}>
          <div>Test</div>
        </CanvasProvider>
      );

      expect(consoleSpy).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('should not warn when using a different theme', () => {
      const consoleSpy = vi.spyOn(global.console, 'warn').mockImplementation(() => {});

      document.documentElement.setAttribute('data-theme', 'sana-canvas');

      render(
        <CanvasProvider theme={{brand: {primary: {'600': '#FF00FF'}}}}>
          <div>Test</div>
        </CanvasProvider>
      );

      expect(consoleSpy).not.toHaveBeenCalled();

      document.documentElement.removeAttribute('data-theme');
      consoleSpy.mockRestore();
    });
  });
});
