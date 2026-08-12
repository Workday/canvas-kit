import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  height: system.space.x16,
});

const statStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.zero,
});

const labelStyles = createStyles({
  ...system.type.subtext.medium,
  color: system.color.text.hint,
  margin: 0,
});

const valueStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.fontWeight.bold,
  margin: 0,
});

export const Vertical = () => {
  const lastIndex = stats.length - 1;
  return (
    <div className={rowStyles}>
      {stats.map((stat, index) => (
        <>
          <div className={statStyles}>
            <p className={labelStyles}>{stat.label}</p>
            <p className={valueStyles}>{stat.value}</p>
          </div>
          {index !== lastIndex && <Divider orientation="vertical" space={system.gap.md} />}
        </>
      ))}
    </div>
  );
};

const stats = [
  {label: 'Components', value: '128'},
  {label: 'Contributors', value: '64'},
  {label: 'Releases', value: '512'},
];
