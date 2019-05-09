/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Card} from '@workday/canvas-kit-react';

import Layout from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Layout', module)
  .addDecorator(withReadme(README))
  .add('Grid Layout', () => (
    <div className="story">
      <h1 className="section-label">Full Page</h1>
      <div>
        <Layout gutter={0}>
          <Layout.Column spacing={0}>
            <Card heading="Full Page Layout with no gutter & spacing" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Full Page with gutter & spacing</h1>
      <div>
        <Layout>
          <Layout.Column>
            <Card heading="Full Page Layout with gutter & spacing " />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Full Page with a max width</h1>
      <div>
        <Layout capWidth={true}>
          <Layout.Column>
            <Card heading="Full Page Layout with max width" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Column Layouts</h1>
      <div>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 3" />
          </Layout.Column>
        </Layout>
        <Layout>
          <Layout.Column>
            <Card heading="Column 1" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 2" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 3" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Column 4" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">12 Column Grid Widths</h1>
      <div>
        <Layout>
          <Layout.Column columns={4}>
            <Card heading="4 Columns" />
          </Layout.Column>
          <Layout.Column columns={8}>
            <Card heading="8 Columns" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Fixed Column Widths</h1>
      <div>
        <Layout>
          <Layout.Column width={'400px'}>
            <Card heading="400px Fixed Width" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Responsive Column" />
          </Layout.Column>
        </Layout>
      </div>
      <h1 className="section-label">Custom Spacing</h1>
      <div>
        <Layout spacing={60}>
          <Layout.Column spacing={0}>
            <Card heading="Custom Spacing (0px)" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Custom Spacing (60px)" />
          </Layout.Column>
          <Layout.Column>
            <Card heading="Custom Spacing (60px)" />
          </Layout.Column>
        </Layout>
      </div>
    </div>
  ));
