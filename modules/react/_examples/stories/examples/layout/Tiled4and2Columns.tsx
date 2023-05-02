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
