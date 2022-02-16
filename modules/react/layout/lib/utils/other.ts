export type OtherStyleProps = {
  animation?: string;
};

const otherProps = {
  animation: (value: string) => {
    return {animation: value};
  },
};

export function other<P extends OtherStyleProps>(props: P) {
  for (const key in props) {
    if (key in otherProps) {
      const value = props[key as keyof OtherStyleProps] as keyof OtherStyleProps;
      const styleFn = otherProps[key as keyof OtherStyleProps];
      return styleFn(value);
    }
  }
  return {};
}
