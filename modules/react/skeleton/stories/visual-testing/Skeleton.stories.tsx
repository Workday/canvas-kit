import {Skeleton} from '@workday/canvas-kit-react/skeleton';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
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

const containerStyles = createStyles({
  width: '60%',
  height: '100%',
  margin: system.gap.sm,
});

const flexContainerStyles = createStyles({
  display: 'flex',
});

export const SkeletonStates = {
  render: () => (
    <div className="story">
      <h1>Custom Elements Skeleton</h1>
      <div>
        <Skeleton>
          <div className={flexContainerStyles}>
            <Skeleton.Shape
              cs={{width: system.size.xl, height: system.size.xl, borderRadius: system.shape.full}}
            />
            <span className={containerStyles}>
              <Skeleton.Header />
            </span>
          </div>
          <div>
            <Skeleton.Text lineCount={3} />
          </div>
        </Skeleton>
      </div>
      <h1>Header Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Header />
        </Skeleton>
      </div>
      <h1>Shape Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Shape
            cs={{width: px2rem(120), height: px2rem(120), borderRadius: system.shape.full}}
          />
        </Skeleton>
      </div>
      <h1>Custom Shape Skeleton</h1>
      <div className={flexContainerStyles}>
        <Skeleton>
          <Skeleton.Shape
            cs={{width: px2rem(200), height: system.size.xl, borderRadius: system.shape.sm}}
          />
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
