import {getHiddenIds} from '../lib/useOverflowListModel';

describe('useOverflowModel', () => {
  describe('getHiddenIds', () => {
    const itemWidthCache = {
      first: 100,
      second: 150,
      third: 200,
      fourth: 250,
    };
    const overflowTargetWidth = 100;

    [
      {
        containerWidth: 100,
        gap: 0,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 199,
        gap: 0,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 200,
        gap: 0,
        selected: 'first',
        hiddenIds: ['second', 'third', 'fourth'],
      },
      {containerWidth: 700, gap: 0, selected: 'first', hiddenIds: []},
      {containerWidth: 350, gap: 0, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerWidth: 549, gap: 0, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerWidth: 550, gap: 0, selected: 'first', hiddenIds: ['fourth']},
      {
        containerWidth: 250,
        gap: 0,
        selected: 'second',
        hiddenIds: ['first', 'third', 'fourth'],
      },
      // gap
      {
        containerWidth: 100,
        gap: 10,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 199,
        gap: 10,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerWidth: 200,
        gap: 10,
        selected: 'first',
        hiddenIds: ['second', 'third', 'fourth'],
      },
      {containerWidth: 729, gap: 10, selected: 'first', hiddenIds: ['fourth']},
      {containerWidth: 730, gap: 10, selected: 'first', hiddenIds: []},
      {containerWidth: 360, gap: 10, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerWidth: 559, gap: 10, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerWidth: 570, gap: 10, selected: 'first', hiddenIds: ['fourth']},
      {
        containerWidth: 250,
        gap: 10,
        selected: 'second',
        hiddenIds: ['first', 'third', 'fourth'],
      },
    ].forEach(({containerWidth, hiddenIds, gap, selected}) => {
      it(`when containerWidth is ${containerWidth} and selected is '${selected}' should contain hiddenIds [${hiddenIds.join(
        ', '
      )}] `, () => {
        expect(
          getHiddenIds(
            containerWidth,
            gap,
            overflowTargetWidth,
            itemWidthCache,
            [selected],
            [
              {id: 'first', value: 'first', index: 0, textValue: 'first'},
              {id: 'second', value: 'second', index: 1, textValue: 'second'},
              {id: 'third', value: 'third', index: 2, textValue: 'third'},
              {id: 'fourth', value: 'fourth', index: 3, textValue: 'fourth'},
            ]
          )
        ).toEqual(hiddenIds);
      });
    });
  });
});
