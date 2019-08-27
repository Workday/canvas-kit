import * as React from 'react';
import {mount} from 'enzyme';
import Radio from '../lib/Radio';
import RadioGroup from '../lib/RadioGroup';

describe('Radio', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders two radios as expected', () => {
    const component = mount(
      <RadioGroup name="contact">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(2);
    expect(inputs.get(0).props.name).toEqual('contact');
    expect(inputs.get(1).props.name).toEqual('contact');
  });

  test('renders two radios with name set at radio level as expected', () => {
    const component = mount(
      <RadioGroup>
        <Radio id="1" name="contact" value="email" label="E-mail" />
        <Radio id="2" name="contact" value="phone" label="Phone" />
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(2);
    expect(inputs.get(0).props.name).toEqual('contact');
    expect(inputs.get(1).props.name).toEqual('contact');
  });

  test('renders two radios preselected with index as expected', () => {
    const component = mount(
      <RadioGroup name="contact" value={1}>
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(2);
    expect(inputs.get(0).props.name).toEqual('contact');
    expect(inputs.get(1).props.name).toEqual('contact');
  });

  test('renders two radios preselected with value as expected', () => {
    const component = mount(
      <RadioGroup name="contact" value="phone">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(2);
    expect(inputs.get(0).props.name).toEqual('contact');
    expect(inputs.get(1).props.name).toEqual('contact');
  });

  test('can switch to a different radio', () => {
    const component = mount(
      <RadioGroup name="contact" onChange={cb}>
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );

    component
      .find('input')
      .at(1)
      .simulate('change');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe('phone');
  });

  test('can switch to a different radio without value', () => {
    const component = mount(
      <RadioGroup name="contact" onChange={cb}>
        <Radio id="1" label="E-mail" />
        <Radio id="2" label="Phone" />
      </RadioGroup>
    );

    component
      .find('input')
      .at(1)
      .simulate('change');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe(1);
  });

  test('renders two radios and one disabled as expected', () => {
    const component = mount(
      <RadioGroup name="contact" onChange={cb}>
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" disabled={true} />
        <Radio id="3" value="fax" label="Fax" />
        <span /> {/* ensure random elements don't break anything */}
      </RadioGroup>
    );

    const inputs = component.find('input');

    expect(inputs.length).toEqual(3);
    expect(inputs.get(1).props.disabled).toBe(true);
  });

  test('simulate onchange on a radio', () => {
    const component = mount(
      <RadioGroup name="contact">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" disabled={true} />
        <Radio id="3" value="fax" label="Fax" onChange={cb} />
        <span /> {/* ensure random elements don't break anything */}
      </RadioGroup>
    );

    component
      .find('input')
      .at(2)
      .simulate('change');

    expect(cb.mock.calls.length).toBe(1);
  });

  test('RadioGroup should spread extra props', () => {
    const component = mount(
      <RadioGroup data-propspread="test">
        <Radio id="1" value="email" label="E-mail" />
        <Radio id="2" value="phone" label="Phone" />
      </RadioGroup>
    );
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
