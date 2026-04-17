import React from 'react';

const Test = React.forwardRef<HTMLDivElement>(({as: Element = 'div', ...props}: any, ref) => {
  return <Element ref={ref} {...props} />;
});

const useTestModel = function() {};

describe('Test', () => {
  verifyComponent(Test, {modelFn: useTestModel});
});
