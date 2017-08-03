var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// 获取所有todolists
var todolists = require('./todoList/todoList');
router.get('/api/todolist', function *(next) {

    this.body = todolists;
});

// 新建列表
router.post('/api/createlist', function *(next) {

    console.log('创建列表');
    console.log(this.params.list_name)
    this.body = {
        errno: 0,
        msg: 'ok'
    };
});

var todoDetail = require('./detail/detail');
// 列表详情页
router.get('/api/detail/:listname', function *(next) {
    this.body = todoDetail;
});

// 修改详情页事件状态
router.post('/api/detailchange', function *(next) {
    console.log('修改状态');
    this.body = {
        errno: 0,
        msg: 'ok'
    };
});

// 详情页添加
router.post('/api/detailadd', function *(next) {
    console.log('详情添加');
    this.body = {
        errno: 0,
        msg: 'ok'
    };
});

var searchList = require('./search/search');
// 搜索详情
router.get('/api/search/:keyword', function *(next) {
    this.body = searchList;
});

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
