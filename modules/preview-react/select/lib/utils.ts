import {NormalizedOption} from './SelectBase';
/**
 * @deprecated ⚠️ `getIndexByValue` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--basic) instead.
 */
export const getIndexByValue = (options: NormalizedOption[], value: string | undefined): number => {
  if (!options || value === undefined) {
    return -1;
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === value) {
      return i;
    }
  }

  return -1;
};

// If the value doesn't exist in the options, return index 0
/**
 * @deprecated ⚠️ `getCorrectedIndexByValue` in Preview has been deprecated and will be removed in a future major version. Please use [`Select` in Main](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-select--docs) instead.
 */
export const getCorrectedIndexByValue = (
  options: NormalizedOption[],
  value: string | undefined
): number => {
  const indexByValue = getIndexByValue(options, value);

  return indexByValue === -1 ? 0 : indexByValue;
};
