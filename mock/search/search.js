/**
 * Created by liusiyao on 2017/7/24.
 */
module.exports = {
    list: [{
                list_name: '打扫房间',
                created: new Date()
            }],
    item: [{
                item_name: '打游戏',
                deadline: new Date(),
                created: new Date(),
                list_name: '娱乐'
            },
            {
                item_name: '打扫卫生间',
                deadline: new Date(),
                created: new Date(),
                list_name: '打扫房间'
            }]
};