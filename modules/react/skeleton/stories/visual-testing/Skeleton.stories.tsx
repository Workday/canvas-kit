import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Indicators/Skeleton',
  component: Skeleton,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const styles = {
  container: createStyles({
    width: '60%',
    height: '100%',
    margin: system.space.x2,
  }),
  flexContainer: createStyles({
    display: 'flex',
  }),
  shape50: createStyles({
    width: 50,
    height: 50,
    borderRadius: system.shape.round,
  }),
  shape120: createStyles({
    width: 120,
    height: 120,
    borderRadius: system.shape.round,
  }),
  shape200: createStyles({
    width: 200,
    height: 50,
    borderRadius: system.shape.x1,
  }),
};

export const SkeletonStates = {
  render: () => (
    <div className="story">
      <h1>Custom Elements Skeleton</h1>
      <div>
        <Skeleton>
          <div className={styles.flexContainer}>
            <Skeleton.Shape cs={styles.shape50} />
            <span className={styles.container}>
              <Skeleton.Header />
            </span>
          </div>
          <div>
            <Skeleton.Text lineCount={3} />
          </div>
        </Skeleton>
      </div>
      <h1>Header Skeleton</h1>
      <div className={styles.flexContainer}>
        <Skeleton>
          <Skeleton.Header />
        </Skeleton>
      </div>
      <h1>Shape Skeleton</h1>
      <div className={styles.flexContainer}>
        <Skeleton>
          <Skeleton.Shape cs={styles.shape120} />
        </Skeleton>
      </div>
      <h1>Custom Shape Skeleton</h1>
      <div className={styles.flexContainer}>
        <Skeleton>
          <Skeleton.Shape cs={styles.shape200} />
        </Skeleton>
      </div>
      <h1>Text Skeleton</h1>
      <Skeleton>
        <Skeleton.Text lineCount={2} />
      </Skeleton>
      <h1>Text Skeleton Line Count 1</h1>
      <Skeleton>
        <Skeleton.Text lineCount={1} />
      </Skeleton>
      <h1>Multiple Line Count</h1>
      <Skeleton>
        <Skeleton.Text lineCount={20} />
      </Skeleton>
    </div>
  ),
};
