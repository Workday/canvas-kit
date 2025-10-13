import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const styles = {
  conteiner: createStyles({
    '> *': {
      color: system.color.fg.stronger,
      display: 'inline-block',
      margin: system.space.x1,
      minHeight: system.space.x10,
      padding: system.space.x2,
      outlineOffset: px2rem(2),
    },
  }),
  grab: createStyles({
    cursor: 'grab',
    backgroundColor: base.red300,
    outline: `2px dashed ${base.red300}`,
  }),
  text: createStyles({
    cursor: 'text',
    backgroundColor: base.amber200,
    outline: `2px dashed ${base.amber200}`,
  }),
  wait: createStyles({
    cursor: 'wait',
    backgroundColor: base.blue400,
    outline: `2px dashed ${base.blue400}`,
  }),
};

export const Other = () => (
  <Box cs={styles.conteiner}>
    <Box cs={styles.grab}>Cursor Grab</Box>
    <Box cs={styles.text}>Cursor Text</Box>
    <Box cs={styles.wait}>Cursor Wait</Box>
  </Box>
);
