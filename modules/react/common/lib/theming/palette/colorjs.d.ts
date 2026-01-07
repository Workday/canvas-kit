/**
 * Type declarations for colorjs.io
 *
 * colorjs.io ships with TypeScript types but uses the `exports` field
 * which requires `moduleResolution: "node16"` or higher.
 * This declaration file provides a workaround for older module resolution.
 */

declare module 'colorjs.io' {
  export interface Coords extends Array<number | null> {
    0: number | null;
    1: number | null;
    2: number | null;
  }

  export interface ColorObject {
    spaceId: string;
    coords: Coords;
    alpha: number;
  }

  export interface SerializeOptions {
    format?: string | {name: string};
    precision?: number;
    inGamut?: boolean;
  }

  export default class Color {
    constructor(color: string | Color | ColorObject);
    constructor(space: string, coords: [number, number, number], alpha?: number);

    spaceId: string;
    coords: Coords;
    alpha: number;

    /**
     * Convert to another color space
     */
    to(space: string): Color;

    /**
     * Convert to string representation
     */
    toString(options?: SerializeOptions): string;

    /**
     * Check if color is within gamut
     */
    inGamut(space?: string): boolean;

    /**
     * Map color to gamut
     */
    toGamut(space?: string): Color;

    /**
     * Calculate contrast ratio against another color
     */
    contrast(color: Color, algorithm?: 'WCAG21' | 'APCA' | 'Lstar' | 'DeltaPhi'): number;

    /**
     * Clone the color
     */
    clone(): Color;

    /**
     * Get color in a specific format
     */
    get(prop: string): number;

    /**
     * Set color property
     */
    set(prop: string, value: number): Color;
  }
}
