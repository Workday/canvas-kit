/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import styled from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {pickForegroundColor} from '@workday/canvas-kit-react-common';

import {colors, type, depth, spacing, borderRadius, H1, H2, H3, H4, H5} from '..';
import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Tokens|Core/React',
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
    <h1 css={type.dataViz1}>Data Viz 1 Header</h1>
    <h1 css={type.dataViz2}>Data Viz 2 Header</h1>
    <H1>H1 Header</H1>
    <H2>H2 Header</H2>
    <H3>H3 Header</H3>
    <H4>H4 Header</H4>
    <H5>H5 Header</H5>
    <p css={type.body}>
      <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p css={type.body2}>
      <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p css={type.small}>
      <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <hr />

    <H3>Variants</H3>
    <div css={{...type.body, '& > *': {display: 'block', margin: '4px 0'}}}>
      <span css={type.variant.button}>Button Text</span>
      <span css={type.variant.caps}>Caps Text</span>
      <label css={type.variant.label}>Label Text</label>
      <span css={type.variant.hint}>Hint Text</span>
      <span css={type.variant.error}>Error Text</span>
      <div>
        <a href="#" css={type.variant.link}>
          Link Text
        </a>
      </div>
      <span css={[type.variant.inverse, inverseStyle]}>Inverse Text</span>
      <span css={type.variant.mono}>Mono Text</span>
    </div>
  </React.Fragment>
);

const Shape = styled('div')<{radius?: string | number; size?: string | number}>(
  {
    ...type.h4,
    margin: spacing.m,
    background: colors.blueberry400,
    color: colors.frenchVanilla100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& span': {
      ...type.body2,
      ...type.variant.mono,
      display: 'block',
      color: colors.blueberry100,
    },
  },
  ({radius}) => ({
    borderRadius: radius,
  }),
  ({size}) => ({
    width: size || spacing.xxl,
    height: size || spacing.xxl,
  })
);

const SizeLabel = styled('div')({
  ...type.h4,
  margin: spacing.s,
  width: 80,
  '& span': {
    ...type.body2,
    ...type.variant.mono,
    ...type.variant.hint,
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

export const Spacing = () => (
  <React.Fragment>
    {Object.keys(spacing).map(size => (
      <div css={{display: 'flex'}}>
        <SizeLabel>
          {size}
          <span>({(spacing as any)[size]})</span>
        </SizeLabel>
        <Shape size={(spacing as any)[size]} radius={borderRadius.m} />
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
    ...type.body,
    fontWeight: 700,
    padding: `0 ${spacing.m}`,
    height: spacing.xl,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ({primary, bg}) =>
    primary && {
      ...type.h3,
      height: spacing.xxxl,
      paddingTop: spacing.s,
      paddingBottom: spacing.s,
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
              <span css={type.variant.mono}>{(colors as any)[color]}</span>
            </Swatch>
          );
        })}
      </Palette>
    ))}
  </Palettes>
);
