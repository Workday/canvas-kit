import * as React from 'react';
import innerText from 'react-innertext';

import {getTransformFromPlacement, Popper, Placement} from '@workday/canvas-kit-react-common';

import {TooltipContainer} from './TooltipContainer';
import {useTooltip} from './useTooltip';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Determines the tooltip type for accessibility.
   * * `label`: Sets the accessible name for the wrapped element. Use for icons or if tooltip `title` prop is the same as the text content of the wrapped element. E.g. IconButtons or Ellipsis tooltips.
   * * `describe`: Sets `aria-describedby` of the wrapped element. Use if the tooltip has additional information about the target.
   *
   * **Note**: Assistive technology settings may ignore "aria-describedby". Consider alternative
   * way to inform a user of additional important information.
   * @default 'label'
   */
  type?: 'label' | 'describe';
  /**
   * If present, this will switch the Tooltip into a simpler to use mode where the
   * Tooltip component can wrap a target and `title` is the contents of the tooltip.
   * This should be a string in most cases. HTML is supported, but only text is understood
   * by assistive technology. This is true for both `label` and `describe` modes.
   */
  title: React.ReactNode;
  /**
   * Sets the placement preference used by PopperJS.
   * @default 'top'
   */
  placement?: Placement;
  /**
   * The contents of the target for the Tooltip.
   *
   * **Note:** This **must** be an Element, StyledComponent or any
   * other component that forwards extra props to an Element. Tooltip works running
   * `React.cloneElement` on the children and adds extra properties like aria attributes and event
   * handlers. This is currently a limitation of the Tooltip component. Functionality will not work
   * if this condition isn't met
   */
  children: React.ReactNode;
}

export const Tooltip = ({
  type = 'label',
  title,
  placement = 'top',
  children,
  ...elemProps
}: TooltipProps) => {
  const titleText = innerText(title);
  const {targetProps, popperProps, tooltipProps} = useTooltip({type, titleText});

  return (
    <React.Fragment>
      {React.cloneElement(children as React.ReactElement<any>, targetProps)}
      <Popper placement={placement} {...popperProps}>
        {({placement}) => {
          const transformOrigin = getTransformFromPlacement(placement);
          return (
            <TooltipContainer transformOrigin={transformOrigin} {...elemProps} {...tooltipProps}>
              {title}
            </TooltipContainer>
          );
        }}
      </Popper>
    </React.Fragment>
  );
};
