import * as React from 'react';
import tabbable from 'tabbable';

export interface FocusFirstFocusableProps {
  containerRef: React.RefObject<HTMLElement>;
}

export class FocusFirstFocusable extends React.Component<FocusFirstFocusableProps> {
  private timeout: number;

  componentDidMount() {
    this.focusFirstFocusable();
    this.timeout = requestAnimationFrame(() => {
      if (!this.focusFirstFocusable()) {
        console.warn(`Did not find any focusable elements for inside `, this.props.containerRef);
      }
    });
  }

  componentWillUnmount() {
    if (this.timeout) {
      cancelAnimationFrame(this.timeout);
    }
  }

  private focusFirstFocusable(): boolean {
    const {containerRef} = this.props;
    if (containerRef && containerRef.current) {
      const firstFocusable = tabbable(containerRef.current)[0];
      if (firstFocusable) {
        firstFocusable.focus();
        return true;
      }
    }
    return false;
  }

  render() {
    return null;
  }
}
