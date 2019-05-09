/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../utils/storybook';

import ColorInput from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface CustomColorInputWrapperState {
  color: string;
  validColor: string;
}

export default class CustomColorInputWrapper extends React.Component<
  {},
  CustomColorInputWrapperState
> {
  state = {
    color: '',
    validColor: '',
  };

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <ColorInput
          showCheck={true}
          onChange={this.onChange}
          value={this.state.color}
          onValidColorChange={this.validColorChange}
          disabled={false}
          grow={false}
        />
        <h3 style={{color: this.state.validColor}}>Change My Text Color</h3>
      </div>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: e.currentTarget.value,
    });
  };

  private validColorChange = (colorHex: string) => {
    this.setState({
      validColor: colorHex,
    });
  };
}

storiesOf('Canvas Kit/Color Picker', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Color Input', () => (
    <div className="story">
      <h1 className="section-label">Custom Color Input</h1>
      <CustomColorInputWrapper />
    </div>
  ));
