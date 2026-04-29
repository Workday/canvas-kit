import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.gap.md,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
});

const gridStyles = createStencil({
  vars: {
    gridArea: '',
  },
  base: {
    backgroundColor: system.color.brand.accent.primary,
    borderRadius: system.shape.sm,
    boxShadow: system.depth[1],
    padding: system.padding.md,
  },
});

const headingStyles = createStyles({
  ...system.type.heading.sm,
  margin: '0',
});

export const Basic = () => {
  return (
    <Grid cs={containerStyles}>
      <Grid as="header" cs={gridStyles({gridArea: 'Header'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" cs={gridStyles({gridArea: 'SideBar'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" cs={gridStyles({gridArea: 'BodyContent'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" cs={gridStyles({gridArea: 'Footer'})}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
