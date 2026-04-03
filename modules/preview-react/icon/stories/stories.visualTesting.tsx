import {SystemIcon} from '@workday/canvas-kit-preview-react/icon';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {imageIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Testing/Preview/Icons',
  component: SystemIcon,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SystemIconStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'Default',
          props: {},
        },
      ]}
      columnProps={[
        {
          label: 'Default',
          props: {},
        },
        {
          label: 'Hover',
          props: {className: 'hover'},
        },
      ]}
    >
      {props => <SystemIcon icon={imageIcon} {...props} />}
    </ComponentStatesTable>
  </StaticStates>
);
