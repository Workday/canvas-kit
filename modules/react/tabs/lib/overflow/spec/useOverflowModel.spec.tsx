import {getHiddenIds} from '../useOverflowModel';

describe('useOverflowModel', () => {
  describe('getHiddenIds', () => {
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
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 199,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 200,
        selected: 'first',
        hiddenIds: ['second', 'third', 'fourth'],
      },
      {containerWidth: 400, selected: 'first', hiddenIds: []},
      {containerWidth: 399, selected: 'first', hiddenIds: ['third', 'fourth']},
      {
        containerWidth: 200,
        selected: 'second',
        hiddenIds: ['first', 'third', 'fourth'],
      },
    ].forEach(({containerWidth, hiddenIds, selected}) => {
      it(`when containerWidth is ${containerWidth} and selected is '${selected}' should contain hiddenIds [${hiddenIds.join(
        ', '
      )}] `, () => {
        expect(
          getHiddenIds(containerWidth, overflowTargetWidth, itemWidthCache, [selected])
        ).toEqual(hiddenIds);
      });
    });
  });
});
