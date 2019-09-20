module.exports = name => `
import MyComponent from './lib/MyComponent';

export default MyComponent;
export {MyComponent};
export * from './lib/MyComponent';
`;
