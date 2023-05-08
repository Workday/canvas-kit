import React from 'react';

import {renderHook} from '@testing-library/react-hooks';
import {useListModel, useListItemAllowChildStrings} from '@workday/canvas-kit-react/collection';

describe('useListItemAllowChildStrings', () => {
  it('should add a [data-id] attribute equal to the string value', () => {
    const {result} = renderHook(() => {
      const model = useListModel();
      return useListItemAllowChildStrings(model, {children: 'Foobar'});
    });

    expect(result.current).toHaveProperty('data-id', 'Foobar');
  });

  it('should not add a [data-id] attribute if the child is not a string', () => {
    const {result} = renderHook(() => {
      const model = useListModel();
      return useListItemAllowChildStrings(model, {children: <div>FooBar</div>});
    });

    expect(result.current).not.toHaveProperty('data-id');
  });
});
