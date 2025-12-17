import * as React from 'react';
import {SidePanel} from '@workday/canvas-kit-labs-react/side-panel';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Testing/Labs/Side Panel/Cypress',
  component: SidePanel,
};

const Container = props => {
  return <div style={{display: 'flex', height: 'calc(100vh - 80px)', width: '100%'}} {...props} />;
};

const label = `Accessible Label Name`;

export const Default = () => {
  return (
    <Container>
      <SidePanel>
        <span hidden>{label}</span>
        <SidePanel.ToggleButton />
      </SidePanel>
    </Container>
  );
};
export const AsDiv = () => {
  return (
    <Container>
      <SidePanel as="div" role="region">
        <span hidden>{label}</span>
        <SidePanel.ToggleButton />
      </SidePanel>
    </Container>
  );
};
export const AsAside = () => {
  return (
    <Container>
      <SidePanel as="aside">
        <span hidden>{label}</span>
        <SidePanel.ToggleButton />
      </SidePanel>
      <div>Main Content</div>
    </Container>
  );
};

export const FirstFocusable = () => {
  const Header = props => {
    return (
      <div
        style={{
          width: '100%',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '8px 16px',
          boxSizing: 'border-box',
          border: '1px solid #777',
          position: 'relative',
          zIndex: 1,
        }}
        {...props}
      />
    );
  };

  // eslint-disable-next-line no-empty-function
  const noop = () => {};

  return (
    <React.Fragment>
      <Header>
        <Avatar altText="Avatar" onClick={noop} />
      </Header>
      <Container>
        <SidePanel>
          <span hidden>{label}</span>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>
  );
};
