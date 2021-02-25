import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('Components/Containers/Layout/CSS', module)
  .addDecorator(withReadme(README))
  .add('Responsive Layout', () => (
    <div className="story">
      <div>
        <div className="wdc-row">
          <div className="wdc-col-sm-2 wdc-col-md-5 wdc-col-lg-2 wdc-col-xl-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-4 wdc-col-md-1 wdc-col-lg-2 wdc-col-xl-9">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-1 wdc-col-md-2 wdc-col-lg-2 wdc-col-xl-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-5 wdc-col-md-4 wdc-col-lg-6 wdc-col-xl-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-sm-3 wdc-col-md-11 wdc-col-lg-4 wdc-col-xl-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-9 wdc-col-md-1 wdc-col-lg-8 wdc-col-xl-11">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-sm-5 wdc-col-md-3 wdc-col-lg-5 wdc-col-xl-2">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-3 wdc-col-md-3 wdc-col-lg-2 wdc-col-xl-6">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-sm-4 wdc-col-md-6 wdc-col-lg-5 wdc-col-xl-4">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Fluid Layout', () => (
    <div className="story">
      <div>
        <div className="wdc-row">
          <div className="wdc-col-11">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-10">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-2">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-9">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-3">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-8">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-4">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-7">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-5">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-6">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-6">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-5">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-7">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-4">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-8">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-3">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-9">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-2">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-10">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-11">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Offsets', () => (
    <div className="story">
      <div>
        <div className="wdc-row">
          <div className="wdc-col-offset-11 wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-10 wdc-col-2">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-9 wdc-col-3">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-8 wdc-col-4">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-7 wdc-col-5">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-6 wdc-col-6">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-5 wdc-col-7">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-4 wdc-col-8">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-3 wdc-col-9">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-2 wdc-col-10">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-offset-1 wdc-col-11">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col-12">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Auto Widths', () => (
    <div className="story">
      <div>
        <div className="wdc-row">
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row">
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Horizontal Positioning', () => (
    <div className="story">
      <div>
        <div className="wdc-row wdc-row-start">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row wdc-row-center">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row wdc-row-end">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Vertical Positioning', () => (
    <div className="story">
      <div>
        <div className="wdc-row wdc-row-top">
          <div className="wdc-col">
            <div className="demo-box demo-box-big" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row wdc-row-middle">
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
          <div className="wdc-col">
            <div className="demo-box demo-box-big" />
          </div>
        </div>
        <div className="wdc-row wdc-row-bottom">
          <div className="wdc-col">
            <div className="demo-box demo-box-big" />
          </div>
          <div className="wdc-col">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Distribution', () => (
    <div className="story">
      <div>
        <div className="wdc-row wdc-row-around">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
        <div className="wdc-row wdc-row-between">
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
          <div className="wdc-col-1">
            <div className="demo-box" />
          </div>
        </div>
      </div>
    </div>
  ));
