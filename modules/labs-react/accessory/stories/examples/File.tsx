import {AccessoryFile, AccessoryFileType} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

const types: AccessoryFileType[] = [
  'pdf',
  'spreadsheet',
  'document',
  'presentation',
  'video',
  'file',
  'txt',
];

export const File = () => (
  <div className={rowStyles}>
    {types.map(type => (
      <AccessoryFile key={type} type={type} />
    ))}
    <AccessoryFile size="large" type="pdf" />
  </div>
);
