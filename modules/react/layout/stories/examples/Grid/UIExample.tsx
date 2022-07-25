import * as React from 'react';
import {Grid, GridProps, Box} from '@workday/canvas-kit-react/layout';
import {type} from '@workday/canvas-kit-react/tokens';
import {fontSizes} from '../../../../tokens/lib/type/fontSizes';

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

const borderPadProps = {
  borderRadius: 'm',
  padding: 's',
};

const Header = ({children, ...props}: GridProps) => (
  <Grid gridArea="Header" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const BodyContent = ({children, ...props}: GridProps) => (
  <Grid gridArea="BodyContent" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const SideBar = ({children, ...props}: GridProps) => (
  <Grid gridArea="SideBar" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

const Footer = ({children, ...props}: GridProps) => (
  <Grid gridArea="Footer" depth={1} {...props} {...borderPadProps}>
    {children}
  </Grid>
);

export const UIExample = () => {
  const parentCont = {
    gridTemplateAreas:
      "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
    gridGap: fontSizes[16],
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows: 'auto 300px auto',
  };
  return (
    <Grid as="section" padding="s">
      <Grid {...parentCont}>
        <Header backgroundColor="blueberry400">
          <H3>Header</H3>
        </Header>
        <SideBar backgroundColor="blueberry300">
          <H3>SideBar</H3>
        </SideBar>
        <BodyContent backgroundColor="plum300">
          <H3>Body Content</H3>
        </BodyContent>
        <Footer backgroundColor="berrySmoothie300">
          <H3>Footer</H3>
        </Footer>
      </Grid>
    </Grid>
  );
};
