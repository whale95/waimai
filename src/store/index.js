import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[],
    handleCartFooter:true,// 控制header组件中 结算和底部删除 的展示，true 展示 结算
    handleEdit:true,//控制header组件中 展示 编辑 还是完成
    orderList:[],//单次订单
    userAddress:[
      {
        id:1001,
        addressDetail:"天涯",
        areaCode:"330106",
        city:"杭州市",
        country:"",
        county:"西湖区",
        isDefault: true,
        name:"橘子",
        province:"浙江省",
        tel:"18748907890"
      },
      {
        id:1002,
        name:'兰兰',
        tel:'15278924387',
        province:'广西壮族自治区',
        city:'北海市',
        county:'合浦县',
        addressDetail:'幸福里',
        isDefault:false,
        areaCode:"130102"
      },
      {
        id:1003,
        name:'旺财',
        tel:'15607876185',
        province:'江苏省',
        city:'南京市',
        county:'鼓楼区',
        addressDetail:'四牌楼',
        isDefault:false,
        areaCode:'110103'
      },
    ],//用户地址
    orderListAll:[],//全部订单
  },
  getters: {
  },
  mutations: {
    addCartList(state,value){//加入购物车
      state.cartList = value
    },
    changeCartFooter(state){//更新 购物车底部结算或删除展示状态
      state.handleCartFooter = !state.handleCartFooter;
    },
    deleteCartList(state,value){//删除购物车中某一个商品
      state.cartList = value
    },
    changeHandleEdit(state,value){//控制 编辑和完成的展示
      if(value){
        state.handleEdit = value;
      }else{
        state.handleEdit = !state.handleEdit
      }
    },
    updatePay(state,value){//更新本次订单
      state.orderList = value;
    },
    upDateOrderListAll(state){//更新全部订单
      state.orderListAll = state.orderListAll.concat(state.orderList)
    },
    addAddress(state,value){//新增地址
      if(value.isDefault){
        state.userAddress.map(item=>{
          item.isDefault = false;
        })
      }
      state.userAddress.push(value);
    },
    editAddress(state,value){//修改地址
      state.userAddress = state.userAddress.map(item=>{
        if(value.isDefault){
          item.isDefault = false
        }
        return item.id === value.id ?value:item
      })
    },
    deleteAddress(state,value){
      state.userAddress = state.userAddress.filter(item=>{
        return  !(item.id === value.id)
      })
      if(value.isDefault){
        state.userAddress[0].isDefault = true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
