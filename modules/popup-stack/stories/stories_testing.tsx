import React from 'react';
import ReactDOM from 'react-dom';

import {Tooltip} from '@workday/canvas-kit-react/tooltip';

import {
  Popup,
  Popper,
  usePopupStack,
  useCloseOnOutsideClick,
  useBringToTopOnClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';
import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Testing/React/Popups/Popup Stack',
};

interface WindowProps {
  top: number;
  left: number;
  heading: string;
  children: React.ReactNode;
  relativeNode: React.RefObject<HTMLDivElement>;
}

const Window = ({children, heading, relativeNode, top, left}: WindowProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  usePopupStack(ref);
  useBringToTopOnClick(ref);

  // position Window relative to a container
  React.useEffect(() => {
    console.log(relativeNode);
    const rect = relativeNode.current.getBoundingClientRect();
    ref.current.style.position = 'absolute';
    ref.current.style.top = `${top + rect.top}px`;
    ref.current.style.left = `${left + rect.left}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <Popup heading={heading} width={500}>
      {children}
    </Popup>,
    ref.current
  );
};

const TempPopup = ({
  heading,
  deleteText,
  children,
}: {
  heading: string;
  deleteText: string;
  children: ({onClose}: {onClose: () => void}) => React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(null);

  const onClose = () => setOpen(false);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const stackRef = React.useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(stackRef, onClose);
  useCloseOnEscape(stackRef, onClose);

  return (
    <>
      <DeleteButton style={{marginRight: '16px'}} onClick={onButtonClick}>
        {deleteText}
      </DeleteButton>
      <Popper placement={'bottom'} open={open} anchorElement={anchorEl} ref={stackRef}>
        <Popup width={400} heading={heading} padding={Popup.Padding.s} handleClose={onClose}>
          {children({onClose})}
        </Popup>
      </Popper>
    </>
  );
};

export const MixedPopupTypes = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{height: 420}}>
      <Window heading="Window 1" top={50} left={50} relativeNode={ref}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap">
          <span tabIndex={0}>Contents of Window 1</span>
        </Tooltip>
      </Window>
      <Window heading="Window 2" top={100} left={250} relativeNode={ref}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap">
          <span tabIndex={0}>Contents of Window 2</span>
        </Tooltip>
      </Window>
      <Window heading="Window 4" top={300} left={250} relativeNode={ref}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap">
            <span tabIndex={0}>Contents of Window 4</span>
          </Tooltip>
        </div>
      </Window>
      <Window heading="Window 3" top={200} left={75} relativeNode={ref}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap">
            <span tabIndex={0} onClick={() => console.log('clicked')}>
              Contents of Window 3
            </span>
          </Tooltip>
          <div>
            <TempPopup heading="Delete Item" deleteText="Delete Item">
              {({onClose}) => (
                <>
                  <div style={{marginBottom: '24px'}}>
                    Are you sure you'd like to delete the item titled 'My Item'?
                  </div>
                  <TempPopup heading="Really Delete Item" deleteText="Delete">
                    {({onClose}) => (
                      <>
                        <div style={{marginBottom: '24px'}}>
                          Are you REALLY sure you'd like to delete the item titled 'My Item'?
                        </div>

                        <DeleteButton style={{marginRight: '16px'}} onClick={onClose}>
                          Really Delete
                        </DeleteButton>
                        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                      </>
                    )}
                  </TempPopup>
                  <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                </>
              )}
            </TempPopup>
          </div>
        </div>
      </Window>
    </div>
  );
};
