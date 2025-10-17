import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
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
