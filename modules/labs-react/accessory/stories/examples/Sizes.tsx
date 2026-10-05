import {Accessory} from '@workday/canvas-kit-labs-react/accessory';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.md,
  p: {
    minWidth: px2rem(104),
    margin: 0,
  },
});

const sizes = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'] as const;

export const Sizes = () => (
  <div className={containerStyles}>
    {sizes.map(size => (
      <div className={rowStyles} key={size}>
        <Subtext size="large">{size}</Subtext>
        <Accessory size={size}>
          <Accessory.Icon icon={checkIcon} />
        </Accessory>
      </div>
    ))}
  </div>
);
