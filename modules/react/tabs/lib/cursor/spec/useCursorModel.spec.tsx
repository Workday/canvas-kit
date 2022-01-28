import {renderHook} from '@testing-library/react-hooks';

import {getOffsetItem, CursorState} from '../useCursorModel';

const getId = (input: string) => input;
const createState = <T extends any>(input: Partial<CursorState<T>>): CursorState<T> =>
  input as CursorState<T>;

describe('getOffsetItem', () => {
  it('should return the next item', () => {
    expect(getOffsetItem(1)('0', {state: createState({items: ['1', '2']}), getId})).toEqual('2');
  });
});
