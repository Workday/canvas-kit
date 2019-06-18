import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextArea from '../lib/TextArea';

describe('TextArea Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<TextArea />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<TextArea grow={true} />);
    expect(component).toMatchSnapshot();
  });

  test('error', () => {
    const component = renderer.create(<TextArea error={TextArea.ErrorType.Error} />);
    expect(component).toMatchSnapshot();
  });
});
