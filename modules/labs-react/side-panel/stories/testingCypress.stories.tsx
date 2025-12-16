import * as React from 'react';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Testing/Preview/Side Panel/Cypress',
  component: SidePanel,
};

const Container = props => {
  return <div style={{display: 'flex', height: 'calc(100vh - 80px)', width: '100%'}} {...props} />;
};

const label = `Accessible Label Name`;

export const Default = () => {
  const {labelProps, panelProps, controlProps} = useSidePanel();

  return (
    <Container>
      <SidePanel {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
    </Container>
  );
};
export const AsDiv = () => {
  const {labelProps, panelProps, controlProps} = useSidePanel();

  return (
    <Container>
      <SidePanel as="div" role="region" {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
    </Container>
  );
};
export const AsAside = () => {
  const {labelProps, panelProps, controlProps} = useSidePanel();

  return (
    <Container>
      <SidePanel as="aside" {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
      <div>Main Content</div>
    </Container>
  );
};

export const FirstFocusable = () => {
  const {labelProps, panelProps, controlProps} = useSidePanel();

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
        <SidePanel {...panelProps}>
          <span hidden {...labelProps}>
            {label}
          </span>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton {...controlProps} />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>
  );
};
