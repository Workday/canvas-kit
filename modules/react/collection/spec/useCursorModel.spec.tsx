import {
  getOffsetItem,
  getFirstOfRow,
  getLastOfRow,
  getPreviousPage,
  getNextPage,
  useCursorListModel,
  navigationManager,
  wrappingNavigationManager,
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
// The `createState` returns state that mocks unimportant parts the test isn't isolating
const createState = (input: Partial<CursorListState>): CursorListState => {
  return {
    nonInteractiveIds: [],
    ...(input as CursorListState),
  };
};

const createItem = (id, index) => ({id, index, value: id});

describe('getFirstOfRow', () => {
  describe('when state represents a list', () => {
    const items = ['0', '1', '2'].map(createItem);
    const state = createState({
      items,
    });

    it('should return the first item', () => {
      expect(getFirstOfRow(1, {state})).toEqual(0);
    });
  });

  describe('when state represents a grid', () => {
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    it('should return the first item of the first row', () => {
      expect(getFirstOfRow(1, {state})).toEqual(0);
    });

    it('should return the first item of the second row when cursor is at 4', () => {
      expect(getFirstOfRow(3, {state})).toEqual(3);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getFirstOfRow(4, {state})).toEqual(3);
    });

    it('should return the first item of the second row when cursor is at 6', () => {
      expect(getFirstOfRow(5, {state})).toEqual(3);
    });
  });
});

describe('getPreviousPage', () => {
  describe('when state represents a list', () => {
    const items = ['0', '1', '2'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getPreviousPage(1, {state})).toEqual(0);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getPreviousPage(1, {state})).toEqual(1);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getPreviousPage(1, {state})).toEqual(1);
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getPreviousPage(7, {state})).toEqual(1);
    });
  });
});

describe('getNextPage', () => {
  describe('when state represents a list', () => {
    const items = ['0', '1', '2'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getNextPage(1, {state})).toEqual(2);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    it('should return the first item of the second row when cursor is at 2', () => {
      expect(getNextPage(1, {state})).toEqual(7);
    });

    it('should return the first item of the second row when cursor is at 5', () => {
      expect(getNextPage(4, {state})).toEqual(7);
    });

    it('should return the first item of the second row when cursor is at 8', () => {
      expect(getNextPage(7, {state})).toEqual(7);
    });
  });
});

describe('navigationManager', () => {
  describe('when state represents a perfect grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    describe('getNextRow', () => {
      it('should return the second item of the second row when cursor is at 2', () => {
        expect(navigationManager.getNextRow(1, {state})).toEqual(4);
      });

      it('should return the second item of the last row when cursor is at 5', () => {
        expect(navigationManager.getNextRow(4, {state})).toEqual(7);
      });

      it('should return the original item when cursor is at 8', () => {
        expect(navigationManager.getNextRow(7, {state})).toEqual(7);
      });
    });

    describe('getPreviousRow', () => {
      it('should return the original item when cursor is at 2', () => {
        expect(navigationManager.getPreviousRow(1, {state})).toEqual(1);
      });

      it('should return the original item when cursor is at 3', () => {
        expect(navigationManager.getPreviousRow(2, {state})).toEqual(2);
      });
    });

    describe('getNext', () => {
      it('should return the original item when the cursor is on the last item', () => {
        expect(navigationManager.getNext(8, {state})).toEqual(8);
      });
    });

    describe('getPrevious', () => {
      it('should return the original item when the cursor is on the first item', () => {
        expect(navigationManager.getPrevious(0, {state})).toEqual(0);
      });
    });
  });

  describe('when state represents a imperfect grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    describe('getNextRow', () => {
      it('should return the second item of the second row when cursor is at 2', () => {
        expect(navigationManager.getNextRow(1, {state})).toEqual(4);
      });

      it('should return the second item of the last row when cursor is at 5', () => {
        expect(navigationManager.getNextRow(4, {state})).toEqual(7);
      });

      it('should return the original item when cursor is at 8', () => {
        expect(navigationManager.getNextRow(7, {state})).toEqual(7);
      });

      it('should return the original item when cursor is at 6', () => {
        expect(navigationManager.getNextRow(5, {state})).toEqual(5);
      });
    });

    describe('getPreviousRow', () => {
      it('should return the original item when cursor is at 2', () => {
        expect(navigationManager.getPreviousRow(1, {state})).toEqual(1);
      });

      it('should return the original item when cursor is at 3', () => {
        expect(navigationManager.getPreviousRow(2, {state})).toEqual(2);
      });
    });

    describe('getNext', () => {
      it('should return the original item when the cursor is on the last item', () => {
        expect(navigationManager.getNext(7, {state})).toEqual(7);
      });
    });

    describe('getPrevious', () => {
      it('should return the original item when the cursor is on the first item', () => {
        expect(navigationManager.getPrevious(0, {state})).toEqual(0);
      });
    });

    describe('getFirstOfRow', () => {
      it('should return 7 item when the cursor is at 8', () => {
        expect(navigationManager.getFirstOfRow(7, {state})).toEqual(6);
      });
    });

    describe('getLastOfRow', () => {
      it('should return the last item when the cursor is at 7', () => {
        expect(navigationManager.getLastOfRow(6, {state})).toEqual(7);
      });
    });
  });
});

