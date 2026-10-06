import {
  AccessoryIcon,
  AccessoryMedia,
  AccessorySize,
} from '@workday/canvas-kit-labs-react/accessory';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {documentIcon, playCircleIcon} from '@workday/canvas-system-icons-web';
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

const sizes: AccessorySize[] = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'];

const photo = 'https://picsum.photos/seed/accessory/200/200';

export const CustomColor = () => (
  <div className={containerStyles}>
    {sizes.map(size => (
      <div className={rowStyles} key={size}>
        <Subtext size="large">{size}</Subtext>
        <AccessoryIcon
          background={system.color.accent.warning}
          color={system.color.fg.warning.strong}
          icon={documentIcon}
          size={size}
        />
        <AccessoryMedia
          alt=""
          background={system.color.accent.info}
          color={system.color.fg.inverse}
          icon={playCircleIcon}
          objectFit="contain"
          size={size}
          src={photo}
        />
      </div>
    ))}
  </div>
);
