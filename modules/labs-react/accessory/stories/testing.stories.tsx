import {
  AccessoryCalendar,
  AccessoryFavicon,
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
];

const photo =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 160 80">
      <rect width="160" height="80" fill="#1c2833"/>
      <circle cx="40" cy="40" r="22" fill="#243140"/>
      <circle cx="80" cy="28" r="18" fill="#0e1620"/>
      <circle cx="118" cy="48" r="24" fill="#2c3a48"/>
    </svg>`
  );

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

export const AccessoryFaviconStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
      columnProps={permutateProps({
        className: [{label: 'Gmail', value: ''}],
      })}
    >
      {props => <AccessoryFavicon size={props.size} url="gmail.com" />}
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

export const AccessoryCalendarStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: sizes.map(size => ({value: size, label: size})),
      })}
      columnProps={permutateProps({
        className: [{label: 'Apr 30', value: ''}],
      })}
    >
      {props => <AccessoryCalendar date={30} month="Apr" size={props.size} />}
    </ComponentStatesTable>
  </StaticStates>
);
