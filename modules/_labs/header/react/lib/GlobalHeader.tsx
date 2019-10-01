import * as React from 'react';
import Header from './Header';
import {HeaderVariant, BreakpointType} from './shared/types';
import {DubLogoTitle} from './parts';

export interface GlobalHeaderProps {
  /**
   * A React node that will replace the dub logo and title if provided.
   */
  brand: React.ReactNode;
  /**
   * A React node that will replace the menuToggle if provided.
   */
  menuToggle?: React.ReactNode;
  /**
   * An event handler function that gets called when the responsive menu icon is clicked
   */
  onMenuClick?: (e: React.SyntheticEvent) => void;
  /**
   * An event handler function that gets called when the search field is submitted
   */
  onSearchSubmit?: (query: string) => void;
  /**
   * An object that allows for custom specified breakpoint
   */
  breakpoint: number;
  /**
   * An event handler function that gets called when the screen size changes to a different breakpoint key
   */
  onBreakpointChange?: (key: BreakpointType | string) => void;
}

export default class GlobalHeader extends React.Component<GlobalHeaderProps> {
  static defaultProps = {
    brand: <DubLogoTitle />,
    breakpoint: 600,
  };
  public render() {
    // As GlobalHeader only has two states (so one breakpoint)
    // this is a workaround until we change the breakpoints
    // in Header to support two breakpoints instead of three.
    const breakpoints = {sm: 0, md: 1, lg: this.props.breakpoint};

    return (
      <Header
        brand={this.props.brand}
        menuToggle={this.props.menuToggle}
        onSearchSubmit={this.props.onSearchSubmit}
        onMenuClick={this.props.onMenuClick}
        variant={HeaderVariant.Global}
        breakpoints={breakpoints}
        onBreakpointChange={this.props.onBreakpointChange}
      >
        {this.props.children}
      </Header>
    );
  }
}
