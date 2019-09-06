import * as React from 'react';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';
import ColorPreview from '../lib/ColorPreview';

describe('ColorPreview', () => {
  test('Card should spread extra props', () => {
    const component = mount(<ColorPreview value={'#ffffff'} data-propspread="test" />);
    const input = component
      .find('input') // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

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
