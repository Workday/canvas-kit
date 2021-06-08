import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../mapTypeTokensToNewHierarchy';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Labs Type Tokens Map Codemod', () => {
  context('when transforming type from canvas default imports (main)', () => {
    context('when transforming type properties (fontFamily, fontSize, and fontWeight)', () => {
      it('should properly transform object styles', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            fontFamily: canvas.type.h2.fontFamily,
            fontSize: canvas.type.h2.fontSize,
            fontWeight: canvas.type.h2.fontWeight,
          };

          const bodyStyles = {
            fontFamily: canvas.type.body.fontFamily,
            fontSize: canvas.type.body.fontSize,
            fontWeight: canvas.type.body.fontWeight,
          };
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            fontFamily: canvas.type.properties.fontFamilies.default,
            fontSize: canvas.type.properties.fontSizes[24],
            fontWeight: canvas.type.properties.fontWeights.bold,
          };

          const bodyStyles = {
            fontFamily: canvas.type.properties.fontFamilies.default,
            fontSize: canvas.type.properties.fontSizes[14],
            fontWeight: canvas.type.properties.fontWeights.regular,
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvas.type.h2.fontFamily,
                fontSize: canvas.type.h2.fontSize,
                fontWeight: canvas.type.h2.fontWeight,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvas.type.body.fontFamily,
                fontSize: canvas.type.body.fontSize,
                fontWeight: canvas.type.body.fontWeight,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvas.type.properties.fontFamilies.default,
                fontSize: canvas.type.properties.fontSizes[24],
                fontWeight: canvas.type.properties.fontWeights.bold,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvas.type.properties.fontFamilies.default,
                fontSize: canvas.type.properties.fontSizes[14],
                fontWeight: canvas.type.properties.fontWeights.regular,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvas.type.h2.fontFamily,
            fontSize: canvas.type.h2.fontSize,
            fontWeight: canvas.type.h2.fontWeight,
          });
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvas.type.properties.fontFamilies.default,
            fontSize: canvas.type.properties.fontSizes[24],
            fontWeight: canvas.type.properties.fontWeights.bold,
          });
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type hierarchy levels', () => {
      it('should properly transform object styles', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            ...canvas.type.h2
          };

          const bodyStyles = {
            ...canvas.type.body
          };
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            ...canvas.type.levels.heading.small
          };

          const bodyStyles = {
            ...canvas.type.levels.subtext.large
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvas.type.h2}}>Section Heading</h2>
              <p css={canvas.type.body}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvas.type.levels.heading.small}}>Section Heading</h2>
              <p css={canvas.type.levels.subtext.large}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')(
            canvas.type.h2
          );
        `;

        const expected = `
          import canvas from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')(
            canvas.type.levels.heading.small
          );
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type variants', () => {
      context('when transforming the error variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const errorStyles = {
              ...canvas.type.variant.error,
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const errorStyles = {
              ...canvas.type.variants.error,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variant.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variant.error}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variants.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variants.error}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variant.error
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variants.error
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the hint variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const hintStyles = {
              ...canvas.type.variant.hint,
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const hintStyles = {
              ...canvas.type.variants.hint,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variant.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variant.hint}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variants.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variants.hint}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variant.hint
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variants.hint
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the inverse variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const inverseStyles = {
              ...canvas.type.variant.inverse,
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const inverseStyles = {
              ...canvas.type.variants.inverse,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variant.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variant.inverse}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variants.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variants.inverse}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variant.inverse
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvas.type.variants.inverse
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the button variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const buttonStyles = {
              ...canvas.type.variant.button
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const buttonStyles = {
              fontWeight: canvas.type.properties.fontWeights.bold
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={canvas.type.variant.button}>button</button>
                  <button css={{
                    ...canvas.type.variant.button,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={{
                    fontWeight: canvas.type.properties.fontWeights.bold
                  }}>button</button>
                  <button css={{
                    fontWeight: canvas.type.properties.fontWeights.bold,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Button = styled('button')(
              canvas.type.variant.button
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Button = styled('button')(
              {
                fontWeight: canvas.type.properties.fontWeights.bold
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the caps variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const capStyles = {
              ...canvas.type.variant.caps
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const capStyles = {
              fontWeight: canvas.type.properties.fontWeights.medium,
              textTransform: "uppercase"
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variant.caps}>Section Heading</h2>
                <p css={{display: 'block', ...canvas.type.variant.caps}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontWeight: canvas.type.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontWeight: canvas.type.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const CapSection = styled('section')(
              canvas.type.variant.caps
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const CapSection = styled('section')(
              {
                fontWeight: canvas.type.properties.fontWeights.medium,
                textTransform: "uppercase"
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the label variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const labelStyles = {
              ...canvas.type.variant.label
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const labelStyles = {
              fontWeight: canvas.type.properties.fontWeights.medium
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={canvas.type.variant.label}>label</label>
                  <label css={{
                    ...canvas.type.variant.label,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={{
                    fontWeight: canvas.type.properties.fontWeights.medium
                  }}>label</label>
                  <label css={{
                    fontWeight: canvas.type.properties.fontWeights.medium,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Label = styled('label')(
              canvas.type.variant.label
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const Label = styled('label')(
              {
                fontWeight: canvas.type.properties.fontWeights.medium
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the mono variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const monoStyles = {
              ...canvas.type.variant.mono
            };
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const monoStyles = {
              fontFamily: canvas.type.properties.fontFamilies.monospace
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvas.type.variant.mono}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  ...canvas.type.variant.mono
                }}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontFamily: canvas.type.properties.fontFamilies.monospace
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontFamily: canvas.type.properties.fontFamilies.monospace
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import canvas from '@workday/canvas-kit-react/tokens';
          `;
          const expected = `
            import canvas from '@workday/canvas-kit-react/tokens';
          `;

          expectTransform(input, expected);
        });
      });
    });
  });

  context('when transforming type from legacy hierarchy tokens (main)', () => {
    context('when transforming type properties (fontFamily, fontSize, and fontWeight)', () => {
      it('should properly transform object styles', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            fontFamily: canvasType.h2.fontFamily,
            fontSize: canvasType.h2.fontSize,
            fontWeight: canvasType.h2.fontWeight,
          };

          const bodyStyles = {
            fontFamily: canvasType.body.fontFamily,
            fontSize: canvasType.body.fontSize,
            fontWeight: canvasType.body.fontWeight,
          };
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[24],
            fontWeight: canvasType.properties.fontWeights.bold,
          };

          const bodyStyles = {
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[14],
            fontWeight: canvasType.properties.fontWeights.regular,
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvasType.h2.fontFamily,
                fontSize: canvasType.h2.fontSize,
                fontWeight: canvasType.h2.fontWeight,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvasType.body.fontFamily,
                fontSize: canvasType.body.fontSize,
                fontWeight: canvasType.body.fontWeight,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvasType.properties.fontFamilies.default,
                fontSize: canvasType.properties.fontSizes[24],
                fontWeight: canvasType.properties.fontWeights.bold,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvasType.properties.fontFamilies.default,
                fontSize: canvasType.properties.fontSizes[14],
                fontWeight: canvasType.properties.fontWeights.regular,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvasType.h2.fontFamily,
            fontSize: canvasType.h2.fontSize,
            fontWeight: canvasType.h2.fontWeight,
          });
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[24],
            fontWeight: canvasType.properties.fontWeights.bold,
          });
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type hierarchy levels', () => {
      it('should properly transform object styles', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            ...canvasType.h2
          };

          const bodyStyles = {
            ...canvasType.body
          };
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const headingStyles = {
            ...canvasType.levels.heading.small
          };

          const bodyStyles = {
            ...canvasType.levels.subtext.large
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvasType.h2}}>Section Heading</h2>
              <p css={canvasType.body}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvasType.levels.heading.small}}>Section Heading</h2>
              <p css={canvasType.levels.subtext.large}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')(
            canvasType.h2
          );
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-react/tokens';

          const SectionHeading = styled('h2')(
            canvasType.levels.heading.small
          );
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type variants', () => {
      context('when transforming the error variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const errorStyles = {
              ...canvasType.variant.error,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const errorStyles = {
              ...canvasType.variants.error,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.error}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.error}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.error
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.error
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the hint variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const hintStyles = {
              ...canvasType.variant.hint,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const hintStyles = {
              ...canvasType.variants.hint,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.hint}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.hint}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.hint
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.hint
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the inverse variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const inverseStyles = {
              ...canvasType.variant.inverse,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const inverseStyles = {
              ...canvasType.variants.inverse,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.inverse}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.inverse}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.inverse
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.inverse
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the button variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const buttonStyles = {
              ...canvasType.variant.button
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const buttonStyles = {
              fontWeight: canvasType.properties.fontWeights.bold
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={canvasType.variant.button}>button</button>
                  <button css={{
                    ...canvasType.variant.button,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={{
                    fontWeight: canvasType.properties.fontWeights.bold
                  }}>button</button>
                  <button css={{
                    fontWeight: canvasType.properties.fontWeights.bold,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Button = styled('button')(
              canvasType.variant.button
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Button = styled('button')(
              {
                fontWeight: canvasType.properties.fontWeights.bold
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the caps variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const capStyles = {
              ...canvasType.variant.caps
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const capStyles = {
              fontWeight: canvasType.properties.fontWeights.medium,
              textTransform: "uppercase"
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.caps}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.caps}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontWeight: canvasType.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontWeight: canvasType.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const CapSection = styled('section')(
              canvasType.variant.caps
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const CapSection = styled('section')(
              {
                fontWeight: canvasType.properties.fontWeights.medium,
                textTransform: "uppercase"
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the label variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const labelStyles = {
              ...canvasType.variant.label
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const labelStyles = {
              fontWeight: canvasType.properties.fontWeights.medium
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={canvasType.variant.label}>label</label>
                  <label css={{
                    ...canvasType.variant.label,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={{
                    fontWeight: canvasType.properties.fontWeights.medium
                  }}>label</label>
                  <label css={{
                    fontWeight: canvasType.properties.fontWeights.medium,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Label = styled('label')(
              canvasType.variant.label
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const Label = styled('label')(
              {
                fontWeight: canvasType.properties.fontWeights.medium
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the mono variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const monoStyles = {
              ...canvasType.variant.mono
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const monoStyles = {
              fontFamily: canvasType.properties.fontFamilies.monospace
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.mono}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  ...canvasType.variant.mono
                }}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontFamily: canvasType.properties.fontFamilies.monospace
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontFamily: canvasType.properties.fontFamilies.monospace
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-react/tokens';
          `;

          expectTransform(input, expected);
        });
      });
    });
  });

  context('when transforming type from beta hierarchy tokens (labs and preview)', () => {
    context('when transforming type properties (fontFamily, fontSize, and fontWeight)', () => {
      it('should properly transform object styles', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const headingStyles = {
            fontFamily: canvasType.h2.fontFamily,
            fontSize: canvasType.h2.fontSize,
            fontWeight: canvasType.h2.fontWeight,
          };

          const bodyStyles = {
            fontFamily: canvasType.body.fontFamily,
            fontSize: canvasType.body.fontSize,
            fontWeight: canvasType.body.fontWeight,
          };
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const headingStyles = {
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[32],
            fontWeight: canvasType.properties.fontWeights.bold,
          };

          const bodyStyles = {
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[16],
            fontWeight: canvasType.properties.fontWeights.regular,
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvasType.h2.fontFamily,
                fontSize: canvasType.h2.fontSize,
                fontWeight: canvasType.h2.fontWeight,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvasType.body.fontFamily,
                fontSize: canvasType.body.fontSize,
                fontWeight: canvasType.body.fontWeight,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{
                fontFamily: canvasType.properties.fontFamilies.default,
                fontSize: canvasType.properties.fontSizes[32],
                fontWeight: canvasType.properties.fontWeights.bold,
              }}>Section Heading</h2>
              <p css={{
                fontFamily: canvasType.properties.fontFamilies.default,
                fontSize: canvasType.properties.fontSizes[16],
                fontWeight: canvasType.properties.fontWeights.regular,
              }}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvasType.h2.fontFamily,
            fontSize: canvasType.h2.fontSize,
            fontWeight: canvasType.h2.fontWeight,
          });
        `;

        const expected = `
          import { type as canvasType } from '@workday/canvas-kit-preview-react/tokens';

          const SectionHeading = styled('h2')({
            fontFamily: canvasType.properties.fontFamilies.default,
            fontSize: canvasType.properties.fontSizes[32],
            fontWeight: canvasType.properties.fontWeights.bold,
          });
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type hierarchy levels', () => {
      it('should properly transform object styles', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const headingStyles = {
            ...canvasType.h2
          };

          const bodyStyles = {
            ...canvasType.body
          };
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const headingStyles = {
            ...canvasType.levels.heading.large
          };

          const bodyStyles = {
            ...canvasType.levels.body.small
          };
        `;

        expectTransform(input, expected);
      });

      it('should properly transform JSX styles', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvasType.h2}}>Section Heading</h2>
              <p css={canvasType.body}>This is sample body text.</p>
            </section>
          );
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const SectionText = () => (
            <section>
              <h2 css={{margin: 0, ...canvasType.levels.heading.large}}>Section Heading</h2>
              <p css={canvasType.levels.body.small}>This is sample body text.</p>
            </section>
          );
        `;

        expectTransform(input, expected);
      });

      it('should properly transform styles in the styled function', () => {
        const input = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const SectionHeading = styled('h2')(
            canvasType.h2
          );
        `;

        const expected = `
          import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

          const SectionHeading = styled('h2')(
            canvasType.levels.heading.large
          );
        `;

        expectTransform(input, expected);
      });

      it('should add bold styles to former JSXExpressionContainer headings', () => {
        const input = `
          import canvas, {type} from '@workday/canvas-kit-react/tokens';

          const Heading = () => (
            <div>
              <h2 css={{...type.h4}}>Section Heading</h2>
              <h2 css={{...canvas.type.h4}}>Section Heading</h2>
            </div>
          );
        `;

        const expected = `
          import canvas, {type} from '@workday/canvas-kit-react/tokens';

          const Heading = () => (
            <div>
              <h2 css={{
                ...type.levels.body.small,
                fontWeight: type.properties.fontWeights.bold
              }}>Section Heading</h2>
              <h2 css={{
                ...canvas.type.levels.body.small,
                fontWeight: canvas.type.properties.fontWeights.bold
              }}>Section Heading</h2>
            </div>
          );
        `;

        expectTransform(input, expected);
      });

      it('should add bold styles to former ObjectExpression headings', () => {
        const input = `
          import canvas, {type} from '@workday/canvas-kit-react/tokens';

          const Heading = () => (
            <div>
              <h2 css={type.h4}>Section Heading</h2>
              <h2 css={canvas.type.h4}>Section Heading</h2>
            </div>
          );
        `;

        const expected = `
          import canvas, {type} from '@workday/canvas-kit-react/tokens';

          const Heading = () => (
            <div>
              <h2 css={{
                ...type.levels.body.small,
                fontWeight: type.properties.fontWeights.bold
              }}>Section Heading</h2>
              <h2 css={{
                ...canvas.type.levels.body.small,
                fontWeight: canvas.type.properties.fontWeights.bold
              }}>Section Heading</h2>
            </div>
          );
        `;

        expectTransform(input, expected);
      });
    });

    context('when transforming type variants', () => {
      context('when transforming the error variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const errorStyles = {
              ...canvasType.variant.error,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const errorStyles = {
              ...canvasType.variants.error,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.error}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.error}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.error}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.error
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.error
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the hint variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const hintStyles = {
              ...canvasType.variant.hint,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const hintStyles = {
              ...canvasType.variants.hint,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.hint}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.hint}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.hint}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.hint
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.hint
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the inverse variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const inverseStyles = {
              ...canvasType.variant.inverse,
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const inverseStyles = {
              ...canvasType.variants.inverse,
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.inverse}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variants.inverse}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variants.inverse}}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variant.inverse
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = styled('section')(
              canvasType.variants.inverse
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the button variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const buttonStyles = {
              ...canvasType.variant.button
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const buttonStyles = {
              fontWeight: canvasType.properties.fontWeights.bold
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={canvasType.variant.button}>button</button>
                  <button css={{
                    ...canvasType.variant.button,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Buttons = () => {
              return (
                <div>
                  <button css={{
                    fontWeight: canvasType.properties.fontWeights.bold
                  }}>button</button>
                  <button css={{
                    fontWeight: canvasType.properties.fontWeights.bold,
                    display: 'block'
                  }}>button</button>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Button = styled('button')(
              canvasType.variant.button
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Button = styled('button')(
              {
                fontWeight: canvasType.properties.fontWeights.bold
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the caps variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const capStyles = {
              ...canvasType.variant.caps
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const capStyles = {
              fontWeight: canvasType.properties.fontWeights.medium,
              textTransform: "uppercase"
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.caps}>Section Heading</h2>
                <p css={{display: 'block', ...canvasType.variant.caps}}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontWeight: canvasType.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontWeight: canvasType.properties.fontWeights.medium,
                  textTransform: "uppercase"
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const CapSection = styled('section')(
              canvasType.variant.caps
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const CapSection = styled('section')(
              {
                fontWeight: canvasType.properties.fontWeights.medium,
                textTransform: "uppercase"
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the label variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const labelStyles = {
              ...canvasType.variant.label
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const labelStyles = {
              fontWeight: canvasType.properties.fontWeights.medium
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={canvasType.variant.label}>label</label>
                  <label css={{
                    ...canvasType.variant.label,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Labels = () => {
              return (
                <div>
                  <label css={{
                    fontWeight: canvasType.properties.fontWeights.medium
                  }}>label</label>
                  <label css={{
                    fontWeight: canvasType.properties.fontWeights.medium,
                    display: 'block'
                  }}>label</label>
                </div>
              );
            }
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Label = styled('label')(
              canvasType.variant.label
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const Label = styled('label')(
              {
                fontWeight: canvasType.properties.fontWeights.medium
              }
            );
          `;

          expectTransform(input, expected);
        });
      });

      context('when transforming the mono variant', () => {
        it('should properly transform object styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const monoStyles = {
              ...canvasType.variant.mono
            };
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const monoStyles = {
              fontFamily: canvasType.properties.fontFamilies.monospace
            };
          `;

          expectTransform(input, expected);
        });

        it('should properly transform JSX styles', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={canvasType.variant.mono}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  ...canvasType.variant.mono
                }}>This is sample body text.</p>
              </section>
            );
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';

            const SectionText = () => (
              <section>
                <h2 css={{
                  fontFamily: canvasType.properties.fontFamilies.monospace
                }}>Section Heading</h2>
                <p css={{
                  display: 'block',
                  fontFamily: canvasType.properties.fontFamilies.monospace
                }}>This is sample body text.</p>
              </section>
            );
          `;

          expectTransform(input, expected);
        });

        it('should properly transform styles in the styled function', () => {
          const input = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';
          `;
          const expected = `
            import {type as canvasType} from '@workday/canvas-kit-preview-react/tokens';
          `;

          expectTransform(input, expected);
        });
      });
    });
  });
});
