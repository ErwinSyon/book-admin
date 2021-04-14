module.exports = {
    devServer: {
        port: 4000,
        host: 'localhost',
        open: true,
        // 代理设置
        proxy :{
            '/api': {
                // 目标服务器
                target: 'http://localhost:3000',
                // 地址重定向
                pathRewrite:{
                    '^/api': ""
                }
            }
        }
    }
}