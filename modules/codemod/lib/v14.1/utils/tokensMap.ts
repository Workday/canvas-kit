import {mapping} from '../../v13.2/mapping/index';

export const tokensMap = {
  space: {
    ...mapping.space.keys,
  },
  shape: {
    ...mapping.borderRadius.keys,
  },
  depth: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  },
  color: {},
};
