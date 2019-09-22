module.exports = pascalCaseName => `
import ${pascalCaseName} from './lib/${pascalCaseName}';

export default ${pascalCaseName};
export {${pascalCaseName}};
export * from './lib/${pascalCaseName}';
`;
