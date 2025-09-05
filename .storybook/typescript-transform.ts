import ts from 'typescript';

import config from '../styling.config';
import styleTransformer from '@workday/canvas-kit-styling-transform';

export default function transform(program: ts.Program) {
  return styleTransformer(program, config);
}
