import * as React from 'react';
import Card from '../lib/Card';
import * as renderer from 'react-test-renderer';

describe('Card Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Card>Card</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with depth', () => {
    const component = renderer.create(
      <Card
        depth={{
          boxShadow: '0px 2px 4px 0 rgba(0, 0, 0, 0.08)' as '0px 2px 4px 0 rgba(0, 0, 0, 0.08)',
        }}
      >
        Card with custom depth
      </Card>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a card with heading', () => {
    const component = renderer.create(<Card heading="Card Title">Card with a heading</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with padding', () => {
    const component = renderer.create(<Card padding="12px">Card with custom padding</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with width', () => {
    const component = renderer.create(<Card width="12px">Card with custom width</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with height', () => {
    const component = renderer.create(<Card height="12px">Card with custom width</Card>);
    expect(component).toMatchSnapshot();
  });
});
