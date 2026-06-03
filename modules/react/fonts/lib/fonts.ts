import {CSSObject} from '@emotion/styled';

const fontsPath = 'https://design.workdaycdn.com/assets/fonts/Sana-Sans';

export const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Sana Sans',
      fontStyle: 'normal',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSans-Variable.woff2) format('woff2')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Sana Sans',
      fontStyle: 'italic',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSans-Variable.woff2) format('woff2')`,
    },
  },
];
