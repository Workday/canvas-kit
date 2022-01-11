import React from 'react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

export const InverseFilled = () => (
  <Flex
    display="inline-flex"
    backgroundColor={colors.blackPepper400}
    borderRadius="m"
    padding="xxs"
  >
    <IconButton icon={activityStreamIcon} aria-label="Activity Stream" variant="inverseFilled" />
  </Flex>
);
