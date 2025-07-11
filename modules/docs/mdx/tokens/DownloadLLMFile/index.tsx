import {Card} from '@workday/canvas-kit-react/card';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {downloadIcon, fileIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {content} from './content';

export const DownloadLLMFile = () => {
  const file = new Blob([content], {type: 'text/plain'});

  return (
    <Card cs={{boxShadow: 'none', borderStyle: 'dashed'}}>
      <Card.Body cs={{display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: cssVar(system.space.x1)}}>
          <SystemIcon icon={fileIcon} />
          <code>llm-token-migration.txt</code>
        </div>
        <SecondaryButton
          as="a"
          className="sb-unstyled"
          icon={downloadIcon}
          size="small"
          href={URL.createObjectURL(file)}
          download="llm-token-migration.txt"
          cs={{textDecoration: 'none'}}
        >
          Download LLM File
        </SecondaryButton>
      </Card.Body>
    </Card>
  );
};
