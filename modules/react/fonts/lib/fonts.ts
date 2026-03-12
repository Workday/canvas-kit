import {CSSObject} from '@emotion/styled';

const basePath = 'https://design.workdaycdn.com/assets/fonts/';

export const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Inter
      src: `local('Inter'), url(${basePath}/Inter/Inter.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Inter',
      fontStyle: 'italic',
      fontWeight: [100, 900],
      // Inter (Italic)
      src: `local('Inter-Italic'), url(${basePath}/Inter/Inter-Italic.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Noto Sans CJK',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Noto Sans CJK (Simplified Chinese)
      src: `local('Noto Sans CJK'), url(${basePath}/Noto-Sans-CJK/Noto-Sans-CJK-SC.otf) format('opentype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Noto Sans CJK',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Noto Sans CJK (Traditional Chinese - Taiwan)
      src: `local('Noto Sans CJK'), url(${basePath}/Noto-Sans-CJK/Noto-Sans-CJK-TWC.otf) format('opentype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Noto Sans CJK',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Noto Sans CJK (Traditional Chinese - Hong Kong)
      src: `local('Noto Sans CJK'), url(${basePath}/Noto-Sans-CJK/Noto-Sans-CJK-HKC.otf) format('opentype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Noto Sans CJK',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Noto Sans CJK (Japanese)
      src: `local('Noto Sans CJK'), url(${basePath}/Noto-Sans-CJK/Noto-Sans-CJK-JP.otf) format('opentype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Noto Sans CJK',
      fontStyle: 'normal',
      fontWeight: [100, 900],
      // Noto Sans CJK (Korean)
      src: `local('Noto Sans CJK'), url(${basePath}/Noto-Sans-CJK/Noto-Sans-CJK-KR.otf) format('opentype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto Mono',
      fontStyle: 'normal',
      fontWeight: [100, 700],
      // Roboto Mono
      src: `local('Roboto Mono'), url(${basePath}/Roboto/Roboto-Mono.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto Mono',
      fontStyle: 'italic',
      fontWeight: [100, 700],
      // Roboto Mono (Italic)
      src: `local('Roboto Mono'), url(${basePath}/Roboto/Roboto-Mono-Italic.ttf) format('truetype')`,
    },
  },
];
