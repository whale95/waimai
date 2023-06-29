import axios from "axios";
const baseUrl = "";

// 创建一个类
class HttpRequest {
    // 基础路由
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    // 定义创建请求时候的默认值
    getInsideConfig(){
        const config ={
            baseURL:this.baseUrl,
            headers:{}
        }
        return config
    }
    // 拦截器
    interceptors(instance){
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response
            // const {code,data} = response.data;
            // if(code === 200){
            //     return data;
            // }else{
            //     // 其他code的一些错误处理
            // }
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    // 创建请求，传入options（设置的url、参数...)
    request(options){
        // 拼上baseurl
        options = {...this.getInsideConfig(),options};
        const instance = axios.create(options);
        this.interceptors(instance);
        return instance(options)
    }
}
// new一个实例对象，导出
export default new HttpRequest(baseUrl)