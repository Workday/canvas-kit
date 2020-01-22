import * as React from 'react';
import Header from './Header';
import {HeaderVariant} from './shared/types';
import {DubLogoTitle} from './parts';

export interface GlobalHeaderProps {
  /**
   * The custom brand node of the GlobalHeader. This React node replaces the dub logo and title.
   * @default DubLogoTitle
   */
  brand: React.ReactNode;
  /**
   * The custom menu toggle node of the GlobalHeader. This React node replaces the default menu toggle.
   */
  menuToggle?: React.ReactNode;
  /**
   * The function called when the responsive menu icon is clicked.
   */
  onMenuClick?: (e: React.SyntheticEvent) => void;
  /**
   * If true, render the GlobalHeader in collapsed mode.
   * @default false
   */
  isCollapsed?: boolean;
  /**
   * The React element to render in the left slot of the GlobalHeader. This is typically a SearchBar component.
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
