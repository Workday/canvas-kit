---
source_file: react/skeleton/stories/Skeleton.mdx
live_url: https://workday.github.io/canvas-kit/react/skeleton/stories/Skeleton
---

<Meta of={SkeletonStories} />

# Canvas Kit Skeleton

A Skeleton is a low-fidelity visual placeholder that represents the loading of interface elements
before they have displayed on the page. Appearing as a blank version of the incoming content, it
mitigates focus on the loading process and improves the user’s perceived load time.

[> Workday Design Reference](https://design.workday.com/components/indicators/skeleton-loader)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Skeleton includes a container `Skeleton` component and the following subcomponents:
`Skeleton.Header`, `Skeleton.Text`, and `Skeleton.Shape`. Each subcomponent can be used as a
placeholder for a particular type of content.

Here's an example of how you might compose Skeleton components (along with non-Skeleton components
such as `Box` and `Flex`) to create a loading placeholder for a piece of content comprised of an
icon, a heading, and some text.

```tsx
import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  return (
    <Skeleton>
      <Flex alignItems="center">
        <Skeleton.Shape width={space.xl} height={space.xl} borderRadius={borderRadius.circle} />
        <Box flex={1} marginLeft="xs">
          <Skeleton.Header />
        </Box>
      </Flex>
      <Skeleton.Text />
    </Skeleton>
  );
};

```

And here's an example that simulates how that Skeleton might work in practice.

```tsx
import React from 'react';
import {keyframes} from '@emotion/react';

import {Card} from '@workday/canvas-kit-react/card';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SystemIconCircle} from '@workday/canvas-kit-react/icon';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';
import {patternIcon} from '@workday/canvas-system-icons-web';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledSimulation = styled(Box)<StyledType>({
  pointerEvents: 'none',
});

export const Simulation = () => {
  const [loading, setLoading] = React.useState(true);
  const [loadTime, setLoadTime] = React.useState('3000');
  const timer = React.useRef(0);
  const loadTimeValue = React.useRef(parseFloat(loadTime));

  const resetTimeout = () => {
    setLoading(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, loadTimeValue.current);
    return () => {
      window.clearTimeout(timer.current);
    };
  };

  const onChangeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timer.current);
    setLoading(event.target.checked);
  };

  const onChangeLoadTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadTime(event.currentTarget.value);
    const value = parseInt(event.currentTarget.value, 10);

    if (value) {
      loadTimeValue.current = value;
    }
  };

  React.useEffect(resetTimeout, []);

  return (
    <Box>
      <Box marginBottom="l">
        <FormField orientation="horizontalStart">
          <FormField.Label>Load Time</FormField.Label>
          <FormField.Input as={TextInput} onChange={onChangeLoadTime} value={loadTime} />
        </FormField>
        <FormField orientation="horizontalStart">
          <FormField.Label>Loading</FormField.Label>
          <FormField.Input as={Checkbox} checked={loading} onChange={onChangeLoading} />
        </FormField>
        <SecondaryButton onClick={resetTimeout}>Simulate Loading</SecondaryButton>
      </Box>
      <Card>
        <Card.Body>
          <Box minHeight={180} position="relative">
            {loading ? (
              <StyledSimulation
                position="absolute"
                top={0}
                left={0}
                width="100%"
                animation={!loading ? `${fadeOut} 150ms ease-out forwards` : undefined}
              >
                <Skeleton>
                  <Flex alignItems="center">
                    <Skeleton.Shape
                      width={space.xl}
                      height={space.xl}
                      borderRadius={borderRadius.circle}
                    />
                    <Box flex={1} marginLeft="xs">
                      <Skeleton.Header />
                    </Box>
                  </Flex>
                  <Skeleton.Text lineCount={3} />
                </Skeleton>
              </StyledSimulation>
            ) : (
              <Box>
                <Flex alignItems="center" display="inline-flex" marginBottom="s">
                  <SystemIconCircle icon={patternIcon} />
                  <Heading as="h3" size="small" margin={`0 0 0 ${space.xxs}`}>
                    Patterns
                  </Heading>
                </Flex>
                <p>
                  Canvas Patterns classify and document reusable solutions built to respond to
                  common user scenarios. Following these guidelines allows us to design experiences
                  that feel consistent and natural for users as they move between applications and
                  ensures that our approach aligns with industry standards.
                </p>
              </Box>
            )}
          </Box>
        </Card.Body>
      </Card>
    </Box>
  );
};

```

Press the **Simulate Loading** button to simulate the loading of the content (customize the loading
time using the **Load Time** field), or check the **Loading** check box to force the Skeleton to
display.

### Color

All Skeleton subcomponents accept a `backgroundColor` prop which can be used to specify the color of
the subcomponent. This is generally only recommended to be used for dark or gray backgrounds to
ensure the Skeleton components are visible.

```tsx
import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space} from '@workday/canvas-kit-react/tokens';

export const Color = () => {
  return (
    <Skeleton>
      <Flex alignItems="center">
        <Skeleton.Shape
          width={space.xl}
          height={space.xl}
          borderRadius={borderRadius.circle}
          backgroundColor={colors.berrySmoothie100}
        />
        <Box flex={1} marginLeft="xs">
          <Skeleton.Header backgroundColor={colors.cantaloupe100} />
        </Box>
      </Flex>
      <div>
        <Skeleton.Text backgroundColor={colors.fruitPunch100} />
      </div>
    </Skeleton>
  );
};

```

### Text

`Skeleton.Text` renders a placeholder for text content such as paragraphs. Each placeholder line has
a width of `100%` and a fixed height of `21px`, with the last line having a width of `60%` if there
are multiple lines.

```tsx
import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';

export const Text = () => {
  return (
    <Skeleton>
      <Skeleton.Text />
    </Skeleton>
  );
};

```

### Header

`Skeleton.Header` renders a placeholder for header content such as headings.

```tsx
import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';

export const Header = () => {
  return (
    <Skeleton>
      <Skeleton.Header />
    </Skeleton>
  );
};

```

### Shape

`Skeleton.Shape` renders a placeholder for graphic elements such as icons, avatars and small images.
Set the `height`, `width`, and `borderRadius` props of the `Skeleton.Shape` to create various
rectangular and circular shapes.

```tsx
import React from 'react';
import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {borderRadius, space} from '@workday/canvas-kit-react/tokens';

export const Shape = () => {
  return (
    <Skeleton>
      <Skeleton.Shape width={space.xxl} height={space.xxl} borderRadius={borderRadius.circle} />
    </Skeleton>
  );
};

```

## Component API

<!-- API Reference for Skeleton not found -->
