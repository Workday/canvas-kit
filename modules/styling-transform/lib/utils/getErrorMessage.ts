import ts from 'typescript';

import {TransformerContext} from './types';

/**
 * Creates an error message around a node. It will look something like:
 *
 * ```
 * Unknown type at: "fontSize".
 * File: test.ts, Line: 6, Character: 17.
 * const styles = createStyles({
 *   fontSize: fontSize
 *             ========
 * })
 * ```
 */
export function getErrorMessage(node: ts.Node, context: TransformerContext) {
  const sourceFile = node.getSourceFile();

  const {line} = node.getSourceFile().getLineAndCharacterOfPosition(node.pos);
  const lineStarts = sourceFile.getLineStarts();

  const lineStartIndex = lineStarts.findIndex(s => s >= node.pos) - 1;

  // get a whole line's text given a lineStarts index
  function getLine(sourceFile: ts.SourceFile, startIndex: number) {
    const lineStarts = sourceFile.getLineStarts();

    return sourceFile.text.substring(
      lineStarts[Math.max(0, startIndex)],
      startIndex + 1 >= lineStarts.length ? undefined : lineStarts[startIndex + 1]
    );
  }

  // Create a full context message with source code and highlighting
  const lineBefore = getLine(sourceFile, lineStartIndex - 1);
  const lineCurrent = getLine(sourceFile, lineStartIndex);
  const lineAfter = getLine(sourceFile, lineStartIndex + 1);
  const highlightedLine =
    ''
      .padStart(node.getStart() - lineStarts[lineStartIndex], ' ')
      .padEnd(node.getStart() - lineStarts[lineStartIndex] + node.getWidth(), '=') + '\n';

  /** This should look something like:
   * ```
   * const styles = createStyles({
   *   fontSize: fontSize
   *             ========
   * })
   * ```
   */
  const fullContext = lineBefore + lineCurrent + highlightedLine + lineAfter;

  const character = node.getStart() - lineStarts[lineStartIndex];
  return `File: ${sourceFile.fileName}:${line + 1}:${character}.\n${fullContext}\nOriginal File: ${
    context.fileName
  }`;
}
