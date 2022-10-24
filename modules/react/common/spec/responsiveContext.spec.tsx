import React from 'react';
import useResizeObserver from 'use-resize-observer';
import {Box, Flex} from '../../layout';
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
    const containerWidth = 800;

    const ResponsiveContextTest = () => {
      const ref = React.useRef(null);

      const Header = ({children, ...props}) => {
        const {isMedium} = useResponsiveContext();
        return (
          <Box as="p" {...props}>
            {children}
            {isMedium ? 'true' : 'false'}
          </Box>
        );
      };

      return (
        <ResponsiveContextProvider width={containerWidth}>
          <Box ref={ref}>
            <Flex>
              <Header>True or False</Header>
            </Flex>
          </Box>
        </ResponsiveContextProvider>
      );
    };

    expect(ResponsiveContextTest).toBe();
  });
});
