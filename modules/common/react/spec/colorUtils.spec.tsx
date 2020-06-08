import {colors} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '../index';

describe('Color Utils methods', () => {
  describe('pickForegroundColor', () => {
    it('should default to black if luminicance is light', () => {
      expect(pickForegroundColor('#ffffff')).toEqual(colors.blackPepper600);
      expect(pickForegroundColor('#eee')).toEqual(colors.blackPepper600);
      expect(pickForegroundColor('orange')).toEqual(colors.blackPepper600);
    });
    it('should default to white if luminicance is dark', () => {
      expect(pickForegroundColor('#555')).toEqual(colors.frenchVanilla100);
      expect(pickForegroundColor('#000000')).toEqual(colors.frenchVanilla100);
      expect(pickForegroundColor('black')).toEqual(colors.frenchVanilla100);
    });
    it('should use lightColor if luminicance is dark', () => {
      expect(pickForegroundColor('black', colors.blueberry600, colors.blueberry100)).toEqual(
        colors.blueberry100
      );
    });
    it('should use darkColor if luminicance is dark', () => {
      expect(pickForegroundColor('white', colors.blueberry600, colors.blueberry100)).toEqual(
        colors.blueberry600
      );
    });
    it('should always favor lightColor if above 4.5', () => {
      // #767676 has contrast of 4.54 against white and 4.62 against black
      // should favor light even though black is higher
      expect(pickForegroundColor('#555')).toEqual(colors.frenchVanilla100);
    });
    it('should favor higher contrast if both below 4.5', () => {
      // both colors have low contrast. should favor the higher one
      expect(pickForegroundColor('white', '#eee', '#ddd')).toEqual('#ddd');
      expect(pickForegroundColor('white', '#ddd', '#eee')).toEqual('#ddd');
    });
  });
});
