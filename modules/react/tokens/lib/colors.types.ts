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

type RemoveIndex<T> = {
  [ K in keyof T as string extends K ? never : number extends K ? never : K ] : T[K]
};

export type CanvasColor = keyof RemoveIndex<typeof colors>;
