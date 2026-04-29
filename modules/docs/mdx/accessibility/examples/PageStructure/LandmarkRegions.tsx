import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridLayoutStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.gap.md,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
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

const headingStyles = createStyles({
  margin: '0',
});

export const LandmarkRegaions = () => {
  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" cs={regionStencil({gridArea: 'Header'})}>
        <Heading size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" cs={regionStencil({gridArea: 'SideBar'})}>
        <Heading size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" cs={regionStencil({gridArea: 'BodyContent'})}>
        <Heading size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" cs={regionStencil({gridArea: 'Footer'})}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
