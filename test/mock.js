var assert = require('assert');
var source = require('source');
var path = require('path');

exports.mock = function () {
    var files = source.modules(__dirname + '/mock');
    assert.ok(Object.keys(files).every(function (file) {
        return !path.basename(file).match(/^\./);
    }));
};
