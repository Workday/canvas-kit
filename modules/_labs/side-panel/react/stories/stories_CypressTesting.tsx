/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import SidePanel, {useSidePanel} from '../index';

export default {
  title: 'Testing|React/Labs/Side Panel/Cypress',
  component: SidePanel,
};

const Container = props => {
  return <div style={{display: 'flex', height: 'calc(100vh - 80px)', width: '100%'}} {...props} />;
};

const label = `Accessible Label Name`;

export const Default = () => {
  const {labelProps, panelProps, controlProps} = useSidePanel({});

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
  const {labelProps, panelProps, controlProps} = useSidePanel({});

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
  const {labelProps, panelProps, controlProps} = useSidePanel({});

  return (
    <Container>
      <SidePanel as="aside" {...panelProps}>
        <span hidden {...labelProps}>
          {label}
        </span>
        <SidePanel.ToggleButton {...controlProps} />
      </SidePanel>
      <main>Main Content</main>
    </Container>
  );
};
