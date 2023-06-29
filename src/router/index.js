import { showToast } from 'vant';
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/home')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop')
  },
  {
    path: '/createOrder',
    name: 'createOrder',
    component: () => import(/* webpackChunkName: "createOrder" */ '../views/createOrder'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: () => import(/* webpackChunkName: "addressEdit" */ '../views/addressEdit'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/userInfoEdit',
    name: 'userInfoEdit',
    component: () => import(/* webpackChunkName: "userInfoEdit" */ '../views/userInfoEdit'),
    meta:{
      isAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "login" */ '../views/register')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isAuth){
    // 登录了的时候会在localStorage里面存一个标识isLogin
    if(localStorage.isLogin === 'login'){
      next();
    }else{
      next('/login');
      showToast('请先登录！')
    }
  }else{
    next()
  }
})
export default router
