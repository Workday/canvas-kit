import React from 'react';

export interface BreadcrumbsNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The accessibility label to indicate the type of navigation.
   *
   * Suggested value: "breadcrumb"
   */
  'aria-label': string;
}

export const BreadcrumbsNav = ({'aria-label': ariaLabel, ...elemProps}: BreadcrumbsNavProps) => {
  return <nav role="navigation" aria-label={ariaLabel} {...elemProps} />;
};
