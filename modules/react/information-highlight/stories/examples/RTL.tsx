import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {InformationHighlight} from '@workday/canvas-kit-react/information-highlight';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const RTL = () => {
  return (
    <Flex cs={{gap: system.gap.sm, flexDirection: 'column'}}>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant={'caution'} emphasis={'low'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant={'caution'} emphasis={'high'}>
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>
            {' '}
            انتباه! من اليمين إلى اليسار{' '}
          </InformationHighlight.Heading>
          <InformationHighlight.Body>
            نحن ندعم اللغات من اليمين إلى اليسار
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant="informational" ctaPlacement="end">
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>انتباه! من اليمين إلى اليسار</InformationHighlight.Heading>
          <InformationHighlight.Body>
            مع `ctaPlacement="end"`، يظهر الرابط بجانب المحتوى، متمركزًا عموديًا عند نهاية السطر.
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
      <CanvasProvider dir="rtl">
        <InformationHighlight variant="caution" emphasis="high" ctaPlacement="end">
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>انتباه! من اليمين إلى اليسار</InformationHighlight.Heading>
          <InformationHighlight.Body>
            يعمل وضع CTA عبر الأنماط ومستويات التأكيد.
          </InformationHighlight.Body>
          <InformationHighlight.Link href="#hyperlink">وثائق</InformationHighlight.Link>
        </InformationHighlight>
      </CanvasProvider>
    </Flex>
  );
};
