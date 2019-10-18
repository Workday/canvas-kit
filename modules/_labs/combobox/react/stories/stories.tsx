/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';

import Combobox, {ComboboxProps} from '../index';
import FormField from '../../../../form-field/react/index';
import {MenuItem} from '../../../menu/react/index';
import {TextInput} from '../../../../text-input/react/index';
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
        showClearButton={true}
        labelId="autocomplete-123"
      >
        <TextInput placeholder="Autocomplete" autoFocus={true} />
      </Combobox>
    );
  }
}

storiesOf('Labs/Combobox/React', module)
  .addDecorator(withReadme(README))
  .add('Autocomplete', () => (
    <FormField id="autocomplete-123" label="Autocomplete example">
      <Autocomplete />
    </FormField>
  ));
