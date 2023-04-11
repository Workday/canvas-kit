import {colors} from '@workday/canvas-kit-react/tokens';
import {getColor, pickForegroundColor} from '../index';

describe('Color Utils methods', () => {
  describe('pickForegroundColor', () => {
    it('should use lightColor if luminicance is dark', () => {
      expect(pickForegroundColor('black', colors.blueberry600, colors.blueberry100)).toEqual(
        colors.blueberry100
      );
    });
    it('should use lightColor if luminicance is dark with color token as string', () => {
      expect(pickForegroundColor('black', 'blueberry600', 'blueberry100')).toEqual(
        colors.blueberry100
      );
    });
    it('should use darkColor if luminicance is light', () => {
      expect(pickForegroundColor('white', colors.blueberry600, colors.blueberry100)).toEqual(
        colors.blueberry600
      );
      expect(pickForegroundColor('white', colors.blueberry600)).toEqual(colors.blueberry600);
    });
    it('should always favor lightColor if above 4.5', () => {
      // #767676 has contrast of 4.54 against white and 4.62 against black
      // should favor light even though black is higher
      expect(pickForegroundColor('#555', colors.blackPepper600, colors.frenchVanilla100)).toEqual(
        colors.frenchVanilla100
      );
    });
    it('should default to first valid color in priority list', () => {
      expect(pickForegroundColor('#000')).toEqual(colors.frenchVanilla100);
      expect(pickForegroundColor('#fff')).toEqual(colors.blackPepper300);
      expect(pickForegroundColor('#aaa')).toEqual(colors.blackPepper400);
      expect(pickForegroundColor('#999')).toEqual(colors.blackPepper500);
      expect(pickForegroundColor('#777')).toEqual(colors.blackPepper600);
    });
  });
  describe('getColor', () => {
    it('should return as-is if value is not in colors', () => {
      expect(getColor('newColor')).toEqual('newColor');
    });

    it('should return correct hex value for color token as string', () => {
      expect(getColor('peach300')).toEqual('#ff957a');
    });

    it('should return correct hex value for color token', () => {
      expect(getColor(colors.peach300)).toEqual('#ff957a');
    });
  });
});
