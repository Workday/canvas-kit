/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {pickForegroundColor} from '@workday/canvas-kit-react/common';

import {colors, type, depth, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Tokens/Tokens/React',
  decorators: [withReadme(README)],
});

const inverseStyle = {
  display: 'inline-block !important',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '4px',
};

const Card = styled('div')({
  width: 200,
  height: 200,
  margin: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Depth = () => (
  <div css={{display: 'flex'}}>
    <Card css={depth.inset}>Depth -1</Card>
    <Card css={depth['1']}>Depth 1</Card>
    <Card css={depth['2']}>Depth 2</Card>
    <Card css={depth['3']}>Depth 3</Card>
    <Card css={depth['4']}>Depth 4</Card>
  </div>
);

export const Type = () => (
  <React.Fragment>
    <h2>Levels (Hierarchy)</h2>

    <h3 css={type.levels.title.large}>Title Large Heading</h3>
    <h3 css={type.levels.title.medium}>Title Medium Heading</h3>
    <h3 css={type.levels.title.small}>Title Small Heading</h3>

    <h3 css={type.levels.heading.large}>Heading Large Heading</h3>
    <h3 css={type.levels.heading.medium}>Heading Medium Heading</h3>
    <h3 css={type.levels.heading.small}>Heading Small Heading</h3>

    <h3 css={type.levels.body.large}>Body Large Heading</h3>
    <h3 css={type.levels.body.medium}>Body Medium Heading</h3>
    <h3 css={type.levels.body.small}>Body Small Heading</h3>

    <h3 css={type.levels.subtext.large}>Subtext Large Heading</h3>
    <h3 css={type.levels.subtext.medium}>Subtext Medium Heading</h3>
    <h3 css={type.levels.subtext.small}>Subtext Small Heading</h3>

    <hr />

    <h3>Variants</h3>
    <div css={{...type.levels.body.medium, '& > *': {display: 'block', margin: '4px 0'}}}>
      <span css={type.variants.error}>Error Text</span>
      <span css={type.variants.hint}>Hint Text</span>
      <span css={[type.variants.inverse, inverseStyle]}>Inverse Text</span>
    </div>
  </React.Fragment>
);

const Shape = styled('div')<{radius?: string | number; size?: string | number}>(
  {
    ...type.levels.body.small,
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
  margin: space.s,
  width: 80,
  '& span': {
    ...type.levels.subtext.large,
    fontFamily: type.properties.fontFamilies.monospace,
    ...type.variants.hint,
    display: 'block',
  },
});

export const BorderRadius = () => (
  <React.Fragment>
    {Object.keys(borderRadius).map(size => (
      <div css={{display: 'flex'}}>
        <SizeLabel>
          {size}
          <span>({borderRadius[size]})</span>
        </SizeLabel>
        <Shape radius={borderRadius[size]} />
      </div>
    ))}
  </React.Fragment>
);

export const Space = () => (
  <React.Fragment>
    {Object.keys(space).map(size => (
      <div css={{display: 'flex'}}>
        <SizeLabel>
          {size}
          <span>({(space as any)[size]})</span>
        </SizeLabel>
        <Shape size={(space as any)[size]} radius={borderRadius.m} />
      </div>
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
    ...type.levels.body.medium,
    fontWeight: 700,
    padding: `0 ${space.m}`,
    height: space.xl,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ({primary, bg}) =>
    primary && {
      ...type.levels.body.large,
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
              <span css={{fontFamily: type.properties.fontFamilies.monospace}}>
                {(colors as any)[color]}
              </span>
            </Swatch>
          );
        })}
      </Palette>
    ))}
  </Palettes>
);
