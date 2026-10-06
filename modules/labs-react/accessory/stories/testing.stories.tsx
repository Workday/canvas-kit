import {
  AccessoryFile,
  AccessoryFileType,
  AccessoryIcon,
  AccessoryIconVariant,
  AccessoryMedia,
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
const fileTypes: AccessoryFileType[] = [
  'pdf',
  'spreadsheet',
  'document',
  'presentation',
  'video',
  'file',
  'txt',
  'empty',
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
      {props => <AccessoryIcon icon={checkIcon} size={props.size} variant={props.variant} />}
    </ComponentStatesTable>
  </StaticStates>
);

export const AccessoryMediaStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
      columnProps={permutateProps({
        className: [{label: 'Default', value: ''}],
      })}
    >
      {props => <AccessoryMedia alt="Random photo" size={props.size} src={photo} />}
    </ComponentStatesTable>
  </StaticStates>
);

export const AccessoryFileStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        type: fileTypes.map(type => ({value: type, label: type})),
      })}
      columnProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
    >
      {props => <AccessoryFile size={props.size} type={props.type} />}
    </ComponentStatesTable>
  </StaticStates>
);
