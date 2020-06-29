/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';
import {spacing} from '@workday/canvas-kit-react-core';
import type, {space, _typeTest} from '..';

import README from '../README.md';

const inverseStyle = {
  display: 'inline-block',
  background: '#667380',
  padding: '2px 8px',
  borderRadius: '3px',
};

export default {
  title: 'Labs|Core/React',
  decorators: [withReadme(README)],
};

export const Type = () => (
  <section>
    <h1 style={type.brand1}>Brand 1 Header</h1>
    <h2 style={type.brand2}>Brand 2 header</h2>
    <h1 style={type.h1}>H1 Header</h1>
    <h2 style={type.h2}>H2 Header</h2>
    <h3 style={type.h3}>H3 Header</h3>
    <h4 style={type.h4}>H4 Header</h4>
    <h5 style={type.h5}>H5 Header</h5>
    <p style={type.body}>
      <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={type.body2}>
      <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={type.small}>
      <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <hr />

    <h3 style={type.h3}>Variants</h3>

    <span css={[type.body, type.variant.button]}>Button Text</span>
    <br />
    <span css={[type.body, type.variant.caps]}>Caps Text</span>
    <br />
    <label css={[type.body, type.variant.label]}>Label Text</label>
    <br />
    <span css={[type.body, type.variant.hint]}>Hint Text</span>
    <br />
    <span css={[type.body, type.variant.error]}>Error Text</span>
    <br />
    <a href="#" css={[type.body, type.variant.link]}>
      Link Text
    </a>
    <br />
    <span css={[type.body, type.variant.inverse, inverseStyle]}>Inverse Text</span>
    <br />
    <span css={[type.body, type.variant.mono]}>Mono Text</span>
  </section>
);

export const Space = () => {
  const Box = styled('div')(space);
  return (
    <Box style={{border: '1px solid #eee'}} p={spacing.xl} pb={64} m={40} mx={10}>
      Margin and Padding
    </Box>
  );
};

export const TypeTest = () => (
  <section>
    <h1 style={_typeTest.brand}>Brand 1 Header</h1>
    <h1 style={_typeTest.h1}>H1 Header</h1>
    <h2 style={_typeTest.h2}>H2 Header</h2>
    <h3 style={_typeTest.h3}>H3 Header</h3>
    <h4 style={_typeTest.h4}>H4 Header</h4>
    <h5 style={_typeTest.h5}>H5 Header</h5>
    <p style={_typeTest.body}>
      <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={_typeTest.body2}>
      <strong>Body 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={_typeTest.small}>
      <strong>Small 1: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <p style={_typeTest.small2}>
      <strong>Small 2: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde ennui.
      Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth kitsch next
      level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris sustainable.
      Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw denim, thundercats
      salvia intelligentsia jean shorts officia. Heirloom craft beer put a bird on it occaecat
    </p>
    <hr />

    <h3 style={_typeTest.h3}>Variants</h3>

    <span css={[_typeTest.body, _typeTest.variant.button]}>Button Text</span>
    <br />
    <span css={[_typeTest.body, _typeTest.variant.caps]}>Caps Text</span>
    <br />
    <label css={[_typeTest.body, _typeTest.variant.label]}>Label Text</label>
    <br />
    <span css={[_typeTest.body, _typeTest.variant.hint]}>Hint Text</span>
    <br />
    <span css={[_typeTest.body, _typeTest.variant.error]}>Error Text</span>
    <br />
    <a href="#" css={[_typeTest.body, _typeTest.variant.link]}>
      Link Text
    </a>
    <br />
    <span css={[_typeTest.body, _typeTest.variant.inverse, inverseStyle]}>Inverse Text</span>
    <br />
    <span css={[_typeTest.body, _typeTest.variant.mono]}>Mono Text</span>
  </section>
);
