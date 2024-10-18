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
