import * as renderer from 'react-test-renderer';
import Tooltip from '../lib/Tooltip';
import * as React from 'react';
jest.mock('react-dom');
describe('Tooltip Snapshots', () => {
  test('renders a tooltip with a child element', () => {
    const container = renderer.create(<Tooltip>I'm being hovered</Tooltip>);
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a tooltip with a different transformOrigin', () => {
    const container = renderer.create(
      <Tooltip transformOrigin={{horizontal: 'center', vertical: 'top'}}>Delete</Tooltip>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a tooltip with a link', () => {
    const container = renderer.create(
      <Tooltip transformOrigin={{horizontal: 'center', vertical: 'top'}}>
        <a href="#">More Info</a>
      </Tooltip>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
