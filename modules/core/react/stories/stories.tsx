/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import Styled from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {type, depth, H1, H2, H3, H4, H5} from '..';
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

const Card = Styled('div')({
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
