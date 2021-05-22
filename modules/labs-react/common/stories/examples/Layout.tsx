import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Layout = () => (
  <Box
    as="blockquote"
    cite="https://www.poetryfoundation.org/poems/45477/song-of-myself-1892-version"
    display="block"
    maxWidth={250}
  >
    <p>
      "My tongue, every atom of my blood, form’d from this soil, this air, <br />
      Born here of parents born here from parents the same, and their parents the same, <br />
      I, now thirty-seven years old in perfect health begin, <br />
      Hoping to cease not till death." <br />- Walt Whitman, Song of Myself
    </p>
  </Box>
);
