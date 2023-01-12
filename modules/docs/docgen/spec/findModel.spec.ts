import {createProgramFromSource} from './createProgramFromSource';
import {findSymbols} from '../docParser';
import {findModel} from '../findModel';

describe.only('findModel', () => {
  it('should find an exported type of string', () => {
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
    expect(symbols).toHaveProperty('0.name', 'useIdModel');
    expect(symbols).toHaveProperty('0.type.kind', 'model');
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
    expect(symbols).toHaveProperty('0.type.state.0.name', 'c');
    expect(symbols).toHaveProperty('0.type.state.0.type.kind', 'primitive');
    expect(symbols).toHaveProperty('0.type.state.0.type.value', 'string');
    expect(symbols).toHaveProperty('0.type.events.0.name', 'open');
    expect(symbols).toHaveProperty('0.type.events.0.type.kind', 'function');
    expect(symbols).toHaveProperty('0.type.events.0.type.returnType.kind', 'primitive');
    expect(symbols).toHaveProperty('0.type.events.0.type.returnType.value', 'undefined');
    // expect(symbols).toHaveProperty('0.type.modelProperties', 'undefined');
  });

  it('should replace instances of "ReturnType<typeof useMyModel>" to a symbol of MyModel', () => {
    const program = createProgramFromSource(`
      export type MyType = ReturnType<typeof useMyModel>
    `);
    const symbols = findSymbols(program, 'test.ts', [findModel]); //?

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
          subModelConfig: {} as typeof useMyModel.TConfig
        },
        requiredConfig: {},
      })(config => {
        return {
          state: {},
          events: {}
        };
      });
    `);
    const symbols = findSymbols(program, 'test.ts', [findModel]); //?

    expect(symbols).toHaveProperty('0.name', 'useIdModel');
    expect(symbols).toHaveProperty('0.type.kind', 'model');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.kind', 'parameter');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.name', 'subModelConfig');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.defaultConfig.0.type.name', 'MyModelConfig');
  });

  it.only('should replace submodel references on modelProperties with the model', () => {
    const program = createProgramFromSource(`
      export const useIdModel = createModelHook({
        defaultConfig: {
          subModelConfig: {} as typeof useMyModel.TConfig
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
    // const useSubModel = (config: any) => {state: {}, events: {}}
    // const useIdModel = createModelHook({
    //   defaultConfig: {
    //     subModelConfig: {} as typeof useMyModel.TConfig
    //   },
    //   requiredConfig: {},
    // })(config => {
    //   const subModel = useSubModel(config.subModelConfig)
    //   return {
    //     state: {
    //       subModel
    //     },
    //     events: {}
    //   };
    // });
    const symbols = findSymbols(program, 'test.ts', [findModel]); //?

    expect(symbols).toHaveProperty('0.name', 'useIdModel');
    expect(symbols).toHaveProperty('0.type.kind', 'model');
    expect(symbols).toHaveProperty('0.type.state.0.kind', 'parameter');
    expect(symbols).toHaveProperty('0.type.state.0.name', 'subModel');
    expect(symbols).toHaveProperty('0.type.state.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.state.0.type.name', 'useSubModel');
  });
});
