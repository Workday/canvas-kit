import * as React from 'react';
import {mount} from 'enzyme';
import Slider, {SliderProps} from '../index';

describe('ActionBar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  const defaultSliderProps: SliderProps = {
    max: 100,
    min: 1,
    value: 50,
  };
  test('render with required props', () => {
    const wrapper = mount(<Slider {...defaultSliderProps} />);
    expect(wrapper.props().max).toEqual(100);
    expect(wrapper.props().min).toEqual(1);
    expect(wrapper.props().startValue).toEqual(50);
    wrapper.unmount();
  });

  test('render the input value box with the given value', () => {
    const modifiedSliderProps: SliderProps = {
      ...defaultSliderProps,
      showTextInput: true,
    };
    const wrapper = mount(<Slider {...modifiedSliderProps} />);
    expect(wrapper.find('InputValueBox').props().value).toEqual(defaultSliderProps.value);
    wrapper.unmount();
  });

  test('does not render the input value box', () => {
    const wrapper = mount(<Slider {...defaultSliderProps} />);
    expect(wrapper.html()).toEqual(expect.not.stringContaining('InputValueBox'));
    wrapper.unmount();
  });

  test('change value through the input value box', () => {
    const modifiedSliderProps: SliderProps = {
      ...defaultSliderProps,
      showTextInput: true,
    };
    const wrapper = mount(<Slider {...modifiedSliderProps} />);
    const input = wrapper.find('InputValueBox').find('input');
    input.simulate('change', {target: {value: 27}});

    const newInput = wrapper.find('InputValueBox').find('input');
    expect(newInput.props().value).toEqual(27);
    wrapper.unmount();
  });

  test('slider value changes and reflects the value of the input box', () => {
    const modifiedSliderProps: SliderProps = {
      ...defaultSliderProps,
      showTextInput: true,
    };
    const wrapper = mount(<Slider {...modifiedSliderProps} />);
    const input = wrapper.find('SliderInput').find('input');
    input.simulate('change', {target: {value: 27}});

    const newInput = wrapper.find('SliderInput').find('input');
    const inputBox = wrapper.find('InputValueBox').find('input');
    expect(newInput.props().value).toEqual(27);
    expect(inputBox.props().value).toEqual(27);
  });

  test('check the click callbacks', () => {
    const onChange = jest.fn();
    const onEndDrag = jest.fn();
    const onDragStart = jest.fn();

    const modifiedSliderProps: SliderProps = {
      ...defaultSliderProps,
      onChange,
      onSliderDragEnd: onEndDrag,
      onSliderDragStart: onDragStart,
    };

    const wrapper = mount(<Slider {...modifiedSliderProps} />);
    const input = wrapper.find('SliderInput');
    input.simulate('change', {target: {value: 60}});
    input.simulate('mouseDown');
    input.simulate('mouseUp');
    input.simulate('keydown', {key: 'Enter'});
    input.simulate('keyup', {key: 'Enter'});

    expect(onChange).toHaveBeenCalled();
    expect(onDragStart).toHaveBeenCalled();
    expect(onEndDrag).toHaveBeenCalled();
  });
});
