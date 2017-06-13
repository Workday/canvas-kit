import * as React from 'react';
import {create} from 'react-test-renderer';
import SkeletonHeader from '../lib/parts/skeletonHeader';

describe('SkeletonHeader', () => {
  test('default (no arguments)', () => {
    const subject = create(<SkeletonHeader />);

    expect(subject).toMatchSnapshot();
  });
});
