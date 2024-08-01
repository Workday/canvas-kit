import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Title} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {calc, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  marginBlockStart: system.space.x3,
  marginBlockEnd: system.space.x3,
});

const fieldSetStyles = createStyles({
  maxWidth: '400px',
});

const sideBySideInputs = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

const zipCodeInput = createStyles({
  minWidth: '100px',
});

// high = 32px height on inputs, space between inputs is 16px
// medium 40px height on inputs, space between inputs is 24px
// low = 38px height on inputs, space between inputs is 32px

export const Density = () => {
  const [value, setValue] = React.useState('');
  const [density, setDensity] = React.useState('medium');
  const [densitySpacing, setDensitySpacing] = React.useState('');
  const [inputDensity, setInputDensity] = React.useState('');
  const [inputHeight, setInputHeight] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleDensity = data => {
    console.log(data);
    setDensity(data.id);
    if (data.id === 'high') {
      setInputHeight(cssVar(system.space.x8));
      setDensitySpacing(cssVar(system.space.x4));
      setInputDensity(cssVar(system.space.x1));
    } else if (data.id === 'medium') {
      setInputHeight(cssVar(system.space.x10));
      setInputDensity(cssVar(system.space.x2));
      setDensitySpacing(cssVar(system.space.x6));
    } else {
      setInputHeight(calc.add(system.space.x10, system.space.x2));
      setInputDensity(cssVar(system.space.x3));
      setDensitySpacing(cssVar(system.space.x8));
    }
  };

  return (
    <div>
      <Title size="small">Choose a Density</Title>
      <SegmentedControl onSelect={data => handleDensity(data)}>
        <SegmentedControl.List aria-label="choose a density">
          <SegmentedControl.Item data-id="high">High</SegmentedControl.Item>
          <SegmentedControl.Item data-id="medium">Medium</SegmentedControl.Item>
          <SegmentedControl.Item data-id="low">Low</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <form className={formStyles}>
        <fieldset className={fieldSetStyles}>
          <legend>Update Your Address</legend>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>Choose Country</FormField.Label>
            <Select items={['Dominican Republic', 'Spain', 'United States']}>
              <FormField.Input
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
                placeholder="Choose a country"
                as={Select.Input}
              />
              <Select.Popper>
                <Select.Card>
                  <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
                </Select.Card>
              </Select.Popper>
            </Select>
          </FormField>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>Full Name</FormField.Label>
            <FormField.Input
              as={TextInput}
              cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              value={value}
              onChange={handleChange}
            />
          </FormField>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>Phone Number</FormField.Label>
            <FormField.Input
              as={TextInput}
              cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              value={value}
              onChange={handleChange}
            />
          </FormField>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>Street Address</FormField.Label>
            <FormField.Input
              as={TextInput}
              cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              value={value}
              onChange={handleChange}
            />
          </FormField>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>City</FormField.Label>
            <FormField.Input
              as={TextInput}
              cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              value={value}
              onChange={handleChange}
            />
          </FormField>
          <div className={sideBySideInputs}>
            <FormField grow cs={{marginBottom: densitySpacing}}>
              <FormField.Label>State</FormField.Label>
              <FormField.Input
                as={TextInput}
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
                value={value}
                onChange={handleChange}
              />
            </FormField>
            <FormField grow cs={{marginBottom: densitySpacing}}>
              <FormField.Label>Zip Code</FormField.Label>
              <FormField.Input
                cs={[
                  zipCodeInput,
                  {paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight},
                ]}
                as={TextInput}
                value={value}
                onChange={handleChange}
              />
            </FormField>
          </div>
          <FormField>
            <FormField.Label>Enable Fast Shipping</FormField.Label>
            <FormField.Input as={Switch} value={value} onChange={handleChange} />
          </FormField>
          <FormField grow cs={{marginBottom: densitySpacing}}>
            <FormField.Label>Credit Card</FormField.Label>
            <FormField.Container cs={{display: 'inline-flex', flexDirection: 'row', gap: '8px'}}>
              <FormField.Input
                as={TextInput}
                placeholder="XXXX"
                cs={{
                  minWidth: '80px',
                  maxWidth: '80px',
                  paddingTop: inputDensity,
                  paddingBottom: inputDensity,
                  height: inputHeight,
                  textAlign: 'center',
                }}
                value={value}
                onChange={handleChange}
              />
              <FormField.Input
                as={TextInput}
                placeholder="XXXX"
                cs={{
                  minWidth: '80px',
                  maxWidth: '80px',
                  paddingTop: inputDensity,
                  paddingBottom: inputDensity,
                  height: inputHeight,
                  textAlign: 'center',
                }}
                value={value}
                onChange={handleChange}
              />
              <FormField.Input
                as={TextInput}
                placeholder="XXXX"
                cs={{
                  minWidth: '80px',
                  maxWidth: '80px',
                  paddingTop: inputDensity,
                  paddingBottom: inputDensity,
                  height: inputHeight,
                  textAlign: 'center',
                }}
                value={value}
                onChange={handleChange}
              />
              <FormField.Input
                cs={{
                  minWidth: '80px',
                  maxWidth: '80px',
                  paddingTop: inputDensity,
                  paddingBottom: inputDensity,
                  height: inputHeight,
                  textAlign: 'center',
                }}
                placeholder="XXXX"
                as={TextInput}
                value={value}
                onChange={handleChange}
              />
            </FormField.Container>
          </FormField>
        </fieldset>
      </form>
    </div>
  );
};
