import React from 'react';

import {IconButton} from '@workday/canvas-kit-react/button';
import {unorderedListIcon} from '@workday/canvas-system-icons-web';

export const MirroredIcon = () => (
  <>
    <IconButton icon={unorderedListIcon} aria-label="create a bulleted list" />
    <IconButton icon={unorderedListIcon} aria-label="create a bulleted list" shouldMirrorIcon />
  </>
);
