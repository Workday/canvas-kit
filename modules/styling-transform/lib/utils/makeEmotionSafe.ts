/**
 * Util function to fix an issue with Emotion by
 * appending `EmotionIssue#3066` to end of css variable
 * See issue: [#3066](https://github.com/emotion-js/emotion/issues/3066)
 */
export function makeEmotionSafe(key: string): string {
  if (key.endsWith('label')) {
    return `${key}-emotion-safe`;
  }
  return key;
}
