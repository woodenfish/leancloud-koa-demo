/**
 * Created by woofer on 16-4-5.
 */
var AV = require('leanengine');
/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request, response) {
    response.success('Hello world!');
});

module.exports = AV.Cloud;