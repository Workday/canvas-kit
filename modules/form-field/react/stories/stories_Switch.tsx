/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Switch} from '../../../switch/react/index';
import FormField from '../index';
import README from '../../../switch/react/README.md';

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
        <Switch
          disabled={false}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
          id="my-switch-field"
        />
      </div>
    );
  }

  private handleCheck() {
    this.setState({isChecked: !this.state.isChecked});
  }
}

storiesOf('Form Field/Switch', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Switch</h1>
      <FormField label="My Switch Field" inputId="my-switch-field">
        <SwitchWrapper />
      </FormField>
    </div>
  ));
