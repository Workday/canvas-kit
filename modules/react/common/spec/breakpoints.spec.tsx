import {BreakpointKey, up, down, between, only} from '../lib/theming';
const context = describe;

describe('Breakpoints', () => {
  context('when using the up function', () => {
    it('should return a media query for a given enum argument', () => {
      const mediaQuery = up(BreakpointKey.m);

      expect(mediaQuery).toBe('@media (min-width: 768px)');
    });

    it('should return a media query for a given string argument', () => {
      const mediaQuery = up('m');

      expect(mediaQuery).toBe('@media (min-width: 768px)');
    });
  });

  context('when using the down function', () => {
    it('should return a media query for a given enum argument', () => {
      const mediaQuery = down(BreakpointKey.s);

      expect(mediaQuery).toBe('@media (max-width: 767.5px)');
    });

    it('should return a media query for a given string argument', () => {
      const mediaQuery = down('m');

      expect(mediaQuery).toBe('@media (max-width: 1023.5px)');
    });

    context('when using the xl breakpoint', () => {
      it('should return a media query with a min-width of zero', () => {
        const mediaQuery = down(BreakpointKey.xl);

        expect(mediaQuery).toBe('@media (min-width: 0px)');
      });
    });
  });

  context('when using the between function', () => {
    it('should return a media query for given enum arguments', () => {
      const mediaQuery = between(BreakpointKey.m, BreakpointKey.l);

      expect(mediaQuery).toBe('@media (min-width: 768px) and (max-width: 1439.5px)');
    });

    it('should return a media query for given string arguments', () => {
      const mediaQuery = between('s', 'm');

      expect(mediaQuery).toBe('@media (min-width: 320px) and (max-width: 1023.5px)');
    });

    context('when using xl as the end breakpoint', () => {
      it('should only return a media query with only a min-width', () => {
        const mediaQuery = between('m', 'xl');

        expect(mediaQuery).toBe('@media (min-width: 768px)');
      });
    });
  });

  context('when using the only function', () => {
    it('should return a media query for a given enum argument', () => {
      const mediaQuery = only(BreakpointKey.m);

      expect(mediaQuery).toBe('@media (min-width: 768px) and (max-width: 1023.5px)');
    });

    it('should return a media query for a given string argument', () => {
      const mediaQuery = only('s');

      expect(mediaQuery).toBe('@media (min-width: 320px) and (max-width: 767.5px)');
    });

    context('when using the xl breakpoint', () => {
      it('should only return a media query with only a min-width', () => {
        const mediaQuery = only('xl');

        expect(mediaQuery).toBe('@media (min-width: 1440px)');
      });
    });
  });
});
