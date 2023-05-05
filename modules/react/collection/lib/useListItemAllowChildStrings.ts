import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useListModel} from '@workday/canvas-kit-react/collection';

/**
 * This elemProps hook allows for children values to be considered identifiers if the children
 * are strings. This can be useful for autocomplete or select components that allow string values.
 * This hook must be defined _before_ {@link useListItemRegister} because it sets the `data-id`
 * attribute if one hasn't been defined by the application.
 *
 * An example might look like:
 * ```tsx
 * const useMyListItem = composeHooks(
 *   // any other hooks here
 *   useListItemSelect,
 *   useListItemRegister,
 *   useListItemAllowChildStrings
 * )
 *
 *
 * <MyList onSelect={({id}) => {
 *   console.log(id) // will be "First" or "Second"
 * }}>
 *   <MyList.Item>First</MyList.Item>
 *   <MyList.Item>Second</MyList.Item>
 * </MyList>
 * ```
 */
export const useListItemAllowChildStrings = createElemPropsHook(useListModel)(
  (_, __, elemProps: {'data-id'?: string; children?: React.ReactNode} = {}) => {
    const props: {'data-id'?: string} = {};
    if (!elemProps['data-id'] && typeof elemProps.children === 'string') {
      props['data-id'] = elemProps.children;
    }

    return props;
  }
);
