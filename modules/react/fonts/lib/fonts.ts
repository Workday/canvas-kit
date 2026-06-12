import {CSSObject} from '@emotion/styled';

const fontsPath = 'https://design.workdaycdn.com/assets/fonts/Sana-Sans';

export const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Sana Sans',
      fontStyle: 'normal',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Sana Sans',
      fontStyle: 'italic',
      fontWeight: [100, 700],
      src: `local('Sana Sans LCG 05 VF'), local('SanaSansLCG05VF-Regular'), url(${fontsPath}/SanaSansLCG05-Variable.ttf) format('truetype')`,
    },
  },
];