describe('wrappingNavigationManager', () => {
  describe('when state represents a perfect grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    describe('getNextRow', () => {
      it('should return the second item of the second row when cursor is at 2', () => {
        expect(wrappingNavigationManager.getNextRow(1, {state})).toEqual(4);
      });

      it('should return the second item of the last row when cursor is at 5', () => {
        expect(wrappingNavigationManager.getNextRow(4, {state})).toEqual(7);
      });

      it('should return the second item of the first row when cursor is at 8', () => {
        expect(wrappingNavigationManager.getNextRow(7, {state})).toEqual(1);
      });
    });

    describe('getPreviousRow', () => {
      it('should return the second item of the last row when cursor is at 2', () => {
        expect(wrappingNavigationManager.getPreviousRow(1, {state})).toEqual(7);
      });

      it('should return the third item of the last row when cursor is at 3', () => {
        expect(wrappingNavigationManager.getPreviousRow(2, {state})).toEqual(8);
      });
    });

    describe('getNext', () => {
      it('should return the first item when the cursor is on the last item', () => {
        expect(wrappingNavigationManager.getNext(8, {state})).toEqual(0);
      });
    });

    describe('getPrevious', () => {
      it('should return the last item when the cursor is on the first item', () => {
        expect(wrappingNavigationManager.getPrevious(0, {state})).toEqual(8);
      });
    });
  });

  describe('when state represents a imperfect grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
      cursorId: '1',
    });

    describe('getNextRow', () => {
      it('should return the second item of the second row when cursor is at 2', () => {
        expect(wrappingNavigationManager.getNextRow(1, {state})).toEqual(4);
      });

      it('should return the second item of the last row when cursor is at 5', () => {
        expect(wrappingNavigationManager.getNextRow(4, {state})).toEqual(7);
      });

      it('should return the second item of the first row when cursor is at 8', () => {
        expect(wrappingNavigationManager.getNextRow(7, {state})).toEqual(1);
      });

      it('should return the third item of the first row when cursor is at 6', () => {
        expect(wrappingNavigationManager.getNextRow(5, {state})).toEqual(2);
      });
    });

    describe('getPreviousRow', () => {
      it('should return the second item of the last row when cursor is at 2', () => {
        expect(wrappingNavigationManager.getPreviousRow(1, {state})).toEqual(7);
      });

      it('should return the third item of the second row when cursor is at 3', () => {
        expect(wrappingNavigationManager.getPreviousRow(2, {state})).toEqual(5);
      });
    });

    describe('getNext', () => {
      it('should return the first item when the cursor is on the last item', () => {
        expect(wrappingNavigationManager.getNext(7, {state})).toEqual(0);
      });
    });

    describe('getPrevious', () => {
      it('should return the last item when the cursor is on the first item', () => {
        expect(wrappingNavigationManager.getPrevious(0, {state})).toEqual(7);
      });
    });

    describe('getFirstOfRow', () => {
      it('should return 7 item when the cursor is at 8', () => {
        expect(wrappingNavigationManager.getFirstOfRow(7, {state})).toEqual(6);
      });
    });

    describe('getLastOfRow', () => {
      it('should return the last item when the cursor is at 7', () => {
        expect(wrappingNavigationManager.getLastOfRow(6, {state})).toEqual(7);
      });
    });
  });
});

