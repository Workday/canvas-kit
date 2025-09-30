import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const containerStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.space.x4,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
});

const gridStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  borderRadius: system.shape.x1,
  boxShadow: system.depth[1],
  padding: system.space.x4,
});

const headingStyles = createStyles({
  margin: system.space.zero,
  ...system.type.heading.small,
});

export const Basic = () => {
  return (
    <Grid cs={containerStyles}>
      <Grid as="header" gridArea="Header" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" gridArea="SideBar" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" gridArea="BodyContent" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" gridArea="Footer" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
