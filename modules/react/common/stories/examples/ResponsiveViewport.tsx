import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import styled from '@emotion/styled';
import {type, space, colors, borderRadius} from '@workday/canvas-kit-react/tokens';
import {useTheme} from '@workday/canvas-kit-react/common';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();
const {up, down} = theme.canvas.breakpoints;
const small = down('m'); // Returns '@media (max-width: 768px)'
const medium = up('m'); // Returns '@media (min-width: 768px)'
const styles = {
  parentContainer: {
    [small]: {
      gridTemplateAreas: "'Header' 'SmallContainer' 'BodyContent' 'Footer'",
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      border: '10px solid',
      borderRadius: 30,
      paddingLeft: space.s,
      paddingRight: space.s,
      paddingTop: space.l,
      paddingBottom: space.l,
    },
    [medium]: {
      gridTemplateAreas: "'Header Header' 'SmallContainer BodyContent' 'Footer Footer'",
      gridTemplateColumns: '1fr 3fr',
      gridTemplateRows: 'auto 300px auto',
      border: '40px solid',
      borderRadius: 5,
      padding: space.m,
    },
  },
  header: {
    [small]: {
      ...type.levels.body.small,
      ...type.variants.inverse,
      fontWeight: type.properties.fontWeights.bold,
    },
    [medium]: {
      ...type.levels.body.large,
      ...type.variants.inverse,
      fontWeight: type.properties.fontWeights.bold,
    },
  },
  circle: {
    [small]: {
      height: 5,
      width: 75,
      bottom: 10,
    },
    [medium]: {
      height: 10,
      width: 40,
      bottom: -25,
    },
  },
  circleTop: {
    [small]: {
      height: 15,
      width: 40,
      top: 10,
    },
    [medium]: {
      display: 'none',
    },
  },
};

const StyledHeading = styled(Box.as('h3'))({
  ...styles.header,
  margin: 0,
});

const Circle = styled(Box.as('div'))({
  ...styles.circle,
  backgroundColor: 'grey',
  borderRadius: borderRadius.circle,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

const CircleTop = styled(Box.as('div'))({
  ...styles.circleTop,
  backgroundColor: 'black',
  borderRadius: borderRadius.circle,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

const StyledParentContainer = styled(Grid.as('section'))({
  ...styles.parentContainer,
  gridGap: space.s,
  position: 'relative',
});

const StyledHeaderContainer = styled(Grid.as('div'))({
  gridArea: 'Header',
  backgroundColor: colors.blueberry400,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledRightContent = styled(Grid.as('div'))({
  gridArea: 'BodyContent',
  backgroundColor: colors.plum300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledLeftContent = styled(Grid.as('div'))({
  gridArea: 'SmallContainer',
  backgroundColor: colors.blueberry300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledFooterContainer = styled(Grid.as('div'))({
  gridArea: 'Footer',
  backgroundColor: colors.berrySmoothie300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

export const ResponsiveViewport = () => {
  return (
    <StyledParentContainer>
      <CircleTop></CircleTop>
      <StyledHeaderContainer>
        <StyledHeading>Header</StyledHeading>
      </StyledHeaderContainer>
      <StyledLeftContent>
        <StyledHeading>Small Content</StyledHeading>
      </StyledLeftContent>
      <StyledRightContent>
        <StyledHeading>Body Content</StyledHeading>
      </StyledRightContent>
      <StyledFooterContainer>
        <StyledHeading>Footer</StyledHeading>
      </StyledFooterContainer>
      <Circle></Circle>
    </StyledParentContainer>
  );
};
