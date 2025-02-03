// allow transforms to use TypeScript without any additional configuration
require('ts-node').register({
  /* options */
});

const myExport = require('./lib/styleTransform');

myExport.parseNodeToStaticValue =
  require('./lib/utils/parseNodeToStaticValue').parseNodeToStaticValue;
myExport.parseObjectToStaticValue =
  require('./lib/utils/parseObjectToStaticValue').parseObjectToStaticValue;
myExport.createObjectTransform = require('./lib/createObjectTransform').createObjectTransform;
myExport.createPropertyTransform = require('./lib/createPropertyTransform').createPropertyTransform;
myExport.withDefaultContext = require('./lib/styleTransform.js').withDefaultContext;
myExport.getClassName = require('./lib/utils/handleCreateStencil').getClassName;
myExport.styleTransformer = myExport;

module.exports = myExport;

myExport.createConfig = function createConfig(config) {
  return config;
};
