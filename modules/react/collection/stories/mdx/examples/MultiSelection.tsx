import {
  ListBox,
  ListItemProps,
  getCursor,
  multiSelectionManager,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const useMultiSelectItem = composeHooks(
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

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
  displayName: 'MultiSelectableItem',
  modelHook: useListModel,
  elemPropsHook: useMultiSelectItem,
})<ListItemProps>((elemProps, Element, model) => {
  const backgroundColor = model.state.selectedIds.includes(elemProps['data-id'])
    ? system.color.surface.alt.default
    : system.color.surface.default;

  return (
    <Element
      role="listitem"
      {...handleCsProp(elemProps, itemStencil({background: backgroundColor}))}
    />
  );
});

export const MultiSelection = () => {
  const model = useListModel({
    initialSelectedIds: ['first', 'second'],
    selection: multiSelectionManager,
    orientation: 'horizontal',
  });
  return (
    <>
      <ListBox model={model}>
        <Item data-id="first">First</Item>
        <Item data-id="second">Second</Item>
        <Item data-id="third">Third</Item>
      </ListBox>

      <p>Cursor ID: {getCursor(model.state)}</p>
      <p>
        Selected IDs: {(model.state.selectedIds !== 'all' ? model.state.selectedIds : []).join(',')}
      </p>
    </>
  );
};
