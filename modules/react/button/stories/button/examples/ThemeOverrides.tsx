import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const ThemeOverrides = () => (
  <div>
    <Heading size="medium" as="h3">
      Override Primary Color
    </Heading>
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            action: {
              main: 'teal',
            },
          },
        },
      }}
    >
      <Flex cs={parentContainerStyles}>
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton icon={plusIcon} iconPosition="start">
          Primary
        </PrimaryButton>
        <PrimaryButton icon={caretDownIcon} iconPosition="end">
          Primary
        </PrimaryButton>
        <PrimaryButton aria-label="Related Actions" icon={relatedActionsVerticalIcon} />
      </Flex>
    </CanvasProvider>
    <Heading size="medium" as="h3">
      Override Action Color
    </Heading>
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: 'navy',
            },
          },
        },
      }}
    >
      <Flex cs={parentContainerStyles}>
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton icon={plusIcon} iconPosition="start">
          Primary
        </PrimaryButton>
        <PrimaryButton icon={caretDownIcon} iconPosition="end">
          Primary
        </PrimaryButton>
        <PrimaryButton aria-label="Related Actions" icon={relatedActionsVerticalIcon} />
      </Flex>
    </CanvasProvider>
  </div>
);
