import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {useTooltip, TooltipContainer} from '..';

const TooltipWithHook = ({type}: {type: 'label' | 'describe'}) => {
  const {targetProps, tooltipProps} = useTooltip({type, titleText: 'Hover'});

  return (
    <>
      <button {...targetProps}>Hover</button>
      <TooltipContainer {...tooltipProps}>Tooltip Content</TooltipContainer>
    </>
  );
};

describe('useTooltip with type="label"', () => {
  it('should add aria-label', () => {
    const {getByText} = render(<TooltipWithHook type="label" />);

    const target = getByText('Hover');

    expect(target).toHaveAttribute('aria-label', 'Hover');
  });
});

describe('useTooltip with type="describe"', () => {
  it('should add aria attributes to correlate the target and the tooltip', () => {
    const {getByText, getByRole} = render(<TooltipWithHook type="describe" />);

    const target = getByText('Hover');
    const tooltip = getByRole('tooltip');

    fireEvent.mouseOver(target); // assign the ID to the tooltip

    expect(tooltip).toHaveAttribute('id');
    const id = tooltip.getAttribute('id');
    expect(target).toHaveAttribute('aria-describedby', id);
  });
});
