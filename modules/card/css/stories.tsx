import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';

storiesOf('CSS/Card', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h2>Default</h2>
      <section>
        <div className="wdc-card-container">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-6">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-6</div>
          </div>
          <div className="wdc-card-4">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-4</div>
          </div>
          <div className="wdc-card-4">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-4</div>
          </div>
          <div className="wdc-card-4">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-4</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-3</div>
          </div>
          <div className="wdc-card-6">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-6</div>
          </div>
          <div className="wdc-card-6">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-6</div>
          </div>
        </div>
      </section>

      <h2>Positioning</h2>

      <section>
        <div className="wdc-card-container wdc-card-container-around">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-around</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-around</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-around</div>
          </div>
        </div>
        <div className="wdc-card-container wdc-card-container-between">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-between</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-between</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-between</div>
          </div>
        </div>
        <div className="wdc-card-container wdc-card-container-center">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-center</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-center</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-center</div>
          </div>
        </div>
        <div className="wdc-card-container wdc-card-container-end">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-end</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-end</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-end</div>
          </div>
        </div>
        <div className="wdc-card-container wdc-card-container-start">
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-start</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-start</div>
          </div>
          <div className="wdc-card-3">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-container-start</div>
          </div>
        </div>
      </section>

      <h2>No Padding</h2>

      <section>
        <div className="wdc-card-container">
          <div className="wdc-card-6 wdc-card-no-padding">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-6.wdc-card-no-padding</div>
          </div>
          <div className="wdc-card-6">
            <div className="wdc-card-header">Card Header</div>
            <div className="wdc-card-body">.wdc-card-6</div>
          </div>
        </div>
      </section>
    </div>
  ));
