import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-preview-react/icon';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  display: 'flex',
  gap: system.gap.md,
  margin: system.gap.md,
  alignItems: 'center',
  '&>span': {
    height: 'fit-content',
  },
});

export const SystemCustomStyles = () => {
  return (
    <>
      <div className={styles}>
        <Text>Icon with custom hover styles</Text>
        <SystemIcon
          icon={imageIcon}
          cs={{
            '&:hover .wd-icon-fill': {
              fill: system.color.fg.success.default,
            },
            '&:hover .wd-icon-accent': {
              fill: system.color.fg.success.strong,
            },
            '&:hover .wd-icon-background': {
              fill: system.color.surface.success.default,
            },
          }}
        />
      </div>
      <div className={styles}>
        <Text>Using stencil variables</Text>
        <SystemIcon
          icon={imageIcon}
          cs={{
            [systemIconStencil.vars.color]: system.color.fg.success.default,
            [systemIconStencil.vars.accentColor]: system.color.fg.success.strong,
            [systemIconStencil.vars.backgroundColor]: system.color.surface.success.default,
            [systemIconStencil.vars.size]: system.size.lg,

            '&:hover .wd-icon-fill': {
              [systemIconStencil.vars.color]: system.color.fg.warning.strong,
            },
            '&:hover .wd-icon-accent': {
              [systemIconStencil.vars.accentColor]: system.color.fg.warning.default,
            },
            '&:hover .wd-icon-background': {
              [systemIconStencil.vars.backgroundColor]: system.color.surface.warning.default,
            },
          }}
        />
      </div>
    </>
  );
};
