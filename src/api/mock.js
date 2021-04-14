import Mock from 'mockjs'

// mockjs为即时返回设置
// 设置请求延时
Mock.setup({
    timeout: 50
})


// 正则匹配
// Mock.mock('/\/api\/user/igs', {
//     username: '爷爷',
//     age: 18,
//     gender: '男'
// })

// 匹配路径
// 随机数据
Mock.mock('/api/user', {
    "Uid": /\d{8}/,
    "Username": "@cname",
    "Password": '12345678',
    "Date": '@datetime',
    "Avatar": "@image",
    "Email": "@email",
    "IDCard": /\d{18}/
})

Mock.mock('/api/card', [
    {
        url: require("../assets/icon/user.png"),
        title: '用户数量',
        num: '12,345'
    },
    {
        url: require("../assets/icon/book.png"),
        title: '书籍数量',
        num: '654,321'
    },
    {
        url: require("../assets/icon/money.png"),
        title: '账户余额',
        num: '5,345,212'
    },
    {
        url: require("../assets/icon/message.png"),
        title: '消息数量',
        num: '56,345'
    }
])

Mock.mock('/api/line', {
    Xdata: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    Ydata: [150, 230, 224, 218, 135, 147, 260]
})

Mock.mock('/api/book', {
    "Bid": /\d{8}/,
    "Bname": "@cname",
    "Cname": "@cname",
    "Author": '@cname',
    "Country": "@city",
    "Publish": "@cname",
    "Ptime": "@datetime",
    "Bnumber": /\d{3}/
})

Mock.mock('/api/borrow', {
    "Uid": /\d{8}/,
    "Username": "@cname",
    "Bid": /\d{8}/,
    "Bname": '@cname',
    "Btime": "@datetime",
    "Rtime": "@datetime",
    "State|0-2": 2
})

Mock.mock('/api/role', {
    "Rid": /\d{8}/,
    "Rname": "@cname",
    "Power|0-2": 2
})

Mock.mock('/api/class', {
    "Cid": /\d{8}/,
    "Cname": "@cname"
})

Mock.mock('/api/label', {
    "Lid": /\d{8}/,
    "Lname": "@cname"
})

Mock.mock('/api/score', {
    "Bid": /\d{8}/,
    "Score": /\d{2}/,
    "Uid": /\d{8}/,
    "Comment": "@paragraph",
    "Ctime": '@datetime'
})

Mock.mock('/api/account', {
    "Uid": /\d{8}/,
    "Amount": /\d{4}/,
    "Avalue": /\d{3}/,
    "Atime": "@datetime"
})