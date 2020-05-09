import * as React from 'react';
import {Rect} from '@popperjs/core';

import {ErrorType, Placement, Popper, styled} from '@workday/canvas-kit-react-common';
import {CSSObject, keyframes} from '@emotion/core';
import {colors, borderRadius, inputColors} from '@workday/canvas-kit-react-core';

import {SelectProps} from './Select';
import {buttonBorderWidth, buttonDefaultWidth} from './SelectBase';

interface SelectMenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
    Pick<SelectProps, 'error'> {
  /**
   * The ref to the anchor button element. Required to anchor the menu.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  /**
   * If true, enable animation on the SelectMenu.
   * @default true
   */
  isAnimated: boolean;
  /**
   * If true, automatically flip the SelectMenu to keep it visible if necessary (e.g., if the the SelectMenu would otherwise display below the visible area of the viewport).
   * @default true
   */
  isAutoFlipped: boolean;
  /**
   * If true, focus the SelectMenu when it's shown. Set to false if you don't want to focus the SelectMenu automatically (for visual testing purposes, for example).
   * @default true
   */
  isAutoFocused: boolean;
  /**
   * If true, hide the SelectMenu.
   * @default false
   */
  isHidden: boolean;
  /**
   * If true, set the SelectMenu to the "is hiding" state.
   * @default false
   */
  isHiding: boolean;
  /**
   * The ref to the underlying menu/listbox element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.RefObject<HTMLUListElement>;
}

interface SelectMenuState {
  // We need the width state to support the use case where the menu is
  // displayed without user interaction (e.g., if we want to show the menu
  // from the start). buttonRef.current is set to null during the first
  // render, which prevents Popper from rendering due to the lack of a
  // reference element. By the time componentDidMount runs, buttonRef.current
  // will have been set -- we can then update the width state and trigger
  // a render with the Popper menu.
  width: number;
}

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOutAnimation = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const menuFadeDuration = 200;

const menuBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let dividerBorderColor = borderColor;
  let dividerBorderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
    dividerBorderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = colors.cantaloupe600;
    dividerBorderColor = inputColors.warning.border;
    dividerBorderWidth = 2;
  }

  const dividerBorder = `${dividerBorderWidth}px solid ${dividerBorderColor}`;

  return {
    borderColor: borderColor,

    // Render the divider using a pseudo-element
    '&:before': {
      backgroundColor: colors.soap400,
      borderLeft: dividerBorder,
      borderRight: dividerBorder,
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      height: 1,
      position: 'absolute',
      width: '100%',

      '[data-popper-placement^="bottom-start"] &': {
        top: 0,
      },
      '[data-popper-placement^="top-start"] &': {
        bottom: 0,
      },
    },
  };
};

const menuListBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let borderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = inputColors.warning.border;
    borderWidth = 2;
  }

  const border = `${borderWidth}px solid ${borderColor}`;

  return {
    borderLeft: border,
    borderRight: border,

    '[data-popper-placement^="bottom-start"] &': {
      borderBottom: border,
    },
    '[data-popper-placement^="top-start"] &': {
      borderTop: border,
    },
  };
};

const Menu = styled('div')<
  Pick<SelectMenuProps, 'error' | 'isAnimated' | 'isHiding'> & Pick<SelectMenuState, 'width'>
>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    boxSizing: 'border-box',
    position: 'relative',

    '[data-popper-placement^="bottom-start"] &': {
      borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
      borderTop: 0,
    },
    '[data-popper-placement^="top-start"] &': {
      borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
      borderBottom: 0,
    },
  },
  ({error}) => ({
    ...menuBorderCSS(error),
  }),
  ({isAnimated}) =>
    isAnimated && {
      animationName: fadeInAnimation,
      animationDuration: `${menuFadeDuration / 1000}s`,
      // Required to prevent the occasional menu flash when the menu
      // fades out
      animationFillMode: 'forwards',
    },
  ({isAnimated, isHiding}) =>
    isAnimated &&
    isHiding && {
      animationName: fadeOutAnimation,
    },
  ({width}) => ({
    width: width,
  })
);

const MenuList = styled('ul')<Pick<SelectProps, 'error'>>(
  {
    listStyle: 'none',
    margin: 0,
    maxHeight: 200,
    overflowY: 'auto',
    padding: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  ({error}) => ({
    ...menuListBorderCSS(error),
  })
);

export default class SelectMenu extends React.Component<SelectMenuProps, SelectMenuState> {
  static defaultProps = {
    isAnimated: true,
    isAutoFlipped: true,
    isAutoFocused: true,
    isHidden: false,
    isHiding: false,
    width: buttonDefaultWidth,
  };

  state: Readonly<SelectMenuState> = {
    width: 0,
  };

  private generatePopperOptions = () => {
    const {isAutoFlipped, isAutoFocused, menuRef} = this.props;
    const fallbackPlacements = isAutoFlipped ? ['top-start'] : [];

    const modifiers = [
      {
        name: 'flip',
        options: {
          fallbackPlacements,
        },
      },
      {
        name: 'offset',
        options: {
          offset: ({
            placement,
            reference,
            popper,
          }: {
            placement: Placement;
            reference: Rect;
            popper: Rect;
          }) => {
            // Skid menu along the edge of the button to account
            // for fractional x-positioning of the button (e.g.,
            // if the button is in a horizontally-centered modal)
            // and to ensure proper alignment between the button
            // and the menu
            const skidding = reference.x % 1 === 0 ? 0 : 1;
            // Displace menu towards the button to obscure the bottom
            // edge of the button and to create a smooth visual
            // connection between the button and the menu
            const distance = -parseInt(borderRadius.m, 10);
            return [skidding, distance];
          },
        },
      },
    ];

    return {
      modifiers,
      onFirstUpdate: () => {
        if (isAutoFocused && menuRef && menuRef.current) {
          menuRef.current.focus();
        }
      },
    };
  };

  private updateWidth = () => {
    const {buttonRef} = this.props;
    if (buttonRef.current) {
      const newMenuWidth = buttonRef.current.clientWidth + 2 * buttonBorderWidth;
      // Only update width state if it actually changed
      if (newMenuWidth !== this.state.width) {
        this.setState({width: newMenuWidth});
      }
    }
  };

  componentDidMount() {
    this.updateWidth();

    // Update menu width state on resize to ensure menu resizes as window resizes
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  public render() {
    const {
      buttonRef,
      children,
      error,
      isAnimated,
      isAutoFlipped,
      isAutoFocused,
      isHidden,
      isHiding,
      menuRef,
      ...elemProps
    } = this.props;

    const {width} = this.state;

    // Render nothing if buttonRef.current hasn't been set
    return buttonRef.current ? (
      <Popper
        placement="bottom-start"
        open={!isHidden}
        anchorElement={buttonRef.current}
        popperOptions={this.generatePopperOptions()}
        // zIndex is necessary in order for the menu to be displayed
        // properly if Select is placed within a CK Modal (necessary
        // to override zIndex of 1 for the Modal)
        style={{zIndex: 2}}
      >
        <Menu error={error} isAnimated={isAnimated} isHiding={isHiding} width={width}>
          <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
            {children}
          </MenuList>
        </Menu>
      </Popper>
    ) : null;
  }
}
