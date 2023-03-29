import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';
import styled from '@emotion/styled';
import {type, space, colors, borderRadius} from '@workday/canvas-kit-react/tokens';
import {getTheme} from '@workday/canvas-kit-react/common';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = getTheme();
const {up, down} = theme.canvas.breakpoints;
const small = down('m'); // Returns '@media (max-width: 768px)'
const medium = up('m'); // Returns '@media (min-width: 768px)'
const styles = {
  parentWrapper: {
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
      borderRadius: '20px 20px 0 0',
      padding: space.m,
    },
  },
  parentContainer: {
    [small]: {
      maxWidth: '100%',
    },
    [medium]: {
      maxWidth: 1000,
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
  greyBar: {
    [small]: {
      display: 'none',
    },
    [medium]: {
      display: 'block',
      borderRadius: '0 0 20px 20px',
    },
  },
  circle: {
    [small]: {
      height: 5,
      width: 75,
      bottom: 10,
      backgroundColor: 'grey',
    },
    [medium]: {
      height: 40,
      width: 40,
      bottom: -95,
      backgroundColor: 'black',
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

const ParentCont = styled(Box.as('div'))({
  ...styles.parentContainer,
  position: 'relative',
});

const StyledParentWrapper = styled(Grid.as('section'))({
  ...styles.parentWrapper,
  gridGap: space.s,
  position: 'relative',
});

const CircleTop = styled(Box)({
  ...styles.circleTop,
  backgroundColor: 'black',
  borderRadius: borderRadius.circle,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

const StyledHeaderContainer = styled(Grid.as('div'))({
  gridArea: 'Header',
  backgroundColor: colors.blueberry400,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledLeftContent = styled(Grid.as('div'))({
  gridArea: 'SmallContainer',
  backgroundColor: colors.blueberry300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledRightContent = styled(Grid.as('div'))({
  gridArea: 'BodyContent',
  backgroundColor: colors.plum300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledFooterContainer = styled(Grid.as('div'))({
  gridArea: 'Footer',
  backgroundColor: colors.berrySmoothie300,
  borderRadius: borderRadius.m,
  padding: space.s,
});

const StyledHeading = styled(Box.as('h3'))({
  ...styles.header,
  margin: 0,
});

const GreyBar = styled(Box)({
  ...styles.greyBar,
  height: 70,
  backgroundColor: 'grey',
});

const Circle = styled(Box)({
  ...styles.circle,
  borderRadius: borderRadius.circle,
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

export const ResponsiveViewport = () => {
  return (
    <ParentCont>
      <StyledParentWrapper>
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
      </StyledParentWrapper>
      <GreyBar></GreyBar>
    </ParentCont>
  );
};
