import {ExternalHyperlink, Hyperlink} from '@workday/canvas-kit-react/button';

export const InBodyText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    <Hyperlink href="#hyperlink">tempor incididunt</Hyperlink> ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in
    <ExternalHyperlink href="#hyperlink">
      voluptate velit esse cillum dolore eu fugiat
    </ExternalHyperlink>
    nulla pariatur.
  </p>
);
