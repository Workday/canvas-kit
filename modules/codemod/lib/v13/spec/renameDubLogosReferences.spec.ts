import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameDubLogosReferences';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('rename dub logos', () => {
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
        import {dubLogoPrimary} from "@workday/canvas=kit-react/common"
        import {dubLogoBlue} from "@workday/some-other-library"
        import {Grid} from "@workday/canvas=kit-react/layout"
        
        <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoBlue }} />
        </>
        `;

    const expected = stripIndent`
        import {dubLogoPrimary} from "@workday/canvas=kit-react/common"
        import {dubLogoBlue} from "@workday/some-other-library"
        import {Grid} from "@workday/canvas=kit-react/layout"

        <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoBlue }} />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should not change non-canvas imports', () => {
    const input = stripIndent`
        export {default as DubLogoBlue} from './DubLogoBlue';
        
        <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoBlue }} />
        </>
    `;

    const expected = stripIndent`
        export {default as DubLogoBlue} from './DubLogoBlue';

        <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoBlue }} />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should rename dubLogoBlue to dubLogoPrimary', () => {
    const input = stripIndent`
        import {dubLogoPrimary} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{
          __html: isPrimary ? dubLogoBlue : dubLogoWhite,
        }} />
        </>
    `;

    const expected = stripIndent`
        import {dubLogoPrimary} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{
          __html: isPrimary ? dubLogoPrimary : dubLogoReversed,
        }} />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should rename dubLogoWhite to dubLogoReversed', () => {
    const input = stripIndent`
        import {dubLogoReversed} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoWhite }} />
        </>
    `;

    const expected = stripIndent`
        import {dubLogoReversed} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: dubLogoReversed }} />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should rename wdayLogoBlue to wdayLogoPrimary', () => {
    const input = stripIndent`
        import {wdayLogoPrimary} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: wdayLogoBlue }} />
        </>
    `;

    const expected = stripIndent`
        import {wdayLogoPrimary} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: wdayLogoPrimary }} />
        </>
    `;
    expectTransform(input, expected);
  });
  it('should rename wdayLogoWhite to wdayLogoReversed', () => {
    const input = stripIndent`
        import {wdayLogoReversed} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: wdayLogoWhite }} />
        </>
    `;

    const expected = stripIndent`
        import {wdayLogoReversed} from '@workday/canvas-kit-react/common'
        import {Grid} from '@workday/canvas-kit-react/layout'

         <>
            <Grid dangerouslySetInnerHTML={{ __html: wdayLogoReversed }} />
        </>
    `;
    expectTransform(input, expected);
  });
});
