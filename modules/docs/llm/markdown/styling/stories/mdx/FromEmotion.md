---
source_file: styling/stories/mdx/FromEmotion.mdx
live_url: https://workday.github.io/canvas-kit/styling/stories/mdx/FromEmotion
---

<Meta title="Styling/Guides/Converting From Emotion" />

# Converting from @emotion/styled

The most difficult part of understanding styling without Emotion's runtime is the mindset shift. You
are using CSS to merge properties instead of JavaScript. This is essential to remove the runtime of
Emotion. We'll use a contrived button example using `@emotion/styled` and our styling solution to
step through the differences.

## Button using `@emotion/styled`

```tsx
import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const StyledButton = styled('button')<ButtonProps>(
  {
    // base styles
    fontSize: '1rem',
    display: 'flex',
    borderRadius: '1rem',
  },
  // variant styles
  ({variant, backgroundColor}) => {
    switch (variant) {
      case 'primary':
        return {
          background: backgroundColor || 'blue',
          color: 'white',
        };
      case 'secondary':
        return {
          background: backgroundColor || 'gray',
        };
      case 'danger':
        return {
          background: backgroundColor || 'red',
        };
      default:
        return {};
    }
  },
  // size styles
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          fontSize: '1.4rem',
          height: '2rem',
        };
      case 'medium':
        return {
          fontSize: '1rem',
          height: '1.5rem',
        };
      case 'small':
        return {
          fontSize: '0.8rem',
          height: '1.2rem',
        };
      default:
        return {};
    }
  }
);

export const EmotionButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="primary" size="large">
          Primary Large
        </StyledButton>
        <StyledButton variant="primary" size="medium">
          Primary Medium
        </StyledButton>
        <StyledButton variant="primary" size="small">
          Primary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="secondary" size="large">
          Secondary Large
        </StyledButton>
        <StyledButton variant="secondary" size="medium">
          Secondary Medium
        </StyledButton>
        <StyledButton variant="secondary" size="small">
          Secondary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large">
          Danger Large
        </StyledButton>
        <StyledButton variant="danger" size="medium">
          Danger Medium
        </StyledButton>
        <StyledButton variant="danger" size="small">
          Danger Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </StyledButton>
        <StyledButton variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </StyledButton>
        <StyledButton variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </StyledButton>
      </div>
    </div>
  );
};

```

If we inspect each button, we'll notice each has a different class name. They all look like
`css-{hash}`:

For example, the Primary buttons:

- Primary Large: `css-oqv33j`
- Primary Medium: `css-1nhzlx`
- Primary Small: `css-1ygk6q`

