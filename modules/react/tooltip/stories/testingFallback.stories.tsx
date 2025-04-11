import {Grid} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Popups/Tooltip',
  component: Tooltip,
};

const grid = createStyles({
  gridTemplateAreas: "'topButton topButton''leftButton rightButton''bottomButton bottomButton'",
  height: calc.subtract('100vh', system.space.x16),
  width: calc.subtract('100vw', system.space.x20),
});

const topButton = createStyles({
  gridArea: 'topButton',
  justifySelf: 'center',
});
const rightButton = createStyles({
  gridArea: 'rightButton',
  justifySelf: 'right',
  alignSelf: 'center',
});
const bottomButton = createStyles({
  gridArea: 'bottomButton',
  justifySelf: 'center',
  alignSelf: 'end',
  bottom: calc.subtract(system.space.x4, system.space.x10),
});
const leftButton = createStyles({
  gridArea: 'leftButton',
  justifySelf: 'left',
  alignSelf: 'center',
});

export const TooltipWithFallbackPlacements = () => {
  return (
    <div data-testid="scroll-area-fallback-placement">
      <Grid cs={grid}>
        <Tooltip
          type="describe"
          title={
            <div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>
          }
        >
          <SecondaryButton cs={topButton}>Placement Top</SecondaryButton>
        </Tooltip>
        <Tooltip
          type="describe"
          placement="left"
          title={
            <div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>
          }
        >
          <SecondaryButton cs={leftButton}>Placement Left</SecondaryButton>
        </Tooltip>
        <Tooltip
          type="describe"
          placement="right"
          title={
            <div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>
          }
        >
          <SecondaryButton cs={rightButton}>Placement Right</SecondaryButton>
        </Tooltip>
        <Tooltip
          type="describe"
          placement="bottom"
          title={
            <div>
              This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
            </div>
          }
        >
          <SecondaryButton cs={bottomButton}>Placement Bottom</SecondaryButton>
        </Tooltip>
      </Grid>
    </div>
  );
};
