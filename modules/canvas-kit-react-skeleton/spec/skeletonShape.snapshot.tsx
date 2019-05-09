import * as React from 'react';
import {create} from 'react-test-renderer';
import SkeletonShape from '../lib/parts/skeletonShape';

describe('SkeletonShape', () => {
  test('default (no arguments)', () => {
    const subject = create(<SkeletonShape />);

    expect(subject).toMatchSnapshot();
  });

  test('shape with supplied props', () => {
    const subject = create(<SkeletonShape width={100} height={100} borderRadius={2} />);

    expect(subject).toMatchSnapshot();
  });
});
