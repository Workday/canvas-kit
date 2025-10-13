import React from 'react';
import ReactDOM from 'react-dom';

import {system} from '@workday/canvas-tokens-web';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {infoIcon} from '@workday/canvas-system-icons-web';

import {
  CanvasProvider,
  ContentDirection,
  createSubcomponent,
  PartialEmotionCanvasTheme,
  useMount,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

const mainContentStyles = createStyles({
  padding: system.space.x4,
});

export interface ExternalWindowPortalProps {
  /**
   * Child components of WindowPortal
   */
  children: React.ReactNode;
  /**
   * Callback to close the popup
   */
  onWindowClose?: () => void;
  /**
   * Width of the popup window
   */
  width?: number;
  /**
   * Height of the popup window
   */
  height?: number;
  /**
   * The name of the popup window. If another popup opens with the same name, that instance will
   * be reused. Use caution with setting this value
   */
  target?: string;
}

async function copyAssets(sourceDoc: Document, targetDoc: Document) {
  for (const font of (sourceDoc as any).fonts.values()) {
    (targetDoc as any).fonts.add(font);

    font.load();
  }

  await (targetDoc as any).fonts.ready;

  // The current ES lib version doesn't include iterable interfaces, so we cast as an iterable
  for (const styleSheet of sourceDoc.styleSheets as StyleSheetList & Iterable<CSSStyleSheet>) {
    if (styleSheet.cssRules) {
      // text based styles
      const styleEl = targetDoc.createElement('style');
      for (const cssRule of styleSheet.cssRules as CSSRuleList & Iterable<CSSRule>) {
        styleEl.appendChild(targetDoc.createTextNode(cssRule.cssText));
      }
      targetDoc.head.appendChild(styleEl);
    } else if (styleSheet.href) {
      // link based styles
      const linkEl = targetDoc.createElement('link');

      linkEl.rel = 'stylesheet';
      linkEl.href = styleSheet.href;
      targetDoc.head.appendChild(linkEl);
    }
  }
}

const ExternalWindowPortal = ({
  children,
  width = 300,
  height = 500,
  target = '',
  onWindowClose,
}: ExternalWindowPortalProps) => {
  const [portalElement, setPortalElement] = React.useState<HTMLDivElement | null>(null);

  useMount(() => {
    const newWindow = window.open(
      '', // url
      target,
      `width=${width},height=${height},left=100,top=100,popup=true`
    );

    if (newWindow) {
      // copy fonts and styles
      copyAssets(document, newWindow.document);

      const element = newWindow.document.createElement('div');
      newWindow.document.body.appendChild(element);
      setPortalElement(element);
    } else {
      onWindowClose();
    }

    const closeWindow = event => {
      onWindowClose();
    };

    window.addEventListener('unload', closeWindow);
    newWindow?.addEventListener('unload', closeWindow);

    return () => {
      window.removeEventListener('unload', closeWindow);
      newWindow?.removeEventListener('unload', closeWindow);
      newWindow?.close();
    };
  });

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(<CanvasProvider>{children}</CanvasProvider>, portalElement);
};

const PopupExternalWindow = createSubcomponent()({
  displayName: 'Popup.ExternalWindow',
  modelHook: usePopupModel,
})<ExternalWindowPortalProps>(({children, ...elemProps}, Element, model) => {
  if (model.state.visibility === 'visible') {
    return (
      <ExternalWindowPortal onWindowClose={model.events.hide} {...elemProps}>
        {children}
      </ExternalWindowPortal>
    );
  }

  return null;
});

export const ExternalWindow = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing
  const canvasTheme: PartialEmotionCanvasTheme = useTheme({
    canvas: {
      // Switch to `ContentDirection.RTL` to change direction
      direction: ContentDirection.LTR,
    },
  });

  const model = usePopupModel();

  return (
    <CanvasProvider theme={canvasTheme}>
      <>
        <main className={mainContentStyles}>
          <p>Popup that opens a new Operating System Window</p>
          <Popup model={model}>
            <Tooltip title="Open External Window Tooltip">
              <Popup.Target>Open External Window</Popup.Target>
            </Tooltip>
            <PopupExternalWindow>
              <p>External Window Contents! Mouse over the info icon to get a tooltip</p>
              <Flex cs={{gap: cssVar(system.space.x4)}}>
                <Tooltip title="More information">
                  <SecondaryButton icon={infoIcon} />
                </Tooltip>
                <Popup.CloseButton>Close Window</Popup.CloseButton>
              </Flex>
            </PopupExternalWindow>
          </Popup>
          <p>Popup visibility: {model.state.visibility}</p>
        </main>
      </>
    </CanvasProvider>
  );
};
