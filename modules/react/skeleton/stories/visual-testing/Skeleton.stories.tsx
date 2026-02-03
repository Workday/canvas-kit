import styled from '@emotion/styled';
import * as React from 'react';

import {Skeleton} from '@workday/canvas-kit-react/skeleton';

export default {
  title: 'Testing/Indicators/Skeleton',
  component: Skeleton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const Container = styled('span')({
  width: '60%',
  height: '100%',
  margin: '8px',
});

const FlexContainer = styled('div')({
  display: 'flex',
});

export const SkeletonStates = {
  render: () => (
    <div className="story">
      <h1>Custom Elements Skeleton</h1>
      <div>
        <Skeleton>
          <FlexContainer>
            <Skeleton.Shape width={50} height={50} borderRadius={99} />
            <Container>
              <Skeleton.Header />
            </Container>
          </FlexContainer>
          <div>
            <Skeleton.Text lineCount={3} />
          </div>
        </Skeleton>
      </div>
      <h1>Header Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Header />
        </Skeleton>
      </FlexContainer>
      <h1>Shape Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Shape width={120} height={120} borderRadius={99} />
        </Skeleton>
      </FlexContainer>
      <h1>Custom Shape Skeleton</h1>
      <FlexContainer>
        <Skeleton>
          <Skeleton.Shape width={200} height={50} borderRadius={4} />
        </Skeleton>
      </FlexContainer>
      <h1>Text Skeleton</h1>
      <Skeleton>
        <Skeleton.Text lineCount={2} />
      </Skeleton>
      <h1>Text Skeleton Line Count 1</h1>
      <Skeleton>
        <Skeleton.Text lineCount={1} />
      </Skeleton>
      <h1>Multiple Line Count</h1>
      <Skeleton>
        <Skeleton.Text lineCount={20} />
      </Skeleton>
    </div>
  ),
};
