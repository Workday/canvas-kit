import React from 'react';

import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {Select} from '@workday/canvas-kit-react/select';
import {Heading, Subtext, Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {calc, createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

type DensityLevel = 'high' | 'medium' | 'low';
type LabelOrientation = 'vertical' | 'horizontalStart' | 'horizontalEnd';
type ContainerAlignment = 'left' | 'center';
type DensityTypeLevel = 'subtext.medium' | 'subtext.large' | 'body.small';

const densitySummary: Record<
  DensityLevel,
  {inputHeight: string; stackGap: string; typeLevel: DensityTypeLevel}
> = {
  high: {inputHeight: '32px', stackGap: '16px', typeLevel: 'subtext.medium'},
  medium: {inputHeight: '40px', stackGap: '24px', typeLevel: 'subtext.large'},
  low: {inputHeight: '48px', stackGap: '32px', typeLevel: 'body.small'},
};

const formStyles = createStyles({
  margin: `${px2rem(12)} ${'0'}`,
  maxWidth: px2rem(600),
  minWidth: '0',
});

const sideBySideInputs = createStencil({
  base: {
    display: 'inline-flex',
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
        flexDirection: 'row',
      },
    },
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

const zipCodeInput = createStyles({
  minWidth: px2rem(90),
});

const zipCodeContainerStyles = createStyles({
  minWidth: '0',
});

const formFieldStencil = createStencil({
  base: {
    // FormField's built-in margin would double-space with the stack gap below.
    margin: 0,
  },
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

const inputStencil = createStencil({
  base: {
    minWidth: px2rem(200),
  },
  modifiers: {
    density: {
      high: {
        height: system.size.sm,
        padding: `${system.padding.xxs} ${system.padding.xs}`,
        fontSize: system.legacy.fontSize.subtext.md,
        lineHeight: system.legacy.lineHeight.subtext.md,
      },
      medium: {
        height: system.size.md,
        padding: `${system.padding.xs}`,
        fontSize: system.legacy.fontSize.subtext.lg,
        lineHeight: system.legacy.lineHeight.subtext.lg,
      },
      low: {
        height: calc.add(system.size.md, base.size100),
        padding: `${system.padding.sm} ${system.padding.xs}`,
        fontSize: system.legacy.fontSize.body.sm,
        lineHeight: system.legacy.lineHeight.body.sm,
      },
    },
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

export const Density = () => {
  const [density, setDensity] = React.useState<DensityLevel>('medium');
  const [containerAlignment, setContainerAlignment] = React.useState<ContainerAlignment>('left');
  const [labelOrientation, setLabelOrientation] = React.useState<LabelOrientation>('vertical');
  const [fastShipping, setFastShipping] = React.useState(false);
  const densityLabelId = useUniqueId();
  const containerAlignmentLabelId = useUniqueId();
  const labelOrientationLabelId = useUniqueId();

  const handleDensity = (data: {id: string}) => {
    setDensity(data.id as DensityLevel);
  };

  const handleContainerAlignment = (data: {id: string}) => {
    setContainerAlignment(data.id as ContainerAlignment);
  };

  const handleLabelOrientation = (data: {id: string}) => {
    setLabelOrientation(data.id as LabelOrientation);
  };

  const handleFastShipping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFastShipping(event.target.checked);
  };

  const labelTypeLevel = densitySummary[density].typeLevel;
  const fieldCs = formFieldStencil({density, labelOrientation});
  const inputCs = inputStencil({density});

  return (
    <>
      <div className={optionStyles}>
        <div className={optionItemStyles}>
          <Text as="h3" id={densityLabelId}>
            Density
          </Text>
          <SegmentedControl initialValue={density} onSelect={handleDensity} size="small">
            <SegmentedControl.List aria-label="Density" aria-labelledby={densityLabelId}>
              <SegmentedControl.Item data-id="high">High</SegmentedControl.Item>
              <SegmentedControl.Item data-id="medium">Medium</SegmentedControl.Item>
              <SegmentedControl.Item data-id="low">Low</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text as="h3" id={labelOrientationLabelId}>
            Label Orientation
          </Text>
          <SegmentedControl
            initialValue={labelOrientation}
            onSelect={handleLabelOrientation}
            size="small"
          >
            <SegmentedControl.List
              aria-label="Label Orientation"
              aria-labelledby={labelOrientationLabelId}
            >
              <SegmentedControl.Item data-id="vertical">Vertical</SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalStart">
                Horizontal Start
              </SegmentedControl.Item>
              <SegmentedControl.Item data-id="horizontalEnd">Horizontal End</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <div className={optionItemStyles}>
          <Text as="h3" id={containerAlignmentLabelId}>
            Container Alignment
          </Text>
          <SegmentedControl
            initialValue={containerAlignment}
            onSelect={handleContainerAlignment}
            size="small"
          >
            <SegmentedControl.List
              aria-label="Container Alignment"
              aria-labelledby={containerAlignmentLabelId}
            >
              <SegmentedControl.Item data-id="left">Left</SegmentedControl.Item>
              <SegmentedControl.Item data-id="center">Center</SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
        </div>
        <Subtext size="large">
          Input height: {densitySummary[density].inputHeight}. Field spacing:{' '}
          {densitySummary[density].stackGap}. Type: {densitySummary[density].typeLevel}.
        </Subtext>
      </div>

      <div {...containerAlignmentStencil({alignment: containerAlignment})}>
        <form className={formStyles} autoComplete="off">
          <Heading size="small">Shipping Address</Heading>
          <div {...flexContainerStencil({density})}>
            <FormField grow orientation={labelOrientation} cs={fieldCs}>
              <FormField.Label typeLevel={labelTypeLevel}>Full Name</FormField.Label>
              <FormField.Input as={TextInput} autoComplete="name" cs={inputCs} />
            </FormField>
            <div {...sideBySideInputs({labelOrientation, density})}>
              <FormField grow orientation={labelOrientation} cs={fieldCs}>
                <FormField.Label typeLevel={labelTypeLevel}>Phone Number</FormField.Label>
                <FormField.Input as={TextInput} autoComplete="tel" cs={inputCs} />
              </FormField>
              <FormField grow orientation={labelOrientation} cs={fieldCs}>
                <FormField.Label typeLevel={labelTypeLevel}>Email</FormField.Label>
                <FormField.Input as={TextInput} autoComplete="email" cs={inputCs} />
              </FormField>
            </div>
            <FormField grow orientation={labelOrientation} cs={fieldCs}>
              <FormField.Label typeLevel={labelTypeLevel}>Street Address</FormField.Label>
              <FormField.Input as={TextInput} autoComplete="street-address" cs={inputCs} />
            </FormField>

            <div {...sideBySideInputs({labelOrientation, density})}>
              <FormField grow orientation={labelOrientation} cs={fieldCs}>
                <FormField.Label typeLevel={labelTypeLevel}>City</FormField.Label>
                <FormField.Input as={TextInput} autoComplete="address-level2" cs={inputCs} />
              </FormField>
              <FormField grow orientation={labelOrientation} cs={fieldCs}>
                <FormField.Label typeLevel={labelTypeLevel}>State</FormField.Label>
                <FormField.Input as={TextInput} autoComplete="address-level1" cs={inputCs} />
              </FormField>
              <FormField grow orientation={labelOrientation} cs={[fieldCs, zipCodeContainerStyles]}>
                <FormField.Label typeLevel={labelTypeLevel}>Zip Code</FormField.Label>
                <FormField.Input
                  cs={[inputCs, zipCodeInput]}
                  as={TextInput}
                  autoComplete="postal-code"
                />
              </FormField>
            </div>
            <FormField grow orientation={labelOrientation} cs={fieldCs}>
              <FormField.Label typeLevel={labelTypeLevel}>Country</FormField.Label>
              <FormField.Field>
                <Select items={['Dominican Republic', 'Spain', 'United States']}>
                  <FormField.Input cs={inputCs} placeholder="Choose a country" as={Select.Input} />
                  <Select.Popper>
                    <Select.Card>
                      <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
                    </Select.Card>
                  </Select.Popper>
                </Select>
              </FormField.Field>
            </FormField>
            <FormField orientation={labelOrientation} cs={fieldCs}>
              <FormField.Label typeLevel={labelTypeLevel}>Enable Fast Shipping</FormField.Label>
              <FormField.Field>
                <FormField.Input as={Switch} checked={fastShipping} onChange={handleFastShipping} />
              </FormField.Field>
            </FormField>
          </div>
        </form>
      </div>
    </>
  );
};
