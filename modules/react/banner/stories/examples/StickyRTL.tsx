import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
});

export const StickyRTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Box cs={{height: system.size.xxl}}>
        <Banner isSticky={true} cs={containerStyles}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </Banner>
      </Box>
    </CanvasProvider>
  );
};
