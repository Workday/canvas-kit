/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Card} from '@workday/canvas-kit-react/card';

import Layout from '../index';
import README from '../README.md';

storiesOf('Components/Containers/Layout/React', module)
  .addParameters({component: Layout})
  .addDecorator(withReadme(README))
  .add('Page Layout', () => (
    <div className="story">
      <h3>Full Page</h3>
      <div>
        <Layout gutter={0}>
          <Layout.Column spacing={0}>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
      <h3>Full Page with gutter & spacing</h3>
      <div>
        <Layout>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
      <h3>Full Page with a max width</h3>
      <div>
        <Layout capWidth={true}>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
    </div>
  ))
  .add('12 Column Layout', () => (
    <div className="story">
      <h3>12 Columns</h3>
      <div>
        <Layout>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
      <h3>12 Column Grid Widths</h3>
      <div>
        <Layout>
          <Layout.Column columns={4}>
            <Card />
          </Layout.Column>
          <Layout.Column columns={8}>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
      <h3>Fixed Column Widths</h3>
      <div>
        <Layout>
          <Layout.Column width={'400px'}>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
      <h3>Custom Spacing</h3>
      <div>
        <Layout spacing={60}>
          <Layout.Column spacing={0}>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
          <Layout.Column>
            <Card />
          </Layout.Column>
        </Layout>
      </div>
    </div>
  ));
