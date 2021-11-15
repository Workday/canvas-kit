import {getHiddenKeys} from '../useOverflowModel';

describe('useOverflowModel', () => {
  describe('getHiddenKeys', () => {
    const itemWidthCache = {
      first: 100,
      second: 100,
      third: 100,
      fourth: 100,
    };
    const overflowTargetWidth = 100;

    const io = [
      {
        containerWidth: 100,
        selected: 'first',
        hiddenKeys: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 199,
        selected: 'first',
        hiddenKeys: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 200,
        selected: 'first',
        hiddenKeys: ['second', 'third', 'fourth'],
      },
      {containerWidth: 400, selected: 'first', hiddenKeys: []},
      {containerWidth: 399, selected: 'first', hiddenKeys: ['third', 'fourth']},
      {
        containerWidth: 200,
        selected: 'second',
        hiddenKeys: ['first', 'third', 'fourth'],
      },
    ].forEach(({containerWidth, hiddenKeys, selected}) => {
      it(`when containerWidth is ${containerWidth} and selected is '${selected}' should contain hiddenKeys [${hiddenKeys.join(
        ', '
      )}] `, () => {
        expect(
          getHiddenKeys(containerWidth, overflowTargetWidth, itemWidthCache, [selected])
        ).toEqual(hiddenKeys);
      });
    });
  });
});
