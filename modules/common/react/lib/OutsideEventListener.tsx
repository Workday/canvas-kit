import * as React from 'react';

export interface Clickable {
  onClick: Function;
}

export interface OutsideEventListenerProps {
  children: JSX.Element;
  onEscape?: (event?: KeyboardEvent) => void;
  onOutsideClick?: (event?: MouseEvent) => void;
}

export class OutsideEventListener extends React.PureComponent<OutsideEventListenerProps> {
  // we cannot use the DOM to detect if a click is outside when using portals,
  // so we keep track of inside vs. outside click events
  private insideClick = false;

  public componentDidMount() {
    document.addEventListener('click', this.onClick);
    document.addEventListener('keydown', this.onKeyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
    document.removeEventListener('keydown', this.onKeyDown);
  }

  public render() {
    const inside = React.Children.only(this.props.children) as React.ReactElement<Clickable>;

    return React.cloneElement(inside, {
      onClick: this.onInsideClick,
    });
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.props.onEscape) {
      this.props.onEscape(event);
    }
  };

  private onClick = (event: MouseEvent) => {
    if (this.insideClick) {
      this.insideClick = false;
      return;
    }

    if (this.props.onOutsideClick) {
      this.props.onOutsideClick(event);
    }
  };

  private onInsideClick = (event: MouseEvent) => {
    const inside = React.Children.only(this.props.children) as React.ReactElement<Clickable>;

    this.insideClick = true;

    // return control to handler possibly overwritten by cloneElement
    if (inside.props.onClick) {
      inside.props.onClick(event);
    }
  };
}
