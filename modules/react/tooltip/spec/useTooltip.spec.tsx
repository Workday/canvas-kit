import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import {useTooltip, TooltipContainer} from '..';

const TooltipWithHook = ({type}: {type: 'label' | 'describe' | 'description'}) => {
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
  jest.useFakeTimers();
  it('should add aria attributes to correlate the target and the tooltip', () => {
    render(<TooltipWithHook type="describe" />);

    const target = screen.getByText('Hover');

    fireEvent.mouseOver(target); // assign the ID to the tooltip
    jest.advanceTimersByTime(300); // advance the timer by the amount of delay time

    expect(screen.getByText('Hover')).toHaveAttribute('aria-describedby', 'originalDescribedById');
  });
  jest.clearAllTimers();
});

describe('useTooltip with type="description"', () => {
  jest.useFakeTimers();
  it('should add aria attributes to correlate the target and the tooltip', () => {
    render(<TooltipWithHook type="description" />);

    const target = screen.getByText('Hover');

    fireEvent.mouseOver(target); // assign the ID to the tooltip
    jest.advanceTimersByTime(300); // advance the timer by the amount of delay time

    expect(screen.getByText('Hover')).toHaveAttribute('aria-description', 'Hover');
  });
  jest.clearAllTimers();
});
