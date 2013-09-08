# grunt-selenium-simple

> Run a simple selenium server suitable for [protractor](https://github.com/angular/protractor) and [grunt-mocha-protractor](https://github.com/aeh/grunt-mocha-protractor).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-selenium-simple --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-selenium-simple');
```

You need to install selenium first, I use this plugin to run [protractor](https://github.com/angular/protractor), protractor has an installer for selenium and chromedriver.
Then you need to place [chromedriver](https://code.google.com/p/chromedriver/downloads/list) in the system path (or pass the driver location as argument, but I didn't find how to do that).


## The "selenium" task

### Overview
In your project's Gruntfile, add a section named `selenium` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  selenium: {
    options: {
      jar: './selenium/selenium-server-standalone-2.35.0.jar',
      port: 4444
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

this plugin pass options to the selenium server like that:

```js
require('selenium-webdriver/remote').SeleniumServer(options.jar, options);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
