import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';
import ColorPreview from '../lib/ColorPreview';

describe('ColorPreview Accessibility', () => {
  test('ColorPreview should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField label="Label" inputId="input-plain">
        <ColorPreview value={'#ffffff'} />
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
