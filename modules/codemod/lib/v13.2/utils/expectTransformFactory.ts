import {Options, Transform} from 'jscodeshift';
import {runInlineTest} from 'jscodeshift/src/testUtils';

export const expectTransformFactory =
  (fn: Transform) =>
  (input: string, expected: string, options: Options = {}) => {
    return runInlineTest(fn, options, {source: input}, expected, {parser: 'tsx'});
  };
