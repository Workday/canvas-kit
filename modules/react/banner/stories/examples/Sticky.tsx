import {Box} from '@workday/canvas-kit-react/layout';
import {Banner} from '@workday/canvas-kit-react/banner';
import {styled} from '@workday/canvas-kit-react/common';

const StyledBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box height={64}>
      <StyledBanner hasError={true} isSticky={true}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </StyledBanner>
    </Box>
  );
};
