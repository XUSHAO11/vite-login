import axios from 'axios'
import { ElLoading } from 'element-plus'

const http = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

let loadingInstance

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    loadingInstance = ElLoading.service({ fullscreen: true })
    config.headers.token = localStorage.getItem("token");
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    response.headers.token && localStorage.setItem("token", response.headers.token)
    loadingInstance.close()
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    loadingInstance.close()
    return Promise.reject(error);
});


const ajax = {
    get(url, data, config = {}) {
        return http({
            url: url,
            method: 'get',
            params: {
                ...data
            },
            ...config
        })
    },
    post(url, data, config = {}) {
        return http({
            url: url,
            method: 'POST',
            data: data,
            ...config
        })
    }
}


export default ajax;