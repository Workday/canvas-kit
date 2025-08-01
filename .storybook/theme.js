import {create} from '@storybook/theming';
import {version} from '../lerna.json';
import {system} from '@workday/canvas-tokens-web';

export default create({
  base: 'light',

  // Branding
  brandTitle: ` <div style="display: flex; align-items: center;">
    <svg
      width="36"
      height="45"
      viewBox="0 0 36 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="margin-right: 12px;"
    >
      <path
        d="M0 1.5C0 0.671574 0.671573 0 1.5 0H34.5C35.3284 0 36 0.671573 36 1.5V43.5C36 44.3284 35.3284 45 34.5 45H10.5C9.67157 45 9 44.3284 9 43.5V37.5C9 36.6716 8.32843 36 7.5 36H1.5C0.671573 36 0 35.3284 0 34.5V1.5Z"
        fill="url(#paint0_linear_63_362)"
      />
      <path
        d="M25.5 9C26.3284 9.00002 27 9.67159 27 10.5V16.5C27 17.3284 26.3284 18 25.5 18H19.5C18.6717 18 18.0002 18.6714 18 19.4996V25.5C18 26.3284 18.6715 27 19.5 27H25.5C26.3284 27 27 27.6716 27 28.5V34.5C27 35.3284 26.3259 36.0066 25.5003 35.9385C16.7553 35.2172 9.78275 28.2446 9.06148 19.4996C8.99339 18.674 9.67153 18 10.5 18H16.5L16.5769 17.9978C17.3694 17.9577 17.9999 17.3025 18 16.5V10.5C18 9.67157 18.6715 9 19.5 9H25.5Z"
        fill="white"
      />
      <defs>
        <linearGradient id="paint0_linear_63_362" x1="0" y1="0" x2="36" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0.0817308" stop-color="#0F2E66"/>
          <stop offset="0.600962" stop-color="#B03286"/>
          <stop offset="1" stop-color="#FF916E"/>
        </linearGradient>
      </defs>
    </svg>
    <div style="display: flex; flex-direction: column; color: #0F2E66;">
      <span style="font-size: 20px; font-weight: 600;">Canvas Kit</span>
      <span style="font-size: 18px; font-weight: 500;">v${version}</span>
    </div>
  </div>`,
  brandUrl: 'https://github.com/Workday/canvas-kit',

  // Primary UI
  colorPrimary: '#0F2E66',
  colorSecondary: '#B03286',

  // UI
  appBg: '#ffffff',

  // Typography
  mainTextFace: system.fontFamily.mono,

  // Text colors
  textColor: '#2B2B2B',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#5D6775',
  barSelectedColor: '#0F2E66',
  barBg: '#ffffff',

  // Custom colors (used in UI extension if needed)
  brandColors: {
    primary: '#0F2E66', // base.blue900
    pink: '#B03286', // base.magenta600
    coral: '#FF8778', // base.red300
    teal: '#019EAC', // base.teal500
    slate: '#5D6775', // base.slate600
  },
});
