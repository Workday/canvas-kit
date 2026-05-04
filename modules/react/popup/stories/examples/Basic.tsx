import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

const flexStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.xs,
});

export const Basic = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper placement="top">
        <Popup.Card cs={cardStyles}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <Box as="p" cs={bodyStyles}>
              Are you sure you'd like to delete the item titled 'My Item'?
            </Box>
          </Popup.Body>
          <Flex cs={flexStyles}>
            <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Flex>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
