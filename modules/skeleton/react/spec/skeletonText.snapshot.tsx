import * as React from 'react';
import {create} from 'react-test-renderer';
import SkeletonText from '../lib/parts/skeletonText';

describe('SkeletonText', () => {
  test('default with two lines', () => {
    const subject = create(<SkeletonText lineCount={2} />);

    expect(subject).toMatchSnapshot();
  });

  test('one line', () => {
    const subject = create(<SkeletonText lineCount={1} />);

    expect(subject).toMatchSnapshot();
  });
  test('zero line', () => {
    const subject = create(<SkeletonText lineCount={0} />);

    expect(subject).toMatchSnapshot();
  });

  test('default with backgroundColor', () => {
    const subject = create(<SkeletonText lineCount={2} />);

    expect(subject).toMatchSnapshot();
  });
});
