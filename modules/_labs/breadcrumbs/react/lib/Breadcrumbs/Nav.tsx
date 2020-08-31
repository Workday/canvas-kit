import React from 'react';

export interface BreadcrumbsNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const BreadcrumbsNav = ({children, ...props}: BreadcrumbsNavProps) => {
  return (
    <nav role="navigation" aria-label="Breadcrumb" {...props}>
      {children}
    </nav>
  );
};
