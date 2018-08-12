// 使用 Mock
var Mock = require('mockjs')
 Mock.mock('/mockdata',{
    'code':200,
    'list':[{
    	title:'娱乐新闻',
    	content:'mockjs真强大'
    },{
    	title:'八卦新闻',
    	content:'mockjs真牛逼'
    },{
    	title:'吹水新闻',
    	content:'mockjs能装逼'
    }]
})
// 输出结果
