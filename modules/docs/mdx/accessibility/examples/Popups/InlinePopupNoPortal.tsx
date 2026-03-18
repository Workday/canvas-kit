import {useRef} from 'react';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useUniqueId} from '@workday/canvas-kit-react/common';

const headingStyles = createStyles({
  marginTop: system.space.zero,
});

const cardStyles = createStyles({
  width: px2rem(320),
});

const flexStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x2,
});

const bodyStyles = createStyles({
  marginY: system.space.zero,
});

const clipContainerStyles = createStyles({
  padding: system.space.x4,
  border: `${px2rem(2)} dashed ${system.color.border.info.default}`,
  height: px2rem(200),
  position: 'relative',
  overflow: 'clip',
});

const visibleContainerStyles = createStyles({
  padding: system.space.x4,
  border: `${px2rem(2)} dashed ${system.color.border.info.default}`,
  height: px2rem(200),
  position: 'relative',
  overflow: 'visible',
});

const scrollContainerStyles = createStyles({
  padding: system.space.x4,
  border: `${px2rem(2)} dashed ${system.color.border.info.default}`,
  height: px2rem(200),
  position: 'relative',
  overflow: 'scroll',
});

const comparisonLayoutStyles = createStyles({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: system.space.x6,
  marginBottom: system.space.x4,
});

function SingleInlinePopup({
  overflowLabel,
  containerStyles,
}: {
  overflowLabel: string;
  containerStyles: string;
}) {
  const messageId = useUniqueId();
  const initialFocusRef = useRef(null);
  const model = usePopupModel({initialFocusRef});

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Box cs={containerStyles}>
      <Heading size="small" as="h4" cs={headingStyles}>
        {overflowLabel}
      </Heading>
      <Popup model={model}>
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <Popup.Popper placement="top" portal={false}>
          <Popup.Card cs={cardStyles} aria-describedby={messageId}>
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" id={messageId} cs={bodyStyles}>
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex cs={flexStyles}>
              <Popup.CloseButton ref={initialFocusRef}>Cancel</Popup.CloseButton>
              <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </Box>
  );
}

export const InlinePopupNoPortal = () => {
  return (
    <>
      <Flex cs={comparisonLayoutStyles}>
        <SingleInlinePopup
          overflowLabel="overflow: visible"
          containerStyles={visibleContainerStyles}
        />
        <SingleInlinePopup overflowLabel="overflow: clip" containerStyles={clipContainerStyles} />
        <SingleInlinePopup
          overflowLabel="overflow: scroll"
          containerStyles={scrollContainerStyles}
        />
      </Flex>
      <p>
        With <code>overflow: visible</code>, the popup can extend past the dashed border. With{' '}
        <code>overflow: scroll</code> (or <code>hidden</code> / <code>clip</code>), the popup is
        constrained and any overflow is clipped. The container uses <code>position: relative</code>{' '}
        so it establishes a containing block for the positioned popup.
      </p>
    </>
  );
};
