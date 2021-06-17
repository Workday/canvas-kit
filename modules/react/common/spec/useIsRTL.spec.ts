import {renderHook} from '@testing-library/react-hooks';
import {ContentDirection, useIsRTL} from '../lib/theming';

describe('useIsRTL hook', () => {
  it("should return true when the theme's content direction is RTL", () => {
    const partialTheme = {canvas: {direction: ContentDirection.RTL}};
    const {result} = renderHook(() => useIsRTL(partialTheme));

    expect(result.current).toBe(true);
  });

  it("should return false when the theme's content direction is LTR", () => {
    const partialTheme = {canvas: {direction: ContentDirection.LTR}};
    const {result} = renderHook(() => useIsRTL(partialTheme));

    expect(result.current).toBe(false);
  });
});
