import {
  Accessory,
  AccessoryIconVariant,
  AccessorySize,
} from '@workday/canvas-kit-labs-react/accessory';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {checkIcon} from '@workday/canvas-system-icons-web';

export default {
  title: 'Testing/Labs/Accessory',
  component: Accessory,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const sizes: AccessorySize[] = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'];
const variants: AccessoryIconVariant[] = [
  'grey',
  'green',
  'blue',
  'purple',
  'amber',
  'magenta',
  'red',
  'orange',
  'outline',
];

const photo = 'https://picsum.photos/seed/accessory/200/200';

export const AccessoryIconStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        variant: variants.map(variant => ({value: variant, label: variant})),
      })}
      columnProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
    >
      {props => (
        <Accessory size={props.size}>
          <Accessory.Icon icon={checkIcon} variant={props.variant} />
        </Accessory>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const AccessoryImageStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
      columnProps={permutateProps({
        className: [{label: 'Default', value: ''}],
      })}
    >
      {props => (
        <Accessory size={props.size}>
          <Accessory.Image alt="Random photo" src={photo} />
        </Accessory>
      )}
    </ComponentStatesTable>
  </StaticStates>
);
