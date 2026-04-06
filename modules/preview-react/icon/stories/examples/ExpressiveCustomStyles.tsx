import {searchIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon, expressiveIconStencil} from '@workday/canvas-kit-preview-react/icon';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
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

export const ExpressiveCustomStyles = () => {
  return (
    <>
      <div className={styles}>
        <Text>Icon with custom hover styles</Text>
        <ExpressiveIcon
          icon={searchIcon}
          cs={{
            '&:hover .wd-icon-fill': {
              fill: system.color.fg.success.default,
            },
            '&:hover .wd-icon-accent': {
              fill: system.color.surface.success.strong,
            },
          }}
        />
      </div>
      <div className={styles}>
        <Text>Using stencil variables</Text>
        <ExpressiveIcon
          icon={searchIcon}
          cs={{
            [expressiveIconStencil.vars.color]: system.color.fg.success.default,
            [expressiveIconStencil.vars.accentColor]: system.color.surface.success.strong,
            [expressiveIconStencil.vars.size]: system.size.lg,

            '&:hover .wd-icon-fill': {
              [expressiveIconStencil.vars.color]: system.color.fg.warning.strong,
            },
            '&:hover .wd-icon-accent': {
              [expressiveIconStencil.vars.accentColor]: system.color.surface.warning.strong,
            },
          }}
        />
      </div>
    </>
  );
};
