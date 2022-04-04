import * as React from 'react';
import {Stack, Box} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  arrowLeftIcon,
  arrowRightIcon,
  exportIcon,
  homeIcon,
  relatedActionsIcon,
  resetIcon,
  starIcon,
} from '@workday/canvas-system-icons-web';

export const ShouldWrapChildren = () => {
  return (
    <Stack border="solid 2px" shouldWrapChildren spacing="xxxs" padding="xxxs">
      <SecondaryButton aria-label="go to previous page" icon={arrowLeftIcon} />
      <SecondaryButton aria-label="go to next page" icon={arrowRightIcon} />
      <SecondaryButton aria-label="reload current page" icon={resetIcon} />
      <SecondaryButton aria-label="go to home page" icon={homeIcon} />
      <Box marginInlineStart="m">
        <SecondaryButton aria-label="share current page" icon={exportIcon} />
      </Box>
      <SecondaryButton aria-label="bookmark current page" icon={starIcon} />
      <SecondaryButton aria-label="view related actions" icon={relatedActionsIcon} />
    </Stack>
  );
};
