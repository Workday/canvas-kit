module.exports = name => `{
  "main": "../dist/commonjs/${name}",
  "module": "../dist/es6/${name}",
  "sideEffects": false
}
`;
