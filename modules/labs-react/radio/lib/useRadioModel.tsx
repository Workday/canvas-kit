import React, {useState} from 'react';

import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  createModelHook,
} from '@workday/canvas-kit-react/common';

export const useRadioModel = createModelHook({
  defaultConfig: {name: '', value: ''},
})(config => {
  const [value, setValue] = React.useState<string | number>(config.value || '');
  // const [checked, setChecked] = useState(false);
  // const [disabled, setDisabled] = useState(false);
  const state = {value};

  const events = {
    onChange(
      existingOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
      index: number,
      event: React.ChangeEvent<HTMLInputElement>
    ): void {
      if (existingOnChange) {
        existingOnChange(event);
      }

      const target = event.currentTarget;
      if (target && target.value) {
        setValue(target.value);
      }
    },
  };

  return {
    state,
    events,
  };
});

// type RadioState = {
//   open: boolean;
//   // value?: string | number;
// };

// type RadioEvents = {
//   open(data: {}): void;
//   close(data: {}): void;
//   // onChange(value: string | number): void;
// };

// export type RadioModel = Model<RadioState, RadioEvents>;

// const radioEventMap = createEventMap<RadioEvents>()({
//   guards: {
//     shouldOpen: 'open',
//     shouldClose: 'close',
//   },
//   callbacks: {
//     onOpen: 'open',
//     onClose: 'close',
//   },
// });

// export type RadioModelConfig = {
//   initialOpen?: boolean;
// } & Partial<ToModelConfig<RadioState, RadioEvents, typeof radioEventMap>>;

// export const useRadioModel = (config: RadioModelConfig = {}): RadioModel => {
//   const [open, setOpen] = React.useState(config.initialOpen || false);

//   const state = {
//     open,
//   };

//   const events = useEventMap(radioEventMap, state, config, {
//     open(data) {
//       setOpen(true);
//     },
//     close(data) {
//       setOpen(false);
//     },
//   });

//   return {
//     state,
//     events,
//   };
// };
