import {createProgramFromSource} from './createProgramFromSource';
import {findSymbols} from '../findSymbols';
import {findModel} from '../findModel';
import ts from 'typescript';

describe('findModel', () => {
  it.only('should find an exported type of string', () => {
    const program = createProgramFromSource(`
      export const useIdModel = createModelHook({
        defaultConfig: {a: ''},
        requiredConfig: {b: ''},
      })(config => {
        const c = 'c'
        const state = {c};
        return {
          state,
          events: {open: (value: string) => undefined},
          getId: () => true,
        };
      });
    `);
    const symbols = findSymbols(program, 'test.ts', [findModel]); //?

    // ts.sys.writeFile('model.json', JSON.stringify(symbols, null, '  ')) // uncomment to see full JSON
    expect(symbols).toHaveProperty('3.name', 'useIdModel');
    expect(symbols).toHaveProperty('3.type.kind', 'model');
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.name', 'a');
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.required', false);
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.defaultValue.kind', 'string');
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.defaultValue.value', '');
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('3.type.defaultConfig.0.type.value', 'string');
    expect(symbols).toHaveProperty('3.type.requiredConfig.0.name', 'b');
    expect(symbols).toHaveProperty('3.type.requiredConfig.0.required', true);
    expect(symbols).toHaveProperty('3.type.requiredConfig.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('3.type.requiredConfig.0.type.value', 'string');
    expect(symbols).toHaveProperty('3.type.state.0.name', 'c');
    expect(symbols).toHaveProperty('3.type.state.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('3.type.state.0.type.value', 'string');
    expect(symbols).toHaveProperty('3.type.events.0.name', 'open');
    expect(symbols).toHaveProperty('3.type.events.0.type.kind', 'function');
    expect(symbols).toHaveProperty('3.type.events.0.type.returnType.kind', 'primitive');
    expect(symbols).toHaveProperty('3.type.events.0.type.returnType.value', 'undefined');
    // expect(symbols).toHaveProperty('3.type.modelProperties', 'undefined');
  });
});
