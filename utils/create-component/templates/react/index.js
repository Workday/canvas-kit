const index = pascalCaseName => `
export * from './lib/${pascalCaseName}';
export * from './lib/hooks/';
`;

export default index;
