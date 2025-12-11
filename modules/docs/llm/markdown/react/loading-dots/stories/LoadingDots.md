---
source_file: react/loading-dots/stories/LoadingDots.mdx
live_url: https://workday.github.io/canvas-kit/react/loading-dots/stories/LoadingDots
---

<Meta of={LoadingDotsStories} />

# Canvas Kit Loading Dots

Loading Dots make users aware that content is currently being loaded, processing, or that change
will occur on the page.

[> Workday Design Reference](https://canvas.workdaydesign.com/components/indicators/loading-dots/)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Use Loading Dots to identify when a specific area of the page is loading (i.e. the content within a card).

```tsx
import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

export const Basic = () => {
  return <LoadingDots />;
};

```

### Inverse Variant

Use the `variant="inverse"` prop when the loading dots are on a dark background or image.

```tsx
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {createStencil, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Graphic} from '@workday/canvas-kit-react/icon';

const loadingStencil = createStencil({
  base: {
    background: system.color.bg.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
  },
});

const containerStyles = createStyles({
  position: 'relative',
  width: px2rem(200),
  height: px2rem(200),
});

export const Inverse = () => {
  return (
    <div className={containerStyles}>
      <LoadingDots variant="inverse" cs={loadingStencil()} />
      <Graphic
        alt="A magnifying glass"
        width={200}
        src={{
          url: 'https://picsum.photos/200',
        }}
        srcset="https://picsum.photos/200 200w, https://picsum.photos/200 200w, https://picsum.photos/800 800w, https://picsum.photos/1200 1200w"
      />
    </div>
  );
};

```

### Right-to-Left (RTL)

```tsx
import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <LoadingDots />
    </CanvasProvider>
  );
};

```

### Custom Shape

```tsx
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, createStencil} from '@workday/canvas-kit-styling';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.space.x4,
  }),
};

const loadingStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    backgroundColor: system.color.bg.contrast.strong,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

export const CustomShape = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots variant="inverse" cs={loadingStencil()} />
    </div>
  );
};

```

### Custom Color and Animation

```tsx
import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const styleOverrides = {
  parentContainer: createStyles({
    display: 'flex',
    gap: system.space.x4,
  }),
};

export const CustomColorAndAnimation = () => {
  return (
    <div className={styleOverrides.parentContainer}>
      <LoadingDots loadingDotColor={system.color.fg.primary.default} animationDurationMs="60ms" />
    </div>
  );
};

```

### Custom Styles

Loading Dots supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

Custom styling is also supported through the [Loading Dots documented props below](#props).

### Accessibility

Sometimes, letting users know when content has finished loading is just as important as asking users
to "please wait" while content is loading. The disappearance of an animation is information that
might need description. In this example, we are using `AriaLiveRegion` and `AccessibleHide`
components included in Canvas to describe both the appearance and disappearance of `LoadingDots`.

- When idle, render an empty live region
- When loading, render `LoadingDots` inside the live region,
- When complete, render `AccessibleHide` inside the live region expressing "Complete!"
- We can assign a name to `AriaLiveRegion` component by passing in `aria-label="Loading"`
- We can declare `LoadingDots` a labeled graphic by passing `role="img"` and
  `aria-label="Please wait..."` into the component

```tsx
import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {system} from '@workday/canvas-tokens-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {AccessibleHide, AriaLiveRegion} from '@workday/canvas-kit-react/common';

const styleOverrides = {
  parentContainer: createStyles({
    gap: system.space.x4,
  }),
  loadingStyles: createStyles({
    backgroundColor: system.color.bg.muted.default,
    padding: system.space.x3,
  }),
};

export const Accessible = () => {
  const [loadingState, setLoadingState] = React.useState('idle');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingState === 'loading') {
        setLoadingState('success');
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingState]);

  const handleLoad = () => {
    setLoadingState('loading');
  };

  return (
    <Flex cs={styleOverrides.parentContainer}>
      <SecondaryButton onClick={handleLoad}>Start</SecondaryButton>
      <AriaLiveRegion aria-label="Loading">
        {loadingState === 'loading' && (
          <LoadingDots
            cs={styleOverrides.loadingStyles}
            role="img"
            variant="inverse"
            aria-label="Please wait..."
          />
        )}
        {loadingState === 'success' && <AccessibleHide>Complete.</AccessibleHide>}
      </AriaLiveRegion>
    </Flex>
  );
};

```

## Component API

<!-- API Reference for LoadingDots not found -->
