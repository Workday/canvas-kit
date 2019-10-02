/// <reference path="../../../../typings.d.ts" />
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import styled, {css} from 'react-emotion';
import withReadme from 'storybook-readme/with-readme';

import canvas, {H1} from '..';
import README from '../README.md';

export const inverseStyle = {
  display: 'inline-block',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '4px',
};
export const type = (hierarchy: any) => (
  <div style={{margin: '0 !important'}}>
    <h1 style={hierarchy.h1}>H1 Header</h1>
    <h2 style={hierarchy.h2}>H2 Header</h2>
    <h3 style={hierarchy.h3}>H3 Header</h3>
    <h4 style={hierarchy.h4}>H4 Header</h4>
    <h5 style={hierarchy.h5}>H5 Header</h5>
    <p style={hierarchy.body}>
      <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={hierarchy.body2}>
      <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={hierarchy.small}>
      <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <hr />

    <h3 style={hierarchy.h3}>Variants</h3>

    <span className={css(hierarchy.body, hierarchy.variant.button)}>Button Text</span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.caps)}>Caps Text</span>
    <br />
    <label className={css(hierarchy.body, hierarchy.variant.label)}>Label Text</label>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.hint)}>Hint Text</span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.error)}>Error Text</span>
    <br />
    <a href="#" className={css(hierarchy.body, hierarchy.variant.link)}>
      Link Text
    </a>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.inverse, inverseStyle)}>
      Inverse Text
    </span>
    <br />
    <span className={css(hierarchy.body, hierarchy.variant.mono)}>Mono Text</span>
  </div>
);

storiesOf('Core', module)
  .addDecorator(withReadme(README))
  .add('Depth', () => {
    const Card = styled('div')({
      width: 200,
      height: 200,
      margin: 20,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });

    return (
      <div className="story">
        <div style={{display: 'flex'}}>
          <Card style={canvas.depth.inset}>Depth -1</Card>
          <Card style={canvas.depth['1']}>Depth 1</Card>
          <Card style={canvas.depth['2']}>Depth 2</Card>
          <Card style={canvas.depth['3']}>Depth 3</Card>
          <Card style={canvas.depth['4']}>Depth 4</Card>
        </div>
      </div>
    );
  })
  .add('Type', () => {
    return (
      <div className="story">
        <section>
          <h1 style={canvas.type.dataViz1}>Data Viz 1 Header</h1>
          <h1 style={canvas.type.dataViz2}>Data Viz 2 Header</h1>
          <H1>Styled Component H1 Header</H1>
          {type(canvas.type)}
        </section>
      </div>
    );
  });
