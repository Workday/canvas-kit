import React, {useContext} from 'react';

import {
  Popper,
  usePopup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react-popup';

import {DropdownContext} from './Provider';
import {useFocusActiveItemElement} from './hooks';
// local components
import {DropdownButton} from './Button';
import {DropdownMenu} from './Menu';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

const DropdownContainer = ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

export const Dropdown = ({...props}: DropdownProps) => {
  // refs
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const activeDropdownItemRef = React.useRef<HTMLLIElement>(null);
  // state
  const {activeDropdownItem, dropdownItems, setActiveDropdownItem} = useContext(DropdownContext);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  // behaviors
  const {targetProps, closePopup, popperProps} = usePopup();
  useCloseOnOutsideClick(popperProps.ref, closePopup);
  useCloseOnEscape(popperProps.ref, closePopup);
  useFocusActiveItemElement(activeDropdownItemRef);

  const handleButtonKeyUp = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter') {
      setIsDropdownOpen(true);
      setActiveDropdownItem(dropdownItems[0]);
    }
  };

  return (
    <DropdownContainer {...props}>
      <DropdownButton
        aria-label="more links"
        buttonRef={buttonRef}
        setIsDropdownOpen={setIsDropdownOpen}
        toggled={isDropdownOpen}
        onKeyUp={handleButtonKeyUp}
        {...targetProps}
      />
      <Popper placement="bottom-start" {...popperProps}>
        <DropdownMenu
          dropdownItems={dropdownItems}
          activeDropdownItem={activeDropdownItem}
          activeDropdownItemRef={activeDropdownItemRef}
          resetFocus={() => {
            buttonRef.current?.focus();
            closePopup();
          }}
          setActiveDropdownItem={setActiveDropdownItem}
        />
      </Popper>
    </DropdownContainer>
  );
};

/*

<BreadcrumbNav>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink />
    <BreadcrumbItem>
    // dropdown
    <BreadcrumbItem>
      <ExpanderButton>click it</ExpanderButton>
      <DropdownMenu>
        <DropdownMenuItem>one</DropdownMenuItem>
        <DropdownMenuItem>one</DropdownMenuItem>
        <DropdownMenuItem>one</DropdownMenuItem>
        <DropdownMenuItem>one</DropdownMenuItem>
      </DropdownMenu>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink />
    <BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink />
    <BreadcrumbItem>

  </BreadcrumbList>
</BreadcrumbNav>

<nav role="navigation" aria-label="Breadcrumb">
 <ul role="list">
   <li>
    <a role="link" tabindex="0">Artists</a>
   </li>
   <li>

    <!-- Menu button pattern https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html -->

    <button type="button" 
          aria-label="More links" 
          id="menubutton"
          aria-haspopup="true"
          aria-controls="menu">
    </button>

    <ul id="menu"
      role="menu"
      aria-labelledby="menubutton">
    <li role="none">
      <a role="menuitem" href="https://www.w3.org/">
        W3C Home Page
      </a>
    </li>
    <li role="none">
      <a role="menuitem" href="https://www.w3.org/standards/webdesign/accessibility">
        W3C Web Accessibility Initiative
      </a>
    </li>
    <li role="none">
      <a role="menuitem" href="https://www.w3.org/TR/wai-aria/">
        Accessible Rich Internet Application Specification
      </a>
    </li>
    <li role="none">
      <a role="menuitem" href="https://www.w3.org/TR/wai-aria-practices/">
        WAI-ARIA Authoring Practices
      </a>
    </li>
   </ul>

   </li>
   <li>
    <a role="link" tabindex="0">The Rise and Fall of Ziggy Stardust and the Spiders From Mars</a>
    </li>
    <li>Starman</li>
  </ul>
 </nav>

*/
