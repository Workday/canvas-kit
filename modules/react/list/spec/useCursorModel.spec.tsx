import {
  getOffsetItem,
  CursorState,
  getFirstOfRow,
  getLastOfRow,
  getPreviousPage,
  getNextPage,
} from '../lib/useCursorModel';

/**
 * This allows us to show grids in a more understandable way, but the code works with flattened arrays.
 *
 * ES2019 has a Array.flat which will work in Node, but we use some type definitions that were
 * removed in ES2019, so we'll use a polyfilled and typed utility function instead.
 */
function flatten<T>(arr: T[][]): T[] {
  return [].concat.apply([], arr as any);
}

// mocked id and state so we can isolate logic in our tests
// The `getId` allows us to use strings instead of objects
// The `createState` returns state that mocks unimportant parts the test isn't isolating
const getId = (input: string) => input;
const createState = <T extends any>(input: Partial<CursorState<T>>): CursorState<T> => {
  return {
    nonInteractiveIds: [],
    ...(input as CursorState<T>),
  };
};

describe('getFirstOfRow', () => {
  describe('when state represents a list', () => {
    const state = createState({items: ['1', '2', '3']});
    it('should return the first item', () => {
      expect(getFirstOfRow('2', {state, getId})).toEqual('1');
    });
  });

  describe('when state represents a grid', () => {
    const state = createState({
      items: flatten([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
      ]),
      columnCount: 3,
    });

    it('should return the first item of the first row', () => {
      expect(getFirstOfRow('2', {state, getId})).toEqual('1');
    });

    it('should return the first item of the second row when cursor is at 4', () => {
      expect(getFirstOfRow('4', {state, getId})).toEqual('4');
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getFirstOfRow('5', {state, getId})).toEqual('4');
    });

    it('should return the first item of the second row when cursor is at 6', () => {
      expect(getFirstOfRow('6', {state, getId})).toEqual('4');
    });
  });
});

describe('getPreviousPage', () => {
  describe('when state represents a list', () => {
    const state = createState({items: ['1', '2', '3']});
    it('should return the first item', () => {
      expect(getPreviousPage('2', {state, getId})).toEqual('1');
    });
  });

  describe('when state represents a grid', () => {
    const state = createState({
      items: flatten([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
      ]), // use flatten to make it easier to visualize a grid in code, but code requires a flat array
      columnCount: 3,
      cursorId: '2',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getPreviousPage('2', {state, getId})).toEqual('2');
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getPreviousPage('2', {state, getId})).toEqual('2');
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getPreviousPage('8', {state, getId})).toEqual('2');
    });
  });
});

describe('getNextPage', () => {
  describe('when state represents a list', () => {
    const state = createState({items: ['1', '2', '3']});
    it('should return the first item', () => {
      expect(getNextPage('2', {state, getId})).toEqual('3');
    });
  });

  describe('when state represents a grid', () => {
    const state = createState({
      items: flatten([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
      ]),
      columnCount: 3,
      cursorId: '2',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getNextPage('2', {state, getId})).toEqual('8');
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getNextPage('5', {state, getId})).toEqual('8');
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getNextPage('8', {state, getId})).toEqual('8');
    });
  });
});

describe('getLastOfRow', () => {
  describe('when state represents a list', () => {
    const state = createState({items: ['1', '2', '3']});
    it('should return the first item', () => {
      expect(getLastOfRow('2', {state, getId})).toEqual('3');
    });
  });

  describe('when state represents a grid', () => {
    const state = createState({
      items: flatten([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
      ]),
      columnCount: 3,
    });

    it('should return the last item of the first row', () => {
      expect(getLastOfRow('2', {state, getId})).toEqual('3');
    });

    it('should return the last item of the second row when cursor is at 4', () => {
      expect(getLastOfRow('4', {state, getId})).toEqual('6');
    });

    it('should return the last item of the second row when cursor is at 5', () => {
      expect(getLastOfRow('5', {state, getId})).toEqual('6');
    });

    it('should return the last item of the second row when cursor is at 6', () => {
      expect(getLastOfRow('6', {state, getId})).toEqual('6');
    });
  });
});

describe('getOffsetItem', () => {
  describe('when state represents a list', () => {
    const state = createState({items: ['1', '2', '3']});

    describe('when the offset is the next item', () => {
      it('should return the next item', () => {
        expect(getOffsetItem(1)('1', {state, getId})).toEqual('2');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(1)('1', {state: stateWithNonInteractive, getId})).toEqual('3');
      });

      it('should return the last item if cursor is already the last item', () => {
        expect(getOffsetItem(1)('3', {state, getId})).toEqual('3');
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item', () => {
        expect(getOffsetItem(-1)('2', {state, getId})).toEqual('1');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(-1)('3', {state: stateWithNonInteractive, getId})).toEqual('1');
      });

      it('should return the first item if cursor is already the first item and previous item is requested', () => {
        expect(getOffsetItem(-1)('1', {state, getId})).toEqual('1');
      });
    });
  });

  describe('when state represents a grid', () => {
    const state = createState({
      items: flatten([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
      ]),
      columnCount: 3,
    });

    describe('when the offset is the next item', () => {
      it('should return the next item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(1)('1', {state, getId})).toEqual('2');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(1)('1', {state: stateWithNonInteractive, getId})).toEqual('3');
      });

      it('should return the last item in a row when the initial item is already on the last item of the row', () => {
        expect(getOffsetItem(1)('3', {state, getId})).toEqual('3');
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(-1)('2', {state, getId})).toEqual('1');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['2']};
        expect(getOffsetItem(-1)('3', {state: stateWithNonInteractive, getId})).toEqual('1');
      });

      it('should return the first item in a row when the initial item is already on the first item of the row', () => {
        expect(getOffsetItem(-1)('4', {state, getId})).toEqual('4');
      });
    });

    describe('when the offset is the next row', () => {
      it('should return the item in the next row', () => {
        expect(getOffsetItem(3)('2', {state, getId})).toEqual('5');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['5']};
        expect(getOffsetItem(3)('2', {state: stateWithNonInteractive, getId})).toEqual('8');
      });

      it('should return the current item in a row when the initial item is already on the last row', () => {
        expect(getOffsetItem(3)('8', {state, getId})).toEqual('8');
      });
    });

    describe('when the offset is the previous row', () => {
      it('should return the item in the previous row', () => {
        expect(getOffsetItem(-3)('8', {state, getId})).toEqual('5');
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['5']};
        expect(getOffsetItem(-3)('8', {state: stateWithNonInteractive, getId})).toEqual('2');
      });

      it('should return the current item in a row if the initial item is already on the first row', () => {
        expect(getOffsetItem(-3)('2', {state, getId})).toEqual('2');
      });
    });
  });
});
