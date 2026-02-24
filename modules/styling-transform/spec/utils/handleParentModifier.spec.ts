import ts from 'typescript';

import {_reset, transform, withDefaultContext} from '../../lib/styleTransform';
import {compileCSS} from '../../lib/utils/createStyleObjectNode';
import {createProgramFromSource} from '../createProgramFromSource';

describe('handleParentModifier', () => {
  let program: ts.Program;
  let result: string;

  const styles = {};
  const names = {};
  const extractedNames = {};

  beforeAll(() => {
    _reset();
    program = createProgramFromSource(`
      import {createStencil, parentModifier} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: {},
        modifiers: {
          size: {
            large: {padding: 20},
            small: {padding: 10}
          }
        }
      })

      const childStencil = createStencil({
        base: {
          [parentModifier(buttonStencil.modifiers.size.large)]: {
            color: 'blue',
          }
        }
      })
    `);

    result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {styles, names, extractedNames})
    );
  });

  it('should add a mapping from the CSS class name to the hash to the names cache', () => {
    expect(names).toHaveProperty(
      names['buttonStencil.modifiers.size.large'],
      names['buttonStencil.modifiers.size.large'].replace('css-', 'm')
    );
  });

  it('should add a mapping from the hash to the extracted CSS class name to the extractedNames cache', () => {
    expect(extractedNames).toHaveProperty(
      names['buttonStencil.modifiers.size.large'].replace('css-', 'm'),
      'css-button--size-large'
    );
  });

  it('should transform the runtime to include a selector with only the hash', () => {
    expect(result).toContain(
      `.${names['buttonStencil.modifiers.size.large'].replace('css-', 'm')} :where(&){color:blue;}`
    );
  });

  it('should extract CSS to include the fully qualified modifier name', () => {
    expect(styles['test.css']).toContainEqual(
      compileCSS(`
          .css-child {
            box-sizing: border-box;
          }
          .css-button--size-large :where(.css-child) {
            color: blue;
          }
      `)
    );
  });
});
