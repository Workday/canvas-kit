import {
  ListBox,
  useGridModel,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  wrappingNavigationManager,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const wrappingGridStencil = createStencil({
  vars: {
    background: '',
  },
  base: ({background}) => ({
    width: system.size.md,
    border: `${px2rem(1)} solid black`,
    background,
  }),
});

const Item = createSubcomponent('button')({
  modelHook: useGridModel,
  elemPropsHook: useItem,
})((elemProps, Element, model) => {
  return (
    <Box
      as={Element}
      {...elemProps}
      cs={wrappingGridStencil({
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      })}
    />
  );
});

export const WrappingGrid = () => {
  const model = useGridModel({
    columnCount: 5,
    // @ts-ignore Create an array of [{id: 1}, ...{id: n}]
    items: [...Array(25).keys()].map(i => ({id: `${i + 1}`})),
    // we don't need virtualization here
    shouldVirtualize: false,
    navigation: wrappingNavigationManager,
  });

  return (
    <ListBox
      model={model}
      as={Flex}
      cs={{flexDirection: 'row', flexWrap: 'wrap', width: px2rem(200)}}
    >
      {item => <Item>{item.id}</Item>}
    </ListBox>
  );
};
