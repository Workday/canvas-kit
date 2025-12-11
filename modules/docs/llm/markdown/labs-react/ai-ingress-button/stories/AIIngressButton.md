---
source_file: labs-react/ai-ingress-button/stories/AIIngressButton.mdx
live_url: https://workday.github.io/canvas-kit/labs-react/ai-ingress-button/stories/AIIngressButton
---

<Meta of={AIIngressButtonStories} />

# AI Ingress Button

CTA to open and close AI Ingress Button

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

### Basic Example

You can click to toggle the AI Ingress Button.

```tsx
import {useState} from 'react';

import {AIIngressButton} from '@workday/canvas-kit-labs-react/ai-ingress-button';

export const Basic = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <AIIngressButton
        aria-label={toggled ? 'Hide AI Ingress' : 'Show AI Ingress'}
        onClick={() => setToggled(!toggled)}
        toggled={toggled}
      />
    </div>
  );
};

```

### Inverse Example

The Button can also be used on dark backgrounds.

```tsx
import {useState} from 'react';

import {AIIngressButton} from '@workday/canvas-kit-labs-react/ai-ingress-button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const darkBackground = createStyles({
  background: system.color.bg.contrast.strong,
  padding: system.space.x8,
});

export const Inverse = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className={darkBackground}>
      <AIIngressButton
        variant="inverse"
        onClick={() => setToggled(!toggled)}
        aria-label={toggled ? 'Hide Ingress' : 'Show Ingress'}
        toggled={toggled}
      />
    </div>
  );
};

```

## Component API

<!-- API Reference for AIIngressButton not found -->
