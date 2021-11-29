import * as React from 'react';
import CodeSandboxer, {Props as CodeSandboxButtonProps, GitInfo} from 'react-codesandboxer';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

const defaultGitInfo = {
  account: 'workday',
  repository: 'canvas-kit',
  host: 'github',
} as GitInfo;

const baseDependencies = {
  '@emotion/react': '11.4.0',
  '@workday/canvas-kit-labs-react': 'latest',
  '@workday/canvas-kit-preview-react': 'latest',
  '@workday/canvas-kit-react': 'latest',
  '@workday/canvas-system-icons-web': 'latest',
  '@workday/canvas-kit-react-fonts': 'latest',
};

const template = `
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";

import {
  styled,
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme
} from "@workday/canvas-kit-react/common";
import { type } from "@workday/canvas-kit-react/tokens";
import { fonts } from "@workday/canvas-kit-react-fonts";

import { Basic } from './example';

const Container = styled("div")(...fonts, {
  ...type.levels.body.small
});

export default function App() {
  const canvasTheme: PartialEmotionCanvasTheme = {
    canvas: {
      direction: ContentDirection.LTR
    }
  };

  return (
    <CanvasProvider theme={canvasTheme}>
      <Container>
        <h1 css={type.levels.heading.large}>Hello, Canvas Kit V5!</h1>
        <Basic />
      </Container>
    </CanvasProvider>
  );
}
`;

const indexTsx = `
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));
`;

export const CodeSandboxButton = ({
  // Ideally, instead of fetching the file from GH like we're doing here,
  // we could use the `example` prop and provide a raw string value of the example from our local directory (one less API call).
  // But we'd need to use raw-loader in our webpack config.
  examplePath,
  gitInfo = defaultGitInfo,
  dependencies,
  ...props
}: CodeSandboxButtonProps) => {
  return (
    <CodeSandboxer
      examplePath={examplePath}
      gitInfo={gitInfo}
      // adding these files to overwrite the default ones made by react-codesandboxer.
      providedFiles={{'App.tsx': {content: template}, 'index.tsx': {content: indexTsx}}}
      dependencies={{...baseDependencies, ...dependencies}}
      {...props}
    >
      {() => (
        <TertiaryButton type="submit" size="small">
          Upload to CodeSandbox
        </TertiaryButton>
      )}
    </CodeSandboxer>
  );
};
