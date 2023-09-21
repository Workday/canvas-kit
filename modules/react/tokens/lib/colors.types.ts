// import colors from '@workday/canvas-colors-web';

export enum BrandingColor {
  Cinnamon = 'cinnamon',
  Peach = 'peach',
  ChiliMango = 'chiliMango',
  Cantaloupe = 'cantaloupe',
  SourLemon = 'sourLemon',
  JuicyPear = 'juicyPear',
  Kiwi = 'kiwi',
  GreenApple = 'greenApple',
  Watermelon = 'watermelon',
  Jewel = 'jewel',
  Toothpaste = 'toothpaste',
  Blueberry = 'blueberry',
  Plum = 'plum',
  BerrySmoothie = 'berrySmoothie',
  Blackberry = 'blackberry',
  IslandPunch = 'islandPunch',
  GrapeSoda = 'grapeSoda',
  Pomegranate = 'pomegranate',
  FruitPunch = 'fruitPunch',
  RootBeer = 'rootBeer',
  ToastedMarshmallow = 'toastedMarshmallow',
  Cappuccino = 'cappuccino',
  Licorice = 'licorice',
  BlackPepper = 'blackPepper',
}

// type RemoveIndex<T> = {
//   [ K in keyof T as string extends K ? never : number extends K ? never : K ] : T[K]
// };

