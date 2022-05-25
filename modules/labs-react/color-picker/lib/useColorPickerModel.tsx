// /* eslint-disable workday-custom-rules/restricted-imports */
// import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';
// import {defaultGetId} from '@workday/canvas-kit-react/tabs/lib/list';
// // eslint-disable-next-line workday-custom-rules/restricted-imports
// import {
//   SelectionEvents,
//   SelectionModel,
//   SelectionModelConfig,
//   SelectionState,
//   useSelectionModel,
// } from '@workday/canvas-kit-react/tabs/lib/selection';
// import React from 'react';

// type ColorPickerState<T = unknown> = SelectionState<T> & {
//   color: string;
//   customColor: string;
// };

// type ColorPickerEvents<T = unknown> = SelectionEvents<T> & {
//   setColor(data: {color: string}): void;
//   setCustomColor(data: {color: string}): void;
// };

// export interface ColorPickerModel<T = unknown> extends SelectionModel<T> {
//   state: ColorPickerState<T>;
//   events: ColorPickerEvents<T>;
// }

// export const colorPickerEventMap = createEventMap<ColorPickerEvents>()({
//   guards: {
//     shouldSetColor: 'setColor',
//     shouldSetCustomColor: 'setCustomColor',
//   },
//   callbacks: {
//     onSetColor: 'setColor',
//     onSetCustomColor: 'setCustomColor',
//   },
// });

// export type ColorPickerModelConfig = {
//   initialColor?: string;
// } & Partial<ToModelConfig<ColorPickerState, ColorPickerEvents, typeof colorPickerEventMap>>;

// export const useColorPickerModel = <T extends unknown>(
//   config: ColorPickerModelConfig = {}
// ): ColorPickerModel => {
//   const model = useSelectionModel({columnCount: 8, ...(config as SelectionModelConfig<T>)});

//   const [color, setColor] = React.useState(config.initialColor || '');

//   const [customColor, setCustomColor] = React.useState('');
//   const getId = defaultGetId;

//   const state = {
//     ...model.state,
//     color,
//     customColor,
//   };

//   const events = useEventMap(colorPickerEventMap, state, config, {
//     ...model.events,

//     setCustomColor(data: {color: string}) {
//       setCustomColor(data.color);
//     },
//     setColor(data: {color: string}) {
//       setColor(data.color);
//     },
//   } as ColorPickerEvents<T>);

//   return {
//     getId: getId,
//     selection: model.selection,
//     state,
//     events,
//   };
// };

import {createModelHook} from '@workday/canvas-kit-react/common';
import {useListModel} from '@workday/canvas-kit-react/collection';
import React from 'react';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

export const useColorPickerModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    initialColor: '',
    columnCount: 8,
    id: '',
    // menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
  },
  requiredConfig: {
    ...useListModel.requiredConfig,
  },
})(config => {
  const [color, setColor] = React.useState(config.initialColor || '');
  const [customColor, setCustomColor] = React.useState('');
  const getId = config.id || config.getId;

  // const initialSelectedRef = React.useRef(config.initialTab);
  // const getId = config.getId || defaultGetId;

  // const items = config.items;

  const model = useListModel(useListModel.mergeConfig(config, {shouldVirtualize: false}));

  const state = {
    ...model.state,
    getId,
    color,
    customColor,
  };
  const events = {
    ...model.events,
    setColor(color: string) {
      setColor(color);
    },
    setCustomColor(color: string) {
      setCustomColor(color);
    },
  };

  // const menu = useMenuModel(
  //   useMenuModel.mergeConfig(config.menuConfig as Required<typeof config.menuConfig>, {
  //     id: `menu-${model.state.id}`,
  //     items: config.items,

  //     // nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
  //     // onSelect(data) {
  //     //   menu.events.hide();
  //     //   events.select(data);
  //     // },
  //     // onShow() {
  //     //   // Always select the first item when the menu is opened
  //     //   menu.events.goToFirst();
  //     // },
  //   })
  // );

  return {
    ...model,
    state,
    events,
    // menu,
  };
});
