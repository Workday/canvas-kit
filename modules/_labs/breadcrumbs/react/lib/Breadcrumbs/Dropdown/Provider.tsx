import React from 'react';

import {Breadcrumb} from '../types';

const initialActiveItem = {
  index: 0,
  link: '',
  text: '',
  width: 0,
} as Breadcrumb;

export interface DropdownContext {
  activeDropdownItem: Breadcrumb;
  dropdownItems: Breadcrumb[];
  setActiveDropdownItem: React.Dispatch<React.SetStateAction<Breadcrumb>>;
}

export interface DropdownProviderProps {
  children: React.ReactNode;
  items?: Breadcrumb[];
}

export const DropdownContext = React.createContext({} as DropdownContext);

export const DropdownProvider = ({items = [] as Breadcrumb[], children}: DropdownProviderProps) => {
  const [activeDropdownItem, setActiveDropdownItem] = React.useState(initialActiveItem);

  const context = {
    activeDropdownItem,
    dropdownItems: items,
    setActiveDropdownItem,
  };

  return <DropdownContext.Provider value={context}>{children}</DropdownContext.Provider>;
};
