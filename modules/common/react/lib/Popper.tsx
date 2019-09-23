import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PopperJS from 'popper.js';

export type Placement = PopperJS.Placement;
export type PopperOptions = PopperJS.PopperOptions;

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorElement: Element;
  children: React.ReactNode;
  containerElement?: Element;
  open: boolean;
  placement: Placement;
  popperOptions?: PopperOptions;
  portal: boolean;
}

export class Popper extends React.PureComponent<PopperProps> {
  private popper: PopperJS | null;

  static defaultProps = {
    open: true,
    placement: 'bottom',
    portal: true,
  };

  public componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  }

  public render() {
    if (!this.props.open) {
      return null;
    }

    if (!this.props.portal) {
      return this.renderPopper();
    }

    // do not use defaultProps for containerElement because document may not be statically available
    // at require time in some testing environments; instead we safely default at runtime
    return ReactDOM.createPortal(this.renderPopper(), this.props.containerElement || document.body);
  }

  public renderPopper() {
    const {
      anchorElement,
      children,
      containerElement,
      open,
      placement,
      popperOptions,
      portal,
      ...elemProps
    } = this.props;

    return (
      <div {...elemProps} ref={this.openPopper}>
        {this.props.children}
      </div>
    );
  }

  private openPopper = (popperNode: HTMLDivElement) => {
    if (!popperNode) {
      return;
    }

    this.popper = new PopperJS(this.props.anchorElement, popperNode, {
      placement: this.props.placement,
      ...this.props.popperOptions,
    });
  };
}
