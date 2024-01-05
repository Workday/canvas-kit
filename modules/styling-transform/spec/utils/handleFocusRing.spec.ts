import {transform, _reset} from '../../lib/styleTransform';
import {createProgramFromSource} from '../createProgramFromSource';
import {handleFocusRing} from '../../lib/utils/handleFocusRing';

describe('handleFocusRing', () => {
  beforeEach(() => {
    _reset();
  });

  it('should rewrite focusRing with no arguments', () => {
    const program = createProgramFromSource(`
      const styles = {...focusRing()}
    `);

    const result = transform(program, 'test.ts', {transformers: [handleFocusRing]}); //?

    expect(result).toContain(
      'styles = { ...{ boxShadow: `0 0 0 ${"0px"} ${"--cnvs-base-palette-french-vanilla-100"}, 0 0 0 calc(${"2px"} + ${"0px"}) ${"--cnvs-brand-common-focus-outline"}` } }'
    );
  });

  it('should rewrite focusRing with arguments', () => {
    const program = createProgramFromSource(`
      const styles = {...focusRing({
        width: '10px',
        separation: '1px',
        innerColor: myVars.boxShadowInner,
        outerColor: 'red'
      })}
    `);

    const result = transform(program, 'test.ts', {transformers: [handleFocusRing]}); //?

    expect(result).toContain(
      "const styles = { ...{ boxShadow: `0 0 0 ${'1px'} ${myVars.boxShadowInner}, 0 0 0 calc(${'10px'} + ${'1px'}) ${'red'}` } }"
    );
  });

  it('should rewrite focusRing with inset "inner"', () => {
    const program = createProgramFromSource(`
      const styles = {...focusRing({
        width: '10px',
        separation: '1px',
        innerColor: 'blue',
        outerColor: 'red',
        inset: 'inner'
      })}
    `);

    const result = transform(program, 'test.ts', {transformers: [handleFocusRing]}); //?

    expect(result).toContain(
      "const styles = { ...{ boxShadow: `inset 0 0 0 ${'1px'} ${'blue'}, 0 0 0 ${'10px'} ${'red'}` } }"
    );
  });

  it('should rewrite focusRing with inset "outer"', () => {
    const program = createProgramFromSource(`
      const styles = {...focusRing({
        width: '10px',
        separation: '1px',
        innerColor: 'blue',
        outerColor: 'red',
        inset: 'outer'
      })}
    `);

    const result = transform(program, 'test.ts', {transformers: [handleFocusRing]}); //?

    expect(result).toContain(
      "const styles = { ...{ boxShadow: `inset 0 0 0 ${'1px'} ${'red'} inset 0 0 0 calc(${'10px'} + ${'1px'}) ${'blue'}` } }"
    );
  });
});
