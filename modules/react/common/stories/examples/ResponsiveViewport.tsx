import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import styled from '@emotion/styled';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {useTheme} from '@workday/canvas-kit-react/common';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();
const {up, down} = theme.canvas.breakpoints;
const small = down('m'); // Returns '@media (max-width: 768px)'
const medium = up('m'); // Returns '@media (min-width: 768px)'
const styles = {
  [small]: {
    ...type.levels.body.small,
    ...type.variants.inverse,
    fontWeight: type.properties.fontWeights.bold,
  },
  [medium]: {
    ...type.levels.body.large,
    ...type.variants.inverse,
    fontWeight: type.properties.fontWeights.bold,
  },
};

const StyledHeading = styled(Box.as('h3'))({
  ...styles,
  margin: 0,
});

const borderPadProps = {
  borderRadius: 'm',
  padding: 's',
};

const Header = ({children, ...props}) => (
  <Grid gridArea="Header" backgroundColor="blueberry400" {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const BodyContent = ({children, ...props}) => (
  <Grid gridArea="BodyContent" backgroundColor="blueberry300" {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const SideBar = ({children, ...props}) => (
  <Grid gridArea="SideBar" backgroundColor="plum300" {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}) => (
  <Grid gridArea="Footer" backgroundColor="berrySmoothie300" {...props} {...borderPadProps}>
    {children}
  </Grid>
);

export const ResponsiveViewport = () => {
  const parentCont = {
    gridTemplateAreas:
      "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
    gridGap: 's',
    gridTemplateColumns: 'minmax(100px, 300px) minmax(200px, 500px)',
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
