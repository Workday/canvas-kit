/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';
import * as React from 'react';
import * as systemIcons from '@workday/canvas-system-icons-web';
import {IconButton, IconButtonVariant} from '../../index';

const buttonLayout: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const blueBackground: CSSObject = {
  ...buttonLayout,
  backgroundColor: '#0875e1',
  padding: '12px',
  borderRadius: '4px',
};

export const Container = (props: any) => (
  <div css={props.blue ? blueBackground : buttonLayout}>{props.children}</div>
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

const isInverseVariant = (variant: IconButtonVariant) => {
  return [IconButton.Variant.Inverse, IconButton.Variant.InverseFilled].indexOf(variant) !== -1;
};

const iconGridStyles = (variant: IconButtonVariant): CSSObject => {
  const inverse = isInverseVariant(variant);

  return {
    ...(inverse && {background: '#0875e1'}),
    borderRadius: '4px',
    display: 'flex',
    flexWrap: 'wrap',
  };
};

const iconCellStyles = (variant: IconButtonVariant): CSSObject => {
  const inverse = isInverseVariant(variant);

  return {
    padding: '10px',
    textAlign: 'center',
    width: '75px',

    p: {
      ...(inverse && {color: '#fff'}),
      fontSize: '12px',
      margin: '12px 0 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };
};

// Convert systemIcons into an array
const systemIconArray = [];
for (const icon in systemIcons) {
  if (systemIcons[icon].filename) {
    systemIconArray.push(systemIcons[icon]);
  }
}

export const IconButtonToggleableGrid = ({buttonVariant}) => {
  const [toggled, setToggled] = React.useState(true);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div css={iconGridStyles(buttonVariant)}>
      {systemIconArray.map(icon => (
        <div css={iconCellStyles(buttonVariant)} key={icon.name}>
          <IconButton
            aria-label={icon.name}
            icon={icon}
            toggled={toggled}
            variant={buttonVariant}
            onClick={handleToggle}
          />
          <p title={icon.name}>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};
