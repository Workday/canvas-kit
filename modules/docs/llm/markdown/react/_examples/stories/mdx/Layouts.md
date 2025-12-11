---
source_file: react/_examples/stories/mdx/Layouts.mdx
live_url: https://workday.github.io/canvas-kit/react/_examples/stories/mdx/Layouts
---

<Meta title="Examples/Layouts" />

# Canvas Kit Examples

Below are layout examples to reference as you build your own. For more in-depth information on our
`Grid` component, please reference our
[`Grid` documentation](https://workday.github.io/canvas-kit/?path=/docs/components-layout-grid--docs).

## Area Column Positioning

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const AreaColumnPositioning = () => (
  <>
    <Heading size="medium">Area Column Positioning</Heading>
    <Grid gridTemplateColumns="4fr 8fr" gridTemplateAreas="'header header' 'side main'" gridGap="m">
      <Box height="120px" backgroundColor="blueberry400" gridArea="header">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "header" area
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry500" gridArea="side">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "side" area
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry600" gridArea="main">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          "main" area
        </BodyText>
      </Box>
    </Grid>
  </>
);

```

## Custom Column Positioning

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const CustomColumnPositioning = () => (
  <>
    <Heading size="medium">Custom Column Positioning</Heading>
    <Grid gridTemplateColumns="repeat(12, 1fr)" gridGap="m">
      <Box height="60px" gridColumn="span 4" backgroundColor="blueberry100">
        <BodyText size="small" textAlign="center">
          4 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="span 3" backgroundColor="blueberry200">
        <BodyText size="small" textAlign="center">
          3 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="span 5" backgroundColor="blueberry400">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          5 column width
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="1 / 6" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          from 1st to 5th column position
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="7 / 12" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          from 7th to 11th column position
        </BodyText>
      </Box>
      <Box height="60px" gridColumn="2 / span 10" backgroundColor="blueberry600">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          10 column width starting from 2nd column
        </BodyText>
      </Box>
    </Grid>
  </>
);

```

## Custom Column Width

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';

export const CustomColumnWidth = () => (
  <>
    <Heading size="medium">Custom Column Width</Heading>
    <Grid gridTemplateColumns="4fr 2fr 6fr" gridGap="m">
      <Box height="120px" backgroundColor="blueberry400">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          4 column width
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry500">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          2 column width
        </BodyText>
      </Box>
      <Box height="120px" backgroundColor="blueberry600">
        <BodyText size="small" textAlign="center" color="frenchVanilla100">
          6 column width
        </BodyText>
      </Box>
    </Grid>
  </>
);

```

## Full Width With 3 Columns

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const FullWidthWith3Columns = () => (
  <Grid
    gridTemplateAreas="'Heading Heading Heading' 'FormLeft FormCenter FormRight'"
    gridAutoRows="min-content"
    gridRowGap="s"
    gridColumnGap="xxxl"
  >
    <Box gridArea="Heading" paddingX="s" border={`1px solid ${colors.blueberry400}`}>
      <Heading size="medium">Full Width With 3 Columns</Heading>
    </Box>
    <FormSkeleton gridArea="FormLeft" text="Form - Left Third" />
    <FormSkeleton gridArea="FormCenter" text="Form - Center Third" />
    <FormSkeleton gridArea="FormRight" text="Form - Right Third" />
  </Grid>
);

const FormSkeleton = ({gridArea, text}) => (
  <Box border={`1px dashed ${colors.blueberry400}`} paddingX="m" gridArea={gridArea}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 5}).map(() => (
      <Grid gridGap="s" marginBottom="xl">
        <Box backgroundColor="soap500" width="120px" height="s" />
        <Box borderWidth="1px" borderStyle="solid" borderColor="soap500" width="100%" height="xl" />
      </Grid>
    ))}
  </Box>
);

```

## Full Width With 3 Columns and 2 Rows

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const FullWidthWith3Columns2Rows = () => (
  <Grid
    gridTemplateAreas="'Heading Heading Heading'"
    gridColumn="repeat(3, 1fr)"
    gridAutoRows="min-content"
    gridRowGap="s"
    gridColumnGap="xxxl"
  >
    <Box gridArea="Heading" paddingX="s" border={`1px solid ${colors.blueberry400}`}>
      <Heading size="medium">Full Width With 3 Columns and 2 Rows</Heading>
    </Box>
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
    <FormSkeleton />
  </Grid>
);

const FormSkeleton = props => (
  <Box border={`1px dashed ${colors.blueberry400}`} paddingX="m" {...props}>
    <BodyText size="small" fontWeight="bold">
      Form Block
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid gridGap="s" marginBottom="xl">
        <Box backgroundColor="soap500" width="120px" height="s" />
        <Box borderWidth="1px" borderStyle="solid" borderColor="soap500" width="100%" height="xl" />
      </Grid>
    ))}
  </Box>
);

```

## Masonry

```tsx
import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {styled} from '@workday/canvas-kit-react/common';

const Container = styled(Box)({
  columnCount: 3,
  columnGap: '12px',
});

