import {Card} from '@workday/canvas-kit-react/card';
import {ExternalHyperlink, SecondaryButton} from '@workday/canvas-kit-react/button';
import {downloadIcon, fileIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type DownloadLLMFileProps = {
  rawFileLink: string;
  filename: string;
};

const flexBlock = createStencil({
  vars: {
    gap: system.space.x1,
  },
  base: ({gap}) => ({
    display: 'flex',
    alignItems: 'center',
    gap,
    code: {
      fontFamily: system.fontFamily.mono,
      padding: system.space.x1,
      paddingInline: system.space.x2,
      backgroundColor: system.color.bg.alt.softer,
      borderRadius: system.shape.half,
    },
  }),
});

export const DownloadLLMFile = ({rawFileLink, filename}: DownloadLLMFileProps) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(rawFileLink);
      const content = await response.text();

      const blob = new Blob([content], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  };

  return (
    <Card className="sb-unstyled" cs={{boxShadow: 'none', borderStyle: 'dashed'}}>
      <Card.Body cs={{display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center'}}>
        <div {...flexBlock()}>
          <SystemIcon icon={fileIcon} />
          <code>{filename}</code>
        </div>
        <div {...flexBlock({gap: system.space.x4})}>
          <ExternalHyperlink href={rawFileLink}>View raw file</ExternalHyperlink>
          <SecondaryButton icon={downloadIcon} size="small" onClick={handleDownload}>
            Download LLM File
          </SecondaryButton>
        </div>
      </Card.Body>
    </Card>
  );
};