This means each button is a unique style sheet insert by Emotion. If we render each permutation at
once, there will only be one expensive
[style recalculation](https://microsoftedge.github.io/DevTools/explainers/StyleTracing/explainer.html)

Converting to use the Canvas Kit Styling solution means organizing a little different. In our
example, it is already organized well, but conditionals might be anywhere in the style functions and
will need to be organized in groups.

## Button using only `createStyles`

What are we really trying to accomplish? [BEM](https://getbem.com/introduction) fits well with
compound components. BEM stands for Block, Element, Modifer. In compound components, "Block" refers
to a container component while "Element" refers to subcomponets. The "Modifer" refers to changing
the appearance of a block.

In our example, all styles that are common to all appearances of our button. It might be
`borderRadius`, `fontFamily`. We can use `createStyles` to define these styles:

```ts
const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});
```

The `variant` modifiers use a variable prop called `backgroundColor` which cannot be variable at
runtime. We need to use a CSS Variable for this.

We can create modifers using `createStyles` and organize them in an object:

```ts
const modifierStyles = {
  variant: {
    primary: createStyles({
      background: `var(--background-color-button, blue)`,
      color: 'white',
    }),
    secondary: createStyles({
      background: `var(--background-color-button, gray)`,
    }),
    danger: createStyles({
      background: `var(--background-color-button, red)`,
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
};
```

Each modifier value uses `createStyles` which returns a different class name. This means we can
create a "Primary Large" button by applying these modifiers to the `className` prop of a React
element:

```jsx
<button className={`${baseStyles} ${modifierStyles.variant.primary} ${modifierStyles.size.large}`}>
  Primary Large
</button>
```

This will create a button with 3 separate class names applied. `@emotion/styled` only applies a
single css class name.

```html
<!-- @emotion/styled -->
<button class="css-108wq52">Primary Large</button>

<!-- createStyles -->
<button class="css-puxv12 css-puxv13 css-puxv16">Primary Large</button>
```

If you want to change the background color, you'll have to pass it using `style`:

```jsx
<button
  className={`${baseStyles} ${modifierStyles.size.large}`}
  style={{'--color-background-button': 'orange'}}
>
  Orange Large
</button>
```

The output HTML will look like:

```html
<button class="css-puxv12 css-puxv16" style="--color-background-button: orange;">
  Orange Large
</button>
```

This works because CSS Custom Properties cascade values. The `style` attribute defines styles on the
element directly. This is a runtime in React that allows us to change a style without a new style
block - the styles can be static, but we can still have variable property values.

```tsx
import React from 'react';
import {createStyles} from '@workday/canvas-kit-styling';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});

const modifierStyles = {
  variant: {
    primary: createStyles({
      background: `var(--button-background-color, blue)`,
      color: 'white',
    }),
    secondary: createStyles({
      background: `var(--button-background-color, gray)`,
    }),
    danger: createStyles({
      background: `var(--button-background-color, red)`,
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
};

const Button = ({variant, size, backgroundColor, children}: ButtonProps) => {
  const className = [baseStyles, modifierStyles.variant[variant], modifierStyles.size[size]].join(
    ' '
  );
  const style = {'--button-background-color': backgroundColor} as React.CSSProperties;
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const ManualStylesButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large">
          Danger Large
        </Button>
        <Button variant="danger" size="medium">
          Danger Medium
        </Button>
        <Button variant="danger" size="small">
          Danger Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </Button>
        <Button variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </Button>
        <Button variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </Button>
      </div>
    </div>
  );
};

```

## Button using all utilities

If we want variables that are hashed and make it easier to define and use, we have `createVars`.
There are also edge cases for modifiers like allowing `undefined`, so we made a `createModifiers`
function as well. Both `createModifiers` and `createVars` return a function that makes it easier to
call with inputs and will return the correct output.

For example, `createModifiers`:

```tsx
const myModifiers = createModifiers({
  size: {
    large: 'button-large',
    small: 'button-small'
  }
})

myModifiers.size.large // 'button-large'

// the function knows what config can be passed
// and what restrictions each value has
myModifiers({size: 'large'}) // 'button-large'
myModifiers({size: 'small'}) // 'button-small'
myModifiers() // ''

// in a component
<div className={myModifiers({size: 'large'})} /> // <div class="button-large" />
```

`createVars`:

```tsx
const myVars = createVars('background', 'color')

myVars.color // something like `--color-{hash}`

// the function knows what keys are allowed
myVars({color: 'red'}) // {'--color-{hash}': 'red'}

// in a component
<div style={myVars({color: 'red'})} /> // <div style="--color-{hash}: red;">
```

```tsx
import React from 'react';
import {createStyles, createModifiers, createVars, cssVar} from '@workday/canvas-kit-styling';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const variables = createVars('backgroundColor');

const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});

const modifierStyles = createModifiers({
  variant: {
    primary: createStyles({
      background: cssVar(variables.backgroundColor, 'blue'),
      color: 'white',
    }),
    secondary: createStyles({
      background: cssVar(variables.backgroundColor, 'gray'),
    }),
    danger: createStyles({
      background: cssVar(variables.backgroundColor, 'red'),
    }),
  },
  size: {
    large: createStyles({
      fontSize: '1.4rem',
      height: '2rem',
    }),
    medium: createStyles({
      fontSize: '1rem',
      height: '1.5rem',
    }),
    small: createStyles({
      fontSize: '0.8rem',
      height: '1.2rem',
    }),
  },
});

const Button = ({variant, size, backgroundColor, children}: ButtonProps) => {
  const className = [baseStyles, modifierStyles({variant, size})].join(' ');
  const style = variables({backgroundColor});
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const StylingButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large">
          Danger Large
        </Button>
        <Button variant="danger" size="medium">
          Danger Medium
        </Button>
        <Button variant="danger" size="small">
          Danger Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </Button>
        <Button variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </Button>
        <Button variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </Button>
      </div>
    </div>
  );
};

```
