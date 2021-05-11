import {NormalizedOption} from './SelectBase';

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
export const getCorrectedIndexByValue = (
  options: NormalizedOption[],
  value: string | undefined
): number => {
  const indexByValue = getIndexByValue(options, value);

  return indexByValue === -1 ? 0 : indexByValue;
};
