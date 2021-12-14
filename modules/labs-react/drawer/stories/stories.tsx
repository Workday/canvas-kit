import * as React from 'react';
import {Drawer, DrawerDirection, DrawerHeader} from '../index';
import {space} from '@workday/canvas-kit-react/tokens';

const title = 'Drawer Header';

export default {
  title: 'Labs/Drawer/React',
  component: Drawer,
  parameters: {
    ReadmePath: 'labs-react/drawer',
  },
  argTypes: {
    headerColor: {
      control: 'color',
    },
    inverse: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    openDirection: {
      options: {
        left: DrawerDirection.Left,
        right: DrawerDirection.Right,
      },
      control: 'radio',
    },
    showDropShadow: {
      control: 'boolean',
    },
  },
};

export const Basic = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <Drawer openDirection={DrawerDirection.Left} padding={space.s}>
      <div style={{fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget.
      </div>
    </Drawer>
  </div>
);

export const WithHeader = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <Drawer
      header={
        <DrawerHeader
          closeIconAriaLabel={'Close'}
          onClose={() => console.log('onClose callback')}
          title={'Drawer Header'}
        />
      }
      openDirection={DrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    ></Drawer>
  </div>
);

export const WithHeaderNoCloseIcon = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <Drawer
      header={<DrawerHeader title={'Drawer Header'} />}
      openDirection={DrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    />
  </div>
);

const ConfigurableTemplate = props => (
  <div style={{height: '80vh', position: 'relative'}}>
    <Drawer
      header={
        <DrawerHeader
          closeIconAriaLabel={'Close'}
          headerColor={props.headerColor}
          inverse={props.inverse}
          onClose={() => 'onClose callback'}
          title={props.title}
        />
      }
      openDirection={props.openDirection}
      padding={props.padding}
      showDropShadow={props.showDropShadow}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
      amet blandit leo lobortis eget.
    </Drawer>
  </div>
);

export const Configurable = ConfigurableTemplate.bind({});
(Configurable as any).args = {
  headerColor: '#f6f7f8',
  inverse: false,
  title,
  openDirection: DrawerDirection.Left,
  padding: space.s,
  showDropShadow: true,
};

export const Accessible = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <Drawer
      aria-labelledby={'accessibleDrawer'}
      role={'region'}
      header={
        <DrawerHeader
          id={'accessibleDrawer'}
          closeIconAriaLabel={'Close'}
          onClose={() => console.log('onClose callback')}
          title={title}
        />
      }
      openDirection={DrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
      amet blandit leo lobortis eget.
    </Drawer>
  </div>
);
