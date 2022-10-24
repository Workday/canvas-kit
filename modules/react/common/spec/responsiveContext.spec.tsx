import React from 'react';
import useResizeObserver from 'use-resize-observer';
import {Box} from '../../layout';
import {
  useResponsiveContext,
  isWithinBreakpoint,
  ResponsiveContextProvider,
} from '../lib/responsive/responsiveContext';
import {breakpoints} from '../lib/theming';
const context = describe;

describe('Within Breakpoint function', () => {
  context('when using the isWithinBreakpoint function', () => {
    it('should return true if width is within breakpoints', () => {
      const withinBreakpoint = isWithinBreakpoint(1000, breakpoints.m, breakpoints.l);

      expect(withinBreakpoint).toBe(true);
    });

    it('should return false if width is not within breakpoints', () => {
      const withinBreakpoint = isWithinBreakpoint(500, breakpoints.m, breakpoints.l);

      expect(withinBreakpoint).toBe(false);
    });
  });
});

describe('Responsive Context Hook', () => {
  it('should return true if width is within breakpoint', () => {
    const {isMedium} = useResponsiveContext();
    const width = 800;
    const expected = () => {
      if (isMedium) {
        return true;
      }
    };
    expect();
  });
});
