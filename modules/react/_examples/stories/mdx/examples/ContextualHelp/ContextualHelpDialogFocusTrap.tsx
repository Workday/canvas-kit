import {Hyperlink, TertiaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  flexDirection: 'row',
  gap: system.space.x2,
});

const labelStyles = createStyles({
  minWidth: 'unset',
  width: '100%',
});

export function ContextualHelpDialogFocusTrap() {
  const dialogModel = usePopupModel();
  useCloseOnOutsideClick(dialogModel);
  useCloseOnEscape(dialogModel);
  useInitialFocus(dialogModel);
  useFocusTrap(dialogModel);
  useReturnFocus(dialogModel);

  const labelId = useUniqueId();

  return (
    <Flex>
      <FormField>
        <Flex className={containerStyles}>
          <FormField.Label className={labelStyles} id={labelId}>
            Name
          </FormField.Label>
          <Dialog model={dialogModel}>
            <Tooltip title="More Info">
              <Dialog.Target
                as={TertiaryButton}
                size="small"
                icon={infoIcon}
                aria-describedby={labelId}
              />
            </Tooltip>
            <Dialog.Popper placement="right">
              <Dialog.Card>
                <Dialog.CloseIcon aria-label="Close" />
                <Dialog.Heading paddingTop={system.space.x6}>Information</Dialog.Heading>
                <Dialog.Body>
                  This dialog traps focus. Focus will only return to the rest of the page when the
                  dialog is closed
                </Dialog.Body>
                <Flex gap={system.space.x4} padding={system.space.x2} marginTop={system.space.x2}>
                  <Hyperlink href="/">Link</Hyperlink>
                </Flex>
              </Dialog.Card>
            </Dialog.Popper>
          </Dialog>
        </Flex>
        <FormField.Field>
          <FormField.Input as={TextInput} />
        </FormField.Field>
      </FormField>
    </Flex>
  );
}
