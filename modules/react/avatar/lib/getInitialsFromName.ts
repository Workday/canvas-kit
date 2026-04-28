export const getInitialsFromName = (name: string) => {
  // Trim and split by one or more whitespace characters
  const nameParts = name.trim().split(/\s+/).filter(Boolean);

  const first = nameParts[0];
  const firstInitial = first?.[0] || '';
  const last = nameParts.length > 1 ? nameParts[nameParts.length - 1] : undefined;
  const lastInitial = last?.[0] || '';

  return `${firstInitial}${lastInitial}`;
};
