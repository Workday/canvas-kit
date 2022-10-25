import {useResponsiveContainerStyles} from '../lib/responsive/useResponsiveContainerStyles';
import {breakpoints} from '../lib/theming';
const context = describe;

describe('useResponsiveContainerStyles', () => {
  context('When the hook receives no styles', () => {
    it('should return an empty object', () => {
      const width = 768;
      const responsiveStyles = useResponsiveContainerStyles({}, width);

      const result = {};

      expect(responsiveStyles).toStrictEqual(result);
    });
  });
  context('When the hook receives only base styles', () => {
    it('should return an object of just base styles', () => {
      const width = 768;
      const responsiveStyles = useResponsiveContainerStyles(
        {
          test: {
            backgroundColor: 'berrySmoothie100',
          },
        },
        width
      );

      const result = {
        test: {
          backgroundColor: 'berrySmoothie100',
        },
      };

      expect(responsiveStyles).toStrictEqual(result);
    });
  });
  context('When the hook receives only responsive styles', () => {
    it('should return an object of just base styles', () => {
      const width = 768;
      const responsiveStyles = useResponsiveContainerStyles(
        {
          m: {
            backgroundColor: 'berrySmoothie100',
          },
        },
        width
      );

      const result = {
        m: {
          backgroundColor: 'berrySmoothie100',
        },
      };

      expect(responsiveStyles).toStrictEqual(result);
    });
  });
  context('When the hook receives base and responsive styles', () => {
    it('should return an object including both base and responsive styles', () => {
      const width = 768;
      const responsiveStyles = useResponsiveContainerStyles(
        {
          flex: {
            backgroundColor: 'blackPepper100',
          },
          m: {
            backgroundColor: 'berrySmoothie100',
          },
        },
        width
      );

      const result = {
        flex: {
          backgroundColor: 'blackPepper100',
        },
        m: {
          backgroundColor: 'berrySmoothie100',
        },
      };

      expect(responsiveStyles).toStrictEqual(result);
    });
  });
  context('When the hook receives base and nested responsive styles', () => {
    it('should return an object including the responsive styles for the given size of width', () => {
      const width = 768;
      const responsiveStyles = useResponsiveContainerStyles(
        {
          flex: {
            backgroundColor: 'blackPepper100',
            m: {
              backgroundColor: 'berrySmoothie100',
            },
          },
        },
        width
      );

      const result = {
        flex: {
          backgroundColor: 'berrySmoothie100',
        },
      };

      expect(responsiveStyles).toStrictEqual(result);
    });
  });
});
