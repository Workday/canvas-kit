import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';

import SidePanel from '../lib/SidePanel';

window.resizeBy = (x: number, y: number) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('SidePanel', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });
  afterEach(() => {
    cb.mockReset();
  });

  it('should call "onToggleClick" when toggle button is clicked', () => {
    render(
      <SidePanel open={true} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('should call "onBreakpointChange" when below the breakpoint and side panel is open', () => {
    const mockFunction = jest.fn();
    render(
      <SidePanel breakpoint={1000} onBreakpointChange={mockFunction} open={true} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    window.resizeBy(10, 10);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should call onBreakpointChange when above the breakpoint and side panel is closed', () => {
    const mockFunction = jest.fn();
    render(
      <SidePanel breakpoint={800} onBreakpointChange={mockFunction} open={false} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    window.resizeBy(1000, 10);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should spread extra props to containing element', () => {
    const {container} = render(<SidePanel open={true} data-propspread="test" />);
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
