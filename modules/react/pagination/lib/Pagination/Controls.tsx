import * as React from 'react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {
  chevronLeftSmallIcon,
  chevron2xLeftSmallIcon,
  chevronRightSmallIcon,
  chevron2xRightSmallIcon,
} from '@workday/canvas-system-icons-web';

import {Flex} from '@workday/canvas-kit-react/layout';
import {useRTL} from './common/utils/useRTL';
import {PaginationContext} from './usePaginationModel';

export interface ControlButtonProps extends ExtractProps<typeof TertiaryButton, never> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PaginationControlsProps {}

export const PaginationControls = createComponent('div')({
  displayName: 'Pagination.Controls',
  Component(elemProps: PaginationControlsProps, ref, Element) {
    return <Flex ref={ref} as={Element} gap="xxxs" alignItems="center" {...elemProps} />;
  },
});

export const JumpToFirstButton = createComponent('button')({
  displayName: 'Pagination.JumpToFirstButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
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
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={icon}
        onClick={handleClick}
        {...restProps}
      />
    );
  },
});

export const StepToPreviousButton = createComponent('button')({
  displayName: 'Pagination.StepToPreviousButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
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
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={icon}
        onClick={handleClick}
        {...restProps}
      />
    );
  },
});

export const StepToNextButton = createComponent('button')({
  displayName: 'Pagination.StepToNextButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
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
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={icon}
        onClick={handleClick}
        {...restProps}
      />
    );
  },
});

export const JumpToLastButton = createComponent('button')({
  displayName: 'Paganation.JumpToLastButton',
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
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
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={icon}
        onClick={handleClick}
        {...restProps}
      />
    );
  },
});
