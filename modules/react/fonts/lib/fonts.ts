import {CSSObject} from '@emotion/styled';

const fontsPath = 'https://design.workdaycdn.com/assets/fonts/Sana-Sans';
const ibmPlexMonoPath = 'https://design.workdaycdn.com/assets/fonts/IBM-Plex-Mono';

export const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Sana Sans VF',
      fontStyle: 'normal',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Sana Sans VF',
      fontStyle: 'italic',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
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
