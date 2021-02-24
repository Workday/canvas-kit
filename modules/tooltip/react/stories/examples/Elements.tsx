/* @jsx jsx */
import {css, jsx} from '@emotion/core';
import * as React from 'react';
import {Box} from '../../../../_labs/pagination/react/lib/Pagination/common/Box';

const sizes = {
  zero: 0,
  xxxs: 4,
  xxs: 8,
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 64,
  xxxl: 80,
} as const;

type Size = keyof typeof sizes;

interface BoxProps {
  margin?: Size;
  marginX?: Size;
  marginY?: Size;
  marginL?: Size;
  marginR?: Size;
  marginT?: Size;
  marginB?: Size;
  padding?: Size;
  paddingX?: Size;
  paddingY?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  paddingTop?: Size;
  paddingBottom?: Size;
}

const styles = [
  css({margin: 's', padding: 's'}),
  css({margin: 'l', marginX: 's'}),
  css({padding: 'l'}),
  css({padding: 's', paddingTop: 'l'}),
  css({marginL: 's', marginT: 's', marginR: 's', marginB: 's'}),
];
const layoutKeys = [
  'margin',
  'marginX',
  'marginY',
  'marginL',
  'marginR',
  'marginT',
  'marginB',
  'padding',
  'paddingX',
  'paddingY',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
] as const;

const validCombos = [
  ['margin'],
  ['marginX'],
  ['marginY'],
  ['marginT'],
  ['marginR'],
  ['marginB'],
  ['marginL'],
  ['marginT', 'marginR'],
  ['marginT', 'marginB'],
  ['marginT', 'marginL'],
  ['marginR', 'marginB'],
  ['marginR', 'marginL'],
  ['margin', 'marginX'],
  ['margin', 'marginY'],
  ['margin', 'marginT'],
  ['margin', 'marginR'],
  ['margin', 'marginB'],
  ['margin', 'marginL'],
  ['padding'],
  ['paddingX'],
  ['paddingY'],
  ['paddingT'],
  ['paddingR'],
  ['paddingB'],
  ['paddingL'],
  ['paddingT', 'paddingR'],
  ['paddingT', 'paddingB'],
  ['paddingT', 'paddingL'],
  ['paddingR', 'paddingB'],
  ['paddingR', 'paddingL'],
  ['padding', 'paddingX'],
  ['padding', 'paddingY'],
  ['padding', 'paddingT'],
  ['padding', 'paddingR'],
  ['padding', 'paddingB'],
  ['padding', 'paddingL'],
  ['margin', 'padding'],
  ['marginX', 'paddingX'],
  ['marginY', 'paddingY'],
  ['marginT', 'paddingT'],
  ['marginR', 'paddingR'],
  ['marginB', 'paddingB'],
  ['marginL', 'paddingL'],
  ['marginT', 'marginR', 'paddingT', 'paddingR'],
  ['marginT', 'marginB', 'paddingT', 'paddingB'],
  ['marginT', 'marginL', 'paddingT', 'paddingL'],
  ['marginR', 'marginB', 'paddingR', 'paddingB'],
  ['marginR', 'marginL', 'paddingR', 'paddingL'],
  ['margin', 'marginX', 'padding', 'paddingX'],
  ['margin', 'marginY', 'padding', 'paddingY'],
  ['margin', 'marginT', 'padding', 'paddingT'],
  ['margin', 'marginR', 'padding', 'paddingR'],
  ['margin', 'marginB', 'padding', 'paddingB'],
  ['margin', 'marginL', 'padding', 'paddingL'],
];

const combos = (function() {
  const results = [];

  for (const numOfKeys of validCombos) {
    for (const v of Object.keys(sizes)) {
      const obj = {};
      for (const k of numOfKeys) {
        obj[k] = v;
      }
      results.push(obj);
    }
  }

  return results;
})();

// const Box = ({
//   children,
//   ...props
// }: BoxProps & {children: React.ReactNode}) => {
//   return (
//     <div
//       css={[
//         Object.keys(props).map(key => {
//           return {[key]: sizes[props[key]]};
//         }),
//       ]}
//     >
//       {children}
//     </div>
//   );
// };

export const Elements = ({mode}: {mode: 'react' | 'css'}) => {
  return (
    <aside>
      {[...Array(1000).keys()].map((item, index) => {
        return (
          <Box key={index} {...combos[index % combos.length]}>
            Content {index}
          </Box>
        );
      })}
    </aside>
  );
};
