import React from 'react';

import {type, typeColors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const styles = {
  changedFont: createStyles({
    fontFamily: system.fontFamily.mono,
    fontSize: system.fontSize.subtext.large,
    fontWeight: system.fontWeight.normal,
  }),
  usedType: createStyles({
    ...system.type.subtext.large,
  }),
  changedColor: createStyles({
    ...system.type.subtext.large,
    color: system.color.text.hint,
  }),
};

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text as="p" cs={styles.changedFont}>
      Text styled using style props
    </Text>
    <Text as="p" cs={styles.usedType}>
      Text styled using type token level
    </Text>
    <Box cs={styles.changedColor}>
      <Text>Text with inherited styles</Text>
    </Box>
  </Box>
);
