import {Global, css} from '@emotion/core';
import fonts from '../../modules/react-fonts';
import * as React from 'react';

export default (storyFn: () => React.ReactNode) => (
  <>
    <Global styles={css(fonts)} />
    {storyFn()}
  </>
);
