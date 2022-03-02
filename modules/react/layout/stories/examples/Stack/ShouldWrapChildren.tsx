import * as React from 'react';
import {Stack, Box} from '@workday/canvas-kit-react/layout';
import {SecondaryButtonNew} from '@workday/canvas-kit-react/button';
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
      <SecondaryButtonNew aria-label="go to previous page" icon={arrowLeftIcon} />
      <SecondaryButtonNew aria-label="go to next page" icon={arrowRightIcon} />
      <SecondaryButtonNew aria-label="reload current page" icon={resetIcon} />
      <SecondaryButtonNew aria-label="go to home page" icon={homeIcon} />
      <Box marginInlineStart="m">
        <SecondaryButtonNew aria-label="share current page" icon={exportIcon} />
      </Box>
      <SecondaryButtonNew aria-label="bookmark current page" icon={starIcon} />
      <SecondaryButtonNew aria-label="view related actions" icon={relatedActionsIcon} />
    </Stack>
  );
};
