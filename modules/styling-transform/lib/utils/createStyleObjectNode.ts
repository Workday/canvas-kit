import {serializeStyles as serializedStylesEmotion} from '@emotion/serialize';
import crypto from 'node:crypto';
import {compile, serialize} from 'stylis';
import ts from 'typescript';

import {generateUniqueId} from '@workday/canvas-kit-styling';

import {prettyStringify} from './stylisFns';
import {NestedStyleObject, TransformerContext} from './types';

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

/**
 * Serialize styles and put them to style output. The styles will be serialized via Emotion. Returns
 * the serialized styles.
 * @param node
 * @param input
 * @param template The template for creating styles for static CSS. There are two placeholders: `%n`
 * represents the hash name while `%s` represents the string styles.
 * @param context
 * @returns
 */
export function serializeStyles(
  node: ts.Node,
  input: NestedStyleObject | string,
  template: string,
  context: TransformerContext
) {
  const {getFileName, styles, cache, names, extractedNames} = context;
  const fileName = getFileName(node.getSourceFile().fileName);
  const serialized = serializedStylesEmotion([input]);
  const hash = getHash(node, context);
  serialized.name = hash;

  if (!cache[hash]) {
    const styleOutput = compileCSS(
      template.replace('%s', serialized.styles).replace('%n', serialized.name)
    );

    let extractedStyleOutput = styleOutput;

    for (const key in names) {
      if (extractedNames[names[key]]) {
        // @ts-ignore replaceAll was added in es2021, but our lib versions don't go past es2019. replaceAll is available in node 15+
        extractedStyleOutput = extractedStyleOutput.replaceAll(
          names[key],
          extractedNames[names[key]]
        );
      }
    }
    styles[fileName] = styles[fileName] || [];
    styles[fileName].push(extractedStyleOutput);
    cache[hash] = styleOutput;
  }

  return serialized;
}

/**
 * Generate a deterministic hash that is unique to the seed +
 */
export function getHash(node: ts.Node, context: TransformerContext) {
  const content = context.seed + node.getStart() + node.getEnd();
  // Convert content to a sha256 hash and then convert to a base36 number for better compression
  return Number(
    `0x${crypto.createHash('sha256').update(content).digest('hex').slice(0, 7)}`
  ).toString(36);
}
