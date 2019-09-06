import * as React from 'react';
import styled from 'react-emotion';
import {keyframes} from 'emotion';
import {TransformOrigin} from '@workday/canvas-kit-react-common';
import Popup, {PopupPadding} from '@workday/canvas-kit-react-popup';

export enum ModalWidth {
  s = '440px',
  m = '800px',
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  padding: PopupPadding;
  transformOrigin: TransformOrigin;
  width: ModalWidth;
  handleClose?: () => void;
  heading?: React.ReactNode;
}

const fadeIn = keyframes`
  from {
    background: none;
  }
  to {
    background: rgba(0,0,0,0.65);
  }
`;

const Container = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.65)',
  animationName: `${fadeIn}`,
  animationDuration: '0.3s',
});

export default class Modal extends React.Component<ModalProps> {
  private modalRef = React.createRef<HTMLDivElement>();

  static Padding = PopupPadding;
  static Width = ModalWidth;
  static defaultProps = {
    open: false,
    padding: Modal.Padding.l,
    width: Modal.Width.s,
    transformOrigin: {
      horizontal: 'center',
      vertical: 'top',
    },
  };

  private handleOutsideClick = (
    handleClose: (() => void) | undefined,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const {target} = e;
    const modalNode = this.modalRef.current;
    if (modalNode && handleClose) {
      if (!modalNode.contains(target as Node)) {
        handleClose();
      }
    }
  };

  public render() {
    const {open, handleClose, padding, width, heading, transformOrigin, ...elemProps} = this.props;
    return (
      open && (
        <Container onClick={e => this.handleOutsideClick(handleClose, e)} {...elemProps}>
          <Popup
            popupRef={this.modalRef}
            width={width}
            heading={heading}
            handleClose={handleClose}
            padding={padding}
            transformOrigin={transformOrigin}
          >
            {this.props.children}
          </Popup>
        </Container>
      )
    );
  }
}
