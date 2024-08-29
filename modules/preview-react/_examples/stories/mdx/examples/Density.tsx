import React from 'react';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {calc, createStencil, createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  marginBlockStart: system.space.x3,
  marginBlockEnd: system.space.x3,
  maxWidth: '600px',
});

const formFieldGroupListStyles = createStyles({
  display: 'inline-flex',
  flexDirection: 'row',
});

const sideBySideInputs = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

const zipCodeInput = createStyles({
  minWidth: '100px',
});

const selectHighCaretStyles = createStyles({
  '& + [data-part="select-caret-container"]': {
    height: '32px',
  },
});

const selectLowCaretStyles = createStyles({
  '& + [data-part="select-caret-container"]': {
    height: '48px',
  },
});

const formFieldStyles = createStyles({
  marginBottom: system.space.zero,
});

const flexContainerStencil = createStencil({
  vars: {
    densityGap: '',
  },
  base: ({densityGap}) => ({
    display: 'flex',
    gap: densityGap,
    flexDirection: 'column',
  }),
});

const containerAlignmentStencil = createStencil({
  base: {
    display: 'flex',
  },
  modifiers: {
    alignment: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },
});

// high = 32px height on inputs, space between inputs is 16px
// medium 40px height on inputs, space between inputs is 24px
// low = 38px height on inputs, space between inputs is 32px

export const Density = () => {
  const [density, setDensity] = React.useState('medium');
  const [densitySpacing, setDensitySpacing] = React.useState('');
  const [inputDensity, setInputDensity] = React.useState('');
  const [inputHeight, setInputHeight] = React.useState('');
  const [containerAlignment, setContainerAlignment] = React.useState<'left' | 'center'>('left');

  const handleDensity = data => {
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

  const handleContainerAlignment = data => {
    setContainerAlignment(data.id);
  };

  return (
    <div>
      <div>
        <Heading size="small">Choose Your Density</Heading>
        <SegmentedControl onSelect={data => handleDensity(data)} size="small">
          <SegmentedControl.List aria-label="choose a density">
            <SegmentedControl.Item data-id="high">High</SegmentedControl.Item>
            <SegmentedControl.Item data-id="medium">Medium</SegmentedControl.Item>
            <SegmentedControl.Item data-id="low">Low</SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </div>
      <div>
        <Heading size="small">Container Alignment</Heading>
        <SegmentedControl onSelect={data => handleContainerAlignment(data)} size="small">
          <SegmentedControl.List aria-label="choose a density">
            <SegmentedControl.Item data-id="left">Left</SegmentedControl.Item>
            <SegmentedControl.Item data-id="center">Center</SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
      </div>
      <div {...containerAlignmentStencil({alignment: containerAlignment})}>
        <form action="#" className={formStyles}>
          <div {...flexContainerStencil({densityGap: densitySpacing})}>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Choose Country</FormField.Label>
              <Select items={['Dominican Republic', 'Spain', 'United States']}>
                <FormField.Input
                  cs={[
                    {paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight},
                    density === 'high'
                      ? selectHighCaretStyles
                      : density === 'medium'
                      ? null
                      : selectLowCaretStyles,
                  ]}
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
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Full Name</FormField.Label>
              <FormField.Input
                as={TextInput}
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Phone Number</FormField.Label>
              <FormField.Input
                as={TextInput}
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Street Address</FormField.Label>
              <FormField.Input
                as={TextInput}
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>City</FormField.Label>
              <FormField.Input
                as={TextInput}
                cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
              />
            </FormField>
            <div className={sideBySideInputs}>
              <FormField grow cs={formFieldStyles}>
                <FormField.Label>State</FormField.Label>
                <FormField.Input
                  as={TextInput}
                  cs={{paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight}}
                />
              </FormField>
              <FormField grow cs={formFieldStyles}>
                <FormField.Label>Zip Code</FormField.Label>
                <FormField.Input
                  cs={[
                    zipCodeInput,
                    {paddingTop: inputDensity, paddingBottom: inputDensity, height: inputHeight},
                  ]}
                  as={TextInput}
                />
              </FormField>
            </div>
            <FormField>
              <FormField.Label>Enable Fast Shipping</FormField.Label>
              <FormField.Input as={Switch} />
            </FormField>
            <FormFieldGroup cs={formFieldStyles}>
              <FormFieldGroup.Legend>Credit Card</FormFieldGroup.Legend>

              <FormFieldGroup.List cs={formFieldGroupListStyles}>
                <FormFieldGroup.Input
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
                />
                <FormFieldGroup.Input
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
                />
                <FormFieldGroup.Input
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
                />
                <FormFieldGroup.Input
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
                />
              </FormFieldGroup.List>
            </FormFieldGroup>
          </div>
        </form>
      </div>
    </div>
  );
};
