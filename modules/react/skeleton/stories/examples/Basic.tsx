import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = {
  flex: createStyles({
    alignItems: 'center',
  }),
  box: createStyles({
    flex: 1,
    marginLeft: system.space.x3,
  }),
  shape: createStyles({
    width: system.space.x10,
    height: system.space.x10,
    borderRadius: system.shape.half,
  }),
};

export const Basic = () => {
  return (
    <Skeleton>
      <Flex cs={styles.flex}>
        <Skeleton.Shape cs={styles.shape} />
        <Box cs={styles.box}>
          <Skeleton.Header />
        </Box>
      </Flex>
      <Skeleton.Text />
    </Skeleton>
  );
};
