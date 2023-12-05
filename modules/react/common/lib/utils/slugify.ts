/**
 * Function that takes a string and returns a "slug" which can be used in HTML
 */
export function slugify(input: string): string {
  return input
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}
