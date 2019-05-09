import * as React from 'react';
import {create} from 'react-test-renderer';
import Skeleton from '../lib/skeleton';

describe('Skeleton', () => {
  test('Single Span', () => {
    const subject = create(
      <Skeleton>
        <span> Hello </span>
      </Skeleton>
    );

    expect(subject).toMatchSnapshot();
  });
});
