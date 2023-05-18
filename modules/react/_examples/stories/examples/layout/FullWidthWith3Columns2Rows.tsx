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
