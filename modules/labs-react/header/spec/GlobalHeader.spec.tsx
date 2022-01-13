import * as React from 'react';
import DeprecatedGlobalHeader from '../lib/GlobalHeader';

import {render} from '@testing-library/react';

describe('DeprecatedGlobalHeader', () => {
  describe('How DeprecatedGlobalHeader children render', () => {
    beforeEach(() => {
      window.resizeBy(1280, 1024);
    });

    it('should render non-element children as is', () => {
      const text = 'not an element';
      const {container} = render(<DeprecatedGlobalHeader>{text}</DeprecatedGlobalHeader>);

      expect(container).toContainHTML(text);
    });

    it('should render a div element as is', () => {
      const html = <div>Test</div>;
      const {container} = render(<DeprecatedGlobalHeader>{html}</DeprecatedGlobalHeader>);

      expect(container).toContainHTML('<div>Test</div>');
    });
  });
});
