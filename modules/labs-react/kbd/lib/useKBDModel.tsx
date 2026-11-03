import {useListModel} from '@workday/canvas-kit-react/collection';
import {createModelHook} from '@workday/canvas-kit-react/common';

/**
 * The `KBD` model extends the [Collection System](/get-started/for-developers/guides/collection-api/).
 * It tracks the keyboard keys (`items`) and shares the `size` and `variant` of the keys with the
 * `KBD.Item` subcomponents.
 *
 * ```tsx
 * const model = useKBDModel({
 *   size: 'large',
 *   variant: 'plain',
 *   items: ['⌘', 'C'],
 * });
 *
 * <KBD model={model}>{item => <KBD.Item>{item}</KBD.Item>}</KBD>
 * ```
 */
export const useKBDModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /**
     * The keyboard keys to render. Each string represents the label of a single key (e.g. `Ctrl`,
     * `⌘`, `Enter`). When provided, use a render prop for the `KBD` children.
     */
    items: [] as string[],
    /**
     * The size of the `KBD` keys. Shared with each `KBD.Item`.
     * @default 'medium'
     */
    size: 'medium' as 'small' | 'medium' | 'large',
    /**
     * The variant of the `KBD` keys. Shared with each `KBD.Item`.
     * @default 'default'
     */
    variant: 'default' as 'plain' | 'default',
  },
  requiredConfig: useListModel.requiredConfig,
  contextOverride: useListModel.Context,
})(config => {
  const list = useListModel(
    useListModel.mergeConfig(config, {
      // `KBD` renders inline and has no scroll container, so virtualization would render no items
      shouldVirtualize: false,
    })
  );

  return {
    ...list,
    state: {
      ...list.state,
      size: config.size,
      variant: config.variant,
    },
  };
});
