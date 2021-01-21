module.exports = pascalCaseName => `
export * from './lib/${pascalCaseName}';
export * from './lib/use${pascalCaseName}Model'
`;
