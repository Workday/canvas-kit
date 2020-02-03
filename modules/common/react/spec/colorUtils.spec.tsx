import {colors} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '../index';

describe('Color Utils methods', () => {
  describe('pickForegroundColor', () => {
    it('should use black if luminicance is light', () => {
      expect(pickForegroundColor('#ffffff')).toEqual(colors.blackPepper600);
      expect(pickForegroundColor('#eee')).toEqual(colors.blackPepper600);
    });
    it('should use white if luminicance is dark', () => {
      expect(pickForegroundColor('#e6e')).toEqual(colors.frenchVanilla100);
      expect(pickForegroundColor('#000000')).toEqual(colors.frenchVanilla100);
    });
  });
});
