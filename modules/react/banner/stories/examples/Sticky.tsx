import {Banner} from '@workday/canvas-kit-react/banner';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box cs={{height: system.size.xxl}}>
      <Banner hasError={true} isSticky={true} cs={containerStyles}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </Box>
  );
};
