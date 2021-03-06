const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/core-tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://dokan1.test/',
      browser: 'chrome',
      // waitForTimeout: 5000, // wait for 5 seconds, by default it's wait 1 sec
      // smartWait: 5000
      windowSize: '1200x1280',
      timeouts: {
         "script": 60000,
         "page load": 10000
       },
        desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--no-sandbox" ]
        }
      },
    }
  },
  include: {
    I: './steps_file.js',
    product: './pages/product.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'dokan',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}