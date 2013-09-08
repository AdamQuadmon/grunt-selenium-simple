/*
 * grunt-selenium
 * https://github.com/adamquadmon/grunt-selenium
 *
 * Copyright (c) 2013 Luciano Amodio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var webdriver = require('selenium-webdriver'),
    remote = require('selenium-webdriver/remote'),
    async = require('async'),
    server;

  grunt.registerMultiTask('selenium', 'Run selenium server.', function () {

    var done = this.async();
    var options = this.options({
      jar: './selenium/selenium-server-standalone-2.35.0.jar',
      port: 4444
    });

    grunt.log.write('Startup selenium server standalone at 0.0.0.0:' + options.port + '...');

    var result = true;
    try{
      server = new remote.SeleniumServer(options.jar, options);
      server.start();
      grunt.log.ok();
    }catch (e) {
      grunt.log.error();
      grunt.verbose.error(e);
      result = false;
    }

    setTimeout(function() {
      done(result);
    }, 10000);
  });
};