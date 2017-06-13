import * as React from 'react';
import Radio from '../lib/Radio';
import RadioGroup from '../lib/RadioGroup';
import * as renderer from 'react-test-renderer';

jest.mock('uuid/v4', () => () => '123');

describe('Radio Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={true} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={true} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={false} disabled={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(<Radio checked={false} disabled={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders radio group with error as expected', () => {
    const component = renderer.create(
      <RadioGroup error={RadioGroup.ErrorType.Error}>
        <Radio checked={true} disabled={false} />
        <Radio checked={false} disabled={false} />
      </RadioGroup>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders radio group with alert as expected', () => {
    const component = renderer.create(
      <RadioGroup error={RadioGroup.ErrorType.Alert}>
        <Radio checked={true} disabled={false} />
        <Radio checked={false} disabled={false} />
      </RadioGroup>
    );
    expect(component).toMatchSnapshot();
  });
});
