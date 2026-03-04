import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

declare global {
  interface Window {
    __MCP_BRIDGE__?: {
      request(method: string, params: unknown): Promise<unknown>;
      notify(method: string, params: unknown): void;
      on(event: string, callback: (data: unknown) => void): () => void;
      initialize(appInfo?: unknown): Promise<unknown>;
      updateModelContext(content: unknown): void;
      applyHostStyles(hostContext: unknown): void;
    };
  }
}

interface ExampleComponent extends React.ComponentType {
  __RAW__?: string;
}

export function ExampleCodeBlock({code}: {code: ExampleComponent}) {
  const [showCode, setShowCode] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const raw = code?.__RAW__;

  const handleSendToLLM = () => {
    if (!raw) {
      return;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setSent(true);
    timerRef.current = setTimeout(() => setSent(false), 2000);

    const bridge = window.__MCP_BRIDGE__;
    if (!bridge) {
      return;
    }

    bridge.request('ui/message', {
      role: 'user',
      content: [
        {type: 'text', text: `Here is a Canvas Kit code example:\n\n\`\`\`tsx\n${raw}\n\`\`\``},
      ],
    });
  };

  const Component = code;

  return (
    <div style={{margin: '16px 0'}}>
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: showCode ? '8px 8px 0 0' : '8px',
          padding: '24px',
          position: 'relative',
        }}
      >
        <Component />
        {raw && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              display: 'flex',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setShowCode(prev => !prev)}
              style={{
                background: 'none',
                border: '1px solid #c4c4c4',
                borderRight: 'none',
                borderBottom: 'none',
                borderRadius: '8px 0 0 0',
                padding: '4px 12px',
                fontSize: '12px',
                color: '#333',
                cursor: 'pointer',
              }}
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
          </div>
        )}
      </div>
      {showCode && raw && (
        <div style={{position: 'relative'}}>
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '16px 48px 16px 16px',
              borderRadius: '0 0 8px 8px',
              fontSize: '13px',
              lineHeight: '1.5',
            }}
          >
            {raw}
          </SyntaxHighlighter>
          <button
            title={sent ? 'Sent!' : 'Send code to LLM'}
            onClick={handleSendToLLM}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              background: sent ? '#22863a' : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px 0 0 0',
              padding: '8px 12px',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '16px',
              lineHeight: 1,
              transition: 'background 0.15s',
            }}
          >
            {sent ? '\u2713' : '\u2B61'}
          </button>
        </div>
      )}
    </div>
  );
}

export function SymbolDoc(_props: {name?: string; fileName?: string}) {
  return null;
}

export function SymbolDescription(_props: {name?: string; fileName?: string}) {
  return null;
}

export function Specifications(_props: {file?: string; name?: string}) {
  return null;
}

export function InformationHighlight({
  children,
}: React.PropsWithChildren<{variant?: string; className?: string; cs?: unknown}>) {
  return (
    <div
      style={{
        padding: '16px',
        margin: '16px 0',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        background: '#f5f5f5',
      }}
    >
      {children}
    </div>
  );
}