describe('getLastOfRow', () => {
  describe('when state represents a list', () => {
    const items = ['0', '1', '2'].map(createItem);
    const state = createState({items});
    it('should return the first item', () => {
      expect(getLastOfRow(1, {state})).toEqual(2);
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    it('should return the last item of the first row', () => {
      expect(getLastOfRow(1, {state})).toEqual(2);
    });

    it('should return the last item of the second row when cursor is at 4', () => {
      expect(getLastOfRow(3, {state})).toEqual(5);
    });

    it('should return the last item of the second row when cursor is at 5', () => {
      expect(getLastOfRow(4, {state})).toEqual(5);
    });

    it('should return the last item of the second row when cursor is at 6', () => {
      expect(getLastOfRow(5, {state})).toEqual(5);
    });
  });
});

describe('getOffsetItem', () => {
  describe('when state represents a list', () => {
    const items = ['0', '1', '2'].map(createItem);
    const state = createState({items});

    describe('when the offset is the next item', () => {
      it('should return the next item', () => {
        expect(getOffsetItem(1)(0, {state})).toEqual(1);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['1']};
        expect(getOffsetItem(1)(0, {state: stateWithNonInteractive})).toEqual(2);
      });

      it('should return the last item if cursor is already the last item', () => {
        expect(getOffsetItem(1)(2, {state})).toEqual(2);
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item', () => {
        expect(getOffsetItem(-1)(1, {state})).toEqual(0);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['1']};
        expect(getOffsetItem(-1)(2, {state: stateWithNonInteractive})).toEqual(0);
      });

      it('should return the first item if cursor is already the first item and previous item is requested', () => {
        expect(getOffsetItem(-1)(0, {state})).toEqual(0);
      });
    });
  });

  describe('when state represents a grid', () => {
    // use flatten to make it easier to visualize a grid in code, but code requires a flat array
    const items = flatten([
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
    ]).map(createItem);
    const state = createState({
      items,
      columnCount: 3,
    });

    describe('when the offset is the next item', () => {
      it('should return the next item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(1)(0, {state})).toEqual(1);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['1']};
        expect(getOffsetItem(1)(0, {state: stateWithNonInteractive})).toEqual(2);
      });

      it('should return the last item in a row when the initial item is already on the last item of the row', () => {
        expect(getOffsetItem(1)(2, {state})).toEqual(2);
      });
    });

    describe('when the offset is the previous item', () => {
      it('should return the previous item in the row when initial item is within the same row', () => {
        expect(getOffsetItem(-1)(1, {state})).toEqual(0);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['1']};
        expect(getOffsetItem(-1)(2, {state: stateWithNonInteractive})).toEqual(0);
      });

      it('should return the first item in a row when the initial item is already on the first item of the row', () => {
        expect(getOffsetItem(-1)(3, {state})).toEqual(3);
      });
    });

    describe('when the offset is the next row', () => {
      it('should return the item in the next row', () => {
        expect(getOffsetItem(3)(1, {state})).toEqual(4);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['4']};
        expect(getOffsetItem(3)(1, {state: stateWithNonInteractive})).toEqual(7);
      });

      it('should return the current item in a row when the initial item is already on the last row', () => {
        expect(getOffsetItem(3)(7, {state})).toEqual(7);
      });
    });

    describe('when the offset is the previous row', () => {
      it('should return the item in the previous row', () => {
        expect(getOffsetItem(-3)(7, {state})).toEqual(4);
      });

      it('should skip non-interactive items', () => {
        const stateWithNonInteractive = {...state, nonInteractiveIds: ['4']};
        expect(getOffsetItem(-3)(7, {state: stateWithNonInteractive})).toEqual(1);
      });

      it('should return the current item in a row if the initial item is already on the first row', () => {
        expect(getOffsetItem(-3)(1, {state})).toEqual(1);
      });
    });
  });
});
