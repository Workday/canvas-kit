/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

import Combobox, {ComboboxProps} from '../index';
import FormField from '../../../../form-field/react';
import {MenuItem} from '../../../menu/react';
import {TextInput} from '../../../../text-input/react';
import README from '../README.md';

class Autocomplete extends React.Component<
  Omit<ComboboxProps, 'children' | 'clearButtonType' | 'clearButtonLabel' | 'clearButtonVariant'>,
  {currentText: string}
> {
  state = {
    currentText: '',
  };

  autocompleteCallback = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({currentText: event.target.value});
  };

  render() {
    const autocompleteResult = (textModifier: string) => (
      <MenuItem onClick={action(`Clicked Result ${textModifier}`)}>
        Result{' '}
        <span>
          num<span>ber</span>
        </span>{' '}
        {textModifier}
      </MenuItem>
    );
    return (
      <Combobox
        {...this.props}
        autocompleteItems={Array.apply(null, Array(this.state.currentText.length))
          .map((x: any, i: string) => autocompleteResult(i))
          .splice(0, 5)}
        onChange={this.autocompleteCallback}
        showClearButton={this.props.showClearButton == null ? true : this.props.showClearButton}
        labelId="autocomplete-123"
        onFocus={action(`Focus`)}
        onBlur={action(`Blur`)}
      >
        <TextInput placeholder="Autocomplete" />
      </Combobox>
    );
  }
}

storiesOf('Labs|Combobox/React', module)
  .addParameters({component: Combobox})
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Autocomplete', () => (
    <FormField id="autocomplete-123" label="Autocomplete example">
      <Autocomplete />
    </FormField>
  ))
  .add('Grow', () => (
    <FormField grow={true} id="autocomplete-123" label="Grow example">
      <Autocomplete />
    </FormField>
  ))
  .add('No clear button', () => (
    <FormField id="autocomplete-123" label="No clear button">
      <Autocomplete showClearButton={false} />
    </FormField>
  ));
