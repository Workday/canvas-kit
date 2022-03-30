import React from 'react';
import {useVirtual} from 'react-virtual';

import {
  useListModel,
  useListRegisterItem,
  useListRenderItems,
  ListModel,
  ListItemProps,
  ListProps,
  useListRovingFocus,
} from '@workday/canvas-kit-react/list';
import {composeHooks} from '@workday/canvas-kit-react/common';

const ListModelContext = React.createContext<ListModel>({} as any);

interface Item {
  id: string;
  text: string;
}

const items: Item[] = Array(1000)
  .fill(true)
  .map((_, index) => ({id: String(index + 1), text: `Item - ${index + 1}`}));

const List = React.forwardRef(
  (
    {model, ...props}: ListProps & React.HTMLAttributes<HTMLUListElement>,
    ref: React.Ref<HTMLUListElement>
  ) => {
    return (
      <ListModelContext.Provider value={model}>
        <ul ref={ref} {...props}>
          {useListRenderItems(model, props.children)}
        </ul>
      </ListModelContext.Provider>
    );
  }
);

const useItem = composeHooks(useListRovingFocus, useListRegisterItem);

const Item = React.forwardRef(
  (
    elemProps: ListItemProps & React.HTMLAttributes<HTMLLIElement>,
    ref: React.Ref<HTMLLIElement>
  ) => {
    const model = React.useContext(ListModelContext);

    const props = useItem(model, elemProps, ref);
    // const props = elemProps;

    return <li {...props} />;
  }
);

export const BasicVirtual = () => {
  const parentRef = React.useRef<HTMLDivElement>();
  // const virtual = useVirtual({
  //   size: items.length,
  //   parentRef,
  //   // estimateSize: React.useCallback(() => 20, []),
  // });
  const model = useListModel({
    items,
    getId(item: Item) {
      return item.id;
    },
  });

  // React.useEffect(() => {
  //   // get the index of the cursorId:
  //   // const id = model.state.items.
  //   virtual.scrollToIndex(Number(model.state.cursorId) - 1);
  //   requestAnimationFrame(() => {
  //     document
  //       .querySelector<HTMLElement>(`[id="${model.state.id}-${model.state.cursorId}"]`)
  //       ?.focus();
  //   });
  // }, [model.state.cursorId]);

  console.log('virtualized', model.state.isVirtualized);

  return (
    <>
      <div
        ref={parentRef}
        style={{
          maxHeight: `350px`,
          width: `300px`,
          overflow: 'auto',
        }}
      >
        <List model={model}>{(item: Item) => <Item>{item.text}</Item>}</List>
      </div>
      <ul>
        <div>
          <li>One</li>
          <li>Two</li>
        </div>
      </ul>
      <p>CursorId: {model.state.cursorId}</p>
    </>
  );

  return (
    <>
      <div
        ref={parentRef}
        style={{
          maxHeight: `350px`,
          width: `300px`,
          overflow: 'auto',
        }}
      >
        <List style={{height: virtual.totalSize, position: 'relative'}} model={model}>
          {virtual.virtualItems.map(item => {
            return (
              <Item
                ref={item.measureRef}
                aria-setsize={item.size}
                aria-posinset={item.index}
                key={items[item.index].id}
                name={items[item.index].id}
                style={{
                  // height: item.size,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${item.start}px)`,
                }}
              >
                {items[item.index].text}
              </Item>
            );
          })}
        </List>
      </div>
      <p>CursorId: {model.state.cursorId}</p>
    </>
  );
};
