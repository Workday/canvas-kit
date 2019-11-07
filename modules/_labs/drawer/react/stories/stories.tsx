/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Drawer, DrawerDirection, DrawerHeader} from '../index';
import README from '../README.md';
import {spacing} from '@workday/canvas-kit-react-core';

// Drawer Open Direction Knob
const label = 'Open Direction';
const options = {
  left: DrawerDirection.Left,
  right: DrawerDirection.Right,
};
const defaultValue = DrawerDirection.Left;

// Drawer show inverse icon Knob
const showInverselabel = 'Show Inverse Icon';
const showInverseIconDefaultValue = false;

// Drawer header color
const headerColor = 'Header Background Color';
const headerColorDefaultValue = '#f6f7f8';

const headerTitle = 'Title';
const title = 'Drawer Header';

const showDropShadowLabel = 'Show Drop Shadow';
const showDropShadow = true;

const paddingLabel = 'Padding';
const paddingOptions = {
  zero: spacing.zero,
  xxxs: spacing.xxxs,
  xxs: spacing.xxs,
  xs: spacing.xs,
  s: spacing.s,
  m: spacing.m,
  l: spacing.l,
};

const paddingDefault = paddingOptions.s;

storiesOf('Labs/Drawer/React', module)
  .addParameters({component: Drawer})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer openDirection={DrawerDirection.Left} padding={spacing.s}>
          <div style={{fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </div>
        </Drawer>
      </div>
    </div>
  ))
  .add('With Header', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer
          header={
            <DrawerHeader
              closeIconLabel={'Close'}
              onClose={action('onClose callback')}
              title={'Drawer Header'}
            />
          }
          openDirection={DrawerDirection.Left}
          padding={spacing.s}
          showDropShadow={true}
        ></Drawer>
      </div>
    </div>
  ))
  .add('Configurable', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer
          header={
            <DrawerHeader
              closeIconLabel={'Close'}
              headerColor={text(headerColor, headerColorDefaultValue)}
              inverse={boolean(showInverselabel, showInverseIconDefaultValue)}
              onClose={action('onClose callback')}
              title={text(headerTitle, title)}
            />
          }
          openDirection={select(label, options, defaultValue)}
          padding={select(paddingLabel, paddingOptions, paddingDefault)}
          showDropShadow={boolean(showDropShadowLabel, showDropShadow)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Drawer>
      </div>
    </div>
  ))
  .add('Accessible', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer
          aria-labelledby={'accessibleDrawer'}
          role={'region'}
          header={
            <DrawerHeader
              id={'accessibleDrawer'}
              closeIconLabel={'Close'}
              headerColor={text(headerColor, headerColorDefaultValue)}
              inverse={boolean(showInverselabel, showInverseIconDefaultValue)}
              onClose={action('onClose callback')}
              title={text(headerTitle, title)}
            />
          }
          openDirection={select(label, options, defaultValue)}
          padding={select(paddingLabel, paddingOptions, paddingDefault)}
          showDropShadow={boolean(showDropShadowLabel, showDropShadow)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Drawer>
      </div>
    </div>
  ));
