import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridLayoutStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.space.x4,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
});

const regionStyles = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
  borderRadius: system.shape.x2,
  padding: system.space.x4,
});

const headingStyles = createStyles({
  margin: system.space.zero,
});

export const LandmarkRegaions = () => {
  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" gridArea="Header" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" gridArea="SideBar" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" gridArea="BodyContent" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" gridArea="Footer" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};
