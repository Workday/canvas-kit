import {create} from '@storybook/theming';

import {version} from '../lerna.json';

export default create({
  base: 'light',

  // Branding
  brandImage: null,
  brandTitle: `<div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
    <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display: block; flex-shrink: 0;">
      <rect width="120" height="120" rx="25" fill="#F3F5F7"/>
      <path d="M96.7827 30.0557C98.6295 30.0557 100.141 31.5507 99.9895 33.382C99.1125 43.962 94.0889 53.3716 86.5405 60.0004C94.0889 66.6291 99.1125 76.0388 99.9895 86.6187C100.141 88.45 98.6295 89.9451 96.7827 89.9451H83.4072C81.5604 89.9451 80.0633 88.4555 80.0633 86.6179V73.3092C80.0633 71.4716 78.5662 69.982 76.7194 69.982H63.3439C61.4971 69.982 60 68.4923 60 66.6548V53.346C60 53.0365 60.0436 52.7367 60.1233 52.4525C60.5157 51.049 61.8083 50.0188 63.3439 50.0188H76.7194C78.5662 50.0188 80.0633 48.5291 80.0633 46.6916V33.3829C80.0633 31.5453 81.5604 30.0557 83.4072 30.0557H96.7827Z" fill="#2B2B2B"/>
      <path d="M56.6561 30.0557C58.5028 30.0558 60 31.5454 60 33.3829V46.6916C60 48.5291 58.5028 50.0187 56.6561 50.0188H43.2806C41.4342 50.0189 39.9372 51.5081 39.9367 53.3452V66.6548C39.9367 68.4923 41.4338 69.982 43.2806 69.982H56.6561C58.5028 69.9821 60 71.4717 60 73.3092V86.6179C60 88.4554 58.4974 89.9596 56.6569 89.8086C37.1621 88.2088 21.6184 72.7427 20.0105 53.3452C19.8587 51.5139 21.3705 50.0188 23.2173 50.0188H36.5928L36.7642 50.0139C38.531 49.9249 39.9365 48.4716 39.9367 46.6916V33.3829C39.9367 31.5453 41.4338 30.0557 43.2806 30.0557H56.6561Z" fill="#2B2B2B"/>
    </svg>
    <div style="display: flex; flex-direction: column; color: rgba(3, 3, 3, 0.8392); min-width: 0;">
      <span style="font-size: 20px; font-weight: 600; line-height: 1.2;">Canvas Kit</span>
      <span style="font-size: 18px; font-weight: 500; line-height: 1.2;">v${version}</span>
    </div>
  </div>`,
  brandUrl: 'https://github.com/Workday/canvas-kit',

  // Primary UI
  colorPrimary: '#0F2E66',
  colorSecondary: 'rgba(0, 87, 174, 1)',

  // UI
  appBg: '#ffffff',

  // Typography
  fontBase: '"Sana Sans LCG 05 VF", sans-serif',
  fontCode: '"Roboto Mono", "Courier New", monospace',

  // Text colors
  textColor: '#2B2B2B',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#5D6775',
  barSelectedColor: '',
  barBg: '#ffffff',

  // Custom colors (used in UI extension if needed)
  brandColors: {
    primary: '#0F2E66', // base.blue900
    surfaceSelected: 'rgba(0, 127, 255, 0.1098)', // fg color
    coral: '#FF8778', // base.red300
    teal: '#019EAC', // base.teal500
    slate: '#5D6775', // base.slate600
  },
});
