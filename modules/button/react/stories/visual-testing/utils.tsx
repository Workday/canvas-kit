/** @jsx jsx */
import {jsx, CSSObject} from '@emotion/core';

const buttonLayout: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const blueBackground: CSSObject = {
  ...buttonLayout,
  backgroundColor: '#0875e1',
  padding: '12px',
  borderRadius: '4px',
};

export const Container = (props: any) => (
  <div css={props.blue ? blueBackground : buttonLayout}>{props.children}</div>
);
