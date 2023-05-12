import * as React from 'react';
import {Grid, GridProps, Box} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';
import styled from '@emotion/styled';

// temporary placeholder until type components are added to canvas-kit

const StyledHeading = styled(Box.as('h3'))({
  ...type.levels.body.large,
  ...type.variants.inverse,
  margin: 0,
  fontWeight: type.properties.fontWeights.bold,
});

const borderPadProps = {
  borderRadius: 'm',
  padding: 's',
};

const Header = ({children, ...props}: GridProps) => (
  <Grid as="header" gridArea="Header" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const BodyContent = ({children, ...props}: GridProps) => (
  <Grid as="main" gridArea="BodyContent" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const SideBar = ({children, ...props}: GridProps) => (
  <Grid as="aside" gridArea="SideBar" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}: GridProps) => (
  <Grid as="footer" gridArea="Footer" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

export const Basic = () => {
  const parentCont = {
    gridTemplateAreas:
      "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
    gridGap: 's',
    gridTemplateColumns: '3fr 9fr',
    gridTemplateRows: 'auto 300px auto',
  };
  return (
    <Grid as="section" padding="s">
      <Grid {...parentCont}>
        <Header backgroundColor="blueberry400">
          <StyledHeading>Header</StyledHeading>
        </Header>
        <SideBar backgroundColor="blueberry300">
          <StyledHeading>SideBar</StyledHeading>
        </SideBar>
        <BodyContent backgroundColor="plum300">
          <StyledHeading>Body Content</StyledHeading>
        </BodyContent>
        <Footer backgroundColor="berrySmoothie300">
          <StyledHeading>Footer</StyledHeading>
        </Footer>
      </Grid>
    </Grid>
  );
};
