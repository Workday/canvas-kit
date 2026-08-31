import React from 'react';

import {FormField, FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {Select} from '@workday/canvas-kit-react/select';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const formStyles = createStyles({
  margin: `${px2rem(12)} ${'0'}`,
  maxWidth: px2rem(600),
  minWidth: '0',
});

const formFieldGroupListStyles = createStyles({
  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const sideBySideInputs = createStencil({
  base: {
    display: 'inline-flex',
    gap: system.gap.sm,
    justifyContent: 'space-between',
  },
  modifiers: {
    labelOrientation: {
      horizontalStart: {
        display: 'flex',
        flexDirection: 'column',
      },
      horizontalEnd: {
        display: 'flex',
        flexDirection: 'column',
      },
      vertical: {
        display: 'inline-flex',
      },
    },
    density: {
      high: {},
      medium: {},
      low: {},
    },
  },
  compound: [
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'high'},
      styles: {
        gap: system.gap.md,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'medium'},
      styles: {
        gap: system.gap.lg,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'low'},
      styles: {
        gap: system.gap.xl,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'high'},
      styles: {
        gap: system.gap.md,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'medium'},
      styles: {
        gap: system.gap.lg,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'low'},
      styles: {
        gap: system.gap.xl,
      },
    },
  ],
});

const zipCodeInput = createStyles({
  minWidth: px2rem(90),
});

const zipCodeContainerStyles = createStyles({
  minWidth: '0',
});

const formFieldStencil = createStencil({
  base: {},
  modifiers: {
    density: {
      high: {
        gap: px2rem(2),
      },
      medium: {
        gap: system.gap.xs,
      },
      low: {
        gap: system.gap.sm,
      },
    },
    labelOrientation: {
      horizontalStart: {},
      horizontalEnd: {},
      vertical: {},
    },
  },
  compound: [
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'high'},
      styles: {
        gap: system.gap.md,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'medium'},
      styles: {
        gap: system.gap.lg,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalStart', density: 'low'},
      styles: {
        gap: system.gap.xl,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'high'},
      styles: {
        gap: system.gap.md,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'medium'},
      styles: {
        gap: system.gap.lg,
      },
    },
    {
      modifiers: {labelOrientation: 'horizontalEnd', density: 'low'},
      styles: {
        gap: system.gap.xl,
      },
    },
  ],
});

const selectStencil = createStencil({
  base: {},
  modifiers: {
    density: {
      high: {
        height: system.size.sm,
        padding: `${system.padding.xxs} ${system.padding.xs}`,
        '& + div': {
          height: system.size.sm,
        },
      },
      medium: {
        height: system.size.md,
        padding: `${system.padding.xs}`,
      },
      low: {
        height: calc.add(system.size.md, base.size100),
        padding: `${system.padding.sm} ${system.padding.xs}`,
        '& + div': {
          height: calc.add(system.size.md, base.size100),
        },
      },
    },
  },
});

const inputStencil = createStencil({
  base: {
    minWidth: px2rem(200),
  },
  modifiers: {
    density: {
      high: {
        height: system.size.sm,
        padding: `${system.padding.xxs} ${system.padding.xs}`,
      },
      medium: {
        height: system.size.md,
        padding: `${system.padding.xs}`,
      },

      low: {
        height: calc.add(system.size.md, base.size100),
        padding: `${system.padding.sm} ${system.padding.xs}`,
      },
    },
  },
});

const creditCardInputStencil = createStencil({
  extends: inputStencil,
  base: {
    width: calc.add(system.size.md, system.size.md),
    minWidth: calc.add(system.size.md, system.size.md),
    textAlign: 'center',
  },
});

const flexContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  modifiers: {
    density: {
      high: {
        gap: system.gap.md,
      },
      medium: {
        gap: system.gap.lg,
      },
      low: {
        gap: system.gap.xl,
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

const optionStyles = createStyles({
  display: 'flex',
  gap: px2rem(12),
  flexDirection: 'column',
});

const optionItemStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: px2rem(12),
  maxWidth: 'fit-content',
});

// high = 32px height on inputs, space between inputs is 16px
// medium 40px height on inputs, space between inputs is 24px
// low = 48px height on inputs, space between inputs is 32px

export const Density = () => {
  const [density, setDensity] = React.useState<'high' | 'medium' | 'low'>('medium');
  const [containerAlignment, setContainerAlignment] = React.useState<'left' | 'center'>('left');
  const [labelOrientation, setLabelOrientation] = React.useState<
    'vertical' | 'horizontalStart' | 'horizontalEnd'
  >('vertical');

  const handleDensity = data => {
    setDensity(data.id);
  };

  const handleContainerAlignment = data => {
    setContainerAlignment(data.id);
  };

  const handleLabelOrientation = data => {
    setLabelOrientation(data.id);
  };

  return (
    <div>
      <Heading size="small">Choose Your Density and Alignment</Heading>
      <div className={optionStyles}>
        <div className={optionItemStyles}>
          <Text>Density</Text>
          <SegmentedControl onSelect={data => handleDensity(data)} size="small">
            <SegmentedControl.List aria-label="choose a density">
              <SegmentedControl.Item data-id="high">High</SegmentedControl.Item>
              <SegmentedControl.Item data-id="medium">Medium</SegmentedControl.Item>
              <SegmentedControl.Item data-id="low">Low</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text>Label Orientation</Text>
          <SegmentedControl onSelect={data => handleLabelOrientation(data)} size="small">
            <SegmentedControl.List aria-label="choose a label orientation">
              <SegmentedControl.Item data-id="vertical">Vertical</SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalStart">
                Horizontal Start
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalEnd">Horizontal End</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text>Container Alignment</Text>
          <SegmentedControl onSelect={data => handleContainerAlignment(data)} size="small">
            <SegmentedControl.List aria-label="choose a density">
              <SegmentedControl.Item data-id="left">Left</SegmentedControl.Item>
              <SegmentedControl.Item data-id="center">Center</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
      </div>

      <div {...containerAlignmentStencil({alignment: containerAlignment})}>
        <form action="#" className={formStyles}>
          <div {...flexContainerStencil({density})}>
            <FormField
              orientation={labelOrientation}
              grow
              cs={formFieldStencil({density, labelOrientation})}
              id="foo"
            >
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
            <FormField
              grow
              orientation={labelOrientation}
              cs={formFieldStencil({density, labelOrientation})}
            >
              <FormField.Label>Full Name</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField
              grow
              orientation={labelOrientation}
              cs={formFieldStencil({density, labelOrientation})}
            >
              <FormField.Label>Phone Number</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField
              grow
              orientation={labelOrientation}
              cs={formFieldStencil({density, labelOrientation})}
            >
              <FormField.Label>Street Address</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <FormField
              grow
              orientation={labelOrientation}
              cs={formFieldStencil({density, labelOrientation})}
            >
              <FormField.Label>City</FormField.Label>
              <FormField.Input as={TextInput} cs={inputStencil({density})} />
            </FormField>
            <div {...sideBySideInputs({labelOrientation: labelOrientation, density})}>
              <FormField
                grow
                orientation={labelOrientation}
                cs={formFieldStencil({density, labelOrientation})}
              >
                <FormField.Label>State</FormField.Label>
                <FormField.Input as={TextInput} cs={inputStencil({density})} />
              </FormField>
              <FormField
                grow
                orientation={labelOrientation}
                cs={[formFieldStencil({density, labelOrientation}), zipCodeContainerStyles]}
              >
                <FormField.Label>Zip Code</FormField.Label>
                <FormField.Input cs={[inputStencil({density}), zipCodeInput]} as={TextInput} />
              </FormField>
            </div>
            <FormField
              orientation={labelOrientation}
              cs={formFieldStencil({density, labelOrientation})}
            >
              <FormField.Label>Enable Fast Shipping</FormField.Label>
              <FormField.Field>
                <FormField.Input as={Switch} />
              </FormField.Field>
            </FormField>
            <FormFieldGroup
              cs={formFieldStencil({density, labelOrientation})}
              orientation={labelOrientation}
            >
              <FormFieldGroup.Label>Credit Card</FormFieldGroup.Label>
              <FormFieldGroup.Field>
                <FormFieldGroup.List cs={formFieldGroupListStyles}>
                  <FormFieldGroup.Input
                    as={TextInput}
                    placeholder="XXXX"
                    cs={creditCardInputStencil({density})}
                  />
                  <FormFieldGroup.Input
                    as={TextInput}
                    placeholder="XXXX"
                    cs={creditCardInputStencil({density})}
                  />
                  <FormFieldGroup.Input
                    as={TextInput}
                    placeholder="XXXX"
                    cs={creditCardInputStencil({density})}
                  />
                  <FormFieldGroup.Input
                    cs={creditCardInputStencil({density})}
                    placeholder="XXXX"
                    as={TextInput}
                  />
                </FormFieldGroup.List>
              </FormFieldGroup.Field>
            </FormFieldGroup>
          </div>
        </form>
      </div>
    </div>
  );
};
