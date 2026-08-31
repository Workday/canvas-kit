import React from 'react';

import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {GlobalHeader} from '../GlobalHeader';
import {SideBarContent} from '../SidePanelWithNavigation';
import {BreadcrumbNavRegion} from './BreadcrumbNavRegion';

const gridLayoutStyles = createStyles({
  gridTemplateAreas: `'Header Header Header Header'
    'SideBar BodyContent BodyContent BodyContent'
    'Footer Footer Footer Footer'`,
  gridGap: system.gap.md,
  gridTemplateColumns: '1fr 9fr',
  gridTemplateRows: `auto ${px2rem(800)} auto`,
});

const regionStencil = createStencil({
  vars: {
    gridArea: '',
  },
  base: ({gridArea}) => ({
    border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
    borderRadius: system.shape.md,
    padding: system.padding.md,
    gridArea,
  }),
});

const verticalFlexStyles = createStyles({
  flexDirection: 'column',
  gap: system.gap.md,
});

const headingStyles = createStyles({
  margin: '0',
});

export const FullPageDemo = () => {
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" cs={regionStencil({gridArea: 'Header'})}>
        <GlobalHeader notifications={notifications} />
      </Grid>
      <Grid as="nav" cs={regionStencil({gridArea: 'SideBar'})}>
        <Flex cs={verticalFlexStyles}>
          <SideBarContent />
        </Flex>
      </Grid>
      <Grid as="main" cs={regionStencil({gridArea: 'BodyContent'})}>
        <Flex cs={verticalFlexStyles}>
          <BreadcrumbNavRegion />
          <Flex cs={{gap: system.gap.md}}>
            <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
            <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
          </Flex>
          <Heading as="h1" size="large" cs={headingStyles}>
            Heading Level 1
          </Heading>
          <Heading size="medium" cs={headingStyles}>
            Heading Level 2
          </Heading>
          <Heading as="h3" size="small" cs={headingStyles}>
            Heading Level 3
          </Heading>
        </Flex>
      </Grid>
      <Grid as="footer" cs={regionStencil({gridArea: 'Footer'})}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
