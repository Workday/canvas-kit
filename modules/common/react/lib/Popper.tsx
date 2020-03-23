import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PopperJS from 'popper.js';

export type Placement = PopperJS.Placement;
export type PopperOptions = PopperJS.PopperOptions;

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The reference element used to position the Popper.
   */
  anchorElement: Element | null;
  /**
   * The children of the Popper (to be used as its content).
   */
  children: React.ReactNode;
  /**
   * The element that contains the portal children when `portal` is true.
   */
  containerElement?: Element;
  /**
   * If true, set the Popper to the open state.
   * @default true
   */
  open: boolean;
  /**
   * The placement of the popper relative to the `anchorElement`. Accepts `auto`, `top`, `right`, `bottom`, or `left`. Each placement can also be modified using any of the following variations: `-start` or `-end`.
   * @default bottom
   */
  placement: Placement;
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: PopperOptions;
  /**
   * If true, attach the Popper to the `containerElement`. If false, render the Popper within the DOM hierarchy of its parent.
   * @default true
   */
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

    if (this.props.anchorElement) {
      this.popper = new PopperJS(this.props.anchorElement, popperNode, {
        placement: this.props.placement,
        ...this.props.popperOptions,
      });
    } else {
      console.warn(
        `Popper: anchorElement was not defined. A valid anchorElement must be provided to render a Popper`
      );
    }
  };
}
