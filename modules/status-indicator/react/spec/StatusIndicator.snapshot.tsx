import * as React from 'react';
import * as renderer from 'react-test-renderer';
import StatusIndicator from '../lib/StatusIndicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

describe('StatusIndicator Snapshots', () => {
  test('renders a StatusIndicator with high emphasis', () => {
    const component = renderer.create(
      <StatusIndicator type={StatusIndicator.Type.Green} label={'Test Label'} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a StatusIndicator with low emphasis', () => {
    const component = renderer.create(
      <StatusIndicator
        type={StatusIndicator.Type.Blue}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'Test Label'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a StatusIndicator with no low emphasis config, falls back to default', () => {
    const component = renderer.create(
      <StatusIndicator
        type={StatusIndicator.Type.Transparent}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'Test Label'}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a StatusIndicator with high emphasis and icon', () => {
    const component = renderer.create(
      <StatusIndicator
        type={StatusIndicator.Type.Transparent}
        label={'Test Label'}
        icon={uploadCloudIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a StatusIndicator with low emphasis and icon', () => {
    const component = renderer.create(
      <StatusIndicator
        type={StatusIndicator.Type.Red}
        label={'Test Label'}
        icon={uploadCloudIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a StatusIndicator with no low emphasis config and icon, falls back to default', () => {
    const component = renderer.create(
      <StatusIndicator
        type={StatusIndicator.Type.Transparent}
        emphasis={StatusIndicator.Emphasis.Low}
        label={'Test Label'}
        icon={uploadCloudIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
