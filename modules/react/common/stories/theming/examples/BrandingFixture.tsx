import * as React from 'react';

import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Switch} from '@workday/canvas-kit-preview-react/switch';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {Banner} from '@workday/canvas-kit-react/banner';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
import {
  DeleteButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {CanvasProvider, CanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Flex} from '@workday/canvas-kit-react/layout';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {Menu, MenuCard} from '@workday/canvas-kit-react/menu';
import {Pill} from '@workday/canvas-kit-react/pill';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {Select} from '@workday/canvas-kit-react/select';
import {SidePanel} from '@workday/canvas-kit-react/side-panel';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {gridIcon, listDetailIcon, listViewIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export type BrandingFixtureProps = {
  label?: string;
  scopedTheme?: CanvasProviderTheme;
};

const columnStyles = createStyles({
  backgroundColor: system.color.bg.alt.default,
  width: '100vw',
});

export const BrandingFixture = ({label, scopedTheme}: BrandingFixtureProps) => {
  return (
    <Flex cs={columnStyles}>
      <SidePanel cs={{height: '100vh', backgroundColor: system.color.surface.raised}}>
        <SidePanel.Heading>{label}</SidePanel.Heading>
        <Menu>
          {/* <Menu.Card> */}
          {/* <Menu.List> */}
          <Menu.Item aria-selected={true}>Item 1</Menu.Item>
          <Menu.Item>Item 2</Menu.Item>
          <Menu.Item>Item 3</Menu.Item>
          {/* </Menu.List> */}
          {/* </Menu.Card> */}
        </Menu>
      </SidePanel>
      <Flex cs={{gap: system.gap.md, flexDirection: 'column'}}>
        <Flex>
          <PrimaryButton>Primary button</PrimaryButton>
          <SecondaryButton>Secondary button</SecondaryButton>
          <TertiaryButton>Tertiary button</TertiaryButton>
          <DeleteButton variant="outline">Delete button</DeleteButton>
        </Flex>
        <Flex>
          <SegmentedControl initialValue={'list-view'}>
            <SegmentedControl.List aria-label="View type">
              <SegmentedControl.Item
                data-id="table"
                icon={gridIcon}
                tooltipProps={{title: 'Table'}}
              >
                Table
              </SegmentedControl.Item>
              <SegmentedControl.Item
                data-id="list-view"
                icon={listViewIcon}
                tooltipProps={{title: 'List'}}
              >
                List
              </SegmentedControl.Item>
              <SegmentedControl.Item
                data-id="list-detail"
                icon={listDetailIcon}
                tooltipProps={{title: 'Detail'}}
              >
                Detail
              </SegmentedControl.Item>
            </SegmentedControl.List>
          </SegmentedControl>
          <ActionBar>
            <ActionBar.List>
              <ActionBar.Item as={PrimaryButton}>Item 1</ActionBar.Item>
              <ActionBar.Item>Item 2</ActionBar.Item>
            </ActionBar.List>
          </ActionBar>
        </Flex>
        <Flex cs={{gap: system.gap.md}}>
          <Card>
            <Card.Heading>Card heading</Card.Heading>
            <Card.Body>Card content</Card.Body>
          </Card>
          <Card variant="tonal">
            <Card.Heading>Card heading</Card.Heading>
            <Card.Body>Card content</Card.Body>
          </Card>
          <Expandable>
            <Expandable.Target headingLevel="h4">
              <Expandable.Icon iconPosition="start" />
              <Expandable.Avatar name="Avatar" url={''} />
              <Expandable.Title>Title</Expandable.Title>
            </Expandable.Target>

            <Expandable.Content>Content</Expandable.Content>
          </Expandable>
        </Flex>
        <Flex cs={{gap: system.gap.md}}>
          <Avatar variant="purple" preferredInitials="MC" name="Manuel Carrera" />
          <Pill>
            <Pill.Icon aria-label="Add" />
            <Pill.Label>Pill Label</Pill.Label>
          </Pill>
          <LoadingDots />
          <CountBadge count={10} />
          <StatusIndicator variant="info">
            <StatusIndicator.Label>Status Indicator</StatusIndicator.Label>
          </StatusIndicator>
        </Flex>
        <Flex cs={{gap: system.gap.md, flexDirection: 'column'}}>
          <Banner hasError={false}>
            <Banner.Icon />
            <Banner.Label>3 Alerts</Banner.Label>
          </Banner>
          <InformationHighlight>
            <InformationHighlight.Icon />
            <InformationHighlight.Body>Information Highlight</InformationHighlight.Body>
          </InformationHighlight>
        </Flex>
        <Flex>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextInput} />
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormField.Field>
              <FormField.Input as={TextArea} />
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormField.Field>
              <Select items={['One', 'Two', 'Three']}>
                <FormField.Input as={Select.Input} />
                <Select.Popper>
                  <Select.Card>
                    <Select.List>{({item}) => <Select.Item>{item}</Select.Item>}</Select.List>
                  </Select.Card>
                </Select.Popper>
              </Select>
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormField.Field>
              <FormField.Input as={Switch} checked={true} />
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormField.Field>
              <FormField.Input as={Checkbox} checked={true} />
            </FormField.Field>
          </FormField>
          <FormField>
            <FormField.Label>Form Field</FormField.Label>
            <FormFieldGroup>
              <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
              <FormFieldGroup.Field>
                <FormFieldGroup.List as={RadioGroup} name="pizza-crust" value={'deep-dish'}>
                  <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
                    Deep dish
                  </FormFieldGroup.Input>
                  <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
                    Thin
                  </FormFieldGroup.Input>
                  <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
                    Gluten free
                  </FormFieldGroup.Input>
                  <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
                    Cauliflower
                  </FormFieldGroup.Input>
                  <FormFieldGroup.Input as={RadioGroup.RadioButton} value="custom">
                    Butter - the best thing to put on bread
                  </FormFieldGroup.Input>
                </FormFieldGroup.List>
              </FormFieldGroup.Field>
            </FormFieldGroup>
          </FormField>
        </Flex>
      </Flex>
    </Flex>
  );
};
