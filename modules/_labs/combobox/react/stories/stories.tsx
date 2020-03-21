/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

import Combobox, {ComboboxProps} from '../index';
import {typeColors} from '../../../../core/react';
import FormField from '../../../../form-field/react';
import {MenuItem} from '../../../menu/react';
import {TextInput} from '../../../../text-input/react';
import {Avatar} from '../../../../avatar/react';
import README from '../README.md';

const autocompleteResult = (textModifier: string) => (
  <MenuItem onClick={action(`Clicked Result ${textModifier}`)}>
    Result{' '}
    <span>
      num<span>ber</span>
    </span>{' '}
    {textModifier}
  </MenuItem>
);

const complexAutocompleteResult = (textModifier: string) => {
  const shortText = `Heading ${textModifier}`;
  return (
    <MenuItem
      style={{height: '70px'}}
      onClick={action(`Clicked Result ${textModifier}`)}
      shortText={shortText}
    >
      <Avatar style={{float: 'left', marginRight: '20px'}} size={Avatar.Size.m} />
      <div>
        <div>{shortText}</div>
        <div style={{color: typeColors.hint}}>Some extra Info</div>
      </div>
    </MenuItem>
  );
};

class Autocomplete extends React.Component<
  Omit<
    ComboboxProps,
    'children' | 'clearButtonType' | 'clearButtonLabel' | 'clearButtonVariant'
  > & {useComplexMenu?: boolean},
  {currentText: string}
> {
  state = {
    currentText: '',
  };

  autocompleteCallback = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({currentText: event.target.value});
  };

  render() {
    const Results = this.props.useComplexMenu ? complexAutocompleteResult : autocompleteResult;
    return (
      <Combobox
        {...this.props}
        autocompleteItems={Array.apply(null, Array(this.state.currentText.length))
          .map((x: any, i: string) => Results(i))
          .splice(0, 5)}
        onChange={this.autocompleteCallback}
        showClearButton={this.props.showClearButton == null ? true : this.props.showClearButton}
        labelId="autocomplete-123"
        onFocus={action('Focus')}
        onBlur={action('Blur')}
        initialValue="Test"
      >
        <TextInput autoFocus placeholder="Autocomplete" />
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
  ))
  .add('Complex Menu Items', () => (
    <FormField id="autocomplete-123" label="Complex Menu Items">
      <Autocomplete showClearButton={false} useComplexMenu={true} />
    </FormField>
  ));
