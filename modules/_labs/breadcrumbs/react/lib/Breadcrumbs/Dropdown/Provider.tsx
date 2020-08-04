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
  setDropdownItems: React.Dispatch<React.SetStateAction<Breadcrumb[]>>;
}

export interface DropdownProviderProps {
  children: React.ReactNode;
}

export const DropdownContext = React.createContext({} as DropdownContext);

export const DropdownProvider = ({children}: DropdownProviderProps) => {
  const [dropdownItems, setDropdownItems] = React.useState<Breadcrumb[]>([]);
  const [activeDropdownItem, setActiveDropdownItem] = React.useState(initialActiveItem);

  const context = {
    activeDropdownItem,
    dropdownItems,
    setActiveDropdownItem,
    setDropdownItems,
  };

  return <DropdownContext.Provider value={context}>{children}</DropdownContext.Provider>;
};
