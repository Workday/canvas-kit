import React from 'react';

import {
  PrimaryButton,
  ToolbarIconButton,
  ToolbarIconButtonProps,
} from '@workday/canvas-kit-react/button';
import {
  navigationManager,
  useListItemRegister,
  useListItemRovingFocus,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createContainer,
  createSubcomponent,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {Dialog, useDialogModel} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {CSProps, createStyles, handleCsProp} from '@workday/canvas-kit-styling';
import {boldIcon, italicsIcon, linkIcon, underlineIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const textStyles = [
  {id: 'normal', text: 'Normal Text'},
  {id: 'heading-1', text: 'Heading 1'},
  {id: 'heading-2', text: 'Heading 2'},
  {id: 'heading-3', text: 'Heading 3'},
];

const toolbarStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  padding: system.padding.sm,
});

const toggledToolbarButtonStyles = createStyles({
  "&[aria-pressed='true'], &[aria-pressed='true']:hover, &[aria-pressed='true']:active, &[aria-pressed='true']:focus-visible":
    {
      borderColor: system.color.brand.border.primary,
    },
});

const useToolbarItem = composeHooks(useListItemRovingFocus, useListItemRegister);

const Toolbar = createContainer('div')({
  displayName: 'TextFormattingToolbar',
  modelHook: useListModel,
})<CSProps>((elemProps, Element) => {
  return (
    <Element
      {...handleCsProp(elemProps, toolbarStyles)}
      role="toolbar"
      aria-label="Text Formatting"
    />
  );
});

const ToolbarButton = createSubcomponent(ToolbarIconButton)({
  displayName: 'TextFormattingToolbar.Button',
  modelHook: useListModel,
  elemPropsHook: useToolbarItem,
})<ToolbarIconButtonProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

const TextStyleSelect = ({toolbarModel}: {toolbarModel: ReturnType<typeof useListModel>}) => {
  const selectModel = useSelectModel({
    items: textStyles,
    initialSelectedIds: ['normal'],
  });
  const {onKeyDown: onToolbarKeyDown, ...toolbarItemProps} = useToolbarItem(toolbarModel, {
    'data-id': 'text-style',
  });

  return (
    <Select model={selectModel}>
      <Tooltip title="Text Style">
        <Select.Input
          {...toolbarItemProps}
          onKeyDown={event => {
            if (selectModel.state.visibility === 'hidden') {
              onToolbarKeyDown(event);
            }
          }}
        />
      </Tooltip>
      <Select.Popper>
        <Select.Card>
          <Select.List>{item => <Select.Item>{item.text}</Select.Item>}</Select.List>
        </Select.Card>
      </Select.Popper>
    </Select>
  );
};

export const TextFormattingToolbar = () => {
  const toolbarModel = useListModel({
    orientation: 'horizontal',
    navigation: navigationManager,
  });
  const linkButtonId = useUniqueId();
  const linkTextRef = React.useRef<HTMLInputElement>(null);
  const dialogModel = useDialogModel({initialFocusRef: linkTextRef});
  const [formats, setFormats] = React.useState({
    bold: false,
    italic: false,
    underline: false,
  });

  return (
    <Toolbar model={toolbarModel}>
      <TextStyleSelect toolbarModel={toolbarModel} />
      <Tooltip title="Bold">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="bold"
          icon={boldIcon}
          toggled={formats.bold}
          onClick={() => setFormats(formats => ({...formats, bold: !formats.bold}))}
        />
      </Tooltip>
      <Tooltip title="Italic">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="italic"
          icon={italicsIcon}
          toggled={formats.italic}
          onClick={() => setFormats(formats => ({...formats, italic: !formats.italic}))}
        />
      </Tooltip>
      <Tooltip title="Underline">
        <ToolbarButton
          cs={toggledToolbarButtonStyles}
          data-id="underline"
          icon={underlineIcon}
          toggled={formats.underline}
          onClick={() => setFormats(formats => ({...formats, underline: !formats.underline}))}
        />
      </Tooltip>
      <Dialog model={dialogModel}>
        <Tooltip title="Insert Link">
          <Dialog.Target as={ToolbarButton} id={linkButtonId} data-id="link" icon={linkIcon} />
        </Tooltip>
        <Dialog.Popper>
          <Dialog.Card aria-labelledby={linkButtonId}>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Link Text</FormField.Label>
                <FormField.Input as={TextInput} ref={linkTextRef} />
              </FormField>
              <FormField>
                <FormField.Label>URL</FormField.Label>
                <FormField.Input as={TextInput} type="url" />
              </FormField>
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton as={PrimaryButton}>Apply</Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
    </Toolbar>
  );
};
