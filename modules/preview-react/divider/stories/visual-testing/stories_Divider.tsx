import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {withSnapshotsEnabled} from '../../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/Preview/Divider',
  component: Divider,
});

const blockStyles = createStyles({
  'h3, p': {
    margin: 0,
  },
});

export const DividerStates = () => {
  return (
    <StaticStates>
      <ComponentStatesTable
        columnProps={[{label: 'Default', props: {}}]}
        rowProps={[
          {
            label: 'Default Space',
            props: {},
          },
          {
            label: 'Custom Space',
            props: {space: system.gap.xl},
          },
        ]}
      >
        {props => {
          return (
            <div className={blockStyles}>
              <h3>Quote of the Day</h3>
              <Divider {...props} />
              <p>
                "It is not our differences that divide us. It is our inability to recognize, accept,
                and celebrate those differences." – Audre Lorde
              </p>
            </div>
          );
        }}
      </ComponentStatesTable>
    </StaticStates>
  );
};
