/**
 * Function that takes a string and returns a "slug" which can be used in HTML
 */
export function slugify(input: string): string {
  return input
    .trim()
    .replace(/[\.\s_-]+/g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/([A-Z])/g, m => {
      return '-' + m.toLowerCase();
    })
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}
