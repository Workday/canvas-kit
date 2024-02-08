import {calc} from '../lib/calc';

describe('CSS Calc Functions', () => {
  describe('add', () => {
    it('should return a CSS calc addition string', () => {
      const augend = '--cnvs-sys-space-x1';
      const addend = '0.125rem';
      const expected = calc.add(augend, addend);

      expect(expected).toBe(`calc(var(${augend}) + ${addend})`);
    });
  });

  describe('subtract', () => {
    it('should return a CSS calc subtraction string', () => {
      const minuend = '--cnvs-sys-space-x1';
      const subtrahend = '0.125rem';
      const expected = calc.subtract(minuend, subtrahend);

      expect(expected).toBe(`calc(var(${minuend}) - ${subtrahend})`);
    });
  });

  describe('multiply', () => {
    it('should return a CSS calc multiplication string', () => {
      const multiplicand = '--cnvs-sys-space-x1';
      const multiplier = 3;
      const expected = calc.multiply(multiplicand, multiplier);

      expect(expected).toBe(`calc(var(${multiplicand}) * ${multiplier})`);
    });
  });

  describe('divide', () => {
    it('should return a CSS calc division string', () => {
      const dividend = '--cnvs-sys-space-x1';
      const divisor = 3;
      const expected = calc.divide(dividend, divisor);

      expect(expected).toBe(`calc(var(${dividend}) / ${divisor})`);
    });
  });

  describe('negate', () => {
    it('should negate CSS variables', () => {
      const value = '--cnvs-sys-space-x4';
      const expected = calc.negate(value);

      expect(expected).toBe(`calc(var(${value}) * -1)`);
    });

    it('should handle fallbacks', () => {
      const value = '--cnvs-sys-space-x4';
      const fallback = '1rem';
      const expected = calc.negate(value, fallback);

      expect(expected).toBe(`calc(var(${value}, ${fallback}) * -1)`);
    });
  });
});
