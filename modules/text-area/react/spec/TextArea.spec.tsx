import * as React from 'react';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import TextArea from '../lib/TextArea';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('TextArea', () => {
  test('TextArea should spread extra props', () => {
    const component = mount(<TextArea data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Text Area Accessibility', () => {
  test('Text Area in a FormField should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField label="My Field" inputId="my-input-field">
        <TextArea placeholder="Placeholder" value={'Hello'} onChange={jest.fn()} />;
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });

  test('Text Area with `aria-labelledBy` should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <>
        <label id="123">Label</label>
        <TextArea placeholder="Placeholder" value={'Hello'} aria-labelledBy="123" />;
      </>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
