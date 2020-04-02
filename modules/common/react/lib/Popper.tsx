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
   * The containing element for Popper elements. The Popper uses
   * {@link https://reactjs.org/docs/portals.html Portals} to place the DOM elements of the Popper as the
   * last child of the specified container element.
   * @default document.body
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
}

export class Popper extends React.PureComponent<PopperProps> {
  private popper: PopperJS | null;

  static defaultProps = {
    open: true,
    placement: 'bottom',
    containerElement: document.body,
  };

  public componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  }

  public render() {
    const {anchorElement, children, open, placement, popperOptions, ...elemProps} = this.props;

    if (!this.props.open) {
      return null;
    }

    const popperElement = (
      <div {...elemProps} ref={this.openPopper}>
        {this.props.children}
      </div>
    );

    // do not use defaultProps for containerElement because document may not be statically available
    // at require time in some testing environments; instead we safely default at runtime
    return ReactDOM.createPortal(popperElement, this.props.containerElement || document.body);
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
