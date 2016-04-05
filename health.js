var router = require('koa-router')();

//健康检查，AV.Cloud里内置了一个，这里单独写出来
router.get('/__engine/1/ping', function*() {
    this.status = 200;
});

module.exports = router;
