import * as React from 'react';
import Header from './Header';
import {HeaderVariant} from './shared/types';
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
   * A boolean indicating if the header should be rendered in collapsed mode
   */
  isCollapsed?: boolean;
  /**
   * React element for the left of the header, this is typically a search bar component
   */
  leftSlot?: React.ReactElement;
}

export default class GlobalHeader extends React.Component<GlobalHeaderProps> {
  static defaultProps = {
    brand: <DubLogoTitle />,
  };
  public render() {
    const {
      brand,
      menuToggle,
      onMenuClick,
      isCollapsed,
      leftSlot,
      children,
      ...elemProps
    } = this.props;
    return (
      <Header
        brand={brand}
        menuToggle={menuToggle}
        leftSlot={leftSlot}
        onMenuClick={onMenuClick}
        variant={HeaderVariant.Global}
        isCollapsed={isCollapsed}
        {...elemProps}
      >
        {children}
      </Header>
    );
  }
}
