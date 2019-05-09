import {CSSObject} from 'create-emotion';
const fontsPath = 'https://design.workdaycdn.com/beta/assets/fonts@1.0.0/roboto/ttf';

const fonts: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      src: `local('Roboto Light'), local('Roboto-Light'), url(${fontsPath}/Roboto-Light.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `local('Roboto Regular'), local('Roboto-Regular'), url(${fontsPath}/Roboto-Regular.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      src: `local('Roboto Medium'), local('Roboto-Medium'), url(${fontsPath}/Roboto-Medium.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      src: `local('Roboto Bold'), local('Roboto-Bold'), url(${fontsPath}/Roboto-Bold.ttf) format('truetype')`,
    },
  },
  {
    '@font-face': {
      fontFamily: 'Roboto Mono',
      fontStyle: 'normal',
      fontWeight: 400,
      src: `local('Roboto Mono'), local('RobotoMono-Regular'), url(${fontsPath}/RobotoMono-Regular.ttf) format('truetype')`,
    },
  },
];

export default fonts;
