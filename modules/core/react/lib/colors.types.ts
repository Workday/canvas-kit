import colors from '@workday/canvas-colors-web';

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

export type CanvasColor = Exclude<keyof typeof colors, 'gradients' | 'primary'>;
