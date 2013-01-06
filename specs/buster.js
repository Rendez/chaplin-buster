var config = module.exports;

config['SomeName'] = {

    rootPath: "js",

    environment: 'browser',

    // We need the buster-amd extension
    extensions: [require('buster-amd'), require('buster-sinon')],

    libs: [
      // Extra libraries that will be loaded before the tests
      'require.js'
    ],

    resources: [
	  // "/app": "http://192.168.1.200:3030"
	  // A request to /app/foo would be proxied to http://192.168.1.200:3030/foo.
	],

    // The source files will be loaded by RequireJS, but we need to add them
    // here so that Buster.JS will serve them correctly.
    sources: [
      '**/*.js'
    ],

    // As far as I understand, the test files are processed by the above
    // `pathMapper` to get the equivalent AMD module names. Then the buster-amd
	// extension loads and executes all the test modules.
    specs: ['**/*-test.js']
};
