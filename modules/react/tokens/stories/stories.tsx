import * as React from 'react';
import styled from '@emotion/styled';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {pickForegroundColor, StyledType} from '@workday/canvas-kit-react/common';

import {colors, type, depth, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export default withSnapshotsEnabled({
  title: 'Tokens/Foundations',
  parameters: {ReadmePath: 'react/tokens'},
});

const StyledCard = styled(Box)<StyledType>({
  width: 200,
  height: 200,
  margin: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Depth = () => (
  <Flex>
    <StyledCard depth="none">Depth None</StyledCard>
    <StyledCard depth={1}>Depth 1</StyledCard>
    <StyledCard depth={2}>Depth 2</StyledCard>
    <StyledCard depth={3}>Depth 3</StyledCard>
    <StyledCard depth={4}>Depth 4</StyledCard>
    <StyledCard depth={5}>Depth 5</StyledCard>
    <StyledCard depth={6}>Depth 6</StyledCard>
  </Flex>
);

const StyledLargeTitle = styled('h3')({
  ...type.levels.title.large,
});

const StyledMediumTitle = styled('h3')({
  ...type.levels.title.medium,
});

const StyledSmallTitle = styled('h3')({
  ...type.levels.title.small,
});

const StyledLargeHeading = styled('h3')({
  ...type.levels.heading.large,
});

const StyledMediumHeading = styled('h3')({
  ...type.levels.heading.medium,
});

const StyledSmallHeading = styled('h3')({
  ...type.levels.heading.small,
});

const StyledLargeBody = styled('h3')({
  ...type.levels.body.large,
});

const StyledMediumBody = styled('h3')({
  ...type.levels.body.medium,
});
const StyledSmallBody = styled('h3')({
  ...type.levels.body.small,
});

const StyledLargeSubtext = styled('h3')({
  ...type.levels.subtext.large,
});
const StyledMediumSubtext = styled('h3')({
  ...type.levels.subtext.medium,
});
const StyledSmallSubtext = styled('h3')({
  ...type.levels.subtext.small,
});

const StyledVariantsContainer = styled(Box)({
  ...type.levels.body.medium,
  '& > *': {display: 'block', margin: '4px 0'},
});

const StyledErrorText = styled('span')({
  ...type.variants.error,
});

const StyledHintText = styled('span')({
  ...type.variants.hint,
});
const StyledInverseText = styled('span')({
  ...type.variants.inverse,
  display: 'inline-block !important',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '4px',
});

export const Type = () => (
  <React.Fragment>
    <h2>Levels (Hierarchy)</h2>

    <StyledLargeTitle>Title Large Heading</StyledLargeTitle>
    <StyledMediumTitle>Title Medium Heading</StyledMediumTitle>
    <StyledSmallTitle>Title Small Heading</StyledSmallTitle>

    <StyledLargeHeading>Heading Large Heading</StyledLargeHeading>
    <StyledMediumHeading>Heading Medium Heading</StyledMediumHeading>
    <StyledSmallHeading>Heading Small Heading</StyledSmallHeading>

    <StyledLargeBody>Body Large Heading</StyledLargeBody>
    <StyledMediumBody>Body Medium Heading</StyledMediumBody>
    <StyledSmallBody>Body Small Heading</StyledSmallBody>

    <StyledLargeSubtext>Subtext Large Heading</StyledLargeSubtext>
    <StyledMediumSubtext>Subtext Medium Heading</StyledMediumSubtext>
    <StyledSmallSubtext>Subtext Small Heading</StyledSmallSubtext>

    <hr />

    <h3>Variants</h3>
    <StyledVariantsContainer>
      <StyledErrorText>Error Text</StyledErrorText>
      <StyledHintText>Hint Text</StyledHintText>
      <StyledInverseText>Inverse Text</StyledInverseText>
    </StyledVariantsContainer>
  </React.Fragment>
);

const Shape = styled('div')<{radius?: string | number; size?: string | number}>(
  {
    ...type.levels.body.small,
    fontWeight: type.properties.fontWeights.bold,
    margin: space.m,
    background: colors.blueberry400,
    color: colors.frenchVanilla100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& span': {
      ...type.levels.subtext.medium,
      fontFamily: type.properties.fontFamilies.monospace,
      display: 'block',
      color: colors.blueberry100,
    },
  },
  ({radius}) => ({
    borderRadius: radius,
  }),
  ({size}) => ({
    width: size || space.xxl,
    height: size || space.xxl,
  })
);

const SizeLabel = styled('div')({
  ...type.levels.body.small,
  fontWeight: type.properties.fontWeights.bold,
  margin: space.s,
  width: 80,
  '& span': {
    ...type.levels.subtext.medium,
    fontFamily: type.properties.fontFamilies.monospace,
    ...type.variants.hint,
    display: 'block',
  },
});

export const BorderRadius = () => (
  <React.Fragment>
    {Object.keys(borderRadius).map(size => (
      <Flex key={size}>
        <SizeLabel>
          {size}
          <span>({borderRadius[size]})</span>
        </SizeLabel>
        <Shape radius={borderRadius[size]} />
      </Flex>
    ))}
  </React.Fragment>
);

export const Space = () => (
  <React.Fragment>
    {Object.keys(space).map(size => (
      <Flex key={size}>
        <SizeLabel>
          {size}
          <span>({(space as any)[size]})</span>
        </SizeLabel>
        <Shape size={(space as any)[size]} radius={borderRadius.m} />
      </Flex>
    ))}
  </React.Fragment>
);

const Palettes = styled('div')({
  display: 'flex',
  margin: -20,
  flexWrap: 'wrap',
});

const Palette = styled('ul')({
  ...depth[3],
  listStyle: 'none',
  margin: 20,
  padding: 0,
  overflow: 'hidden',
  width: 250,
  alignSelf: 'flex-start',
  borderRadius: borderRadius.l,
  display: 'flex',
  flexDirection: 'column',
});

const Swatch = styled('li')<{bg: string; primary?: boolean}>(
  {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.bold,
    padding: `0 ${space.m}`,
    height: space.xl,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ({primary, bg}) =>
    primary && {
      ...type.levels.body.large,
      fontWeight: type.properties.fontWeights.bold,
      height: space.xxxl,
      paddingTop: space.s,
      paddingBottom: space.s,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      textTransform: 'capitalize',
    },
  ({bg}) => ({
    background: bg,
    color: pickForegroundColor(bg),
  })
);

const colorNames = Object.keys(colors)
  .map(color => color.replace(/\d+$/, '')) // Remove shade numbers
  .reduce((collection: string[], color: string) => {
    // Remove duplicates
    if (collection.indexOf(color) < 0) {
      collection.push(color);
    }
    return collection;
  }, []);

const StyledColors = styled('span')({
  fontFamily: type.properties.fontFamilies.monospace,
});

export const Colors = () => (
  <Palettes>
    {colorNames.map(colorName => (
      <Palette key={colorName}>
        <Swatch bg={(colors as any)[`${colorName}500`]} primary={true}>
          <div>{colorName}</div>
          <div>500</div>
        </Swatch>
        {[1, 2, 3, 4, 5, 6].map(level => {
          const color = `${colorName}${level}00`;
          return (
            <Swatch bg={(colors as any)[color]} key={color}>
              <span>{level}00</span>
              <StyledColors>{(colors as any)[color]}</StyledColors>
            </Swatch>
          );
        })}
      </Palette>
    ))}
  </Palettes>
);
