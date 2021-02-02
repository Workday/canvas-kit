module.exports = {
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  verbose: true,
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/cypress/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  reporters: ['default', ['jest-junit', {suiteName: 'Canvas Kit tests'}]],
  testURL: 'http://localhost',
  setupFiles: ['core-js'],
};
