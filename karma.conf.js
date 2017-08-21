// Karma configuration
// Generated on Mon Aug 21 2017 15:37:19 GMT+0800 (CST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      "*.js"
    ],
    exclude: [
      "karma.conf.js"
    ],
    preprocessors: {
      'index.js':  'coverage'
    },
    plugins: ['karma-chrome-launcher', 'karma-jasmine', 'karma-coverage'],
    reporters: ['progress', 'coverage'],
    converageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
