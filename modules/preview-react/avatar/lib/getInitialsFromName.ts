export const getInitialsFromName = (name: string) => {
  // Trim and split by one or more whitespace characters
  const nameParts = name
    .trim()
    .split(/\s+/)
    .filter(part => part.length > 0);

  if (nameParts.length === 0) {
    return '';
  }
  // If there is only one name, grab the first letter
  if (nameParts.length === 1) {
    return nameParts[0][0];
  }

  // Take first letter of first and last name parts
  const firstInitial = nameParts[0][0];
  const lastInitial = nameParts[nameParts.length - 1][0];

  return `${firstInitial}${lastInitial}`;
};
