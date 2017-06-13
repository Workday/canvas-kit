import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import * as renderer from 'react-test-renderer';

describe('ColorInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'e6e'} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color without #', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'#e6e'} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a light checkIcon if hex value is dark', () => {
    const component = renderer.create(
      <ColorInput
        showCheck={true}
        onChange={jest.fn()}
        onValidColorChange={jest.fn()}
        value={'#e6e'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a dark checkIcon if hex value is light', () => {
    const component = renderer.create(
      <ColorInput
        showCheck={true}
        onChange={jest.fn()}
        onValidColorChange={jest.fn()}
        value={'#ffffff'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a disabled input', () => {
    const component = renderer.create(
      <ColorInput
        disabled={true}
        onChange={jest.fn()}
        onValidColorChange={jest.fn()}
        value={'#ffffff'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders valid empty color input', () => {
    const component = renderer.create(
      <ColorInput disabled={false} onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    expect(component).toMatchSnapshot();
  });
});
