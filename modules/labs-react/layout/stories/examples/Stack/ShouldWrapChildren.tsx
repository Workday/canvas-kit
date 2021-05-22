import * as React from 'react';
import {Stack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {IconButton} from '@workday/canvas-kit-react/button';
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
      <IconButton aria-label="go to previous page" icon={arrowLeftIcon} variant="squareFilled" />
      <IconButton aria-label="go to next page" icon={arrowRightIcon} variant="squareFilled" />
      <IconButton aria-label="reload current page" icon={resetIcon} variant="squareFilled" />
      <IconButton aria-label="go to home page" icon={homeIcon} variant="squareFilled" />
      <Box marginInlineStart="m">
        <IconButton aria-label="share current page" icon={exportIcon} variant="squareFilled" />
      </Box>
      <IconButton aria-label="bookmark current page" icon={starIcon} variant="squareFilled" />
      <IconButton
        aria-label="view related actions"
        icon={relatedActionsIcon}
        variant="squareFilled"
      />
    </Stack>
  );
};
