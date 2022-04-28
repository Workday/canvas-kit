import {
  getOffsetItem,
  getFirstOfRow,
  getLastOfRow,
  getPreviousPage,
  getNextPage,
  useCursorListModel,
} from '../lib/useCursorListModel';

/**
 * This allows us to show grids in a more understandable way, but the code works with flattened arrays.
 *
 * ES2019 has a Array.flat which will work in Node, but we use some type definitions that were
 * removed in ES2019, so we'll use a polyfilled and typed utility function instead.
 */
function flatten<T>(arr: T[][]): T[] {
  return [].concat.apply([], arr as any);
}

type CursorListState = ReturnType<typeof useCursorListModel>['state'];

// mocked id and state so we can isolate logic in our tests
// The `getId` allows us to use strings instead of objects
// The `createState` returns state that mocks unimportant parts the test isn't isolating
const getId = (input: string) => input;
const createState = (input: Partial<CursorListState>): CursorListState => {
  return {
    nonInteractiveIds: [],
    ...(input as CursorListState),
  };
};

const createItem = (id, index) => ({id, index, value: id});

describe('getFirstOfRow', () => {
  describe('when state represents a list', () => {
    const items = ['1', '2', '3'].map(createItem);
    const state = createState({
      items,
    });

    it('should return the first item', () => {
      expect(getFirstOfRow('2', {state})).toEqual(items[0]);
    });
  });

  describe('when state represents a grid', () => {
    const items = flatten([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    it('should return the first item of the first row', () => {
      expect(getFirstOfRow('2', {state})).toEqual(items[0]);
    });

    it('should return the first item of the second row when cursor is at 4', () => {
      expect(getFirstOfRow('4', {state})).toEqual(items[3]);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getFirstOfRow('5', {state})).toEqual(items[3]);
    });

    it('should return the first item of the second row when cursor is at 6', () => {
      expect(getFirstOfRow('6', {state})).toEqual(items[3]);
    });
  });
});

describe('getPreviousPage', () => {
  describe('when state represents a list', () => {
    const items = ['1', '2', '3'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getPreviousPage('2', {state})).toEqual(items[0]);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '2',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getPreviousPage('2', {state})).toEqual(items[1]);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getPreviousPage('2', {state})).toEqual(items[1]);
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getPreviousPage('8', {state})).toEqual(items[1]);
    });
  });
});

describe('getNextPage', () => {
  describe('when state represents a list', () => {
    const items = ['1', '2', '3'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getNextPage('2', {state})).toEqual(items[2]);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '2',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getNextPage('2', {state})).toEqual(items[7]);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getNextPage('5', {state})).toEqual(items[7]);
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getNextPage('8', {state})).toEqual(items[7]);
    });
  });
});

describe('getLastOfRow', () => {
  describe('when state represents a list', () => {
    const items = ['1', '2', '3'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getLastOfRow('2', {state})).toEqual(items[2]);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    it('should return the last item of the first row', () => {
      expect(getLastOfRow('2', {state})).toEqual(items[2]);
    });

    it('should return the last item of the second row when cursor is at 4', () => {
      expect(getLastOfRow('4', {state})).toEqual(items[5]);
    });

    it('should return the last item of the second row when cursor is at 5', () => {
      expect(getLastOfRow('5', {state})).toEqual(items[5]);
    });

    it('should return the last item of the second row when cursor is at 6', () => {
      expect(getLastOfRow('6', {state})).toEqual(items[5]);
    });
  });
});

describe('getOffsetItem', () => {
  describe('when state represents a list', () => {
    const items = ['1', '2', '3'].map(createItem);
    const state = createState({items});

    describe('when the offset is the next item', () => {
      it('should return the next item', () => {
        expect(getOffsetItem(1)('1', {state})).toEqual(items[1]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(1)('1', {state: stateWithNonInteractive})).toEqual(items[2]);
      });

      it('should return the last item if cursor is already the last item', () => {
        expect(getOffsetItem(1)('3', {state})).toEqual(items[2]);
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item', () => {
        expect(getOffsetItem(-1)('2', {state})).toEqual(items[0]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(-1)('3', {state: stateWithNonInteractive})).toEqual(items[0]);
      });

      it('should return the first item if cursor is already the first item and previous item is requested', () => {
        expect(getOffsetItem(-1)('1', {state})).toEqual(items[0]);
      });
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    describe('when the offset is the next item', () => {
      it('should return the next item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(1)('1', {state})).toEqual(items[1]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(1)('1', {state: stateWithNonInteractive})).toEqual(items[2]);
      });

      it('should return the last item in a row when the initial item is already on the last item of the row', () => {
        expect(getOffsetItem(1)('3', {state})).toEqual(items[2]);
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(-1)('2', {state})).toEqual(items[0]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(-1)('3', {state: stateWithNonInteractive})).toEqual(items[0]);
      });

      it('should return the first item in a row when the initial item is already on the first item of the row', () => {
        expect(getOffsetItem(-1)('4', {state})).toEqual(items[3]);
      });
    });

    describe('when the offset is the next row', () => {
      it('should return the item in the next row', () => {
        expect(getOffsetItem(3)('2', {state})).toEqual(items[4]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['5']};
        expect(getOffsetItem(3)('2', {state: stateWithNonInteractive})).toEqual(items[7]);
      });

      it('should return the current item in a row when the initial item is already on the last row', () => {
        expect(getOffsetItem(3)('8', {state})).toEqual(items[7]);
      });
    });

    describe('when the offset is the previous row', () => {
      it('should return the item in the previous row', () => {
        expect(getOffsetItem(-3)('8', {state})).toEqual(items[4]);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['5']};
        expect(getOffsetItem(-3)('8', {state: stateWithNonInteractive})).toEqual(items[1]);
      });

      it('should return the current item in a row if the initial item is already on the first row', () => {
        expect(getOffsetItem(-3)('2', {state})).toEqual(items[1]);
      });
    });
  });
});
