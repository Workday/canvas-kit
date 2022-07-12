import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameIconRef';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should rename iconRef to ref', () => {
    const input = stripIndent`
        import {AccentIcon, AppletIcon, SystemIcon, SystemIconCircle, Graphic, Svg} from '@workday/canvas-kit-react/icon'
        <>
            <AccentIcon iconRef={ref} />
            <AppletIcon iconRef={ref} />
            <SystemIcon iconRef={ref} />
            <SystemIconCircle iconRef={ref} />
            <Graphic iconRef={ref} />
            <Svg iconRef={ref} />
        </>
    `;

    const expected = stripIndent`
        import {AccentIcon, AppletIcon, SystemIcon, SystemIconCircle, Graphic, Svg} from '@workday/canvas-kit-react/icon'
        <>
            <AccentIcon ref={ref} />
            <AppletIcon ref={ref} />
            <SystemIcon ref={ref} />
            <SystemIconCircle ref={ref} />
            <Graphic ref={ref} />
            <Svg ref={ref} />
        </>
    `;
    expectTransform(input, expected);
  });
});
