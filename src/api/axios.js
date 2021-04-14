import axios from 'axios'
import config from "@/config/index"

// 判断环境
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {
                // 请求头部
            }
        }
        return config
    }
    // 拦截请求
    interceptors(instance, url) {
        instance.interceptors.request.use((config) => {
            // 配置修改，处理config
            // console.log("拦截和处理请求")
            // console.log(config)
            return config
        })
        instance.interceptors.response.use((res) => {
            // 成功请求，处理响应
            // console.log("处理响应")
            // console.log(res)
            return res.data
        }, (err) => {
            // 请求失败，处理问题
            // console.log(err)
            return 404;
        })
    }
    request(options) {
        // 创造实例对象
        const instance = axios.create()
        // 结合配置对象，options覆盖this.getInsideConfig()中的内容
        // Object.assign()用法
        // 1.源对象属性替换目标对象属性
        // 2.同名属性，后者替换前者
        // 3.基本数据类型字符串生成对象
        options = Object.assign(this.getInsideConfig(), options)
        // 劫持
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

// 实例化
const axiosObj = new HttpRequest(baseUrl)
export default axiosObj
