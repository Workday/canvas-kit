---
source_file: react/banner/stories/Banner.mdx
live_url: https://workday.github.io/canvas-kit/react/banner/stories/Banner
---

<Meta of={BannerStories} />

# Canvas Kit Banner

`Banner` is a [compound component](/getting-started/for-developers/resources/compound-components/)
used surface important information and feedback to the user about a task, action, or state.

[> Workday Design Reference](https://design.workday.com/components/indicators/banners)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Use the children of `Banner.Label` to set the main text for the `Banner`.

```tsx
import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const Basic = () => {
  return (
    <Banner onClick={() => console.log('clicked banner')}>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};

```

### Action Text

Use the children of `Banner.ActionText` to customize the action text contained in the `Banner`. The
text has default value of `View All`.

```tsx
import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const ActionText = () => {
  return (
    <Banner>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.ActionText>Show Details</Banner.ActionText>
    </Banner>
  );
};

```

### Error Type

Set the `hasError` prop of the `Banner` to designate the severity of the message presented in the
banner. This will change the defualt icon to `exclamationCircleIcon`.

```tsx
import {Banner} from '@workday/canvas-kit-react/banner';

export const Error = () => {
  return (
    <Banner hasError={true}>
      <Banner.Icon />
      <Banner.Label>3 Errors</Banner.Label>
      <Banner.ActionText />
    </Banner>
  );
};

```

### Icon Banner

When only using an icon in the `Banner`, use our `Tooltip` component to both show a visible text
alternative, and assign an `aria-label` string to the child `Banner`.

```tsx
import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {styled} from '@workday/canvas-kit-react/common';

export const IconBanner = () => {
  return (
    <Tooltip title="Warning">
      <Banner width="4em">
        <Banner.Icon />
      </Banner>
    </Tooltip>
  );
};

```

### Sticky

Set the `isSticky` prop of the `Banner` to display it along the right edge of the page. When true,
the `Banner.ActionText` will be hidden. Some basic styles will be applied, but you will still need
to manually set the css `position` value.

```tsx
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

```

You can use keyframes to animate the `Banner` in.

```tsx
import React from 'react';

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
    marginBlock: system.space.x1,
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

```

### RefForwarding

`Banner` supports ref forwarding. It will forward ref to its underlying button element.

```tsx
import React from 'react';

import {changeFocus} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const RefForwarding = () => {
  const bannerRef = React.useRef<HTMLButtonElement>(null);

  const focusBanner = () => {
    changeFocus(bannerRef.current);
  };

  return (
    <Flex flexDirection="column" gap="xs" alignItems="flex-start">
      <Banner ref={bannerRef}>
        <Banner.Icon />
        <Banner.Label>3 Warnings</Banner.Label>
        <Banner.ActionText />
      </Banner>
      <SecondaryButton onClick={focusBanner}>Focus Banner</SecondaryButton>
    </Flex>
  );
};

```

### Right-to-Left (RTL)

Banner supports right-to-left languages when specified in the CanvasProvider theme.

```tsx
import React from 'react';

import {Box} from '@workday/canvas-kit-react/layout';
import {CanvasProvider, styled} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';

const StyledStickyBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const StickyRTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Box height={64}>
        <StyledStickyBanner isSticky={true}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </StyledStickyBanner>
      </Box>
    </CanvasProvider>
  );
};

```

### Themed Banners

Banners use the `useThemedPalette` hook for themeing. By default, your alert theme is used. `main`
will be used for the background, `dark` for the hover background, and `contrast` for the text.

```tsx
import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        alert: {
          main: colors.kiwi200,
          dark: colors.kiwi300,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};

```

If you set the `hasError` prop, the banner will use your error theme.

```tsx
import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

export const ThemedError = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        error: {
          main: colors.islandPunch500,
          dark: colors.islandPunch600,
          contrast: colors.berrySmoothie100,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner hasError={true}>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};

```

## Component API

<!-- API Reference for Banner not found -->
