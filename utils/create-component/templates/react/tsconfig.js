const tsconfig = rootPath => `
{
  "extends": "${rootPath}/tsconfig.json",
  "exclude": ["node_modules", "ts-tmp", "dist", "spec", "stories"]
}
`;

const cjs = () => `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "outDir": "dist/commonjs",
    "skipLibCheck": true,
    "tsBuildInfoFile": "./.build-info/tsconfig.cjs.tsbuildinfo"
  }
}
`;

const es6 = () => `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "dist/es6",
    "tsBuildInfoFile": "./.build-info/tsconfig.es6.tsbuildinfo"
  }
}
`;

const spec = rootPath => `
{
  "extends": "${rootPath}/tsconfig.spec.json"
}
`;

const stories = rootPath => `
{
  "extends": "${rootPath}/tsconfig.stories.json"
}
`;

module.exports = {
  default: tsconfig,
  cjs,
  es6,
  spec,
  stories,
};
