import * as React from 'react';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {
  chevronLeftSmallIcon,
  chevron2xLeftSmallIcon,
  chevronRightSmallIcon,
  chevron2xRightSmallIcon,
} from '@workday/canvas-system-icons-web';

import {PaginationModel} from './types';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useRTL} from './common/utils/useRTL';

export type ControlButtonProps = TertiaryButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    model: PaginationModel;
  };

export type ControlsProps = React.HTMLAttributes<HTMLDivElement>;

export const Controls = ({children, ...elemProps}: ControlsProps) => {
  return (
    <Flex gap="xxxs" alignItems="center" {...elemProps}>
      {children}
    </Flex>
  );
};

export const JumpToFirstButton = ({model, onClick, ...restProps}: ControlButtonProps) => {
  const isDisabled = model.state.currentPage <= model.state.firstPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    model.events.setCurrentPage(model.state.firstPage);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevron2xRightSmallIcon : chevron2xLeftSmallIcon;
  return (
    <TertiaryButton
      aria-disabled={isDisabled || undefined}
      size="small"
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const StepToPreviousButton = ({onClick, model, ...restProps}: ControlButtonProps) => {
  const isDisabled = model.state.currentPage <= model.state.firstPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    model.events.setCurrentPage(model.state.currentPage - 1);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronRightSmallIcon : chevronLeftSmallIcon;
  return (
    <TertiaryButton
      aria-disabled={isDisabled || undefined}
      size="small"
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const StepToNextButton = ({model, onClick, ...restProps}: ControlButtonProps) => {
  const isDisabled = model.state.currentPage >= model.state.lastPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    model.events.setCurrentPage(model.state.currentPage + 1);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronLeftSmallIcon : chevronRightSmallIcon;
  return (
    <TertiaryButton
      aria-disabled={isDisabled || undefined}
      size="small"
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};

export const JumpToLastButton = ({model, onClick, ...restProps}: ControlButtonProps) => {
  const isDisabled = model.state.currentPage >= model.state.lastPage;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled) {
      return;
    }
    onClick?.(e);
    model.events.setCurrentPage(model.state.lastPage);
  };
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevron2xLeftSmallIcon : chevron2xRightSmallIcon;
  return (
    <TertiaryButton
      aria-disabled={isDisabled || undefined}
      size="small"
      icon={icon}
      onClick={handleClick}
      {...restProps}
    />
  );
};
