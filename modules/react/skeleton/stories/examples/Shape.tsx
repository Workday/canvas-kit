import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  shape: createStyles({
    width: system.space.x16,
    height: system.space.x16,
    borderRadius: system.shape.round,
  }),
};

export const Shape = () => {
  return (
    <Skeleton>
      <Skeleton.Shape cs={styles.shape} />
    </Skeleton>
  );
};
