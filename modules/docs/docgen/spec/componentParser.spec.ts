import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';
import {componentParser} from '../plugins/componentParser';

// prettier-ignore
describe('componentParser', () => {
  describe('React.Component', () => {
    it('should handle a component from a class extending from React.Component', () => {
      const program = createProgramFromSource('test.tsx',`
        export class A extends React.Component<Props> {}

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    });

    it('should handle a component from a class extending from Component', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export class A extends Component<Props> {}

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    });

    it('should handle a displayName', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export class A extends React.Component<Props> {
          static displayName = 'B'
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.displayName', 'B');

    });

    it('should handle a default prop from JSDoc', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export class A extends React.Component<Props> {}

        interface Props {
          /** @default {'b'} */
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
    });

    it('should handle a default prop from defaultProps', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export class A extends React.Component<Props> {
          static defaultProps = {
            a: 'b'
          }
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
    });
  })

  describe('function components', () => {
    it('should handle a function that returns JSX', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export function A (props: Props) {
          return <div />
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    })

    it('should handle deconstruction defaults a function that returns JSX', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export function A (props: Props) {
          return <div />
        }

        interface Props {
          /** @default {'b'} */
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
    })

    it('should handle deconstruction defaults a function that returns JSX', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export function A ({a='b'}: Props) {
          return <div />
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
    })

    it('should handle an arrow function that returns JSX', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export const A = (props: Props) => {
          return <div />
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    })

    it('should handle an function using React.FunctionComponent', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export const A: React.FC<Props> = (props) => {
          return <div />
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    })

    it('should handle an function using React.FunctionComponent', () => {
      const program = createProgramFromSource('test.tsx',`
        import React from 'react'

        export const A: React.FunctionComponent<Props> = (props) => {
          return <div />
        }

        interface Props {
          a: string
        }
      `);

      const docs = parse(program, 'test.tsx', [componentParser]); //?

      expect(docs).toHaveProperty('0.name', 'A');
      expect(docs).toHaveProperty('0.type.kind', 'component');
      expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
      expect(docs).toHaveProperty('0.type.props.0.name', 'a');
      expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    })
  })

  it('should handle an function using React.forwardRef', () => {
    const program = createProgramFromSource('test.tsx',`
      import React from 'react'

      export const A = React.forwardRef<any, Props>((props, ref) => {
        return <div />
      })

      interface Props {
        a: string
      }
    `);

    const docs = parse(program, 'test.tsx', [componentParser]); //?

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'component');
    expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.props.0.name', 'a');
    expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
  })

  it('should handle an function using React.forwardRef and default JSDoc', () => {
    const program = createProgramFromSource('test.tsx',`
      import React from 'react'

      export const A = React.forwardRef<any, Props>((props, ref) => {
        return <div />
      })

      interface Props {
        /** @default {'b'} */
        a: string
      }
    `);

    const docs = parse(program, 'test.tsx', [componentParser]); //?

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'component');
    expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.props.0.name', 'a');
    expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
    expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
  })

  it('should handle an function using React.forwardRef and default destructured props', () => {
    const program = createProgramFromSource('test.tsx',`
      import React from 'react'

      export const A = React.forwardRef<any, Props>(({a='b'}, ref) => {
        return <div />
      })

      interface Props {
        a: string
      }
    `);

    const docs = parse(program, 'test.tsx', [componentParser]); //?

    expect(docs).toHaveProperty('0.name', 'A');
    expect(docs).toHaveProperty('0.type.kind', 'component');
    expect(docs).toHaveProperty('0.type.props.0.kind', 'property');
    expect(docs).toHaveProperty('0.type.props.0.name', 'a');
    expect(docs).toHaveProperty('0.type.props.0.type.kind', 'primitive');
    expect(docs).toHaveProperty('0.type.props.0.type.value', 'string');
    expect(docs).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
    expect(docs).toHaveProperty('0.type.props.0.defaultValue.value', 'b');
  })
});
