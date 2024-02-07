import ts from 'typescript';

import {createStyleObjectNode} from '../../lib/utils/createStyleObjectNode';

describe('createStyleObjectNode', () => {
  it('should serialize styles with a hard-coded name and styles', () => {
    const node = createStyleObjectNode('padding:12px;');

    const printer = ts.createPrinter();
    const output = printer.printNode(ts.EmitHint.Unspecified, node, {} as any); //?

    expect(output).toMatch(/{ name: "[a-z0-9]+", styles: "padding:12px;" }/);
  });
});
