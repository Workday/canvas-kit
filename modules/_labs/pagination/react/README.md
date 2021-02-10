# Canvas Kit React Pagination

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

`Pagination` is a composable component for handling navigation between pages in a range.

## Table of Contents

- [Canvas Kit React Pagination](#canvas-kit-react-pagination)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
      - [Pagination with Step Controls](#pagination-with-step-controls)
      - [Pagination with Jump Controls](#pagination-with-jump-controls)
      - [Pagination with a GoTo Form](#pagination-with-a-goto-form)
    - [Advanced Usage](#advanced-usage)
      - [Hoisted Model Pattern](#hoisted-model-pattern)
  - [Components](#components)
    - [Pagination](#pagination)
      - [Usage](#usage-1)
      - [Component Props](#component-props)
    - [Pagination.Controls](#paginationcontrols)
      - [Usage](#usage-2)
      - [Component Props](#component-props-1)
    - [Pagination.JumpToFirstButton](#paginationjumptofirstbutton)
      - [Usage](#usage-3)
      - [Component Props](#component-props-2)
    - [Pagination.StepToPreviousButton](#paginationsteptopreviousbutton)
      - [Usage](#usage-4)
      - [Component Props](#component-props-3)
    - [Pagination.StepToNextButton](#paginationsteptonextbutton)
      - [Usage](#usage-5)
      - [Component Props](#component-props-4)
    - [Pagination.JumpToLastButton](#paginationjumptolastbutton)
      - [Usage](#usage-6)
      - [Component Props](#component-props-5)
    - [Pagination.PageList](#paginationpagelist)
      - [Usage](#usage-7)
      - [Component Props](#component-props-6)
    - [Pagination.PageListItem](#paginationpagelistitem)
      - [Usage](#usage-8)
      - [Component Props](#component-props-7)
    - [Pagination.PageButton](#paginationpagebutton)
      - [Usage](#usage-9)
      - [Component Props](#component-props-8)
    - [Pagination.GoToForm](#paginationgotoform)
      - [Usage](#usage-10)
      - [Component Props](#component-props-9)
    - [Pagination.GoToTextInput](#paginationgototextinput)
      - [Usage](#usage-11)
      - [Component Props](#component-props-10)
    - [Pagination.GoToLabel](#paginationgotolabel)
      - [Usage](#usage-12)
      - [Component Props](#component-props-11)
    - [Pagination.AdditionalDetails](#paginationadditionaldetails)
      - [Usage](#usage-13)
      - [Component Props](#component-props-12)
  - [Models, Hooks, & Utils](#models-hooks--utils)
    - [PaginationModel](#paginationmodel)
      - [State](#state)
      - [Events](#events)
    - [usePaginationModel Hook](#usepaginationmodel-hook)
      - [Configuration](#configuration)
      - [Usage](#usage-14)

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-pagination
```

## Usage

`Pagination` is a composable component, meaning it can be put together and used in a variety of
different ways. We'll first cover basic usage examples followed by advanced usage. Each of the
examples is intended to be standalone, so you can skip to the section that best fits your use case.

These examples are designed to provide copy-and-paste snippets to help you get up and running
quickly without much explanation. Further detail on individual component props, behavior, and
accessibility can be found in the [Components](#components) section.

---

### Basic Usage

Below are examples we expect will work for most use cases. Please refer to the Advanced Usage
section for details on supporting custom implementations.

---

#### Pagination with Step Controls

In this example, the component uses "step" controls (`Pagination.StepToPreviousButton` and
`Pagination.StepToNextButton`) that allow you to move to the next page and previous pages.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '../lib/Pagination';

const PaginationWithStepControls = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      rangeSize={3}
      onPageChange={pageNumber => console.log(pageNumber)}
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

---

#### Pagination with Jump Controls

This example adds "jump" controls (`Pagination.JumpToFirstButton` and `Pagination.JumpToLastButton`)
that allow you to skip to the first and last items in the range.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '../lib/Pagination';

const PaginationWithJumpControls = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      rangeSize={3}
      onPageChange={pageNumber => console.log(pageNumber)}
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

---

#### Pagination with a GoTo Form

This example adds a form (`Pagination.GoToForm`) that allows you to skip to a specific page within
the range.

```tsx
import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '../lib/Pagination';

const PaginationWithGoToControls = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      rangeSize={3}
      onPageChange={pageNumber => console.log(pageNumber)}
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
          <Pagination.GoToTextInput />
          <Pagination.GoToLabel>{() => `of ${totalCount} results`}</Pagination.GoToLabel>
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

---

### Advanced Usage

Below are examples for more advanced / custom usage of these components. We expect most people won't
need to read this section, but if you're needing to go beyond our basic examples or just curious,
feel free to explore this section. While these examples are not exhaustive, they provide additional
insight into what's possible.

#### Hoisted Model Pattern

If you want the `Pagination` component to handle its state and actions internally and hook into page
change events, the basic usage examples above should be sufficient. However, if you need external
access to the model, you can use the hoisted model pattern. You can create a model outside of the
component with the `usePaginationModel` hook.

For this example, we'll create a `Pagination` component that handles 128 total items with 10 items
per page. Normally this would involve some math on your part, but don't worry about that, we've got
you covered with some handy utilities

```tsx
import {
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '../lib/Pagination';

const totalCount = 128;
const resultCount = 10;
const lastPage = getLastPage(resultCount, totalCount);

const ExternalModelPagination = () => {
  // create the model
  const model = usePaginationModel({
    lastPage={lastPage}
    rangeSize={3}
    onPageChange={pageNumber => console.log(pageNumber)}
  });

  // Notice that you only need to pass in `model` and `aria-label` instead of the rest of the props.
  return (
    <Pagination aria-label="Pagination" model={model}>
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
          <Pagination.GoToTextInput />
          <Pagination.GoToLabel>{() => `of ${totalCount} results`}</Pagination.GoToLabel>
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
}
```

## Components

---

### Pagination

The `Pagination` component is a wrapper for a React context provider and `nav` element. Child
components such as `Pagination.StepToPreviousButton`, `Pagination.PageList`, etc. subscribe to that
context.

#### Usage

```tsx
<Pagination
  aria-label="Pagination"
  lastPage={100}
  initialCurrentPage={6}
  rangeSize={3}
  onPageChange={pageNumber => console.log(pageNumber)}
>
  {/* child components go here */}
</Pagination>
```

#### Component Props

| name               | type                           | required?  | default | recommended                              |
| ------------------ | ------------------------------ | ---------- | ------- | ---------------------------------------- |
| aria-label         | `string`                       | ✅ `true`  | n/a     | "Pagination" (and translated equivalent) |
| lastPage           | `number`                       | ✅ `true`  | n/a     | n/a                                      |
| initialCurrentPage | `number`                       | 🚫 `false` | 1       | n/a                                      |
| rangeSize          | `number`                       | 🚫 `false` | 5       | n/a                                      |
| firstPage          | `number`                       | 🚫 `false` | 1       | n/a                                      |
| onPageChange       | `(pageNumber: number) => void` | 🚫 `false` | n/a     | n/a                                      |

This component also supports
[all native HTMLElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
The `aria-label` prop is required for accessibility. We recommend using `"Pagination"` as seen in
the example.

---

### Pagination.Controls

`Pagination.Controls` is a styled `div` wrapper that provides proper alignment and spacing between
elements inside `Pagination`. It does not handle any internal business logic or state.

#### Usage

```tsx
<Pagination.Controls>{/* child components go here */}</Pagination.Controls>
```

#### Component Props

This component supports
[all native HTMLDivElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#Attributes).

---

### Pagination.JumpToFirstButton

`Pagination.JumpToFirstButton` is an `IconButton` that subscribes to `Pagination`'s context. This
allows it to know when to disable and set `currentPage` to the first page.

#### Usage

```tsx
<Pagination.JumpToFirstButton aria-label="First" />
```

#### Component Props

| name       | type     | required? | default | recommended                         |
| ---------- | -------- | --------- | ------- | ----------------------------------- |
| aria-label | `string` | ✅ `true` | n/a     | "First" (and translated equivalent) |

This component also supports all `IconButton` props.

---

### Pagination.StepToPreviousButton

`Pagination.StepToPreviousButton` is an `IconButton` that subscribes to `Pagination`'s context. This
allows it to know when to disable and decrement the `currentPage`.

#### Usage

```tsx
<Pagination.StepToPreviousButton aria-label="Previous" />
```

#### Component Props

| name       | type     | required? | default | recommended                            |
| ---------- | -------- | --------- | ------- | -------------------------------------- |
| aria-label | `string` | ✅ `true` | n/a     | "Previous" (and translated equivalent) |

This component also supports all `IconButton` props.

---

### Pagination.StepToNextButton

`Pagination.StepToNextButton` is an `IconButton` that subscribes to `Pagination`'s context. This
allows it to know when to disable and increment the `currentPage`.

#### Usage

```tsx
<Pagination.StepToNextButton aria-label="Next" />
```

#### Component Props

| name       | type     | required? | default | recommended                        |
| ---------- | -------- | --------- | ------- | ---------------------------------- |
| aria-label | `string` | ✅ `true` | n/a     | "Next" (and translated equivalent) |

This component also supports all `IconButton` props.

---

### Pagination.JumpToLastButton

`Pagination.JumpToLastButton` is an `IconButton` that subscribes to `Pagination`'s context. This
allows it to know when to disable and set `currentPage` to the last page.

#### Usage

```tsx
<Pagination.JumpToLastButton aria-label="Last" />
```

#### Component Props

| name       | type     | required? | default | recommended                        |
| ---------- | -------- | --------- | ------- | ---------------------------------- |
| aria-label | `string` | ✅ `true` | n/a     | "Last" (and translated equivalent) |

This component also supports all `IconButton` props.

---

### Pagination.PageList

`Pagination.PageList` is an ordered list (`ol`) that subscribes to `Pagination`'s context. This
allows it generate the `range` of page numbers. It also handles spacing between the child elements.
This component will accept either child elements or functional children (sometimes called the render
prop pattern). It's likely you'll want to use the functional children, but in the off-chance you
need a static list of items, this component will support it. The usage section below will provide
examples of both.

#### Usage

The functional children snippet below will likely be the most common use case.

```tsx
<Pagination.PageList>
  {({state}) =>
    state.range.map(pageNumber => (
      <Pagination.PageListItem key={pageNumber}>
        <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
      </Pagination.PageListItem>
    ))
  }
</Pagination.PageList>
```

#### Component Props

| name     | type                                                               | required?  | default | recommended |
| -------- | ------------------------------------------------------------------ | ---------- | ------- | ----------- |
| children | `(model: PaginationModel) => React.ReactNode[] \| React.ReactNode` | 🚫 `false` | n/a     | n/a         |

This component also supports
[all native HTMLOLElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#Attributes).

---

### Pagination.PageListItem

`Pagination.PageListItem` is a styled `li` element. It provides a child semantic element for the
`PageList` component and is important for accessibility. It does not handle any internal business
logic or state.

#### Usage

```tsx
<Pagination.PageListItem>{/* child element goes here */}</Pagination.PageListItem>
```

#### Component Props

This component also supports
[all native HTMLLIElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#Attributes).

---

### Pagination.PageButton

`Pagination.PageButton` is an `IconButton` that subscribes to `Pagination`'s context. This allows it
to know set the `toggled` styling when it is the current item and update the `currentPage`.

#### Usage

`PageButton` will render the `pageNumber` as its children.

```tsx
<Pagination.PageButton aria-label="Page 2" pageNumber={2} />
```

#### Component Props

| name       | type     | required? | default | recommended                                      |
| ---------- | -------- | --------- | ------- | ------------------------------------------------ |
| aria-label | `string` | ✅ `true` | n/a     | `Page ${pageNumber}` (and translated equivalent) |
| pageNumber | `number` | ✅ `true` | n/a     | n/a                                              |

This component also supports all `IconButton` props.

---

### Pagination.GoToForm

`Pagination.GoToForm` is a wrapper for a React context provider and `form` element. Child components
such as `Pagination.GoToTextInput` and `Pagination.GoToLabel` subscribe to that context to manage
the form state and behavior as well as update the `currentPage` in the `Pagination` component.

#### Usage

```tsx
<Pagination.GoToForm>{/* child elements go here */}</Pagination.GoToForm>
```

#### Component Props

This component supports
[all native HTMLFormElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes).

---

### Pagination.GoToTextInput

#### Usage

```tsx
<Pagination.GoToTextInput />
```

#### Component Props

This component supports all `TextInput` props.

---

### Pagination.GoToLabel

`Pagination.GoToLabel` is a styled `label` element that subscribes to the `Pagination` context. This
allows it to pass the `Pagination` context to child elements.

#### Usage

This component will accept either child elements or functional children (sometimes called the render
prop pattern). It's likely you'll want to use the functional children, but in the off-chance you
need static child elements, this component will support it. Examples of both patterns are provided
below.

**Functional Children**

Use this pattern when you need access to the state in the `Pagination` context for your text.

```tsx
<Pagination.GoToLabel>{({state}) => `of ${state.lastPage} results`}</Pagination.GoToLabel>
```

#### Component Props

| name     | type                                                             | required?  | default | recommended |
| -------- | ---------------------------------------------------------------- | ---------- | ------- | ----------- |
| htmlFor  | `string`                                                         | 🚫 `false` | n/a     | n/a         |
| children | `(model: PaginationModel) => React.ReactNode \| React.ReactNode` | 🚫 `false` | n/a     | n/a         |

This component also supports
[all native HTMLLabelElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#Attributes).

---

### Pagination.AdditionalDetails

`Pagination.AdditionalDetails` is a styled `div` container that subscribes to the `Pagination`
context. This allows it to pass the `Pagination` context to child elements. It is also an
`aria-live` region that announces the current page update to screen readers. Because of that, it's
important to always include it in your `Pagination` component.

#### Usage

This component will accept either child elements or functional children (sometimes called the render
prop pattern). It's likely you'll want to use the functional children, but in the off-chance you
need static child elements, this component will support it.

```tsx
<Pagination.AdditionalDetails>
  {({state}) =>
    `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
      state.currentPage,
      resultCount,
      totalCount
    )} of ${totalCount} results`
  }
</Pagination.AdditionalDetails>
```

#### Component Props

| name              | type                                                             | required?  | default | recommended |
| ----------------- | ---------------------------------------------------------------- | ---------- | ------- | ----------- |
| shouldHideDetails | `boolean`                                                        | 🚫 `false` | n/a     | n/a         |
| children          | `(model: PaginationModel) => React.ReactNode \| React.ReactNode` | ✅ `true`  | n/a     | n/a         |

## Models, Hooks, & Utils

### PaginationModel

The `PaginationModel` is the core of the `Pagination` component. That said, if you're using the
higher-level context API components and following the basic usage guidelines, you shouldn't need to
know how the model operates to successfully implement the component. But if you have an advanced use
case or you're feeling curious, this section is for you.

If `Pagination` was stripped of all its markup, attributes, and styling, what would remain is the
model. The `PaginationModel` is how we describe the state and behavior of the component. You could
completely swap out the underlying elements, attributes, and styles, and the model would remain the
same. `PaginationModel` is an object that is composed of two parts: `state` and `events`. The
model's `state` describes the current state of the component, and `events` are functions that act on
that state (also called behaviors). Below is an example `Pagination` model:

```tsx
const paginationModel = {
  state: {
    firstPage,
    currentPage,
    lastPage,
    range,
    rangeSize,
  },
  events: {
    first,
    last,
    next,
    previous,
    setCurrentPage,
    goTo,
  };
};

```

#### State

The `state` describes the current state of the `Pagination` component. As events are fired, the
state is updated, and the component will re-render. Below are the `state` keys and descriptions of
their values:

- `firstPage` - the page number for the first page
- `currentPage` - the page number for the current page
- `lastPage` - the page number for the last page (it can also be used as a total page count)
- `range` - an array of page numbers included in the visible range
- `rangeSize` - the size of the visible range

#### Events

The Model's `events` describe behaviors that act on `state`. Below are the `events` keys and
descriptions of their values:

- `first` - sets the current page to the first page
- `last` - sets the current page to the last page
- `next` - increments the current page by 1
- `previous` - decrements the current page by 1
- `setCurrentPage` - sets the current page to a given page number (no safeguards)
- `goTo` - sets the current page to a given page number\* (with safeguards)

\* _`goTo` is very similar to `setCurrentPage`, but it has some built-in safeguards. If the page
number provided is below the first page (e.g: `0`), `currentPage` will be set to the `firstPage`.
Similarly, if the number provided is larger than the `lastPage`, it will set `currentPage` to the
`lastPage`._

### usePaginationModel Hook

The `Pagination` model is created by the `usePaginationModel` hook. Normally `Pagination` will
create it for you under the hood with the props you provide the component. But you can also create
it

#### Configuration

#### Usage
