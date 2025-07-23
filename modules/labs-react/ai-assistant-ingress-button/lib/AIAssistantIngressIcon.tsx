import {CanvasSystemIcon, CanvasIconTypes} from '@workday/design-assets-types';

export const getAIAssistantIngressIcon = (svgId: string): CanvasSystemIcon => {
  return {
    name: 'aiAssistantIngressButton',
    type: CanvasIconTypes.System,
    svg: `<svg class="wd-icon-ai-assistant-ingress-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <linearGradient id="${svgId}" x1="10" y1="0.000195292" x2="10" y2="19.9998" gradientUnits="userSpaceOnUse">
              <stop />
              <stop offset="0.25"/>
              <stop offset="0.5"/>
              <stop offset="0.75"/>
              <stop offset="1"/>
            </linearGradient>
            <path class="wd-icon-fill wd-icon-ai-assistant-ingress-button-bubble" d="M12 2.50003C12 2.22388 11.7759 1.9987 11.5001 2.01228C6.20948 2.27276 2 6.64479 2 12C2 13.5872 2.37077 15.1224 3.07103 16.507L2.44426 20.1925C2.42673 20.2956 2.42475 20.4007 2.43839 20.5044C2.51377 21.0776 3.03949 21.4811 3.61261 21.4057L7.44041 20.9022C8.83856 21.6197 10.3926 22 12 22C17.3552 22 21.7272 17.7905 21.9877 12.4999C22.0013 12.2241 21.7761 12 21.5 12H20.5C20.2239 12 20.0016 12.2245 19.9846 12.5001C19.7265 16.6854 16.2503 20 12 20C10.6368 20 9.32467 19.6593 8.15684 19.0183L7.92724 18.8923L4.53906 19.3379L5.09721 16.0559L4.96511 15.8128C4.33477 14.6524 4 13.3513 4 12C4 7.74968 7.31459 4.27352 11.4999 4.01538C11.7755 3.99838 12 3.77614 12 3.49999C12 3.1321 12 2.82183 12 2.50003Z" />
<path class="wd-icon-fill wd-icon-ai-assistant-ingress-button-sparkle" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 2C17.6811 2 17.9069 2.1126 17.9555 2.37114C18.1407 3.35885 18.5381 4.1853 19.1401 4.809C19.7409 5.43146 20.5606 5.86796 21.6189 6.05318C22.1279 6.14203 22.1262 6.85808 21.6189 6.94681C20.5606 7.13204 19.7409 7.56853 19.1401 8.191C18.5381 8.8147 18.1408 9.64103 17.9556 10.6287C17.907 10.8873 17.6811 11 17.5 11C17.3189 11 17.0931 10.8874 17.0445 10.6289C16.8593 9.64115 16.4619 8.81474 15.8599 8.19106C15.2592 7.56861 14.4394 7.13211 13.3811 6.94681C12.8721 6.85795 12.8739 6.14192 13.3811 6.05318C14.4394 5.86796 15.2591 5.43146 15.8599 4.809C16.4619 4.1853 16.8592 3.35897 17.0444 2.37126C17.093 2.11272 17.3189 2 17.5 2Z" />
          </svg>`,
    filename: 'wd-icon-ai-assistant-ingress-button.svg',
  };
};
