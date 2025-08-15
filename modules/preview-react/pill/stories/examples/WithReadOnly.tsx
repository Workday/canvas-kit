import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
});

export const WithReadOnly = () => (
  <div className={flexStyles} id="read-only-list">
    <Pill variant="readOnly">Read-only</Pill>
    <Pill variant="readOnly" maxWidth={150}>
      Read-only but with super long text in case you want to read a paragraph in a Pill which we
      don't recommend
    </Pill>
  </div>
);
