import React from 'react';
import {Grid, GridProps} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableHeader = createComponent('th')({
  displayName: 'Table.Header',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Grid
        as={Element}
        ref={ref}
        alignItems="center"
        backgroundColor="frenchVanilla100"
        borderBottom={`1px solid ${colors.soap400}`}
        justifyContent="left"
        minHeight="56px"
        paddingY="xxs"
        paddingX="s"
        wordBreak="break-word"
        fontWeight="medium"
        {...elemProps}
      >
        {children}
      </Grid>
    );
  },
});
