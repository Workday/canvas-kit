---
source_file: react/pagination/stories/pagination.mdx
live_url: https://workday.github.io/canvas-kit/react/pagination/stories/pagination
---

<Meta of={PaginationStories} />

# Canvas Kit Pagination

`Pagination` is a
[compound component](/getting-started/for-developers/resources/compound-components/) that allows
users to navigate between pages in a range.

[> Workday Design Reference](https://design.workday.com/components/navigation/pagination)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Pagination` includes a container `Pagination` component and a number of subcomponents which can be
composed in a variety of ways.

In this example, we set up a basic `Pagination` component with the default range of five pages, as
well as step controls (`Pagination.StepToPreviousButton` and `Pagination.StepToNextButton`) that
allow you to move to the previous page or the next page.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const Basic = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails>
        {({state}) =>
          `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} results`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

```

Note that you must include `Pagination.AdditionalDetails` to meet accessibility standards (with one
exception, see [`Pagination.AdditionalDetails`](#paginationadditionaldetails) for more information).
It is an `aria-live` region that announces the current page update to screen readers. If you wish to
prevent it from displaying (as we've done in the remaining examples), you may set its
`shouldHideDetails` prop to `true`. The visually hidden region will still be accessible to screen
readers.

### Hoisted Model

By default, `Pagination` will create and use its own [model](#model) internally. Alternatively, you
may configure your own model with `usePaginationModel` and pass it to `Pagination` via the `model`
prop. This pattern is referred to as
[hoisting the model](/getting-started/for-developers/resources/compound-components/#configuring-a-model)
and provides direct access to its `state` and `events` outside of the `Pagination` component.

In this example, we set up external observation of the model state and create an external button to
trigger an event to change the current page.

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';

export const HoistedModel = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  const model = usePaginationModel({
    lastPage,
    onPageChange: number => console.log(number),
  });

  return (
    <>
      <Pagination aria-label="Pagination" model={model}>
        <Pagination.Controls>
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${pageNumber}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of ${totalCount} results`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
      <SecondaryButton
        onClick={() => {
          model.events.goTo(7);
        }}
      >
        Go to Page 7
      </SecondaryButton>
    </>
  );
};

```

### Jump Controls

This example adds jump controls (`Pagination.JumpToFirstButton` and `Pagination.JumpToLastButton`)
that allow you to skip to the first and last pages in the range.

```tsx
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const JumpControls = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
        <Pagination.JumpToLastButton aria-label="Last" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} results`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

```

### GoTo Form

This example adds a form (`Pagination.GoToForm`) that allows you to skip to a specific page within
the range.

```tsx
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const GoToForm = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      onPageChange={pageNumber => console.log(pageNumber)}
      aria-label="Pagination"
      lastPage={lastPage}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
        <Pagination.JumpToLastButton aria-label="Last" />
        <Pagination.GoToForm>
          <Pagination.GoToTextInput aria-label="Go to page number" />
          <Pagination.GoToLabel>{({state}) => `of ${state.lastPage} pages`}</Pagination.GoToLabel>
        </Pagination.GoToForm>
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} results`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

```

### Right-to-Left (RTL)

`Pagination` supports right-to-left languages when specified in the `CanvasProvider` `theme`.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';

import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <CanvasProvider dir="rtl">
      <Pagination aria-label="Pagination" lastPage={lastPage}>
        <Pagination.Controls>
          <Pagination.JumpToFirstButton aria-label="First" />
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${pageNumber}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
          <Pagination.JumpToLastButton aria-label="Last" />
          <Pagination.GoToForm>
            <Pagination.GoToTextInput aria-label="Go to page number" />
            <Pagination.GoToLabel>{({state}) => `از ${state.lastPage} صفحه`}</Pagination.GoToLabel>
          </Pagination.GoToForm>
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )}-${getVisibleResultsMin(state.currentPage, resultCount)} من 100 صفحات`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </CanvasProvider>
  );
};

```

### Custom Range

This example uses a custom range that allows you to control the width of the component.

```tsx
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const CustomRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      onPageChange={pageNumber => console.log(pageNumber)}
      rangeSize={3}
    >
      <Pagination.Controls>
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({state}) =>
          `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} results`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

