/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import {spacing} from '@workday/canvas-kit-react-core';
import type, {space} from '..';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Core',
});

export const TypeAndSpace = () => {
  const inverseStyle = {
    display: 'inline-block',
    background: '#667380',
    padding: '2px 8px',
    borderRadius: '3px',
  };

  const Box = styled('div')(
    {
      border: '1px solid #eee',
    },
    space
  );

  return (
    <div>
      <section>
        <h1 style={type.brand1}>Brand 1 Header</h1>
        <h2 style={type.brand2}>Brand 2 header</h2>
        <h1 style={type.h1}>H1 Header</h1>
        <h2 style={type.h2}>H2 Header</h2>
        <h3 style={type.h3}>H3 Header</h3>
        <h4 style={type.h4}>H4 Header</h4>
        <h5 style={type.h5}>H5 Header</h5>
      </section>
      <section>
        <h2 style={type.h2}>Body Text</h2>
        <p style={type.body}>
          <strong>Body: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
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
        <p style={type.small}>
          <strong>Small: </strong> Tacos chartreuse raclette single-origin coffee ethical tilde
          ennui. Magna asymmetrical church-key farm-to-table dreamcatcher nisi iceland photo booth
          kitsch next level pop-up banh mi quinoa exercitation hella. Raw denim organic enim laboris
          sustainable. Polaroid occupy typewriter distillery. Kinfolk nisi man braid try-hard raw
          denim, thundercats salvia intelligentsia jean shorts officia. Heirloom craft beer put a
          bird on it occaecat
        </p>
      </section>
      <section>
        <h2 style={type.h2}>Text Variants</h2>
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
      <section>
        <h2 style={type.h2}>Spacing</h2>
        <Box m={spacing.m} p={spacing.m}>
          medium margin and padding
        </Box>
        <Box mx={spacing.m} my={spacing.m} px={spacing.m} py={spacing.m}>
          medium margin (x, y) and padding (x, y)
        </Box>
        <Box
          mt={spacing.m}
          mr={spacing.m}
          mb={spacing.m}
          ml={spacing.m}
          pt={spacing.m}
          pr={spacing.m}
          pb={spacing.m}
          pl={spacing.m}
        >
          medium margin (top, right,left, bottom) and padding (top, right,left, bottom)
        </Box>
      </section>
    </div>
  );
};
