import * as React from 'react';
import DeprecatedHeader from './Header';
import {DeprecatedHeaderVariant} from './shared/types';
import {DeprecatedDubLogoTitle} from './parts';

export interface GlobalHeaderProps {
  /**
   * The custom brand node of the GlobalHeader. This React node replaces the dub logo and title.
   * @default DubLogoTitle
   */
  brand?: React.ReactNode;
  /**
   * The custom menu toggle node of the GlobalHeader. This React node replaces the default menu toggle.
   */
  menuToggle?: React.ReactNode;
  /**
   * The function called when the responsive menu icon is clicked.
   */
  onMenuClick?: (e: React.MouseEvent) => void;
  /**
   * If true, render the GlobalHeader in collapsed mode.
   * @default false
   */
  isCollapsed?: boolean;
  /**
   * The React element to render in the left slot of the GlobalHeader. This is typically a SearchForm component.
   */
  leftSlot?: React.ReactElement;
}

/**
 * ### Deprecated Global Header
 *
 * As of Canvas Kit v6, this component is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
 * for more information.
 */
export default class DeprecatedGlobalHeader extends React.Component<GlobalHeaderProps> {
  componentDidMount() {
    console.warn(
      `GlobalHeader is being deprecated and will be removed in Canvas Kit V7.\n
      For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page
      `
    );
  }

  public render() {
    const {
      brand = <DeprecatedDubLogoTitle />,
      menuToggle,
      onMenuClick,
      isCollapsed,
      leftSlot,
      children,
      ...elemProps
    } = this.props;
    return (
      <DeprecatedHeader
        brand={brand}
        menuToggle={menuToggle}
        leftSlot={leftSlot}
        onMenuClick={onMenuClick}
        variant={DeprecatedHeaderVariant.Global}
        isCollapsed={isCollapsed}
        {...elemProps}
      >
        {children}
      </DeprecatedHeader>
    );
  }
}
