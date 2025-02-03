import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import * as React from 'react';
import {act} from 'react-dom/test-utils';

import {TooltipContainer, useTooltip} from '..';

const TooltipWithHook = ({type}: {type: 'label' | 'describe'}) => {
  const {targetProps, tooltipProps} = useTooltip({type, titleText: 'Hover'});

  return (
    <>
      <button {...targetProps} aria-describedby="originalDescribedById">
        Hover
      </button>
      <TooltipContainer {...tooltipProps}>Tooltip Content</TooltipContainer>
    </>
  );
};

describe('useTooltip with type="label"', () => {
  it('should add aria-label', () => {
    render(<TooltipWithHook type="label" />);

    const target = screen.getByText('Hover');

    expect(target).toHaveAttribute('aria-label', 'Hover');
  });

  it('should keep original aria-describedby of target', () => {
    render(<TooltipWithHook type="label" />);

    const target = screen.getByText('Hover');

    expect(target).toHaveAttribute('aria-describedby', 'originalDescribedById');
  });
});

describe('useTooltip with type="describe"', () => {
  it('should add aria attributes to correlate the target and the tooltip', () => {
    vi.useFakeTimers();
    render(<TooltipWithHook type="describe" />);

    const target = screen.getByText('Hover');
    const tooltip = screen.getByRole('tooltip');

    fireEvent.mouseOver(target); // assign the ID to the tooltip
    act(() => {
      vi.advanceTimersByTime(300); // advance the timer by the amount of delay time
    });

    expect(tooltip).toHaveAttribute('id');

    vi.useRealTimers();
  });
});
