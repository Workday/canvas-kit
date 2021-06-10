/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Drawer, DrawerDirection, DrawerHeader} from '../index';
import README from '../README.md';
import {space} from '@workday/canvas-kit-react/tokens';

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
  zero: space.zero,
  xxxs: space.xxxs,
  xxs: space.xxs,
  xs: space.xs,
  s: space.s,
  m: space.m,
  l: space.l,
};

const paddingDefault = paddingOptions.s;

storiesOf('Labs/Drawer/React', module)
  .addParameters({component: Drawer})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer openDirection={DrawerDirection.Left} padding={space.s}>
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
              closeIconAriaLabel={'Close'}
              onClose={action('onClose callback')}
              title={'Drawer Header'}
            />
          }
          openDirection={DrawerDirection.Left}
          padding={space.s}
          showDropShadow={true}
        ></Drawer>
      </div>
    </div>
  ))
  .add('With Header, No Close Icon', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer
          header={<DrawerHeader title={'Drawer Header'} />}
          openDirection={DrawerDirection.Left}
          padding={space.s}
          showDropShadow={true}
        />
      </div>
    </div>
  ))
  .add('Configurable', () => (
    <div className="story">
      <div style={{height: '80vh', position: 'relative'}}>
        <Drawer
          header={
            <DrawerHeader
              closeIconAriaLabel={'Close'}
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
              closeIconAriaLabel={'Close'}
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
