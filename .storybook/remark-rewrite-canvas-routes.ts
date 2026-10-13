import type {Plugin} from 'unified';
import {visit} from 'unist-util-visit';

import routes from './routes';

/**
 * Rewrites Canvas site paths (`/components/.../`) to Storybook manager URLs for local docs and
 * GitHub Pages. Runs during MDX compile so links in tables and nested MDX are included.
 */
export function remarkRewriteCanvasRoutes(): Plugin {
  const routeKeys = new Set(Object.keys(routes));

  return tree => {
    visit(tree, 'link', node => {
      const url = node.url;
      if (typeof url !== 'string' || !url.startsWith('/')) {
        return;
      }

      const hashIndex = url.indexOf('#');
      const pathPart = hashIndex === -1 ? url : url.slice(0, hashIndex);
      const hash = hashIndex === -1 ? '' : url.slice(hashIndex + 1);

      if (!routeKeys.has(pathPart)) {
        return;
      }

      const storyId = routes[pathPart as keyof typeof routes];
      node.url = `../?path=/docs/${storyId}${hash ? `#${hash}` : ''}`;
    });
  };
}
