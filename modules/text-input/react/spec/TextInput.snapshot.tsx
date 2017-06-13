import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextInput from '../lib/TextInput';

describe('TextInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<TextInput />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<TextInput grow={true} />);
    expect(component).toMatchSnapshot();
  });

  test('error', () => {
    const component = renderer.create(<TextInput error={TextInput.ErrorType.Error} />);
    expect(component).toMatchSnapshot();
  });

  test('alert', () => {
    const component = renderer.create(<TextInput error={TextInput.ErrorType.Alert} />);
    expect(component).toMatchSnapshot();
  });
});
