import {isWithinBreakpoint} from '../lib/responsive/responsiveContext';
import {breakpoints} from '../lib/theming';
const context = describe;

describe('isWithinBreakpoint', () => {
  context('When only providing a min', () => {
    it('should return false when a width is under the breakpoint', () => {
      const withinBreakpoint = isWithinBreakpoint(500, breakpoints.m);

      expect(withinBreakpoint).toBe(false);
    });
    it('should return true when a width is over the breakpoint', () => {
      const withinBreakpoint = isWithinBreakpoint(1000, breakpoints.m);

      expect(withinBreakpoint).toBe(true);
    });
    it('should return false when a negative width is provided', () => {
      const withinBreakpoint = isWithinBreakpoint(-100, breakpoints.m);

      expect(withinBreakpoint).toBe(false);
    });
  });
  context('When providing a min and max', () => {
    it('should return false when a width is under the breakpoint range', () => {
      const withinBreakpoint = isWithinBreakpoint(500, breakpoints.m, breakpoints.l);

      expect(withinBreakpoint).toBe(false);
    });
    it('should return true when a width is within the breakpoint range', () => {
      const withinBreakpoint = isWithinBreakpoint(1000, breakpoints.m, breakpoints.l);

      expect(withinBreakpoint).toBe(true);
    });
    it('should return false when a width is outside the breakpoint range', () => {
      const withinBreakpoint = isWithinBreakpoint(200, breakpoints.m, breakpoints.l);

      expect(withinBreakpoint).toBe(false);
    });
  });
});
