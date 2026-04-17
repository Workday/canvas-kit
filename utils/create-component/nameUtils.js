/**
 * Converts kebab-case to Title Case.
 */
export const getTitleCaseName = string => {
  const result = string.replace(/-(\w)/g, function (m) {
    return ' ' + m[1].toUpperCase();
  });
  return result.charAt(0).toUpperCase() + result.slice(1);
};

/**
 * Converts kebab-case to camelCase.
 */
export const getCamelCaseName = string => {
  return string.replace(/-(\w)/g, function (m) {
    return m[1].toUpperCase();
  });
};

/**
 * Converts kebab-case to PascalCase.
 */
export const getPascalCaseName = string => {
  const result = getCamelCaseName(string);
  return result.charAt(0).toUpperCase() + result.slice(1);
};
