import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {cssVar} from '@workday/canvas-kit-styling';

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
      backgroundColor={system.color.bg.contrast.default}
      borderRadius="m"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <pre ref={commandRef}>
        <span
          style={{
            color: cssVar(system.color.fg.primary.soft),
            marginInlineEnd: cssVar(system.space.x2),
          }}
        >
          {command}
        </span>
        <span style={{color: cssVar(system.color.fg.inverse)}}>{packageName}</span>
      </pre>
      <PrimaryButton variant="inverse" onClick={handleCopy} size="small">
        {copied ? 'Copied' : 'Copy'}
      </PrimaryButton>
    </Flex>
  );
};
