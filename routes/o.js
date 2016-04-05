/**
 * Created by woofer on 16-4-5.
 */
var AV = require('leanengine');
var Router = require('koa-router');

var router = new Router({
    prefix: '/os'
});

var O = AV.Object.extend('o');

router.post('/', function*() {
    var o = new O();
    var res = yield o.save(this.request.body);
    if (res) {
        this.body = res.toJSON();
    } else {
        this.status = 500;
    }
});

router.get('/:id', function*() {
    var query = new AV.Query(O);
    query.equalTo('objectId', this.params.id);
    var res = yield query.first();
    if (res) {
        this.body = res.toJSON();
    } else {
        this.status = 404;
    }
});

module.exports = router;