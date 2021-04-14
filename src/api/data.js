import axios from '@/api/axios'

// 获取首页统计数据
export const getHomeCardData = () => {
    return axios.request({
        url: 'card',
        method: 'get'
    })
}

// 获取首页折线图数据
export const getHomeLineData = () => {
    return axios.request({
        url: 'line',
        method: 'get'
    })
}

// 获取首页饼图数据
export const getHomePieData = () => {
    return axios.request({
        url: 'pie',
        method: 'get'
    })
}

// 获取用户数据
export const getUserData = () => {
    return axios.request({
        url: 'user',
        method: 'get'
    })
}

// 获取书籍数据
export const getBookData = () => {
    return axios.request({
        url: 'book',
        method: 'get'
    })
}

// 获取借阅信息
export const getBorrowData = () => {
    return axios.request({
        url: 'borrow',
        method: 'get'
    })
}

// 获取角色信息
export const getRoleData = () => {
    return axios.request({
        url: 'role',
        method: 'get'
    })
}

// 获取图书类别信息
export const getClassData = () => {
    return axios.request({
        url: 'class',
        method: 'get'
    })
}

// 获取图书标签信息
export const getLabelData = () => {
    return axios.request({
        url: 'label',
        method: 'get'
    })
}

// 获取图书评分信息
export const getScoreData = () => {
    return axios.request({
        url: 'score',
        method: 'get'
    })
}

// 获取账户明细
export const getAccountData = () => {
    return axios.request({
        url: 'account',
        method: 'get'
    })
}