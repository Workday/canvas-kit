import {version} from '@workday/canvas-kit-react/version';
import {slugify} from '@workday/canvas-kit-styling';

/**
 * Functionality in this file is only for our own internal analytics and is not intended for external consumers.
 */
const versionTag = process.env.NODE_ENV === 'production' ? version : version.split('.')[0];

/**
 * This function returns data attributes
 * We use this to track when and where our components render. It also allows us to see what version is rendering.
 */
export function setCanvasKitTags(props: any) {
  return {
    ['data-uxi-canvas-kit-version']: versionTag,
    ['data-uxi-canvas-kit-component-type']: slugify(props.displayName || ''),
  };
}
