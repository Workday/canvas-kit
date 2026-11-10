import {CSSObject} from '@emotion/styled';

const fontsPath = 'https://design.workdaycdn.com/assets/fonts/Sana-Sans';
const ibmPlexMonoPath = 'https://design.workdaycdn.com/assets/fonts/IBM-Plex-Mono';

// `@font-face` font-weight accepts a range (`100 700`) for variable fonts. Emotion's
// CSSObject types fontWeight as a single weight, so the range string is asserted.
// That keeps `fonts` a CSSObject[], which is what `injectGlobal({...fonts})` expects.
const variableFontWeight = '100 700' as CSSObject['fontWeight'];

export const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Sana Sans VF',
      fontStyle: 'normal',
      fontWeight: variableFontWeight,
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.woff2) format('woff2'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Sana Sans VF',
      fontStyle: 'italic',
      fontWeight: variableFontWeight,
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.woff2) format('woff2'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'IBM Plex Mono',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `local('IBM Plex Mono'), local('IBMPlexMono-Regular'), url(${ibmPlexMonoPath}/IBMPlexMono-Regular.woff2) format('woff2')`,
    },
  },
];
