import React from 'react';

import {type, typeColors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text as="p" fontSize={14} fontWeight="regular" fontFamily="monospace">
      Text with props passed
    </Text>
    <Text as="p" {...type.levels.subtext.large}>
      Text with type token passed
    </Text>
    <Box {...type.levels.subtext.large} color={typeColors.hint} marginBottom="s">
      <Text>Text with inherenced styles</Text>
    </Box>
    <Text as="p" typeLevel="body.small">
      Small Body level text
    </Text>
  </Box>
);
