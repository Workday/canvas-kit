import {type} from '../lib/type';

import {typeLevelMap} from './helpers';

const context = describe;

// These tests exist as a check to make sure I didn't mess up the arithmetic.
// Dividing by 16 can be error-prone. :)

const remBaseSize = 16;

const remToPx = (rem: string): number => {
  return Number(rem.replace('rem', '')) * remBaseSize;
};

const pxToRem = (px: string): string => {
  const rem = parseInt(px, 10) / remBaseSize;
  return `${rem}rem`;
};

describe('Type Tokens', () => {
  context('when using the font size properties', () => {
    const {fontSizes} = type.properties;
    for (const key in fontSizes) {
      if (key in fontSizes) {
        it(`should properly translate the ${key}px token`, () => {
          const expectedRemValue = pxToRem(key);
          const actualRemValue = fontSizes[key];

          expect(actualRemValue).toEqual(expectedRemValue);
        });
      }
    }
  });

  context('when using the title type level', () => {
    it('should return the correct small size values', () => {
      const {small} = type.levels.title;
      const actualFontSizeValue = remToPx(small.fontSize);
      const expectedFontSizeValue = typeLevelMap.title.small.fontSize;

      const actualLineHeightValue = remToPx(small.lineHeight);
      const expectedLineHeightValue = typeLevelMap.title.small.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });

    it('should return the correct medium size values', () => {
      const {medium} = type.levels.title;
      const actualFontSizeValue = remToPx(medium.fontSize);
      const expectedFontSizeValue = typeLevelMap.title.medium.fontSize;

      const actualLineHeightValue = remToPx(medium.lineHeight);
      const expectedLineHeightValue = typeLevelMap.title.medium.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });

    it('should return the correct medium size values', () => {
      const {large} = type.levels.title;
      const actualFontSizeValue = remToPx(large.fontSize);
      const expectedFontSizeValue = typeLevelMap.title.large.fontSize;

      const actualLineHeightValue = remToPx(large.lineHeight);
      const expectedLineHeightValue = typeLevelMap.title.large.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });
  });

  context('when using the heading type level', () => {
    it('should return the correct small size values', () => {
      const {small} = type.levels.heading;
      const actualFontSizeValue = remToPx(small.fontSize);
      const expectedFontSizeValue = typeLevelMap.heading.small.fontSize;

      const actualLineHeightValue = remToPx(small.lineHeight);
      const expectedLineHeightValue = typeLevelMap.heading.small.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });

    it('should return the correct medium size values', () => {
      const {medium} = type.levels.heading;
      const actualFontSizeValue = remToPx(medium.fontSize);
      const expectedFontSizeValue = typeLevelMap.heading.medium.fontSize;

      const actualLineHeightValue = remToPx(medium.lineHeight);
      const expectedLineHeightValue = typeLevelMap.heading.medium.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });

    it('should return the correct medium size values', () => {
      const {large} = type.levels.heading;
      const actualFontSizeValue = remToPx(large.fontSize);
      const expectedFontSizeValue = typeLevelMap.heading.large.fontSize;

      const actualLineHeightValue = remToPx(large.lineHeight);
      const expectedLineHeightValue = typeLevelMap.heading.large.lineHeight;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
    });
  });

  context('when using the body type level', () => {
    it('should return the correct small size values', () => {
      const {small} = type.levels.body;
      const actualFontSizeValue = remToPx(small.fontSize);
      const expectedFontSizeValue = typeLevelMap.body.small.fontSize;

      const actualLineHeightValue = remToPx(small.lineHeight);
      const expectedLineHeightValue = typeLevelMap.body.small.lineHeight;

      const actualLetterSpacingValue = remToPx(small.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.body.small.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });

    it('should return the correct medium size values', () => {
      const {medium} = type.levels.body;
      const actualFontSizeValue = remToPx(medium.fontSize);
      const expectedFontSizeValue = typeLevelMap.body.medium.fontSize;

      const actualLineHeightValue = remToPx(medium.lineHeight);
      const expectedLineHeightValue = typeLevelMap.body.medium.lineHeight;

      const actualLetterSpacingValue = remToPx(medium.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.body.medium.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });

    it('should return the correct medium size values', () => {
      const {large} = type.levels.body;
      const actualFontSizeValue = remToPx(large.fontSize);
      const expectedFontSizeValue = typeLevelMap.body.large.fontSize;

      const actualLineHeightValue = remToPx(large.lineHeight);
      const expectedLineHeightValue = typeLevelMap.body.large.lineHeight;

      const actualLetterSpacingValue = remToPx(large.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.body.large.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });
  });

  context('when using the subtext type level', () => {
    it('should return the correct small size values', () => {
      const {small} = type.levels.subtext;
      const actualFontSizeValue = remToPx(small.fontSize);
      const expectedFontSizeValue = typeLevelMap.subtext.small.fontSize;

      const actualLineHeightValue = remToPx(small.lineHeight);
      const expectedLineHeightValue = typeLevelMap.subtext.small.lineHeight;

      const actualLetterSpacingValue = remToPx(small.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.subtext.small.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });

    it('should return the correct medium size values', () => {
      const {medium} = type.levels.subtext;
      const actualFontSizeValue = remToPx(medium.fontSize);
      const expectedFontSizeValue = typeLevelMap.subtext.medium.fontSize;

      const actualLineHeightValue = remToPx(medium.lineHeight);
      const expectedLineHeightValue = typeLevelMap.subtext.medium.lineHeight;

      const actualLetterSpacingValue = remToPx(medium.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.subtext.medium.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });

    it('should return the correct medium size values', () => {
      const {large} = type.levels.subtext;
      const actualFontSizeValue = remToPx(large.fontSize);
      const expectedFontSizeValue = typeLevelMap.subtext.large.fontSize;

      const actualLineHeightValue = remToPx(large.lineHeight);
      const expectedLineHeightValue = typeLevelMap.subtext.large.lineHeight;

      const actualLetterSpacingValue = remToPx(large.letterSpacing);
      const expectedLetterSpacingValue = typeLevelMap.subtext.large.letterSpacing;

      expect(actualFontSizeValue).toEqual(expectedFontSizeValue);
      expect(actualLineHeightValue).toEqual(expectedLineHeightValue);
      expect(actualLetterSpacingValue).toEqual(expectedLetterSpacingValue);
    });
  });
});
