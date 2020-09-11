import React from 'react';

export interface BreadcrumbsNavProps extends React.HTMLAttributes<HTMLElement> {
  'aria-label': string;
  children: React.ReactNode;
}

export const BreadcrumbsNav = ({
  'aria-label': ariaLabel,
  children,
  ...props
}: BreadcrumbsNavProps) => {
  return (
    <nav role="navigation" aria-label={ariaLabel} {...props}>
      {children}
    </nav>
  );
};
