import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('ColorInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should update value onChange', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    expect(component.find('input').props().value).toBe('');
    component.setProps({value: 'e6e'});
    expect(component.find('input').props().value).toBe('e6e');
  });
  test('should call onChange prop onChange with value', () => {
    const onChangeMock = jest.fn();
    const component = mount(
      <ColorInput onChange={onChangeMock} onValidColorChange={jest.fn()} value={''} />
    );

    const event = {
      currentTarget: {value: 'e6e'},
    };
    component.prop('onChange')(event);
    expect(onChangeMock).toBeCalledWith(event);
  });
  test('should call onChange prop onChange with stripped hash', () => {
    const onChangeMock = jest.fn();
    const component = mount(
      <ColorInput onChange={onChangeMock} onValidColorChange={jest.fn()} value={''} />
    );
    component.setProps({value: '#e6e'});

    expect(component.find('input').props().value).toBe('e6e');
  });
  test('should call onValidColorChange prop onChange with valid hex value', () => {
    const onValidColorChangeMock = jest.fn();
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={onValidColorChangeMock} value={'#e6e'} />
    );
    const event = {
      target: {value: '#e6e'},
    };
    const input = component.find('input');
    input.simulate('change', event);
    expect(onValidColorChangeMock).toBeCalledWith('#ee66ee');
  });
  test('should not call onValidColorChange prop onChange if hex code is not valid', () => {
    const onValidColorChange = jest.fn();
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={onValidColorChange} value={''} />
    );
    const event = {
      target: {value: 'e6ee'},
    };
    const input = component.find('input');
    input.simulate('change', event);
    expect(onValidColorChange).toHaveBeenCalledTimes(0);
  });
  test('should remove hash', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'#e6e'} />
    );
    expect(component.find('input').props().value).toBe('e6e');
  });
  test('should allow only 6 non-# characters as the value', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'#123456789'} />
    );
    expect(component.find('input').props().value).toBe('123456');
  });
  test('should show the checkmark after the valid hex value has been formatted', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'#123456789'} />
    );
    expect(
      component
        .find('div[className^="css"]')
        .at(2) // This div the background of the color preview/checkmark bit
        .prop('style')
    ).toHaveProperty('backgroundColor', '#123456');
  });
  test('should set inputRef as reference to native input', () => {
    const ref = React.createRef<HTMLInputElement>();
    mount(<ColorInput inputRef={ref} value={''} />);
    expect(ref.current && ref.current.tagName && ref.current.tagName.toUpperCase()).toBe('INPUT');
  });

  test('ColorInput should spread extra props', () => {
    const component = mount(<ColorInput data-propspread="test" />);
    const input = component
      .find('input') // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('ColorInput Accessibility', () => {
  test('ColorInput should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <FormField label="Label" inputId="input-plain">
        <ColorInput />
      </FormField>
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});
