import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {SystemIcon, SystemIconCircle} from '../../index';

const styleOverrides = {
  container: createStyles({
    flexDirection: 'row',
    alignItems: 'center',
    gap: system.gap.md,
  }),
  systemIconStyles: createStyles({
    background: system.color.accent.danger,
  }),
};

export const Overview = () => (
  <Flex cs={styleOverrides.container}>
    <SystemIcon icon={imageIcon} cs={styleOverrides.systemIconStyles} />
    <SystemIconCircle icon={imageIcon} />
  </Flex>
);
