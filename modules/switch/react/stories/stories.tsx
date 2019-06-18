/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Switch from '..';
import README from '../README.md';

interface SwitchWrapperState {
  isChecked: boolean;
}

class SwitchWrapper extends React.Component<{}, SwitchWrapperState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isChecked: true,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <Switch disabled={false} checked={this.state.isChecked} onChange={this.handleCheck} />
      </div>
    );
  }

  private handleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }
}

storiesOf('Switch', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Switch</h1>
      <SwitchWrapper />
    </div>
  ));
