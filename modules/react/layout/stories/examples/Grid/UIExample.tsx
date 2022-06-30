import * as React from 'react';
import {Grid, GridProps, Box} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';

// temporary placeholder until type components are added to canvas-kit
const H3 = props => (
  <h3
    style={{
      ...type.levels.body.large,
      ...type.variants.inverse,
      margin: 0,
      fontWeight: type.properties.fontWeights.bold,
    }}
    {...props}
  />
);

const Header = ({children, ...props}: GridProps) => (
  <Grid borderRadius="m" depth={1} gridArea="Header" padding="s" {...props}>
    {children}
  </Grid>
);

const BodyContent = ({children, ...props}: GridProps) => (
  <Grid borderRadius="m" depth={1} gridArea="BodyContent" padding="s" {...props}>
    {children}
  </Grid>
);

const SideBar = ({children, ...props}: GridProps) => (
  <Grid borderRadius="m" depth={1} gridArea="SideBar" padding="s" {...props}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}: GridProps) => (
  <Grid gridArea="Footer" borderRadius="m" depth={1} gridAutoFlow="row" padding="s" {...props}>
    {children}
  </Grid>
);

export const UIExample = () => {
  return (
    <Grid as="section" padding="s">
      <Grid
        gridGap="16px"
        gridTemplateAreas="'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'"
        gridTemplateColumns="1fr 3fr"
        gridTemplateRows="auto 300px auto"
      >
        <Header backgroundColor="blueberry400">
          <H3>Header</H3>
        </Header>
        <SideBar backgroundColor="chiliMango400">
          <H3>SideBar</H3>
        </SideBar>
        <BodyContent backgroundColor="juicyPear500">
          <H3>Body Content</H3>
        </BodyContent>
        <Footer backgroundColor="blackberry400">
          <H3>Footer</H3>
        </Footer>
      </Grid>
    </Grid>
  );
};
