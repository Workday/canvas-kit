import * as React from 'react';
import {useUniqueId} from '@workday/canvas-kit-react-common';

import Tab from './Tab';
import TabList, {TabListProps} from './TabList';
import TabPanel, {TabPanelProps} from './TabPanel';

// eslint-disable-next-line no-empty-function
const noop = () => {};

interface TabsStateContextTypes {
  id: string;
  /**
   * The index of the active tab.
   */
  activeTab: string;
  /**
   * A useState function to set the index of the active tab.
   */
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  intentTab: string;
  setIntentTab: (next: 'first' | 'last' | 'next' | 'previous') => void;
  resetIntentTab: () => void;
  registerTab: (element: HTMLElement, name?: string) => string;
  unregisterTab: (element: HTMLElement) => void;
  registerPanel: (name?: string) => string;
  unregisterPanel: (name: string) => void;
  /**
   * The ClientRect of the currently selected tab.
   */
  selectedTabRect: ClientRect | null;
  /**
   * A useState function to set the ClientRect of the currently selected tab.
   */
  setSelectedTabRect: React.Dispatch<React.SetStateAction<ClientRect>>;
  /**
   * Used for tracking programmatic focus changes to ensure proper tab stop order
   */
  programmaticFocusRef: React.MutableRefObject<boolean>;
}

const TabsStateContext = React.createContext<TabsStateContextTypes>({
  id: '',
  activeTab: '',
  setActiveTab: () => ({}),
  intentTab: '',
  setIntentTab: noop,
  resetIntentTab: noop,
  selectedTabRect: null,
  setSelectedTabRect: () => ({}),
  registerTab: () => '',
  unregisterTab: noop,
  registerPanel: () => '',
  unregisterPanel: noop,
  programmaticFocusRef: {current: false},
});

export const useTab = () => React.useContext(TabsStateContext);

export type TabsChild = React.ReactElement<TabListProps> | React.ReactElement<TabPanelProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The tabs contents (tabs & tab panels).
   */
  children: TabsChild[];
  /**
   * The `name` of the tab that should be active first. If not provided, the first tab will be active.
   */
  initialTab?: string;
  /**
   * Callback when a tab changes. The `name` will be the `name` prop passed into the `Tabs.Item` and
   * `Tabs.Panel` component. If a `name` isn't provided, the value will be a string of the index of
   * the tab.
   */
  onTabChange?: (name: string) => void;
}

const Tabs = ({children, initialTab = '', onTabChange, ...elemProps}: TabsProps) => {
  const id = useUniqueId();
  const [activeTab, setActiveTabState] = React.useState(initialTab);
  const [intentTab, setIntentTabState] = React.useState(initialTab);
  const [selectedTabRect, setSelectedTabRect] = React.useState<ClientRect | null>(null);
  const tabsRef = React.useRef<{name: string; element: HTMLElement}[]>([]);
  const panelsRef = React.useRef<string[]>([]);
  const programmaticFocusRef = React.useRef(false);
  const onTabChangeRef = React.useRef(onTabChange);

  const registerTab = React.useCallback(
    (element: HTMLElement, name?: string) => {
      if (!name) {
        // If no name is provided, use the registration index as an identifier
        // eslint-disable-next-line no-param-reassign
        name = String(tabsRef.current.length);
      }
      tabsRef.current.push({element, name});
      return name;
    },
    [tabsRef]
  );

  const unregisterTab = React.useCallback(
    (element: HTMLElement) => {
      tabsRef.current = tabsRef.current.filter(tab => tab.element !== element);
    },
    [tabsRef]
  );

  const registerPanel = React.useCallback(
    (name?: string) => {
      if (!name) {
        // If no name is provided, use the registration index as an identifier
        // eslint-disable-next-line no-param-reassign
        name = String(panelsRef.current.length);
      }
      panelsRef.current.push(name);
      return name;
    },
    [panelsRef]
  );

  const unregisterPanel = React.useCallback(
    (name: string) => {
      panelsRef.current = panelsRef.current.filter(tab => tab !== name);
    },
    [panelsRef]
  );

  const setActiveTab = React.useCallback(
    (name: string) => {
      setIntentTabState(name);
      setActiveTabState(name);
      onTabChangeRef.current?.(name);
    },
    [setActiveTabState, setIntentTabState, onTabChangeRef]
  );

  const setIntentTab = React.useCallback(
    (value: 'first' | 'last' | 'next' | 'previous') => {
      programmaticFocusRef.current = true;
      let nextIndex = 0;
      if (value === 'first') {
        nextIndex = 0;
      } else if (value === 'last') {
        nextIndex = tabsRef.current.length - 1;
      } else {
        nextIndex =
          tabsRef.current.findIndex(tab => tab.name === (intentTab || activeTab)) +
          (value === 'next' ? 1 : -1);

        if (nextIndex < 0) {
          nextIndex = tabsRef.current.length - 1;
        } else if (nextIndex >= tabsRef.current.length) {
          nextIndex = 0;
        }
      }

      setIntentTabState(tabsRef.current[nextIndex].name);
      tabsRef.current[nextIndex].element.focus();
    },
    [activeTab, intentTab]
  );

  const resetIntentTab = React.useCallback(() => {
    // only reset intent tab if this is a programmatic focus change
    if (programmaticFocusRef.current) {
      return;
    }

    setIntentTabState(activeTab);
  }, [setIntentTabState, activeTab, programmaticFocusRef]);

  // useLayoutEffect so we don't have rendering of the Tabs without the correct active tab
  React.useLayoutEffect(() => {
    if (!initialTab) {
      setActiveTabState(tabsRef.current[0]?.name || '');
      setIntentTabState(tabsRef.current[0]?.name || '');
    }
    // We only want this to run once, so we intend an empty ref block
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: TabsStateContextTypes = {
    id,
    activeTab,
    setActiveTab,
    intentTab,
    setIntentTab,
    resetIntentTab,
    selectedTabRect,
    setSelectedTabRect,
    registerTab,
    unregisterTab,
    registerPanel,
    unregisterPanel,
    programmaticFocusRef,
  };

  return (
    <TabsStateContext.Provider value={value}>
      <div {...elemProps}>{children}</div>
    </TabsStateContext.Provider>
  );
};

Tabs.List = TabList;
Tabs.Item = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
