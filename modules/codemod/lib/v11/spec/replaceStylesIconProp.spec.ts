import {stripIndent} from 'common-tags';

import transform from '../replaceStylesIconProp';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('replaceStylesIconProp', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
            import {Svg} from '@workday/any-other-package';
            import {SystemIcon} from './any-icon-package';
            import {AccentIcon} from 'any-other-package';

            <>
                <Svg styles={{padding: '1rem'}} />
                <SystemIcon styles={{padding: '1rem'}} />
                <AccentIcon styles={{padding: '1rem'}} />
            </>
        `;

    const expected = stripIndent`
            import {Svg} from '@workday/any-other-package';
            import {SystemIcon} from './any-icon-package';
            import {AccentIcon} from 'any-other-package';

            <>
                <Svg styles={{padding: '1rem'}} />
                <SystemIcon styles={{padding: '1rem'}} />
                <AccentIcon styles={{padding: '1rem'}} />
            </>
        `;
    expectTransform(input, expected);
  });

  it('should rename styles to cs for Svg, SystemIcon, AccentIcon exported from the icon package', () => {
    const input = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react/icon'

        <>
            <Svg styles={{padding: '1rem'}} />
            <SystemIcon styles={{padding: '1rem'}} />
            <AccentIcon styles={{padding: '1rem'}} />
        </>
    `;

    const expected = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react/icon'

        <>
            <Svg cs={{padding: '1rem'}} />
            <SystemIcon cs={{padding: '1rem'}} />
            <AccentIcon cs={{padding: '1rem'}} />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should rename styles to cs for Svg, SystemIcon, AccentIcon exported from the main package', () => {
    const input = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react'

        <>
            <Svg styles={{padding: '1rem'}} />
            <SystemIcon styles={{padding: '1rem'}} />
            <AccentIcon styles={{padding: '1rem'}} />
        </>
    `;

    const expected = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react'

        <>
            <Svg cs={{padding: '1rem'}} />
            <SystemIcon cs={{padding: '1rem'}} />
            <AccentIcon cs={{padding: '1rem'}} />
        </>
    `;
    expectTransform(input, expected);
  });

  it('should handle value as variable', () => {
    const input = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react/icon';

        <>
            <Svg styles={iconStyles} />
            <SystemIcon styles={iconStyles} />
            <AccentIcon styles={iconStyles} />
        </>
    `;

    const expected = stripIndent`
        import {Svg, SystemIcon, AccentIcon} from '@workday/canvas-kit-react/icon';

        <>
            <Svg cs={iconStyles} />
            <SystemIcon cs={iconStyles} />
            <AccentIcon cs={iconStyles} />
        </>
    `;

    expectTransform(input, expected);
  });

  it('should rename styles to cs for styled component exported from the icon package', () => {
    const input = stripIndent`
        import {Svg} from '@workday/canvas-kit-react/icon';

        const StyledSvg = styled(Svg)({});

        <StyledSvg styles={{padding: '1rem'}} />
    `;

    const expected = stripIndent`
        import {Svg} from '@workday/canvas-kit-react/icon';

        const StyledSvg = styled(Svg)({});

        <StyledSvg cs={{padding: '1rem'}} />
    `;
    expectTransform(input, expected);
  });

  it('should rename styles to cs for renamed components exported from the icon package', () => {
    const input = stripIndent`
        import {Svg as CanvasSvg} from '@workday/canvas-kit-react/icon';

        <CanvasSvg styles={{padding: '1rem'}} />
    `;

    const expected = stripIndent`
        import {Svg as CanvasSvg} from '@workday/canvas-kit-react/icon';

        <CanvasSvg cs={{padding: '1rem'}} />
    `;
    expectTransform(input, expected);
  });
});
