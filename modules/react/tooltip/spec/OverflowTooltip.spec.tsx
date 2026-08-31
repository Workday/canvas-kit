import {fireEvent, render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import {OverflowTooltip, findEllipsisElement, findOverflowElement} from '..';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('findEllipsisElement', () => {
  it('returns null if element has no children attribute [SVG in IE 11]', () => {
    const el = document.createElement('svg');
    expect(findEllipsisElement(el)).toBeNull();
  });
});

describe('findOverflowElement', () => {
  it('returns null if element has no children attribute [SVG in IE 11]', () => {
    const el = document.createElement('svg');
    expect(findOverflowElement(el)).toBeNull();
  });
});

describe('OverflowTooltip', () => {
  const markAsOverflowed = (target: HTMLElement) => {
    Object.defineProperty(target, 'scrollWidth', {configurable: true, value: 200});
    Object.defineProperty(target, 'clientWidth', {configurable: true, value: 100});
  };

  it('should render the tooltip after the delay when "showDelay" is passed', () => {
    render(
      <OverflowTooltip showDelay={1000}>
        <span style={{overflow: 'hidden'}}>Overflowed Text</span>
      </OverflowTooltip>
    );

    const target = screen.getByText('Overflowed Text');
    markAsOverflowed(target);

    fireEvent.mouseEnter(target);

    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();

    act(() => {
      vi.advanceTimersByTime(700);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('should hide the tooltip after the delay when "hideDelay" is passed', () => {
    render(
      <OverflowTooltip hideDelay={300}>
        <span style={{overflow: 'hidden'}}>Overflowed Text</span>
      </OverflowTooltip>
    );

    const target = screen.getByText('Overflowed Text');
    markAsOverflowed(target);

    fireEvent.mouseEnter(target);

    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.mouseLeave(target);

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});
