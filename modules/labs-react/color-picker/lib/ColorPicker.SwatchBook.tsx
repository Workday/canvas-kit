import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import * as React from 'react';

import SwatchButton, {SwatchButtonProps} from './ColorPicker.SwatchButton';

export interface SwatchBookProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  colors: string[];
  columnCount?: number;
  children: (colors: string[]) => React.ReactNode[];
}

/* eslint-disable */
function setUpTwoDArray(colors: React.ReactNode[], columnCount: number = 8) {
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
      <StyledSwatchBookContainer ref={ref} as={Element} {...elemProps}>
        {setUpTwoDArray(children(colors), columnCount).map((row, index) => {
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
    );
  },
});
