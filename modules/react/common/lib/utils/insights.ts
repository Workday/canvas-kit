/// <reference types="@types/node" />

import {version} from '@workday/canvas-kit-react/version';
import {slugify} from '@workday/canvas-kit-styling';

// Only add the major version tag for development and test environments
const versionTag = process.env.NODE_ENV === 'production' ? version : version.split('.')[0];

/**
 * This function returns data attributes for tagging
 * We use this to track when and where our components render. It also allows us to see what version is rendering.
 */
export function setCanvasKitTags(displayName = '', props: any = {}) {
  // Do not add tags for subcomponents. E.g. Card.Text
  const shouldAddTag = displayName.length && !displayName.includes('.');
  if (shouldAddTag) {
    // Append variant name to tag, if available: `primary-button-inverse`
    const componentTypeTag = props.variant ? `${displayName} ${props.variant}` : displayName;
    return {
      ['data-uxi-canvas-kit-version']: versionTag,
      ['data-uxi-canvas-kit-component-type']: slugify(componentTypeTag),
    };
  }

  // We need to explictily pass these attributes with `undefined` so they will be removed from the DOM.
  return {
    ['data-uxi-canvas-kit-version']: undefined,
    ['data-uxi-canvas-kit-component-type']: undefined,
  };
}
