import {version} from '../../../package.json';

/**
 * Functionality in this file is only for our own internal analytics and is not intended for external consumers.
 */

const majorVersion = version.split('.')[0];

/**
 * This function conditionally returns a data attribute with the package major version as the value.
 * We use this to track when and where our components render. It also allows us to see what version is rendering.
 */
export function setCKRVersionTag() {
  // short circuit if rendering on the server
  if (!window) {
    return;
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // Only set the data attribute when `canvas_insights` is in the url.
  if (urlParams.get('canvas_insights')) {
    return {['data-ckr-version']: `v${majorVersion}`};
  } else {
    return {};
  }
}