export type CanvasColors = {
  cinnamon600: '#a31b12';
  cinnamon500: '#de2e21';
  cinnamon400: '#ff5347';
  cinnamon300: '#ff867d';
  cinnamon200: '#fcc9c5';
  cinnamon100: '#ffefee';
  peach600: '#b53413';
  peach500: '#de4721';
  peach400: '#ff643d';
  peach300: '#ff957a';
  peach200: '#ffc2b3';
  peach100: '#fff3f0';
  chiliMango600: '#a33600';
  chiliMango500: '#e04b00';
  chiliMango400: '#ff671b';
  chiliMango300: '#ff9b69';
  chiliMango200: '#ffc7ab';
  chiliMango100: '#ffe6d9';
  cantaloupe600: '#c06c00';
  cantaloupe500: '#f38b00';
  cantaloupe400: '#ffa126';
  cantaloupe300: '#ffbc63';
  cantaloupe200: '#fcd49f';
  cantaloupe100: '#ffeed9';
  sourLemon600: '#bd9100';
  sourLemon500: '#ebb400';
  sourLemon400: '#ffc629';
  sourLemon300: '#ffda61';
  sourLemon200: '#ffecab';
  sourLemon100: '#fff9e6';
  juicyPear600: '#687818';
  juicyPear500: '#8ea618';
  juicyPear400: '#a8c224';
  juicyPear300: '#c4de40';
  juicyPear200: '#e2f391';
  juicyPear100: '#f7fae6';
  kiwi600: '#537824';
  kiwi500: '#609915';
  kiwi400: '#77bc1f';
  kiwi300: '#a7e05c';
  kiwi200: '#caf593';
  kiwi100: '#ecfcd7';
  greenApple600: '#217a37';
  greenApple500: '#319c4c';
  greenApple400: '#43c463';
  greenApple300: '#5fe380';
  greenApple200: '#acf5be';
  greenApple100: '#ebfff0';
  watermelon600: '#00573e';
  watermelon500: '#0c7a5b';
  watermelon400: '#12a67c';
  watermelon300: '#65ccaf';
  watermelon200: '#b7edde';
  watermelon100: '#ebfdf8';
  jewel600: '#156973';
  jewel500: '#1a818c';
  jewel400: '#1ea4b3';
  jewel300: '#44c8d7';
  jewel200: '#acecf3';
  jewel100: '#ebfdff';
  toothpaste600: '#005b82';
  toothpaste500: '#0271a1';
  toothpaste400: '#1894c9';
  toothpaste300: '#40b4e5';
  toothpaste200: '#99e0ff';
  toothpaste100: '#d7f1fc';
  blueberry600: '#004387';
  blueberry500: '#005cb9';
  blueberry400: '#0875e1';
  blueberry300: '#40a0ff';
  blueberry200: '#a6d2ff';
  blueberry100: '#d7eafc';
  plum600: '#264a7a';
  plum500: '#3166ab';
  plum400: '#3881e1';
  plum300: '#529bfa';
  plum200: '#a6cdff';
  plum100: '#e6f1ff';
  berrySmoothie600: '#3b4987';
  berrySmoothie500: '#4b5eb3';
  berrySmoothie400: '#5e77e6';
  berrySmoothie300: '#7891ff';
  berrySmoothie200: '#c2cfff';
  berrySmoothie100: '#e8edff';
  blackberry600: '#2e2d91';
  blackberry500: '#413fcc';
  blackberry400: '#5c59e6';
  blackberry300: '#8483e6';
  blackberry200: '#c3c2ff';
  blackberry100: '#f0f0ff';
  islandPunch600: '#503882';
  islandPunch500: '#6345a1';
  islandPunch400: '#8660d1';
  islandPunch300: '#a88ae6';
  islandPunch200: '#d2befa';
  islandPunch100: '#f5f0ff';
  grapeSoda600: '#7c3882';
  grapeSoda500: '#97499e';
  grapeSoda400: '#c860d1';
  grapeSoda300: '#de8ae6';
  grapeSoda200: '#fac0ff';
  grapeSoda100: '#feebff';
  pomegranate600: '#99003a';
  pomegranate500: '#c70550';
  pomegranate400: '#f31167';
  pomegranate300: '#ff5c9a';
  pomegranate200: '#ffbdd6';
  pomegranate100: '#ffebf3';
  fruitPunch600: '#b82828';
  fruitPunch500: '#e12f2f';
  fruitPunch400: '#ff4c4c';
  fruitPunch300: '#ff7e7e';
  fruitPunch200: '#ffbdbd';
  fruitPunch100: '#ffeeee';
  rootBeer600: '#664d42';
  rootBeer500: '#8c7266';
  rootBeer400: '#ba9a8c';
  rootBeer300: '#dcbbad';
  rootBeer200: '#ebd7cf';
  rootBeer100: '#faf3f0';
  toastedMarshmallow600: '#8c6000';
  toastedMarshmallow500: '#b37f10';
  toastedMarshmallow400: '#cc9e3b';
  toastedMarshmallow300: '#e6bf6c';
  toastedMarshmallow200: '#ebd6a9';
  toastedMarshmallow100: '#fdf6e6';
  coconut600: '#8f8687';
  coconut500: '#9e9595';
  coconut400: '#b3acac';
  coconut300: '#d1cbcc';
  coconut200: '#e3dfdf';
  coconut100: '#f0eeee';
  cappuccino600: '#231f20';
  cappuccino500: '#352f2f';
  cappuccino400: '#4a4242';
  cappuccino300: '#5e5757';
  cappuccino200: '#706869';
  cappuccino100: '#7a7374';
  soap600: '#b9c0c7';
  soap500: '#ced3d9';
  soap400: '#dfe2e6';
  soap300: '#e8ebed';
  soap200: '#f0f1f2';
  soap100: '#f6f7f8';
  licorice600: '#1f262e';
  licorice500: '#333d47';
  licorice400: '#4a5561';
  licorice300: '#5e6a75';
  licorice200: '#7b858f';
  licorice100: '#a1aab3';
  frenchVanilla600: '#8f8f8f';
  frenchVanilla500: '#a6a6a6';
  frenchVanilla400: '#bdbdbd';
  frenchVanilla300: '#d4d4d4';
  frenchVanilla200: '#ebebeb';
  frenchVanilla100: '#ffffff';
  blackPepper600: '#000000';
  blackPepper500: '#1e1e1e';
  blackPepper400: '#333333';
  blackPepper300: '#494949';
  blackPepper200: '#616161';
  blackPepper100: '#787878';
};

export type CanvasColor = keyof CanvasColors;
