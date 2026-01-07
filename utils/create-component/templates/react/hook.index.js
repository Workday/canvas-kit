const hookIndex = pascalCaseName => `
export * from './use${pascalCaseName}Model';
export * from './use${pascalCaseName}Content';
export * from './use${pascalCaseName}Target';
`;

export default hookIndex;