const StyledCard = styled(Box)({
  breakInside: 'avoid',
});

export const Masonry = () => (
  <>
    <Heading size="medium">Masonry Layout</Heading>
    <Container>
      {Array.from({length: 8}).map((_, ind) => (
        <StyledCard
          key={ind}
          border={`2px dashed ${colors.blueberry400}`}
          marginBottom="xs"
          padding="s"
        >
          <Grid gridGap="s" marginBottom="xl">
            <Box backgroundColor="soap500" width="120px" height="s" />
            <Box
              borderWidth="1px"
              borderStyle="solid"
              borderColor="soap500"
              width="100%"
              height="xl"
            />
          </Grid>
          {ind % 2 === 0 && (
            <Grid gridGap="s" marginBottom="xl">
              <Box backgroundColor="soap500" width="120px" height="s" />
              <Box
                borderWidth="1px"
                borderStyle="solid"
                borderColor="soap500"
                width="100%"
                height="xl"
              />
            </Grid>
          )}
        </StyledCard>
      ))}
    </Container>
  </>
);

```

## Responsive Columns

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const ResponsiveColumns = () => {
  const [screen, setScreen] = React.useState('100%');

  return (
    <>
      <Heading size="medium">Responsive Columns</Heading>
      <BodyText size="small">Choose screen size to see changes</BodyText>
      <SegmentedControl initialValue={screen} onSelect={data => setScreen(data.id)}>
        <SegmentedControl.List aria-label="screen-size" marginBottom="l">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="75%">75%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="50%">50%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="25%">25%</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
      <Box maxWidth={screen} border="2px solid black" padding="s">
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gridGap="m">
          <Box height="120px" backgroundColor="blueberry300" />
          <Box height="120px" backgroundColor="blueberry400" />
          <Box height="120px" backgroundColor="blueberry500" />
          <Box height="120px" backgroundColor="blueberry600" />
        </Grid>
      </Box>
    </>
  );
};

```

## 3 and 2 Column Tiled View

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Tiled2and3Columns = () => (
  <Grid
    gridTemplateAreas={`
        'Heading Heading Heading Heading Heading Heading'
        'FormThirdLeft FormThirdLeft FormThirdCenter FormThirdCenter FormThirdRight FormThirdRight'
        'FormHalfRight FormHalfRight FormHalfRight FormHalfLeft FormHalfLeft FormHalfLeft'
    `}
    gridAutoRows="min-content"
    gridRowGap="s"
    gridColumnGap="xxxl"
  >
    <Box gridArea="Heading" paddingX="s" border={`1px solid ${colors.blueberry400}`}>
      <Heading size="medium">3 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton gridArea="FormThirdLeft" text="Form - Left Third" />
    <FormSkeleton gridArea="FormThirdCenter" text="Form - Center Third" />
    <FormSkeleton gridArea="FormThirdRight" text="Form - Right Third" />
    <FormSkeleton gridArea="FormHalfRight" text="Form - Left Half" />
    <FormSkeleton gridArea="FormHalfLeft" text="Form - Right Half" />
  </Grid>
);

const FormSkeleton = ({gridArea, text}) => (
  <Box border={`1px dashed ${colors.blueberry400}`} paddingX="m" gridArea={gridArea}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid gridGap="s" marginBottom="xl">
        <Box backgroundColor="soap500" width="120px" height="s" />
        <Box borderWidth="1px" borderStyle="solid" borderColor="soap500" width="100%" height="xl" />
      </Grid>
    ))}
  </Box>
);

```

## 4 and 2 Column Tiled View

```tsx
import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Tiled4and2Columns = () => (
  <Grid
    gridTemplateAreas={`
        'Heading Heading Heading Heading'
        'FormTopHalfLeft FormTopHalfLeft FormQuarterLeft FormQuarterRight'
        'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight '
    `}
    gridTemplateColumns="repeat(4, 1fr)"
    gridAutoRows="min-content"
    gridRowGap="s"
    gridColumnGap="xxxl"
  >
    <Box gridArea="Heading" paddingX="s" border={`1px solid ${colors.blueberry400}`}>
      <Heading size="medium">4 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton gridArea="FormTopHalfLeft" text="Form - Top Left Half" />
    <FormSkeleton gridArea="FormQuarterLeft" text="Form - Left Quarter" />
    <FormSkeleton gridArea="FormQuarterRight" text="Form - Right Quarter" />
    <FormSkeleton gridArea="FormHalfLeft" text="Form - Left Half" />
    <FormSkeleton gridArea="FormHalfRight" text="Form - Right Half" />
  </Grid>
);

const FormSkeleton = ({gridArea, text}) => (
  <Box border={`1px dashed ${colors.blueberry400}`} paddingX="m" gridArea={gridArea}>
    <BodyText size="small" fontWeight="bold">
      {text}
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid gridGap="s" marginBottom="xl">
        <Box backgroundColor="soap500" width="120px" height="s" />
        <Box borderWidth="1px" borderStyle="solid" borderColor="soap500" width="100%" height="xl" />
      </Grid>
    ))}
  </Box>
);

```
