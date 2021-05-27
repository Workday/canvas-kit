/** @jsx jsx */
import React, {forwardRef} from 'react';
import {css, jsx} from '@emotion/core';

const breadcrumbListStyles = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  // minHeight set to keep the nav from bouncing when the icon button appears / disappears
  minHeight: 40,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export type BreadcrumbsListProps = React.HTMLAttributes<HTMLUListElement>;

export const BreadcrumbsList = forwardRef(
  ({children, ...props}: BreadcrumbsListProps, ref: React.Ref<HTMLUListElement>) => {
    return (
      <ul css={breadcrumbListStyles} role="list" ref={ref} {...props}>
        {children}
      </ul>
    );
  }
);
