import * as React from 'react';

import {Avatar} from '@workday/canvas-kit-react/avatar';
import {PrimaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanelModel} from '@workday/canvas-kit-react/side-panel';
import {relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';

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
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
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
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
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
        <SidePanel.Heading hidden>{label}</SidePanel.Heading>
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

  // eslint-disable-next-line no-empty-function
  const noop = () => {};

  return (
    <React.Fragment>
      <Header>
        <TertiaryButton icon={relatedActionsVerticalIcon} aria-label="Open" />
      </Header>
      <Container>
        <SidePanel model={model}>
          <SidePanel.Heading hidden>{label}</SidePanel.Heading>
          <h1>Panel Name</h1>
          <SidePanel.ToggleButton aria-label={label} />
          <PrimaryButton>Another Button</PrimaryButton>
        </SidePanel>
      </Container>
    </React.Fragment>
  );
};
