/* eslint-disable */
// refactor for v5

var candidateSelectors = [
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

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
}

function isNotRadioOrTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio' || !node.name) {
    return true;
  }
  var radioScope = node.form || node.ownerDocument;
  var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet, node.form);
  return checked === node || (checked === undefined && radioSet[0] === node);
}

function getAllTabbingElements(parentElem) {
  var currentActiveElement = document.activeElement;
  var tabbableNodes = parentElem.querySelectorAll(candidateSelectors.join(','));
  var onlyTabbable = [];
  for (var i = 0; i < tabbableNodes.length; i++) {
    var node = tabbableNodes[i];
    if (
      currentActiveElement === node ||
      (!node.disabled &&
        getTabindex(node) > -1 &&
        !isHidden(node) &&
        isNotRadioOrTabbableRadio(node))
    ) {
      if (node instanceof HTMLIFrameElement) {
        var iframeDoc = node.contentWindow.document;
        var tabbableElementsInIframe = getAllTabbingElements(iframeDoc);
        const handleKeyEvent = event => {
          const blocked = tabTrappingKey(event, iframeDoc, onlyTabbable);
          if (blocked) {
            iframeDoc.removeEventListener('keydown', handleKeyEvent);
          }
        };
        iframeDoc.addEventListener('keydown', handleKeyEvent);
        tabbableElementsInIframe.forEach(elem => {
          onlyTabbable.push(elem);
        });
      } else {
        onlyTabbable.push(node);
      }
    }
  }
  return onlyTabbable;
}

function tabTrappingKey(event, parentElem, onlyTabbable) {
  // check if current event keyCode is tab
  if (!event || event.key !== 'Tab') return;

  if (!parentElem || !parentElem.contains) {
    if (process && process.env.NODE_ENV === 'development') {
      console.warn('focus-trap-js: parent element is not defined');
    }
    return false;
  }

  if (!parentElem.contains(event.target)) {
    return false;
  }

  var allTabbingElements = onlyTabbable || getAllTabbingElements(parentElem);
  var firstFocusableElement = allTabbingElements[0];
  var lastFocusableElement = allTabbingElements[allTabbingElements.length - 1];

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

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return tabIndex correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function isContentEditable(node) {
  return node.getAttribute('contentEditable');
}

tabTrappingKey.isNotRadioOrTabbableRadio = isNotRadioOrTabbableRadio;
module.exports = tabTrappingKey;
