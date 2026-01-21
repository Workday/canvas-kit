import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {
  caretDownIcon,
  plusIcon,
  relatedActionsVerticalIcon,
} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.md,
});

const customActionTheme = createStyles({
  [brand.action.base]: 'teal',
  [brand.action.accent]: 'white',
  [brand.action.dark]: 'hsla(180, 100%, 20%)',
  [brand.action.darkest]: 'hsla(180, 100%, 16%)',
});

export const ThemeOverrides = () => (
  <div>
    <Heading size="medium" as="h3">
      Override Primary Color Via Canvas Provider
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
    <Heading size="medium" as="h3">
      Override Action Color Via CSS Action Token
    </Heading>
    <div className={customActionTheme}>
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
    </div>
  </div>
);
