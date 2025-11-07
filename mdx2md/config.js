/**
 * Configuration Module
 *
 * Centralizes configuration for the MDX to Markdown conversion process.
 * Provides default values and utility functions for working with the configuration.
 */

import path from 'path';

/**
 * Creates a configuration object with sensible defaults.
 *
 * @param {Object} options - Optional configuration overrides
 * @returns {Object} Complete configuration object
 */
export function createConfig(options = {}) {
  // Create the logger utility based on debug mode
  const logger = {
    // Debug mode setting
    debug: options.debug || false,

    // Log message only in debug mode
    log: function (message) {
      if (this.debug) {
        console.log(message);
      }
    },

    // Always log error messages
    error: function (message) {
      console.error(message);
    },

    // Log warnings only in debug mode
    warn: function (message) {
      if (this.debug) {
        console.warn(message);
      }
    },

    // Always log success messages, but can be formatted differently
    success: function (message) {
      if (this.debug) {
        console.log(message);
      } else {
        // In non-debug mode, we could customize success messages if needed
      }
    },
  };

  return {
    // Feature flags
    debug: options.debug || false,

    // URLs and paths
    baseUrl: options.baseUrl || 'https://workday.github.io/canvas-kit',
    nodeModulesPath: options.nodeModulesPath || path.resolve('./') + '/node_modules',

    // Processing configuration
    imageBatchSize: options.imageBatchSize || 20,

    // Cache and state
    cache: new Map(),
    canvasDocs: [],
    pendingImages: [],

    // Logging utility
    logger,

    // Cache key generators
    cacheKeys: {
      processedFile: path => `file:${path}`,
      componentDoc: (name, attrs) => `component:${name}:${attrs || ''}`,
      componentDesc: (name, fileName) => `desc:${name}:${fileName || ''}`,
      fileContent: path => `content:${path}`,
      exampleCode: name => `example:${name}`,
    },
  };
}
