export const getInitialsFromName = (name: string) => {
  // Remove parenthetical content (e.g., titles, departments) and trim
  const sanitized = name.replace(/\([^)]*\)/g, '').trim();

  // Split by one or more whitespace characters
  const nameParts = sanitized.split(/\s+/).filter(Boolean);

  // Filter out parts that are purely numeric or Roman numerals (suffixes like III, IV)
  const filteredParts = nameParts.filter(part => {
    const isNumeric = /^\d+$/.test(part);
    const isRomanNumeral = /^[IVX]+$/i.test(part);
    return !isNumeric && !isRomanNumeral;
  });

  const first = filteredParts[0];
  const firstInitial = first?.[0] || '';
  const last = filteredParts.length > 1 ? filteredParts[filteredParts.length - 1] : undefined;
  const lastInitial = last?.[0] || '';

  return `${firstInitial}${lastInitial}`;
};
