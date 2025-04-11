import React from 'react';

import {CSSProperties, space} from '@workday/canvas-kit-react/tokens';
import {useTheme} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {loopIcon} from '@workday/canvas-system-icons-web';
import {Banner} from '@workday/canvas-kit-react/banner';
import {
  createStencil,
  createStyles,
  createVars,
  keyframes,
  handleCsProp,
  cssVar,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  position: 'absolute',
  right: 0,
  overflow: 'hidden',
});
const stickyAnimationVars = createVars('width', 'rerun');
const stickAnimationKeyframes = keyframes({
  '0%': {
    transform: `translateX(${cssVar(stickyAnimationVars.width)})`,
  },
  '100%': {
    transform: `translateX(0 * ${cssVar(stickyAnimationVars.rerun)})`,
  },
});

const stickyAnimationStencil = createStencil({
  base: {
    marginY: system.space.x1,
    marginInlineStart: system.space.x1,
    marginInlineEnd: 0,
    animationName: stickAnimationKeyframes,
    animationDuration: '.3s',
    animationTimingFunction: 'ease-out',
  },
});

export const StickyAnimation = () => {
  const theme = useTheme();
  const bannerRef = React.useRef<HTMLButtonElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [styles, setStyles] = React.useState<CSSProperties>();
  const [bannerWidth, setBannerWidth] = React.useState(0);

  const [rerun, setRerun] = React.useState(1); // Only needed for demo purposes

  React.useLayoutEffect(() => {
    const width = bannerRef.current.offsetWidth;
    setBannerWidth(theme.canvas.direction === 'rtl' ? width * -1 : width);
  }, [theme.canvas.direction, rerun]);

  return (
    <Box height={64}>
      <div className={containerStyles} ref={containerRef}>
        <div
          key={rerun}
          {...handleCsProp({}, [
            stickyAnimationStencil(),
            stickyAnimationVars({width: `${bannerWidth}px`, rerun: `${rerun}`}),
          ])}
        >
          <Banner
            onClick={() => setRerun(r => r + 1)}
            hasError={true}
            isSticky={true}
            ref={bannerRef}
          >
            <Banner.Icon icon={loopIcon} />
            <Banner.Label>Click to run animation</Banner.Label>
            <Banner.ActionText />
          </Banner>
        </div>
      </div>
    </Box>
  );
};
