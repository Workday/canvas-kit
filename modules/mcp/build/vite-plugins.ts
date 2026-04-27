import type {Plugin} from 'vite';
import * as fs from 'node:fs';
import * as path from 'node:path';

export const CANVAS_KIT_PACKAGE_MAP: Record<string, string> = {
  '@workday/canvas-kit-react': 'modules/react',
  '@workday/canvas-kit-preview-react': 'modules/preview-react',
  '@workday/canvas-kit-labs-react': 'modules/labs-react',
  '@workday/canvas-kit-styling': 'modules/styling',
  '@workday/canvas-kit-styling-transform': 'modules/styling-transform',
  '@workday/canvas-kit-popup-stack': 'modules/popup-stack',
  '@workday/canvas-kit-react-fonts': 'modules/react-fonts',
};

export function canvasKitSourceResolver(repoRoot: string): Plugin {
  return {
    name: 'canvas-kit-source-resolver',
    enforce: 'pre',
    resolveId(source) {
      for (const [pkg, modulePath] of Object.entries(CANVAS_KIT_PACKAGE_MAP)) {
        if (source === pkg) {
          const resolved = path.join(repoRoot, modulePath, 'index.ts');
          if (fs.existsSync(resolved)) {
            return resolved;
          }
        }

        if (source.startsWith(pkg + '/')) {
          const subpath = source.slice(pkg.length + 1);
          for (const candidate of [
            path.join(repoRoot, modulePath, subpath, 'index.ts'),
            path.join(repoRoot, modulePath, subpath + '.ts'),
            path.join(repoRoot, modulePath, subpath + '.tsx'),
          ]) {
            if (fs.existsSync(candidate)) {
              return candidate;
            }
          }
        }
      }
      return null;
    },
  };
}
