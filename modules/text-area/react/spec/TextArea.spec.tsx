import * as React from 'react';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import TextArea, { TextAreaResizeDirection } from '../lib/TextArea';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('TextArea', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  test('TextArea should spread extra props', () => {
    const component = mount(<TextArea data-propspread="test" onChange={cb} />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

test('Text Area should grow', () => {
  const component = mount(<TextArea  grow={true}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('width')).toBe('100%');
  component.unmount();
});

test('Text Area should not grow', () => {
  const component = mount(<TextArea  grow={false}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('width')).toBe('');
  component.unmount();
});

test('Text Area should resize', () => {
  const component = mount(<TextArea  resize={TextAreaResizeDirection.Both}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('resize')).toBe('both');
  component.unmount();
});

test('Text Area should resize horizontally', () => {
  const component = mount(<TextArea  resize={TextAreaResizeDirection.Horizontal}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('resize')).toBe('horizontal');
  component.unmount();
});

test('Text Area should resize vertically', () => {
  const component = mount(<TextArea  resize={TextAreaResizeDirection.Vertical}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('resize')).toBe('vertical');
  component.unmount();
});


test('Text Area should not resize', () => {
  const component = mount(<TextArea  resize={TextAreaResizeDirection.None}>Content</TextArea>);
  
  const textarea = component
    .find('textarea');
    expect(getComputedStyle(textarea.getDOMNode()).getPropertyValue('resize')).toBe('none');
  component.unmount();
});

describe('Text Area Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  test('Text Area in a FormField should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField label="My Field" inputId="my-input-field">
        <TextArea placeholder="Placeholder" value={'Hello'} onChange={jest.fn()} />;
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });

  test('Text Area with `aria-labelledby` should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <>
        <label id="123">Label</label>
        <TextArea placeholder="Placeholder" value={'Hello'} aria-labelledby="123" onChange={cb} />;
      </>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
