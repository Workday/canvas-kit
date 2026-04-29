import {Card} from '@workday/canvas-kit-react/card';
import {Placement} from '@workday/canvas-kit-react/popup';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const placementCardStyles = createStyles({
  boxShadow: system.depth[2],
  display: 'flex',
  width: base.size100,
  height: base.size100,
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: system.padding.xxs,
});

const blockStyles = createStyles({
  padding: base.size100, // give enough room for the tooltips to fit around their targets
  display: 'grid',
  gridTemplateColumns: '100px 320px 100px',
  gridTemplateRows: '100px 320px 100px',
});

export const Placements = () => {
  const placementStyles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const createPlacement = (placement: string, index) => {
    return (
      <Tooltip title="Add" placement={placement as Placement} key={index}>
        <Card cs={placementCardStyles}>
          <Card.Body>{placement}</Card.Body>
        </Card>
      </Tooltip>
    );
  };

  return (
    <div className={blockStyles}>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['top-start', 'top', 'top-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['left-start', 'left', 'left-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['right-start', 'right', 'right-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['bottom-start', 'bottom', 'bottom-end'].map(createPlacement)}
      </div>
      <div />
    </div>
  );
};
