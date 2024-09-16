export const useFormFieldLabel = createElemPropsHook(useFormFieldModel)(({state}) => {
  return {
    'aria-describedby': `input-${state.id}`,
  };
});
