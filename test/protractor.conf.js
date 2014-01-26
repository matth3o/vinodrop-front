exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        '../app/modules/**/test/e2e/*.spec.js'
    ],

    baseUrl: 'http:///localhost:9000/',

    capabilities: {
        'browserName': 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};
