var koa = require('koa');
var logger = require('koa-logger');
var bodyParser = require('koa-bodyparser');
var c2k = require('koa-connect');//将connect的路由转为koa可以使用的

var health = require('./health');
var cloud = require('./cloud');
var o = require('./routes/o');

// Create koa app
var app = koa();

// health
app.use(health.routes());
app.use(c2k(cloud));

// middleware
app.use(logger());
app.use(bodyParser());

// routes
app.use(o.routes());

module.exports = app;
