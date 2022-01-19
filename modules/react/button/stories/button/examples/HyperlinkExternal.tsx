import React from 'react';

import {Hyperlink} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {extLinkIcon} from '@workday/canvas-system-icons-web';

export const LinkExternal = () => (
  <HStack
    as={Hyperlink}
    target="_blank"
    href="http://workday.com"
    rel="noreferrer"
    display="inline-flex"
    alignItems="center"
    spacing="xxxs"
  >
    <span>External HyperLink</span>
    <SystemIcon icon={extLinkIcon} aria-label="Opens link in new window" size={16} />
  </HStack>
);
