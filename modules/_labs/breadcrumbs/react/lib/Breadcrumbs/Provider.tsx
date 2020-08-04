import React from 'react';

export interface BreadcrumbsContext {
  maxWidth: number;
}

export interface BreadcrumbsProviderProps {
  children: React.ReactNode;
  maxWidth: number;
}

export const BreadcrumbsContext = React.createContext({} as BreadcrumbsContext);

export const BreadcrumbsProvider = ({maxWidth, children}: BreadcrumbsProviderProps) => {
  const context = {
    maxWidth,
  };

  return <BreadcrumbsContext.Provider value={context}>{children}</BreadcrumbsContext.Provider>;
};
