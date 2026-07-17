import * as React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, CanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Menu} from '@workday/canvas-kit-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export type BrandingFixtureProps = {
  label?: string;
  scopedTheme?: CanvasProviderTheme;
};

const columnStyles = createStyles({
  flexDirection: 'column',
  gap: system.gap.md,
  padding: system.padding.md,
  minWidth: '280px',
});

const SelectedMenu = () => (
  <Menu initialSelectedIds={['selected']}>
    <Menu.Card>
      <Menu.List>
        <Menu.Item id="normal">Normal item</Menu.Item>
        <Menu.Item id="selected">Selected item</Menu.Item>
      </Menu.List>
    </Menu.Card>
  </Menu>
);

const FixtureContent = () => (
  <>
    <PrimaryButton>Primary button</PrimaryButton>
    <SelectedMenu />
    <FormField>
      <FormField.Label>Focus sample</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} />
      </FormField.Field>
    </FormField>
  </>
);

export const BrandingFixture = ({label, scopedTheme}: BrandingFixtureProps) => {
  const content = <FixtureContent />;

  return (
    <Flex cs={columnStyles}>
      {label ? <strong>{label}</strong> : null}
      {scopedTheme ? <CanvasProvider theme={scopedTheme}>{content}</CanvasProvider> : content}
    </Flex>
  );
};
