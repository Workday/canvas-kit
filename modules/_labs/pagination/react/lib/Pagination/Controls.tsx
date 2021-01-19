import * as React from 'react';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {
  chevronLeftSmallIcon,
  chevron2xLeftSmallIcon,
  chevronRightSmallIcon,
  chevron2xRightSmallIcon,
} from '@workday/canvas-system-icons-web';

import {PaginationModel} from './types';
import {HStack} from './common/Stack';
import {useRTL} from './common/utils/useRTL';

export type ControlButtonProps = PaginationModel & IconButtonProps;

export type ControlsProps = React.HTMLAttributes<HTMLDivElement>;

export const Controls = ({children, ...elemProps}: ControlsProps) => {
  return (
    <HStack spacing="xxxs" alignItems="center" {...elemProps}>
      {children}
    </HStack>
  );
};

export const JumpToFirstButton = ({
  'aria-label': ariaLabel,
  state,
  events,
  onClick,
  ...restProps
}: ControlButtonProps) => {
  const isDisabled = state.currentPage <= state.firstPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    events.setCurrentPage(state.firstPage);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevron2xRightSmallIcon : chevron2xLeftSmallIcon;
  return (
    <IconButton
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const StepToPreviousButton = ({
  'aria-label': ariaLabel,
  onClick,
  state,
  events,
  ...restProps
}: ControlButtonProps) => {
  const isDisabled = state.currentPage <= state.firstPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    events.setCurrentPage(state.currentPage - 1);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronRightSmallIcon : chevronLeftSmallIcon;
  return (
    <IconButton
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const StepToNextButton = ({
  'aria-label': ariaLabel,
  onClick,
  state,
  events,
  ...restProps
}: ControlButtonProps) => {
  const isDisabled = state.currentPage >= state.lastPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    events.setCurrentPage(state.currentPage + 1);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronLeftSmallIcon : chevronRightSmallIcon;
  return (
    <IconButton
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const JumpToLastButton = ({
  'aria-label': ariaLabel,
  onClick,
  state,
  events,
  ...restProps
}: ControlButtonProps) => {
  const isDisabled = state.currentPage >= state.lastPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    events.setCurrentPage(state.lastPage);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevron2xLeftSmallIcon : chevron2xRightSmallIcon;
  return (
    <IconButton
      aria-disabled={isDisabled || undefined}
      aria-label={ariaLabel}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};
