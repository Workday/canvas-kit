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

export const TertiaryDeprecated = () => (
  <>
    <p>Default | DSR ON</p>
    <Flex cs={parentContainerStyles}>
      <TertiaryButton>Tertiary</TertiaryButton>
      <TertiaryButton icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
    <p>Default | DSR OFF</p>
    <Flex cs={parentContainerStyles}>
      <TertiaryButton data-dsr={false}>Tertiary</TertiaryButton>
      <TertiaryButton data-dsr={false} icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr={false} icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton data-dsr={false} icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
    <p>Inverse | DSR ON</p>
    <Flex cs={parentContainerInverseStyles}>
      <TertiaryButton variant="inverse">Tertiary</TertiaryButton>
      <TertiaryButton variant="inverse" icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton variant="inverse" icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton variant="inverse" icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
    <p>Inverse | DSR OFF</p>
    <Flex cs={parentContainerInverseStyles}>
      <TertiaryButton data-dsr={false} variant="inverse">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr={false} variant="inverse" icon={plusIcon} iconPosition="start">
        Tertiary
      </TertiaryButton>
      <TertiaryButton data-dsr={false} variant="inverse" icon={caretDownIcon} iconPosition="end">
        Tertiary
      </TertiaryButton>
      <Tooltip title="Related Actions">
        <TertiaryButton data-dsr={false} variant="inverse" icon={relatedActionsVerticalIcon} />
      </Tooltip>
    </Flex>
  </>
);
