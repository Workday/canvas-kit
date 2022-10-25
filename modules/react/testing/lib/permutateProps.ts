import {PropCombination, PropDeclaration, Props, PropsDeclaration} from './propTypes';

export const permutateProps = (
  allProps: PropsDeclaration,
  filter?: (props: Props) => boolean,
  remainingProps: string[] = Object.keys(allProps),
  values: {[key: string]: PropDeclaration} = {}
): PropCombination[] => {
  // When there are no more props to combine with, return result
  const prop = remainingProps[0];
  if (!prop) {
    const props: Props = {};
    Object.keys(values).forEach(prop => {
      props[prop] = values?.[prop]?.value;
    });

    if (filter && !filter(props)) {
      return [];
    }

    const label = Object.keys(values)
      .map(prop => values?.[prop]?.label)
      .join(' ');

    return [
      {
        label,
        props,
      },
    ];
  }
  const possiblePropValues = allProps[prop];

  const permutations = possiblePropValues?.map((value: PropDeclaration) => {
    const newValues = {...values}; // Required so we don't overwrite previous references
    newValues[prop] = value;

    return permutateProps(
      allProps,
      filter,
      remainingProps!.slice(1, remainingProps!.length),
      newValues
    );
  });

  return (permutations as any).flat();
};
