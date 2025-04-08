import {getHiddenIds} from '../lib/useOverflowListModel';

describe('useOverflowModel', () => {
  describe('getHiddenIds', () => {
    const itemSizeCache = {
      first: 100,
      second: 150,
      third: 200,
      fourth: 250,
    };
    const overflowTargeSize = 100;

    [
      {
        containerSize: 100,
        gap: 0,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerSize: 199,
        gap: 0,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerSize: 200,
        gap: 0,
        selected: 'first',
        hiddenIds: ['second', 'third', 'fourth'],
      },
      {containerSize: 700, gap: 0, selected: 'first', hiddenIds: []},
      {containerSize: 350, gap: 0, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerSize: 549, gap: 0, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerSize: 550, gap: 0, selected: 'first', hiddenIds: ['fourth']},
      {
        containerSize: 250,
        gap: 0,
        selected: 'second',
        hiddenIds: ['first', 'third', 'fourth'],
      },
      // gap
      {
        containerSize: 100,
        gap: 10,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerSize: 199,
        gap: 10,
        selected: 'first',
        hiddenIds: ['first', 'second', 'third', 'fourth'],
      },
      {
        containerSize: 200,
        gap: 10,
        selected: 'first',
        hiddenIds: ['second', 'third', 'fourth'],
      },
      {containerSize: 729, gap: 10, selected: 'first', hiddenIds: ['fourth']},
      {containerSize: 730, gap: 10, selected: 'first', hiddenIds: []},
      {containerSize: 360, gap: 10, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerSize: 559, gap: 10, selected: 'first', hiddenIds: ['third', 'fourth']},
      {containerSize: 570, gap: 10, selected: 'first', hiddenIds: ['fourth']},
      {
        containerSize: 250,
        gap: 10,
        selected: 'second',
        hiddenIds: ['first', 'third', 'fourth'],
      },
    ].forEach(({containerSize, hiddenIds, gap, selected}) => {
      it(`when containerSize is ${containerSize} and selected is '${selected}' should contain hiddenIds [${hiddenIds.join(
        ', '
      )}] `, () => {
        expect(
          getHiddenIds(
            containerSize,
            gap,
            overflowTargeSize,
            itemSizeCache,
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
