import ts from 'typescript';
import {serializeStyles} from '@emotion/serialize';

import {generateUniqueId} from '@workday/canvas-kit-styling';

/**
 * Creates an AST node representation of the passed in `styleObj`, but in the format of `{name:
 * string, styles: serializedStyles}`. The `name` is hard-coded here to work with both server-side
 * and client-side style injection. This results in a stable style key for Emotion while also
 * optimizing style serialization.
 */
export function createStyleObjectNode(styleObj: Record<string, string>) {
  const serialized = serializeStyles([styleObj]);
  const styleText = serialized.styles;
  const styleExpression = ts.factory.createStringLiteral(styleText);

  // create an emotion-optimized object: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/serialize/src/index.js#L315-L322
  // Looks like: `{name: $hash, styles: $styleText }`
  return ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('name'),
        // TODO - we may need this to be a static variable for the CSS package
        ts.factory.createStringLiteral(generateUniqueId()) // We might be using values that are resolved at runtime, but should still be static. We're only supporting the `cs` function running once per file, so a stable id based on a hash is not necessary
      ),
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier('styles'),
        styleExpression // In the future we can extract CSS from here by running the `stylis` compiler directly. Emotion does this here: https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/cache/src/index.js#L188-L245
      ),
    ],
    false
  );
}
