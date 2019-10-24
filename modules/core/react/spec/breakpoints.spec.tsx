import {BreakpointKey, up, down, between, only} from '../lib/theming/breakpoints';

describe('Breakpoints', () => {
  test('up function works with enum', () => {
    const mediaQuery = up(BreakpointKey.m);

    expect(mediaQuery).toBe('@media (min-width:960px)');
  });

  test('up function works with string', () => {
    const mediaQuery = up('m');

    expect(mediaQuery).toBe('@media (min-width:960px)');
  });

  test('down function works with enum', () => {
    const mediaQuery = down(BreakpointKey.m);

    expect(mediaQuery).toBe('@media (max-width:1279.5px)');
  });

  test('down function works with string', () => {
    const mediaQuery = down('m');

    expect(mediaQuery).toBe('@media (max-width:1279.5px)');
  });

  test('between function works with enums', () => {
    const mediaQuery = between(BreakpointKey.m, BreakpointKey.l);

    expect(mediaQuery).toBe('@media (min-width:960px) and (max-width:1919.5px)');
  });

  test('between function works with string', () => {
    const mediaQuery = between('m', 'l');

    expect(mediaQuery).toBe('@media (min-width:960px) and (max-width:1919.5px)');
  });

  test('only function works with enums', () => {
    const mediaQuery = only(BreakpointKey.m);

    expect(mediaQuery).toBe('@media (min-width:960px) and (max-width:1279.5px)');
  });

  test('between function works with string', () => {
    const mediaQuery = only('m');

    expect(mediaQuery).toBe('@media (min-width:960px) and (max-width:1279.5px)');
  });
});
