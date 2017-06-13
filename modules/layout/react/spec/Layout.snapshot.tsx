import * as React from 'react';
import Layout from '../lib/Layout';
import * as renderer from 'react-test-renderer';

describe('Layout Snapshots', () => {
  test('renders layout and column', () => {
    const component = renderer.create(
      <Layout>
        <Layout.Column />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout and column with no gutter and no spacing', () => {
    const component = renderer.create(
      <Layout gutter={0}>
        <Layout.Column spacing={0} />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout with capWidth', () => {
    const component = renderer.create(
      <Layout capWidth={true}>
        <Layout.Column />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout with an empty div', () => {
    const component = renderer.create(
      <Layout>
        <></>
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout with fluid columns', () => {
    const component = renderer.create(
      <Layout>
        <Layout.Column />
        <Layout.Column />
        <Layout.Column />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout and columns with 12 column grid widths', () => {
    const component = renderer.create(
      <Layout>
        <Layout.Column columns={4} />
        <Layout.Column columns={8} />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout and columns with fixed width', () => {
    const component = renderer.create(
      <Layout>
        <Layout.Column width={'400px'} />
        <Layout.Column />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a layout and columns with custom spacing', () => {
    const component = renderer.create(
      <Layout spacing={60}>
        <Layout.Column spacing={0} />
        <Layout.Column />
        <Layout.Column />
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });
});
