import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export interface InstallBlockProps {
  command?: string;
  packageName?: string;
}

export const InstallBlock = ({command, packageName}: InstallBlockProps) => {
  const commandRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setCopied(false), 600);
  }, [copied]);
  const handleCopy = () => {
    setCopied(true);
    if (commandRef.current) {
      navigator.clipboard.writeText(commandRef.current.innerText);
    }
  };
  return (
    <Flex
      padding="xs"
      backgroundColor={colors.licorice500}
      borderRadius="m"
      justifyContent="space-between"
      alignItems="center"
      flexWrap='wrap'
    >
      <pre ref={commandRef}>
        <span style={{color: colors.blueberry200}}>{command}</span>{' '}
        <span style={{color: colors.frenchVanilla100}}>{packageName}</span>
      </pre>
      <PrimaryButton variant="inverse" onClick={handleCopy} size="small">
        {copied ? 'Copied' : 'Copy'}
      </PrimaryButton>
    </Flex>
  );
};
