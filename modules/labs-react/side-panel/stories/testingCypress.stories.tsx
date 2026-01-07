import * as React from 'react';

import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-labs-react/side-panel';
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
  const model = useSidePanelModel();
  return (
    <Container>
      <SidePanel model={model}>
        <span hidden id={model.state.labelId}>
          {label}
        </span>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
    </Container>
  );
};
export const AsDiv = () => {
  const model = useSidePanelModel();
  return (
    <Container>
      <SidePanel as="div" role="region" model={model}>
        <span hidden id={model.state.labelId}>
          {label}
        </span>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
    </Container>
  );
};
export const AsAside = () => {
  const model = useSidePanelModel();
  return (
    <Container>
      <SidePanel as="aside" model={model}>
        <span hidden id={model.state.labelId}>
          {label}
        </span>
        <SidePanel.ToggleButton aria-label={label} />
      </SidePanel>
      <div>Main Content</div>
    </Container>
  );
};

export const FirstFocusable = () => {
  const model = useSidePanelModel();
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

  return (
    <React.Fragment>
      <Header>
        <PrimaryButton>Open</PrimaryButton>
      </Header>
      <Container>
        <SidePanel model={model}>
          <span hidden id={model.state.labelId}>
            {label}
          </span>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton aria-label={label} />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>
  );
};
