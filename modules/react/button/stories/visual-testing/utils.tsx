import {createStyles} from '@workday/canvas-kit-styling';

import * as systemIcons from '@workday/canvas-system-icons-web';

const buttonLayout = createStyles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const blueBackground = createStyles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  padding: '12px',
  borderRadius: '4px',
});

export const Container = (props: any) => (
  <div className={props.blue ? blueBackground : buttonLayout}>{props.children}</div>
);

export const stateTableColumnProps = [
  {label: 'Default ', props: {className: '', disabled: false}},
  {label: 'Default Disabled', props: {className: '', disabled: true}},
  {label: 'Hover ', props: {className: 'hover', disabled: false}},
  {label: 'Hover Disabled', props: {className: 'hover', disabled: true}},
  {label: 'Focus ', props: {className: 'focus', disabled: false}},
  {label: 'Focus Hover ', props: {className: 'focus hover', disabled: false}},
  {label: 'Active ', props: {className: 'active', disabled: false}},
  {label: 'Active Hover ', props: {className: 'active hover', disabled: false}},
];

// Convert systemIcons into an array
const systemIconArray = [];
for (const icon in systemIcons) {
  if (systemIcons[icon].filename) {
    systemIconArray.push(systemIcons[icon]);
  }
}
