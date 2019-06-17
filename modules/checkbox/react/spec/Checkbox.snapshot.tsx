import * as React from 'react';
import Checkbox from '../lib/Checkbox';
import * as renderer from 'react-test-renderer';

jest.mock('uuid/v4', () => () => '123');

describe('Checkbox Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Checkbox checked={true} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Checkbox checked={true} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Checkbox checked={false} disabled={true} label="checkbox" />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Checkbox checked={false} disabled={false} label="checkbox" />
    );
    expect(component).toMatchSnapshot();
  });
  test('error renders as expected', () => {
    const component = renderer.create(
      <Checkbox error={Checkbox.ErrorType.Error} checked={false} disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
  test('checked error renders as expected', () => {
    const component = renderer.create(
      <Checkbox error={Checkbox.ErrorType.Error} checked={true} disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
  test('alert renders as expected', () => {
    const component = renderer.create(
      <Checkbox error={Checkbox.ErrorType.Alert} checked={false} disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
  test('checked alert renders as expected', () => {
    const component = renderer.create(
      <Checkbox error={Checkbox.ErrorType.Alert} checked={true} disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
