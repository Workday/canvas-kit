import ts from 'typescript';
import {serializeStyles as serializedStylesEmotion} from '@emotion/serialize';
import {serialize, compile} from 'stylis';

import {generateUniqueId} from '@workday/canvas-kit-styling';

import {prettyStringify} from './stylisFns';
import {NestedStyleObject} from './types';

/**
 * Creates an AST node representation of the passed in `styleObj`, but in the format of `{name:
 * string, styles: serializedStyles}`. The `name` is hard-coded here to work with both server-side
 * and client-side style injection. This results in a stable style key for Emotion while also
 * optimizing style serialization.
 *
 * If `name` is provided, the name will be whatever `name` is, replacing "{hash}" with the hash
 * created via `serializeStyles`. For example: 'animation-{hash}' will be converted into
 * 'animation-abc123'
 */
export function createStyleObjectNode(styles: string, name?: string) {
  const styleExpression = ts.factory.createStringLiteral(styles);

  // create an emotion-optimized object: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/serialize/src/index.js#L315-L322
  // Looks like: `{name: $hash, styles: $styleText }`
  return ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('name'),
        ts.factory.createStringLiteral(name || generateUniqueId()) // We might be using values that are resolved at runtime, but should still be static. We're only supporting the `cs` function running once per file, so a stable id based on a hash is not necessary
      ),
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('styles'),
        styleExpression // In the future we can extract CSS from here by running the `stylis` compiler directly. Emotion does this here: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/cache/src/index.js#L188-L245
      ),
    ],
    false
  );
}

/**
 * Compiles CSS using stylis. Emotion's `serializeStyles` creates an unwrapped string for cache
 * storage and it often needs to be wrapped by a CSS selector or `@keyframes`. This function does
 * this the same way Emotion does it internally.
 */
export function compileCSS(input: string): string {
  return serialize(compile(input), prettyStringify);
}

export function serializeStyles(input: NestedStyleObject | string) {
  return serializedStylesEmotion([input]);
}
