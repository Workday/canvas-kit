import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface InstallBlockProps {
  command?: string;
  packageName?: string;
}

const blockStyles = createStyles({
  padding: system.padding.xs,
  backgroundColor: system.color.surface.contrast.default,
  borderRadius: system.shape.md,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const codeCommandStyles = createStyles({
  color: system.color.fg.info.default,
  marginInlineEnd: system.gap.sm,
});

const codePackageStyles = createStyles({
  color: system.color.fg.inverse,
});

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
    <Flex cs={blockStyles}>
      <pre ref={commandRef}>
        <span className={codeCommandStyles}>{command}</span>
        <span className={codePackageStyles}>{packageName}</span>
      </pre>
      <PrimaryButton variant="inverse" onClick={handleCopy} size="small">
        {copied ? 'Copied' : 'Copy'}
      </PrimaryButton>
    </Flex>
  );
};
