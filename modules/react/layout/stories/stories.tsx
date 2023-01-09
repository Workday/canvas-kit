import * as React from 'react';
import {storiesOf} from '@storybook/react';

import {Card} from '@workday/canvas-kit-react/card';

import {DeprecatedLayout} from '../index';

storiesOf('Components/Containers/Column and Layout', module)
  .addParameters({component: DeprecatedLayout})
  .addParameters({ReadmePath: 'react/layout'})
  .add('Page Layout', () => (
    <div className="story">
      <h3>Full Page</h3>
      <div>
        <DeprecatedLayout gutter={0}>
          <DeprecatedLayout.Column spacing={0}>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
      <h3>Full Page with gutter & spacing</h3>
      <div>
        <DeprecatedLayout>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
      <h3>Full Page with a max width</h3>
      <div>
        <DeprecatedLayout capWidth={true}>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
    </div>
  ))
  .add('12 Column Layout', () => (
    <div className="story">
      <h3>12 Columns</h3>
      <div>
        <DeprecatedLayout>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
        <DeprecatedLayout>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
        <DeprecatedLayout>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
        <DeprecatedLayout>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
      <h3>12 Column Grid Widths</h3>
      <div>
        <DeprecatedLayout>
          <DeprecatedLayout.Column columns={4}>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column columns={8}>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
      <h3>Fixed Column Widths</h3>
      <div>
        <DeprecatedLayout>
          <DeprecatedLayout.Column width={'400px'}>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
      <h3>Custom Spacing</h3>
      <div>
        <DeprecatedLayout spacing={60}>
          <DeprecatedLayout.Column spacing={0}>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
          <DeprecatedLayout.Column>
            <Card />
          </DeprecatedLayout.Column>
        </DeprecatedLayout>
      </div>
    </div>
  ));
