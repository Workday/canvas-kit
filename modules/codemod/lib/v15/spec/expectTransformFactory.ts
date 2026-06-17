import {runInlineTest} from 'jscodeshift/dist/testUtils';

export const expectTransformFactory =
  (fn: Function) => (input: string, expected: string, options?: Record<string, any>) => {
    return runInlineTest(fn, options, {source: input}, expected, {parser: 'tsx'});
  };
