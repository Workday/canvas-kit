/// <reference path="verifyComponent.d.ts" />
import React from 'react';

const Test = React.forwardRef<HTMLDivElement>(({as: Element = 'div', ...props}: any, ref) => {
  return <Element ref={ref} {...props} />;
});

describe('Test', () => {
  verifyComponent(Test, {modelHook: function() {}});
});
