/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import styled from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';
import {spacing} from '@workday/canvas-kit-react-core';
import type, {space} from '..';

import README from '../README.md';

export const inverseStyle = {
  display: 'inline-block',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '3px',
};

storiesOf('Labs/Core/React', module)
  .addDecorator(withReadme(README))
  .add('Type', () => (
    <div className="story">
      <section>
        <h1 style={type.title1}>Title 1 Header</h1>
        <h2 style={type.title2}>Title 2 header</h2>
        <h3 style={type.title3}>Title 3 Header</h3>
        <h4 style={type.title4}>Title 4 Header</h4>
        <h5 style={type.title5}>Title 5 Header</h5>
        <h6 style={type.title6}>Title 6 Header</h6>
        <p style={type.body1}>
          <strong>Body 1: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.body2}>
          <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.body3}>
          <strong>Body 3: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.small1}>
          <strong>Small 1: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <p style={type.small2}>
          <strong>Small 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
        <hr />

        <h3 style={type.title5}>Variants</h3>

        <span css={[type.body2, type.variant.button]}>Button Text</span>
        <br />
        <span css={[type.body2, type.variant.caps]}>Caps Text</span>
        <br />
        <label css={[type.body2, type.variant.label]}>Label Text</label>
        <br />
        <span css={[type.body2, type.variant.hint]}>Hint Text</span>
        <br />
        <span css={[type.body2, type.variant.error]}>Error Text</span>
        <br />
        <a href="#" css={[type.body2, type.variant.link]}>
          Link Text
        </a>
        <br />
        <span css={[type.body2, type.variant.inverse, inverseStyle]}>Inverse Text</span>
        <br />
        <span css={[type.body2, type.variant.mono]}>Mono Text</span>
      </section>
    </div>
  ))
  .add('Space', () => {
    const Box = styled('div')(space);

    return (
      <div className="story">
        <div>
          <Box style={{border: '1px solid #eee'}} p={spacing.xl} pb={64} m={40} mx={10}>
            Margin and Padding
          </Box>
        </div>
      </div>
    );
  });
