module.exports = pascalCaseName => `
export * from './lib/${pascalCaseName}';
export * from './lib/hooks/';
`;
