// import service from "./request";
import service from "./service";
// 首页数据接口
export const getHomeApiData = ()=>{
    // return service.request({
    //     url:'/home/getHomeData',
    //     method:'get'
    // })
    return service({
        url:'/home/getHomeData',
        method:'get'
    })
}
// 店铺数据接口
export const getStoreApiData = (param)=>{
    // return service.request({
    //     url:'/home/getStoreData',
    //     method:'get',
    //     data:param
    // })
    return service({
        url:'/home/getStoreData',
        method:'get',
        data:param
    })
}