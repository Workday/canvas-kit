import React from 'react';

import {BreadcrumbsProvider} from './Provider';
import {DropdownProvider} from './Dropdown/Provider';
export interface BreadcrumbsNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  maxWidth?: number;
}

export const BreadcrumbsNav = ({maxWidth = 0, children, ...props}: BreadcrumbsNavProps) => {
  return (
    <BreadcrumbsProvider maxWidth={maxWidth}>
      <DropdownProvider>
        <nav role="navigation" aria-label="Breadcrumb" {...props}>
          {children}
        </nav>
      </DropdownProvider>
    </BreadcrumbsProvider>
  );
};
