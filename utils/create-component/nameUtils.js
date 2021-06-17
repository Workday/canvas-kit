/**
 * Converts kebab-case to Title Case.
 */
const getTitleCaseName = string => {
  const result = string.replace(/-(\w)/g, function(m) {
    return ' ' + m[1].toUpperCase();
  });
  return result.charAt(0).toUpperCase() + result.slice(1);
};

/**
 * Converts kebab-case to camelCase.
 */
const getCamelCaseName = string => {
  return string.replace(/-(\w)/g, function(m) {
    return m[1].toUpperCase();
  });
};

/**
 * Converts kebab-case to PascalCase.
 */
const getPascalCaseName = string => {
  const result = getCamelCaseName(string);
  return result.charAt(0).toUpperCase() + result.slice(1);
};

module.exports = {
  getTitleCaseName,
  getCamelCaseName,
  getPascalCaseName,
};
