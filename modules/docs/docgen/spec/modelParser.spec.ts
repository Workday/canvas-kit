import ts from 'typescript';

import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';
import {modelParser} from '../modelParser';

describe('modelParser', () => {
  it('should handle models', () => {
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
    const symbols = parse(program, 'test.ts', [modelParser]); //?
    // ts.sys.writeFile('model.json', JSON.stringify(symbols, null, '  '))

    // modelHook
    expect(symbols).toHaveProperty('0.name', 'useIdModel');
    expect(symbols).toHaveProperty('0.type.kind', 'modelHook');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.name', 'a');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.required', false);
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.defaultValue.kind', 'string');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.defaultValue.value', '');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.value', 'string');
    expect(symbols).toHaveProperty('0.type.requiredConfig.0.name', 'b');
    expect(symbols).toHaveProperty('0.type.requiredConfig.0.required', true);
    expect(symbols).toHaveProperty('0.type.requiredConfig.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('0.type.requiredConfig.0.type.value', 'string');

    // model
    expect(symbols).toHaveProperty('1.name', 'IdModel');
    expect(symbols).toHaveProperty('1.type.kind', 'model');
    expect(symbols).toHaveProperty('1.type.state.0.name', 'c');
    expect(symbols).toHaveProperty('1.type.state.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('1.type.state.0.type.value', 'string');
    expect(symbols).toHaveProperty('1.type.events.0.name', 'open');
    expect(symbols).toHaveProperty('1.type.events.0.type.kind', 'function');
    expect(symbols).toHaveProperty('1.type.events.0.type.returnType.kind', 'primitive');
    expect(symbols).toHaveProperty('1.type.events.0.type.returnType.value', 'undefined');
    expect(symbols).toHaveProperty('1.type.modelProperties.0.kind', 'property');
    expect(symbols).toHaveProperty('1.type.modelProperties.0.name', 'getId');
    expect(symbols).toHaveProperty('1.type.modelProperties.0.type.kind', 'function');
    expect(symbols).toHaveProperty('1.type.modelProperties.0.type.parameters', []);
    expect(symbols).toHaveProperty('1.type.modelProperties.0.type.returnType.kind', 'primitive');
    expect(symbols).toHaveProperty('1.type.modelProperties.0.type.returnType.value', 'boolean');

    // modelHook config
    expect(symbols).toHaveProperty('2.name', 'IdModelConfig');
    expect(symbols).toHaveProperty('2.type.kind', 'object');
    expect(symbols).toHaveProperty('2.type.properties.0.name', 'a');
    expect(symbols).toHaveProperty('2.type.properties.0.required', false);
    expect(symbols).toHaveProperty('2.type.properties.0.defaultValue.kind', 'string');
    expect(symbols).toHaveProperty('2.type.properties.0.defaultValue.value', '');
    expect(symbols).toHaveProperty('2.type.properties.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('2.type.properties.0.type.value', 'string');
    expect(symbols).toHaveProperty('2.type.properties.1.name', 'b');
    expect(symbols).toHaveProperty('2.type.properties.1.required', true);
    expect(symbols).toHaveProperty('2.type.properties.1.type.kind', 'primitive');
    expect(symbols).toHaveProperty('2.type.properties.1.type.value', 'string');
    // callback
    expect(symbols).toHaveProperty('2.type.properties.2.name', 'onOpen');
    expect(symbols).toHaveProperty('2.type.properties.2.kind', 'property');
    expect(symbols).toHaveProperty('2.type.properties.2.type.kind', 'function');
    expect(symbols).toHaveProperty('2.type.properties.2.type.parameters.0.kind', 'parameter');
    expect(symbols).toHaveProperty('2.type.properties.2.type.parameters.0.name', 'state');
    expect(symbols).toHaveProperty('2.type.properties.2.type.parameters.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty(
      '2.type.properties.2.type.parameters.0.type.name',
      'IdModelState'
    );
    // guard
    expect(symbols).toHaveProperty('2.type.properties.3.name', 'shouldOpen');
    expect(symbols).toHaveProperty('2.type.properties.3.kind', 'property');
    expect(symbols).toHaveProperty('2.type.properties.3.type.kind', 'function');
    expect(symbols).toHaveProperty('2.type.properties.3.type.parameters.0.kind', 'parameter');
    expect(symbols).toHaveProperty('2.type.properties.3.type.parameters.0.name', 'state');
    expect(symbols).toHaveProperty('2.type.properties.3.type.parameters.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty(
      '2.type.properties.3.type.parameters.0.type.name',
      'IdModelState'
    );

    // model state
    expect(symbols).toHaveProperty('3.name', 'IdModelState');

    // model events
    expect(symbols).toHaveProperty('4.name', 'IdModelEvents');
  });

  it('should replace instances of "ReturnType<typeof useMyModel>" to a symbol of MyModel', () => {
    const program = createProgramFromSource(`
      export type MyType = ReturnType<typeof useMyModel>
    `);
    const symbols = parse(program, 'test.ts', [modelParser]); //?

    // ts.sys.writeFile('model.json', JSON.stringify(symbols, null, '  ')) // uncomment to see full JSON
    expect(symbols).toHaveProperty('0.name', 'MyType');
    expect(symbols).toHaveProperty('0.type.kind', 'type');
    expect(symbols).toHaveProperty('0.type.value.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.value.name', 'useMyModel');
  });

  it('should replace instances of "typeof useMyModel.TConfig" with "MyModelConfig"', () => {
    const program = createProgramFromSource(`
      export const useIdModel = createModelHook({
        defaultConfig: {
          subModelConfig: {} as typeof useMyModel.TConfig,
          colors: []
        },
        requiredConfig: {},
      })(config => {
        return {
          state: {},
          events: {}
        };
      });
    `);
    const symbols = parse(program, 'test.ts', [modelParser]); //?

    expect(symbols).toHaveProperty('0.name', 'useIdModel');
    expect(symbols).toHaveProperty('0.type.kind', 'modelHook');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.kind', 'property');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.name', 'subModelConfig');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.name', 'MyModelConfig');
  });

  it('should replace submodel references on modelProperties with the model', () => {
    const program = createProgramFromSource(`
      export const useIdModel = createModelHook({
        defaultConfig: {
          subModelConfig: {} as typeof useMyModel.TConfig,
        },
        requiredConfig: {},
      })(config => {
        const subModel = useSubModel(config.subModelConfig)
        return {
          state: {
            subModel
          },
          events: {}
        };
      });
      export const useSubModel = (config: any) => ({state: {}, events: {}})
    `);
    const symbols = parse(program, 'test.ts', [modelParser]); //?

    expect(symbols).toHaveProperty('1.name', 'IdModel');
    expect(symbols).toHaveProperty('1.type.kind', 'model');
    expect(symbols).toHaveProperty('1.type.state.0.kind', 'property');
    expect(symbols).toHaveProperty('1.type.state.0.name', 'subModel');
    expect(symbols).toHaveProperty('1.type.state.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty('1.type.state.0.type.name', 'SubModel');
  });
});
