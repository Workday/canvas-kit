import {Box} from '@workday/canvas-kit-react/layout';
import {Banner} from '@workday/canvas-kit-react/banner';
import {createStyles} from '@workday/canvas-kit-styling';

const styles = createStyles({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box cs={{height: 64}}>
      <Banner hasError={true} isSticky={true} cs={styles}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </Box>
  );
};
