import {render} from '@testing-library/react';
import * as React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

describe('RadioLabel', () => {
  it('should render a Label with text', () => {
    const testText = 'Test Radio';
    const {getByText} = render(<RadioGroup.Label>{testText}</RadioGroup.Label>);
    expect(getByText(testText)).toBeDefined();
  });
});
