import * as React from 'react';
import styled from '@emotion/styled';
import {TabListProps} from './TabList';
import {TabPanelsProps} from './TabPanels';

interface TabsStateContextTypes {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedTabRect: ClientRect | null;
  setSelectedTabRect: React.Dispatch<React.SetStateAction<ClientRect>>;
}

const TabsStateContext = React.createContext<TabsStateContextTypes>({
  tabIndex: 0,
  setTabIndex: () => ({}),
  selectedTabRect: null,
  setSelectedTabRect: () => ({}),
});

export const TabStateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [selectedTabRect, setSelectedTabRect] = React.useState<ClientRect | null>(null);

  const value = {tabIndex, setTabIndex, selectedTabRect, setSelectedTabRect};

  return <TabsStateContext.Provider value={value}>{children}</TabsStateContext.Provider>;
};

export const useTab = () => React.useContext(TabsStateContext);

export type TabsChild = React.ReactElement<TabListProps> | React.ReactElement<TabPanelsProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: TabsChild[];
}

const Container = styled('div')({});

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const {children, ...elemProps} = props;

  return (
    <TabStateProvider>
      <Container {...elemProps}>{children}</Container>
    </TabStateProvider>
  );
};

export default Tabs;
