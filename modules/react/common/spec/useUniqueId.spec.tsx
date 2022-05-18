import {setUniqueSeed, resetUniqueIdCount, generateUniqueId} from '../index';

describe('useUniqueId.ts', () => {
  afterEach(() => {
    resetUniqueIdCount();
  });
  describe('generateUniqueId()', () => {
    it('should generate a unique id each call', () => {
      const id = generateUniqueId();
      expect(generateUniqueId()).not.toEqual(id);
      console.log(id);
    });

    it('should always start with a letter', () => {
      // property test. If this ever fails, the generated string should be reported in the failure
      // message
      for (let i = 0; i < 1000; i++) {
        expect(generateUniqueId()).toMatch(/^[a-z]/);
      }
    });
  });

  describe('setSeed()', () => {
    it('should produce an id with the given seed', () => {
      setUniqueSeed('foo');
      expect(generateUniqueId()).toContain('foo');
    });
  });

  describe('resetCount()', () => {
    it('should reset the count', () => {
      const id = generateUniqueId();
      resetUniqueIdCount();
      expect(generateUniqueId()).toEqual(id);
    });
  });
});
