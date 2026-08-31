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
import {createStencil, createStyles, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const itemStencil = createStencil({
  vars: {
    background: '',
  },
  base: ({background}) => ({
    background,
    width: system.size.md,
    border: `${px2rem(1)} solid ${system.color.border.strong}`,
  }),
});

const Item = createSubcomponent('button')({
  modelHook: useGridModel,
  elemPropsHook: useItem,
})((elemProps, Element, model) => {
  const backgroundColor = model.state.selectedIds.includes(elemProps['data-id'])
    ? system.color.surface.alt.default
    : system.color.surface.default;

  return (
    <Box as={Element} {...handleCsProp(elemProps, itemStencil({background: backgroundColor}))} />
  );
});

const listBoxStyles = createStyles({
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: px2rem(200),
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
    <ListBox model={model} as={Flex} cs={listBoxStyles}>
      {item => <Item>{item.id}</Item>}
    </ListBox>
  );
};
