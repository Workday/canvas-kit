import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {trashIcon} from '@workday/canvas-system-icons-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const INITIAL_FILES = ['Resume.docx', 'Cover_Letter.docx', 'References.docx'];

const actionStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

const headingStyles = createStyles({
  marginY: system.space.zero,
});

const emptyStateStyles = createStyles({
  maxWidth: '28rem',
  outline: 'none',
});

const listStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x4,
  marginY: system.space.zero,
  padding: system.space.zero,
  listStyle: 'none',
  maxWidth: '28rem',
});

const rowStyles = createStyles({
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: system.space.x4,
  width: '100%',
});

function fileNameId(name: string) {
  return `return-focus-file-${name.replace(/[^a-zA-Z0-9]/g, '_')}`;
}

/** Index of a delete button to focus after removing `deletedIndex`, or empty list. */
function nextListFocusAfterDelete(deletedIndex: number, lengthBeforeDelete: number) {
  if (lengthBeforeDelete <= 1) {
    return 'empty' as const;
  }
  return deletedIndex < lengthBeforeDelete - 1 ? deletedIndex : deletedIndex - 1;
}

export const ReturnFocus = () => {
  const [items, setItems] = React.useState<string[]>(() => [...INITIAL_FILES]);
  const [confirmingFileName, setConfirmingFileName] = React.useState<string | null>(null);
  const bodyTextId = useUniqueId();

  const returnFocusRef = React.useRef<HTMLButtonElement | null>(null);
  const cancelButtonRef = React.useRef<HTMLButtonElement>(null);
  const deleteButtonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const emptyStateRef = React.useRef<HTMLDivElement>(null);
  const pendingDeleteIndexRef = React.useRef<number | null>(null);
  const postDeleteFocusRef = React.useRef<number | 'empty' | null>(null);

  const model = useModalModel({
    returnFocusRef,
    initialFocusRef: cancelButtonRef,
  });

  React.useEffect(() => {
    if (model.state.visibility === 'hidden') {
      setConfirmingFileName(null);
      pendingDeleteIndexRef.current = null;
    }
  }, [model.state.visibility]);

  React.useLayoutEffect(() => {
    if (postDeleteFocusRef.current === null) {
      return;
    }
    if (postDeleteFocusRef.current === 'empty') {
      emptyStateRef.current?.focus();
    } else {
      deleteButtonRefs.current[postDeleteFocusRef.current]?.focus();
    }
    postDeleteFocusRef.current = null;
  }, [items]);

  const openDeleteModal = (index: number) => {
    pendingDeleteIndexRef.current = index;
    setConfirmingFileName(items[index]);
    returnFocusRef.current = deleteButtonRefs.current[index];
    model.events.show();
  };

  const handleConfirmDelete = () => {
    const idx = pendingDeleteIndexRef.current;
    if (idx === null) {
      return;
    }
    postDeleteFocusRef.current = nextListFocusAfterDelete(idx, items.length);
    pendingDeleteIndexRef.current = null;
    setItems(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <Modal model={model}>
      <Heading as="h4" size="small" cs={headingStyles}>
        Uploaded Files
      </Heading>
      <Box>
        {items.length > 0 ? (
          <Flex as="ul" cs={listStyles}>
            {items.map((name, index) => (
              <Flex as="li" key={name} cs={rowStyles}>
                <Text as="span" id={fileNameId(name)}>
                  {name}
                </Text>
                <Tooltip title="Delete">
                  <DeleteButton
                    aria-describedby={fileNameId(name)}
                    icon={trashIcon}
                    ref={el => {
                      deleteButtonRefs.current[index] = el;
                    }}
                    onClick={() => openDeleteModal(index)}
                  />
                </Tooltip>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Box ref={emptyStateRef} tabIndex={-1} cs={emptyStateStyles}>
            <Text>No files remaining.</Text>
          </Box>
        )}
      </Box>
      <Modal.Overlay>
        <Modal.Card aria-describedby={bodyTextId}>
          <Modal.Heading>Delete file?</Modal.Heading>
          <Modal.Body>
            <Text id={bodyTextId}>
              {confirmingFileName
                ? `Are you sure you want to delete ${confirmingFileName}?`
                : 'Are you sure you want to delete this file?'}
            </Text>
          </Modal.Body>
          <Flex cs={actionStyles}>
            <Modal.CloseButton ref={cancelButtonRef}>Cancel</Modal.CloseButton>
            <Modal.CloseButton as={DeleteButton} onClick={handleConfirmDelete}>
              Delete
            </Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
