import React from 'react';

import {type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react';
import {Text} from '@workday/canvas-kit-preview-react/text';

const TextWrapper = props => <Box marginBottom="s" {...props} />;

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text as="p" fontSize={14} fontWeight="regular" fontFamily="monospace">
      Text with props passed
    </Text>
    <Text as="p" {...type.levels.subtext.large}>
      Text with type token passed
    </Text>
    <Box {...type.levels.subtext.large} color="hint" marginBottom="s">
      <Text>Text with inherenced styles</Text>
    </Box>
    <Text as="p" level="body" size="small">
      Small Body level text
    </Text>
  </Box>
);
