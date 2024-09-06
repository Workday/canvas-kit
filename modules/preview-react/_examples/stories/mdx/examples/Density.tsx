import React from 'react';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {calc, createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  marginBlockStart: system.space.x3,
  marginBlockEnd: system.space.x3,
  maxWidth: px2rem(600),
});

const formFieldGroupListStyles = createStyles({
  display: 'inline-flex',
  flexDirection: 'row',
  padding: 0,
});

const sideBySideInputs = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

const zipCodeInput = createStyles({
  minWidth: px2rem(100),
});

const formFieldStyles = createStyles({
  marginBottom: system.space.zero,
});

const creditCardInputStyles = createStyles({
  minWidth: px2rem(80),
  maxWidth: px2rem(80),
  textAlign: 'center',
});

const selectStencil = createStencil({
  base: {},
  modifiers: {
    density: {
      high: {
        '[data-part="select-visual-input"]': {
          height: system.space.x8,
          paddingTop: system.space.x1,
          paddingBottom: system.space.x1,
        },
        '& [data-part="select-caret-container"]': {
          height: system.space.x8,
        },
      },
      medium: {
        '[data-part="select-visual-input"]': {
          height: system.space.x10,
          paddingTop: system.space.x2,
          paddingBottom: system.space.x2,
        },
      },
      low: {
        '[data-part="select-visual-input"]': {
          height: calc.add(system.space.x10, system.space.x2),
          paddingTop: system.space.x3,
          paddingBottom: system.space.x3,
        },
        '&  [data-part="select-caret-container"]': {
          height: calc.add(system.space.x10, system.space.x2),
        },
      },
    },
  },
});

const inputStencil = createStencil({
  base: {},
  modifiers: {
    density: {
      high: {
        height: system.space.x8,
        paddingTop: system.space.x1,
        paddingBottom: system.space.x1,
      },
      medium: {
        height: system.space.x10,
        paddingTop: system.space.x2,
        paddingBottom: system.space.x2,
      },

      low: {
        height: calc.add(system.space.x10, system.space.x2),
        paddingTop: system.space.x3,
        paddingBottom: system.space.x3,
      },
    },
  },
});

const flexContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  modifiers: {
    density: {
      high: {
        gap: system.space.x4,
      },
      medium: {
        gap: system.space.x6,
      },
      low: {
        gap: system.space.x8,
      },
    },
  },
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
// low = 48px height on inputs, space between inputs is 32px

export const Density = () => {
  const [density, setDensity] = React.useState<'high' | 'medium' | 'low'>('medium');
  const [containerAlignment, setContainerAlignment] = React.useState<'left' | 'center'>('left');

  const handleDensity = data => {
    setDensity(data.id);
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
          <div {...flexContainerStencil({density})}>
            <FormField grow cs={[formFieldStyles]}>
              <FormField.Label>Choose Country</FormField.Label>
              <Select items={['Dominican Republic', 'Spain', 'United States']}>
                <FormField.Input
                  cs={selectStencil({density})}
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
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Phone Number</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>Street Address</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField grow cs={formFieldStyles}>
              <FormField.Label>City</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <div className={sideBySideInputs}>
              <FormField grow cs={formFieldStyles}>
                <FormField.Label>State</FormField.Label>
                <FormField.Input as={TextInput} cs={inputStencil({density})} />
              </FormField>
              <FormField grow cs={formFieldStyles}>
                <FormField.Label>Zip Code</FormField.Label>
                <FormField.Input cs={[zipCodeInput, inputStencil({density})]} as={TextInput} />
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
                  cs={[inputStencil({density}), creditCardInputStyles]}
                />
                <FormFieldGroup.Input
                  as={TextInput}
                  placeholder="XXXX"
                  cs={[inputStencil({density}), creditCardInputStyles]}
                />
                <FormFieldGroup.Input
                  as={TextInput}
                  placeholder="XXXX"
                  cs={[inputStencil({density}), creditCardInputStyles]}
                />
                <FormFieldGroup.Input
                  cs={[inputStencil({density}), creditCardInputStyles]}
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
