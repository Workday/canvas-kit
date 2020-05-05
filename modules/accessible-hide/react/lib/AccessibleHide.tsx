import * as React from 'react';
import styled from '@emotion/styled';

import {accessibleHide} from '@workday/canvas-kit-react-common';

export interface AccessibleHideProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccessibleHide = styled('div')<AccessibleHideProps>({
  ...accessibleHide,
});

export default AccessibleHide;
