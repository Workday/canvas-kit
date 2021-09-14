import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import * as React from 'react';

import SwatchButton, {SwatchButtonProps} from './ColorPicker.SwatchButton';

export interface SwatchRowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  colors: string[];
  children: (colors: string[]) => React.ReactNode[];
}

const StyledSwatchBookRow = styled('div')<StyledType>({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export default createComponent('div')({
  displayName: 'SwatchRow',
  Component: ({colors, children, ...elemProps}: SwatchRowProps, ref, Element) => {
    return (
      <StyledSwatchBookRow ref={ref} as={Element} {...elemProps}>
        {children(colors)!
          .filter(
            (child): child is React.ReactElement<SwatchButtonProps> =>
              React.isValidElement(child) && child.type === SwatchButton
          )
          .map((child, index: number) => {
            return <SwatchButton key={index} {...child.props} />;
          })}
      </StyledSwatchBookRow>
    );
  },
});
