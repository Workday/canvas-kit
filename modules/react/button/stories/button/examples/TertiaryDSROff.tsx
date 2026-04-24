import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {
  caretDownIcon,
  plusIcon,
  relatedActionsVerticalIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.md,
});

const parentContainerInverseStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.md,
  backgroundColor: system.color.surface.contrast.default,
});

export const TertiaryDSROff = () => (
  <>
    <Flex cs={parentContainerStyles}>
      <TertiaryButton data-dsr-off>Tertiary</TertiaryButton>
      <TertiaryButton data-dsr-off icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr-off icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton data-dsr-off icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
    <Flex cs={parentContainerInverseStyles}>
      <TertiaryButton data-dsr-off variant="inverse">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr-off variant="inverse" icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr-off variant="inverse" icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton data-dsr-off variant="inverse" icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
  </>
);
