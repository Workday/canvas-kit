import {Accessory, AccessoryIconVariant} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

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

export const Variants = () => (
  <div className={rowStyles}>
    {variants.map(variant => (
      <Accessory key={variant}>
        <Accessory.Icon icon={checkIcon} variant={variant} />
      </Accessory>
    ))}
  </div>
);
