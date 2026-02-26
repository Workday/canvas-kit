import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {system} from '@workday/canvas-tokens-web';

export const Shape = () => {
  return (
    <Skeleton>
      <Skeleton.Shape
        cs={{width: system.size.xxl, height: system.size.xxl, borderRadius: system.shape.full}}
      />
    </Skeleton>
  );
};
