import React from 'react';

import {type} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react';
import {Text} from '@workday/canvas-kit-preview-react/type';

const TextWrapper = props => <Box marginBottom="s" {...props} />;

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <TextWrapper>
      <Text fontSize={14} fontWeight="regular" fontFamily="monospace">
        Text with props passed
      </Text>
    </TextWrapper>
    <TextWrapper>
      <Text {...type.levels.subtext.large}>Text with type token passed</Text>
    </TextWrapper>
    <TextWrapper {...type.levels.subtext.large} color="hint">
      <Text>Text with inherenced styles</Text>
    </TextWrapper>
    <TextWrapper>
      <Text level="body" size="small">
        Small Body level text
      </Text>
    </TextWrapper>
    <TextWrapper maxWidth="215px">
      <Text as="p" isTruncated>
        Truncated text with ellipsis on its end.
      </Text>
    </TextWrapper>
  </Box>
);
