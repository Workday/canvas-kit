import {SidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';

export default {
  title: 'Testing/Preview/Side Panel',
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SidePanelStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Standard Variant', props: {variant: 'standard'}},
        {label: 'Alternate Variant', props: {variant: 'alternate'}},
      ]}
      columnProps={permutateProps(
        {
          expanded: [
            {label: 'Collapsed', value: false},
            {label: 'Expanded', value: true},
            {label: '', value: undefined},
          ],
          origin: [
            {label: '(left)', value: 'left'},
            {label: '(right)', value: 'right'},
          ],
        },
        ({expanded, defaultExpanded}) => {
          // Don't show permutations of both values being defined (expanded prop always wins over defaultExpanded)
          if (expanded !== undefined && defaultExpanded !== undefined) {
            return false;
          }
          // Don't show if both are undefined
          if (expanded === undefined && defaultExpanded === undefined) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <div style={{height: 480}}>
          <SidePanel {...props} touched={false}>
            <SidePanel.ToggleButton aria-label="toggle button" />
          </SidePanel>
        </div>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
