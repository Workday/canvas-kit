import * as React from 'react';
import {DeprecatedDrawer, DeprecatedDrawerDirection, DeprecatedDrawerHeader} from '../index';
import {space} from '@workday/canvas-kit-react/tokens';

const title = 'Drawer Header';

export default {
  title: 'Labs/Drawer/React',
  component: DeprecatedDrawer,
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
        left: DeprecatedDrawerDirection.Left,
        right: DeprecatedDrawerDirection.Right,
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
    <DeprecatedDrawer openDirection={DeprecatedDrawerDirection.Left} padding={space.s}>
      <div style={{fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget.
      </div>
    </DeprecatedDrawer>
  </div>
);

export const WithHeader = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <DeprecatedDrawer
      header={
        <DeprecatedDrawerHeader
          closeIconAriaLabel={'Close'}
          onClose={() => console.log('onClose callback')}
          title={'Drawer Header'}
        />
      }
      openDirection={DeprecatedDrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    />
  </div>
);

export const WithHeaderNoCloseIcon = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <DeprecatedDrawer
      header={<DeprecatedDrawerHeader title={'Drawer Header'} />}
      openDirection={DeprecatedDrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    />
  </div>
);

const ConfigurableTemplate = props => (
  <div style={{height: '80vh', position: 'relative'}}>
    <DeprecatedDrawer
      header={
        <DeprecatedDrawerHeader
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
    </DeprecatedDrawer>
  </div>
);

export const Configurable = ConfigurableTemplate.bind({});
(Configurable as any).args = {
  headerColor: '#f6f7f8',
  inverse: false,
  title,
  openDirection: DeprecatedDrawerDirection.Left,
  padding: space.s,
  showDropShadow: true,
};

export const Accessible = () => (
  <div style={{height: '80vh', position: 'relative'}}>
    <DeprecatedDrawer
      aria-labelledby={'accessibleDeprecatedDrawer'}
      role={'region'}
      header={
        <DeprecatedDrawerHeader
          id={'accessibleDeprecatedDrawer'}
          closeIconAriaLabel={'Close'}
          onClose={() => console.log('onClose callback')}
          title={title}
        />
      }
      openDirection={DeprecatedDrawerDirection.Left}
      padding={space.s}
      showDropShadow={true}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
      amet blandit leo lobortis eget.
    </DeprecatedDrawer>
  </div>
);
