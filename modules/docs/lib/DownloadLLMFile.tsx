import {ExternalHyperlink, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Card} from '@workday/canvas-kit-react/card';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {documentIcon, downloadIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

type DownloadLLMFileProps = {
  rawFileLink: string;
  filename: string;
};

const flexBlock = createStencil({
  vars: {
    gap: '',
  },
  base: ({gap}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: cssVar(gap, system.gap.xs),
    code: {
      fontFamily: system.fontFamily.mono,
      padding: system.padding.xxs,
      paddingInline: system.padding.xs,
      backgroundColor: system.color.surface.alt.default,
      borderRadius: px2rem(2),
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
          <SystemIcon icon={documentIcon} />
          <code>{filename}</code>
        </div>
        <div {...flexBlock({gap: system.gap.md})}>
          <ExternalHyperlink href={rawFileLink}>View raw file</ExternalHyperlink>
          <SecondaryButton icon={downloadIcon} size="small" onClick={handleDownload}>
            Download LLM File
          </SecondaryButton>
        </div>
      </Card.Body>
    </Card>
  );
};
