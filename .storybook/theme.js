import {themes, create} from '@storybook/theming';
import {commonColors, typeColors, fontFamily} from '../modules/react/tokens';
import {version} from '../lerna.json';

export default create({
  ...themes.light, // Overrides a user's preferred color scheme (e.g. Dark Mode), will need to flesh this out later when CK is compatible with a dark mode
  mainTextColor: typeColors.body,
  mainTextFace: fontFamily,
  mainBackground: commonColors.backgroundAlt,
  brandTitle: `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
    <div>
    <svg width="100%" height="79" viewBox="0 0 306 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.934 43.6353H112.402C112.222 45.2974 111.746 46.7848 110.975 48.0977C110.204 49.4105 109.114 50.4523 107.705 51.2231C106.296 51.9819 104.537 52.3613 102.43 52.3613C100.888 52.3613 99.4849 52.0723 98.2202 51.4941C96.9676 50.916 95.8896 50.097 94.9863 49.0371C94.083 47.9652 93.3844 46.6825 92.8906 45.189C92.4089 43.6834 92.168 42.0093 92.168 40.1665V37.5469C92.168 35.7041 92.4089 34.036 92.8906 32.5425C93.3844 31.0369 94.089 29.7482 95.0044 28.6763C95.9318 27.6043 97.0459 26.7793 98.3467 26.2012C99.6475 25.623 101.111 25.334 102.737 25.334C104.724 25.334 106.404 25.7074 107.777 26.4541C109.15 27.2008 110.216 28.2367 110.975 29.5615C111.746 30.8743 112.222 32.3979 112.402 34.1323H108.934C108.765 32.9038 108.452 31.8499 107.994 30.9707C107.536 30.0794 106.886 29.3929 106.043 28.9111C105.2 28.4294 104.098 28.1885 102.737 28.1885C101.569 28.1885 100.539 28.4113 99.6475 28.8569C98.7682 29.3026 98.0275 29.9349 97.4253 30.7539C96.8351 31.5729 96.3895 32.5545 96.0884 33.6987C95.7873 34.8429 95.6367 36.1136 95.6367 37.5107V40.1665C95.6367 41.4552 95.7692 42.6657 96.0342 43.7979C96.3112 44.93 96.7267 45.9237 97.2808 46.7788C97.8348 47.634 98.5394 48.3084 99.3945 48.8022C100.25 49.284 101.261 49.5249 102.43 49.5249C103.911 49.5249 105.091 49.29 105.971 48.8203C106.85 48.3506 107.512 47.6761 107.958 46.7969C108.416 45.9176 108.741 44.8638 108.934 43.6353ZM127.892 28.0259L119.184 52H115.625L125.651 25.6953H127.946L127.892 28.0259ZM135.19 52L126.464 28.0259L126.41 25.6953H128.705L138.768 52H135.19ZM134.739 42.2622V45.1167H119.96V42.2622H134.739ZM163.525 25.6953V52H160.02L146.777 31.7114V52H143.291V25.6953H146.777L160.074 46.0381V25.6953H163.525ZM179.195 48.0073L186.945 25.6953H190.721L180.983 52H178.292L179.195 48.0073ZM171.95 25.6953L179.628 48.0073L180.586 52H177.894L168.174 25.6953H171.95ZM203.627 28.0259L194.919 52H191.36L201.387 25.6953H203.681L203.627 28.0259ZM210.926 52L202.2 28.0259L202.146 25.6953H204.44L214.503 52H210.926ZM210.474 42.2622V45.1167H195.696V42.2622H210.474ZM233.045 45.3516C233.045 44.7373 232.949 44.1953 232.756 43.7256C232.576 43.2438 232.25 42.8102 231.781 42.4248C231.323 42.0394 230.685 41.672 229.866 41.3228C229.059 40.9735 228.035 40.6182 226.794 40.2568C225.494 39.8714 224.319 39.4438 223.271 38.9741C222.224 38.4924 221.326 37.9443 220.58 37.3301C219.833 36.7158 219.261 36.0112 218.863 35.2163C218.466 34.4214 218.267 33.512 218.267 32.4883C218.267 31.4645 218.478 30.519 218.899 29.6519C219.321 28.7847 219.923 28.0319 220.706 27.3936C221.501 26.7432 222.446 26.2373 223.542 25.876C224.639 25.5146 225.861 25.334 227.21 25.334C229.185 25.334 230.859 25.7134 232.232 26.4722C233.618 27.2189 234.671 28.2005 235.394 29.417C236.117 30.6214 236.478 31.9102 236.478 33.2832H233.009C233.009 32.2956 232.799 31.4224 232.377 30.6636C231.955 29.8927 231.317 29.2905 230.462 28.8569C229.607 28.4113 228.523 28.1885 227.21 28.1885C225.969 28.1885 224.946 28.3752 224.139 28.7485C223.332 29.1219 222.729 29.6278 222.332 30.2661C221.947 30.9045 221.754 31.6331 221.754 32.4521C221.754 33.0062 221.868 33.512 222.097 33.9697C222.338 34.4154 222.705 34.8309 223.199 35.2163C223.705 35.6017 224.343 35.957 225.114 36.2822C225.897 36.6074 226.831 36.9206 227.915 37.2217C229.408 37.6432 230.697 38.113 231.781 38.6309C232.865 39.1488 233.756 39.7329 234.455 40.3833C235.165 41.0216 235.689 41.7503 236.026 42.5693C236.376 43.3763 236.55 44.2917 236.55 45.3154C236.55 46.3874 236.333 47.3569 235.9 48.2241C235.466 49.0913 234.846 49.832 234.039 50.4463C233.232 51.0605 232.263 51.5363 231.13 51.8735C230.01 52.1987 228.758 52.3613 227.373 52.3613C226.156 52.3613 224.958 52.1927 223.777 51.8555C222.609 51.5182 221.543 51.0124 220.58 50.3379C219.628 49.6634 218.863 48.8324 218.285 47.8447C217.719 46.8451 217.436 45.6888 217.436 44.376H220.905C220.905 45.2793 221.079 46.0562 221.429 46.7065C221.778 47.3449 222.254 47.8748 222.856 48.2964C223.47 48.7179 224.163 49.0311 224.934 49.2358C225.716 49.4285 226.529 49.5249 227.373 49.5249C228.589 49.5249 229.619 49.3563 230.462 49.019C231.305 48.6818 231.943 48.2 232.377 47.5737C232.823 46.9474 233.045 46.2067 233.045 45.3516ZM255.659 25.6953V52H252.172V25.6953H255.659ZM271.54 25.6953L260.609 37.9624L254.467 44.3398L253.889 40.6182L258.514 35.5234L267.348 25.6953H271.54ZM268.179 52L258.441 39.1729L260.519 36.4087L272.334 52H268.179ZM280.146 25.6953V52H276.659V25.6953H280.146ZM296.665 25.6953V52H293.232V25.6953H296.665ZM305.12 25.6953V28.5498H284.795V25.6953H305.12Z" fill="#0875E1"/>
    <path d="M11.4323 67.0965C3.81813 59.4317 -0.240395 49.2767 0.0110181 38.5388C0.262431 28.3131 4.50053 18.6879 11.9711 11.4293C19.4596 4.18829 29.3006 0.126278 39.6983 0.00265141C50.7425 -0.120975 61.1043 4.08233 68.8263 11.8355C71.1249 14.1314 72.2563 17.2927 71.951 20.507C71.6457 23.7036 69.9218 26.6 67.2101 28.4191C62.7744 31.4214 56.8303 30.874 53.0771 27.0945C49.6471 23.6506 45.0678 21.7609 40.1652 21.7609C35.2088 21.7609 30.5936 23.686 27.1636 27.2005C23.7336 30.715 21.9378 35.3245 22.1354 40.2166C22.4945 49.4003 30.0908 56.8885 39.429 57.2594C44.6368 57.4537 49.683 55.458 53.2567 51.7492C54.0109 50.9721 55.2859 50.9368 56.0761 51.6785C56.8842 52.4203 56.9022 53.6742 56.1479 54.4513C51.7662 58.9725 45.6065 61.445 39.2494 61.1801C27.864 60.7209 18.5797 51.5726 18.1487 40.3402C17.9152 34.3885 20.1061 28.737 24.2903 24.463C28.4925 20.1714 34.1313 17.8225 40.1832 17.8225C46.1632 17.8225 51.7662 20.1361 55.9504 24.3394C58.3388 26.7413 62.128 27.0945 64.9653 25.1695C66.6893 24.0039 67.7847 22.1671 67.9823 20.1185C68.1798 18.0698 67.4615 16.0564 65.9889 14.5729C59.0212 7.59685 49.701 3.81741 39.7522 3.94104C30.3961 4.047 21.5248 7.70282 14.7905 14.2374C8.05623 20.7719 4.23116 29.4434 4.01567 38.6448C3.78221 48.323 7.4277 57.4537 14.3056 64.3591C21.1656 71.2645 30.3601 75.0793 40.1832 75.0793C50.2038 75.0793 59.5061 71.1409 66.402 64.0059C67.1562 63.2288 68.4312 63.1935 69.2214 63.9352C70.0295 64.677 70.0475 65.9309 69.2932 66.708C61.6251 74.6378 51.2813 79 40.1652 79C29.2647 79 19.0645 74.779 11.4323 67.0965ZM61.9843 52.0847C61.7508 50.1067 60.6554 48.323 58.9853 47.1927C56.0581 45.2146 52.0894 45.6032 49.7728 48.0934C47.3305 50.7602 43.8287 52.279 40.1832 52.279C36.6095 52.279 33.1616 50.8132 30.7013 48.2523C28.2231 45.6562 26.984 42.2476 27.2175 38.6801C27.6305 32.3928 32.7486 27.2711 39.1237 26.7766C42.9308 26.4764 46.6661 27.8363 49.3598 30.4854C50.132 31.2448 50.132 32.4988 49.3598 33.2582C48.5876 34.0176 47.3126 34.0176 46.5404 33.2582C44.6727 31.4215 42.0868 30.4854 39.4469 30.6974C35.0292 31.0329 31.4915 34.5828 31.2042 38.945C31.0426 41.4175 31.9045 43.7841 33.6285 45.5855C35.3525 47.3869 37.687 48.3759 40.1832 48.3759C42.7153 48.3759 45.1396 47.3163 46.8456 45.4796C50.4911 41.5235 56.7046 40.8877 61.266 43.9784C63.8878 45.7445 65.5939 48.5526 65.953 51.6609C66.3122 54.7339 65.3065 57.8069 63.2054 60.0851C57.2972 66.4961 48.9288 70.1166 40.1473 70.1166C39.842 70.1166 39.5547 70.1166 39.2494 70.0989C31.258 69.8693 23.7157 66.6373 18.0409 60.9858C12.3662 55.3344 9.16963 47.8814 9.04392 40.0047C8.91822 31.7393 12.0968 23.9509 17.987 18.0521C23.8773 12.171 31.7609 8.92142 40.1473 8.92142C48.3182 8.92142 56.0222 12.0121 61.8586 17.6106C62.6487 18.37 62.6667 19.6063 61.8945 20.3834C61.1223 21.1604 59.8652 21.1781 59.0751 20.4187C53.975 15.5266 47.2587 12.8421 40.1473 12.8421C32.8204 12.8421 25.9604 15.6679 20.8244 20.8072C15.6884 25.9289 12.9229 32.7284 13.0306 39.934C13.1384 46.7865 15.9219 53.2857 20.8783 58.2131C25.8347 63.1405 32.3894 65.9662 39.3571 66.1605C47.2946 66.3901 54.9088 63.1935 60.2244 57.4183C61.5892 55.9701 62.2177 54.0274 61.9843 52.0847Z" fill="#0875E1"/>
    </svg>
    </div>
    <span style="color: #0875e1">v${version}</span>
    </div>`,
  barSelectedColor: "#0875e1",
  background: {
    hoverable: "#a6d2ff"
  },
  hoverable: "#a6d2ff",
});
