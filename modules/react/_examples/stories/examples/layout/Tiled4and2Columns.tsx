import * as React from 'react';

import {Grid, Box} from '@workday/canvas-kit-react/layout';
import {BodyText, Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Tiled4and2Columns = () => (
  <Grid
    gridTemplateAreas={`
        'Heading Heading Heading Heading' 
        'FormTopHalfLeft FormTopHalfLeft FormQuaterLeft FormQuaterRight'
        'FormHalfLeft FormHalfLeft FormHalfRight FormHalfRight '
    `}
    gridAutoRows="min-content"
    gridRowGap="s"
    gridColumnGap="xxxl"
  >
    <Box gridArea="Heading" paddingX="s" border={`1px solid ${colors.blueberry400}`}>
      <Heading size="medium">4 and 2 Column Tiled View</Heading>
    </Box>
    <FormSkeleton gridArea="FormTopHalfLeft" />
    <FormSkeleton gridArea="FormQuaterLeft" />
    <FormSkeleton gridArea="FormQuaterRight" />
    <FormSkeleton gridArea="FormHalfLeft" />
    <FormSkeleton gridArea="FormHalfRight" />
  </Grid>
);

const FormSkeleton = props => (
  <Box border={`1px dashed ${colors.blueberry400}`} paddingX="m" {...props}>
    <BodyText size="small" fontWeight="bold">
      {props.gridArea} Area
    </BodyText>
    {Array.from({length: 3}).map(() => (
      <Grid gridGap="s" marginBottom="xl">
        <Box backgroundColor="soap500" width="120px" height="s" />
        <Box borderWidth="1px" borderStyle="solid" borderColor="soap500" width="100%" height="xl" />
      </Grid>
    ))}
  </Box>
);
