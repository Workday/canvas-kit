import React from 'react';

import {type, typeColors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text as="p" fontSize={14} fontWeight="regular" fontFamily="monospace">
      Text styled using style props
    </Text>
    <Text as="p" {...type.levels.subtext.large}>
      Text styled using type token level
    </Text>
    <Box {...type.levels.subtext.large} color={typeColors.hint}>
      <Text>Text with inherited styles</Text>
    </Box>
  </Box>
);
