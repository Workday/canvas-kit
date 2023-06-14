/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, keyframes} from '@emotion/react';
import React from 'react';

import {CSSProperties, space} from '@workday/canvas-kit-react/tokens';
import {useTheme} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {loopIcon} from '@workday/canvas-system-icons-web';
import {Banner} from '@workday/canvas-kit-react/banner';

const containerStyles: CSSProperties = {
  position: 'absolute',
  right: 0,
  overflow: 'hidden',
};

export const StickyAnimation = () => {
  const theme = useTheme();
  const bannerRef = React.useRef<HTMLButtonElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [styles, setStyles] = React.useState<CSSProperties>();

  const [rerun, setRerun] = React.useState(1); // Only needed for demo purposes

  React.useLayoutEffect(() => {
    let width = bannerRef.current.offsetWidth;
    if (theme.canvas.direction === 'rtl') {
      width *= -1;
    }
    const slideInKeyframes = keyframes({
      '0%': {
        transform: `translateX(${width}px)`,
      },
      '100%': {
        transform: `translateX(0 * ${rerun})`,
      },
    });

    setStyles({
      marginY: space.xxxs,
      marginInlineStart: space.xxxs,
      maringInlineEnd: 0,
      animation: `${slideInKeyframes} .3s ease-out forwards`,
    });
  }, [theme.canvas.direction, rerun]);

  return (
    <Box height={64}>
      <div css={containerStyles} ref={containerRef}>
        <div css={styles}>
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
