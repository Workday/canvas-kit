// refactor for v5

const candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  'iframe',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];

function isHidden(node: HTMLElement) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

function getCheckedRadio(nodes: NodeListOf<HTMLInputElement>, form: HTMLFormElement | null) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
  return undefined;
}

function isNotRadioOrTabbableRadio(node: HTMLInputElement) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio' || !node.name) {
    return true;
  }
  const radioScope = node.form || node.ownerDocument;
  if (!radioScope) {
    return false;
  }
  const radioSet = radioScope.querySelectorAll<HTMLInputElement>(
    'input[type="radio"][name="' + node.name + '"]'
  );
  const checked = getCheckedRadio(radioSet, node.form);
  return checked === node || (checked === undefined && radioSet[0] === node);
}

function getAllTabbingElements(parentElem: HTMLElement | Document) {
  const currentActiveElement = document.activeElement;
  const tabbableNodes = parentElem.querySelectorAll<HTMLElement>(candidateSelectors.join(','));
  const onlyTabbable: HTMLElement[] = [];
  for (let i = 0; i < tabbableNodes.length; i++) {
    const node = tabbableNodes[i];
    if (
      currentActiveElement === node ||
      (!(node as HTMLButtonElement).disabled &&
        getTabIndex(node) > -1 &&
        !isHidden(node) &&
        isNotRadioOrTabbableRadio(node as HTMLInputElement))
    ) {
      if (node instanceof HTMLIFrameElement) {
        const iframeDoc = node.contentWindow?.document;
        if (iframeDoc) {
          const tabbableElementsInIframe = getAllTabbingElements(iframeDoc);
          const handleKeyEvent = (event: KeyboardEvent) => {
            const blocked = tabTrappingKey(event, iframeDoc, onlyTabbable);
            if (blocked) {
              iframeDoc.removeEventListener('keydown', handleKeyEvent);
            }
          };
          iframeDoc.addEventListener('keydown', handleKeyEvent);
          tabbableElementsInIframe.forEach(elem => {
            onlyTabbable.push(elem);
          });
        }
      } else {
        onlyTabbable.push(node);
      }
    }
  }
  return onlyTabbable;
}

function tabTrappingKey(
  event: KeyboardEvent,
  parentElem: HTMLElement | Document,
  onlyTabbable: HTMLElement[] | null = null
) {
  // check if current event keyCode is tab
  if (!event || event.key !== 'Tab') {
    return;
  }

  if (!parentElem || !parentElem.contains) {
    if (process && process.env.NODE_ENV === 'development') {
      console.warn('focus-trap-js: parent element is not defined');
    }
    return false;
  }

  if (!parentElem.contains(event.target as Node)) {
    return false;
  }

  const allTabbingElements = onlyTabbable || getAllTabbingElements(parentElem);
  const firstFocusableElement = allTabbingElements[0];
  const lastFocusableElement = allTabbingElements[allTabbingElements.length - 1];

  if (event.shiftKey && event.target === firstFocusableElement) {
    lastFocusableElement.focus();
    event.preventDefault();
    return true;
  } else if (!event.shiftKey && event.target === lastFocusableElement) {
    firstFocusableElement.focus();
    event.preventDefault();
    return true;
  }
  return false;
}

function getTabIndex(node: HTMLElement) {
  const tabIndexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

  if (!isNaN(tabIndexAttr)) {
    return tabIndexAttr;
  }
  // Browsers do not return tabIndex correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) {
    return 0;
  }
  return node.tabIndex;
}

function isContentEditable(node: HTMLElement) {
  return node.getAttribute('contentEditable');
}

tabTrappingKey.isNotRadioOrTabbableRadio = isNotRadioOrTabbableRadio;

export {tabTrappingKey};
