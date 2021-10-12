import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import * as React from 'react';
import {ColorPickerModelContext} from './ColorPicker';

import SwatchButton, {SwatchButtonProps} from './ColorPicker.SwatchButton';

export const SwatchContext = React.createContext({
  activeTab: '',
  intentTab: '',
  /**
   * @param name {string|number}
   */
  setActiveTab: name => {},
  resetIntentTab: () => {},
  setIntentTab: number => {},
  registerTab: name => {},
  unregisterTab: name => {},
  tabListRef: {current: null},
});

export const SwatchWrapper = ({initialActive = '', children}) => {
  const [activeTab, setActiveTab] = React.useState(initialActive);
  const [intentTab, setIntentTab] = React.useState('');
  const [moreWidth, setMoreWidth] = React.useState(0);
  const [moreVisible, setMoreVisible] = React.useState(false);
  const tabs = React.useRef([]);
  const tabListRef = React.useRef(null);
  const moreRef = React.useRef(null);
  const registerTab = name => {
    tabs.current.push(name);
  };
  const unregisterTab = name => {
    tabs.current = tabs.current.filter(tab => tab !== name);
  };

  const {state, events} = React.useContext(ColorPickerModelContext);

  return (
    <div className="tabs">
      <SwatchContext.Provider
        value={{
          activeTab,
          setActiveTab: name => {
            // console.warn('set active tab', name);
            setActiveTab(name);
            events.setColor({color: name});
            // console.warn('NAME', name);
          },
          intentTab,
          resetIntentTab: () => {
            setIntentTab('');
          },
          setIntentTab: value => {
            // console.warn('VALUE', value);
            let nextIndex;
            if (value === 'first') {
              nextIndex = 0;
            } else if (value === 'last') {
              nextIndex = tabs.current.length - 1;
            } else {
              nextIndex = tabs.current.indexOf(intentTab || activeTab) + value;
              if (nextIndex < 0) {
                nextIndex = tabs.current.length - 1;
              } else if (nextIndex >= tabs.current.length) {
                nextIndex = 0;
              }
            }

            const tabName = tabs.current[nextIndex];
            // events.setColor({color: tabName});
            // setActiveTab(tabName);
            setIntentTab(tabName);
          },

          registerTab,
          unregisterTab,
          tabListRef,
        }}
      >
        {children}
      </SwatchContext.Provider>
    </div>
  );
};

export interface SwatchBookProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  colors: string[];
  columnCount?: number;
  children: (colors: string[]) => React.ReactNode[];
}

/* eslint-disable */
function chunkColors(colors: React.ReactNode[], columnCount: number = 8) {
  const temp: React.ReactNode[][] = [];
  for (let i = 0; i < colors.length; i += columnCount) {
    temp.push(colors.slice(i, i + columnCount));
  }
  return temp;
}

const StyledSwatchBookContainer = styled('div')<StyledType>({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `0px -${space.xxs} -${space.xxs} 0px`,
  flexDirection: 'column',
});

export default createComponent('div')({
  displayName: 'SwatchBook',
  Component: ({colors, children, columnCount = 8, ...elemProps}: SwatchBookProps, ref, Element) => {
    return (
      <SwatchWrapper>
        <StyledSwatchBookContainer ref={ref} as={Element} {...elemProps}>
          {chunkColors(children(colors), columnCount).map((row, index) => {
            return (
              <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                {row
                  .filter(
                    (child): child is React.ReactElement<SwatchButtonProps> =>
                      React.isValidElement(child) && child.type === SwatchButton
                  )
                  .map((child, i: number) => {
                    return <SwatchButton key={i} {...child.props} />;
                  })}
              </div>
            );
          })}
        </StyledSwatchBookContainer>
      </SwatchWrapper>
    );
  },
});