```

### Responsive Range

In some situations, you might want to adjust Pagination's range based on the width of the container.
You can use `useResizeObserver` to accomplish this as in the example below.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {useResizeObserver, useTheme} from '@workday/canvas-kit-react/common';

export const ResponsiveRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);
  // Normally, rangeSize can be a static value, but we're making it stateful,
  // so we can update it using useResizeObserver
  const [rangeSize, setRangeSize] = React.useState(5);
  const model = usePaginationModel({
    lastPage,
    rangeSize,
  });
  // We're only using this state to display the container width;
  const [containerWidth, setContainerWidth] = React.useState(0);
  // We're using breakpoints from the theme as reference points to adjust the range
  const theme = useTheme();
  const {values: breakpointValues} = theme.canvas.breakpoints;

  // We'll use this ref to measure the size of the container
  const containerRef = React.useRef(null);
  useResizeObserver({
    ref: containerRef,
    onResize: ({width}) => {
      // Note: onResizeObserver only accounts for the size of the container.
      // It does not factor in margin, padding, or border widths.
      // If you want to be exact, adjust your math to account for those.
      // If you're okay with being close enough on the measurements, this is fine.
      if (width) {
        // updating the container width for the display text
        setContainerWidth(width);
        // helper functions for better readability
        const isBetweenZeroAndSmall = width >= breakpointValues.zero && width < breakpointValues.s;
        const isBetweenSmallAndMedium = width >= breakpointValues.s && width < breakpointValues.m;
        const isBetweenMediumAndLarge = width >= breakpointValues.m && width < breakpointValues.l;
        const isBetweenLargeAndXLarge = width >= breakpointValues.l && width < breakpointValues.xl;
        // We're checking the rangeSize at each level to prevent extra re-renders.
        if (rangeSize !== 1 && isBetweenZeroAndSmall) {
          setRangeSize(1);
        }
        if (rangeSize !== 3 && isBetweenSmallAndMedium) {
          setRangeSize(3);
        }
        if (rangeSize !== 5 && isBetweenMediumAndLarge) {
          setRangeSize(5);
        }
        if (rangeSize !== 7 && isBetweenLargeAndXLarge) {
          setRangeSize(7);
        }
      }
    },
  });

  return (
    <Flex
      border="solid 1px"
      ref={containerRef}
      justifyContent="space-between"
      padding="s"
      alignItems="center"
    >
      <Text typeLevel="body.small" fontWeight="bold">
        Width: {containerWidth}px
      </Text>
      <Pagination model={model} aria-label="Pagination">
        <Pagination.Controls>
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${pageNumber}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of ${totalCount} results`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </Flex>
  );
};

```

## Component API

<!-- API Reference for Pagination not found -->

## Model

If `Pagination` was stripped of all its markup, attributes, and styling, what would remain is the
[model](/getting-started/for-developers/resources/compound-components/#models). The model is an
object composed of two parts: `state` which describes the current snapshot in time of the component
and `events` which describes events that can be sent to the model.

By default, `Pagination` will create a model and share it internally with its subcomponents using
React context. You may subscribe to `PaginationContext` if you wish to create a custom subcomponent
for your implementation. Here's a simple example.

```tsx

const CustomButton = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const model = React.useContext(PaginationContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // If onClick is provided, pass the event along
    props.onClick?.(e);
    model.events.goTo(10);
  };

  return (
    <button onClick={handleClick} {...props}>
      Go To Page 10
    </button>
  );
};

export const CustomPagination = () => {
  return (
    <Pagination aria-label="Pagination" lastPage={20}>
      <CustomButton aria-label="Page 10" />
      {/* Other subcomponents */}
    </Pagination>
  );
};
```

Alternatively, if you need direct access to the model's `state` and `events` outside of the
`Pagination` component, you may configure your own model with `usePaginationModel` and pass it to
`Pagination` via a pattern called
[hoisting the model](/getting-started/for-developers/resources/compound-components/#configuring-a-model).

```tsx
const model = usePaginationModel({
  lastPage,
  onPageChange: number => console.log(number),
});

<Pagination aria-label="Pagination" model={model}>
  {/* Child components */}
</Pagination>;
```

### usePaginationModel

`usePaginationModel` accepts a configuration object with the following properties and returns a
`PaginationModel` with `state` and `events` properties.

<!-- API Reference for usePaginationModel not found -->

## Utilities

### getLastPage

<!-- API Reference for getLastPage not found -->

### getRangeMin

<!-- API Reference for getRangeMin not found -->

### getRangeMax

<!-- API Reference for getRangeMax not found -->

### getVisibleResultsMin

<!-- API Reference for getVisibleResultsMin not found -->

### getVisibleResultsMax

<!-- API Reference for getVisibleResultsMax not found -->
