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
