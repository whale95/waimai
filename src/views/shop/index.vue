<template>
    <div class="shop">
        <!-- 头部 -->
        <Header title="店铺" />
        <!-- 主要内容 -->
        <div class="content">
            <!-- <img src="" alt="" class="shopBg"> -->
            <div class="shopBg"></div>
            <div class="foodSort">
                <div class="name">
                    {{ title }}
                    <img :src="pic" alt="" class="food-img">
                </div>
                <van-tabs v-model:active="active" color="#ffc400">
                    <van-tab v-for="(item, index) in storeData" :key="index" :title="item.name">
                        <foodList :index="index" :foodData="item.data" />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- 底部 -->
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服"  /> 
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="goCart"/>
            <van-action-bar-button type="warning" text="加入购物车" @click="handleAddcart" />
            <van-action-bar-button type="danger" text="立即购买" @click="goBuy"/>
        </van-action-bar>

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import foodList from './components/foodList.vue';

import { reactive, toRefs, ref } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import { onMounted } from 'vue';
import axios from 'axios';
import { getStoreApiData } from '../../api/api'
export default {
    components: { Header, foodList },
    setup() {
        const active = ref(0);
        let store = useStore();
        let router = useRouter();
        // 数据组,bug:每次进入店铺页面都会重新const数据，之前修改的num值会被重新赋0，展示有问题，还有
        const data = reactive({
            title: '小何酸菜鱼',
            pic: "https://img.zcool.cn/community/01d6565cc44c52a801208f8bc9e0a0.jpg@1280w_1l_2o_100sh.jpg",
            storeData: []

        })
        // 加入购物车，徽标数值增加，vuex更新state
        const handleAddcart = (type)=>{
            let cartList = store.state.cartList || [];
            data.storeData.forEach(item=>{
                item.data.items?.forEach(item=>{
                    item.children.forEach(item=>{
                    if(item.num >0){
                        cartList.push(item);
                    }
                })
                })
            })
            // 判断是否选择了商品，没有就提示
            if(cartList.length === 0){
                // showToast组件特殊，需要单独引入一下toast的样式
                showToast("请先添加商品");
                return
            }
            store.commit('addCartList',cartList);
            // console.log(store.state.cartList);
            type === 'buy' ?goCart() :"";
        }
        // 点击购物车，跳转购物车页面
        const goCart =()=>{
            router.push('/cart');
        }
        // 点击立即购买 => 把商品加入到购物车，并跳转到购物车页面
        const goBuy =()=>{
            handleAddcart('buy');
        }
        const getStoreData = ()=>{
            getStoreApiData().then(res=>{
                data.storeData = res
            })
            // axios.get('/home/getStoreData').then((res)=>{
            //     console.log(res);
            //     const {code,storeData} = res.data;
            //     if(code === 200){
            //         data.storeData = storeData
            //     }
            // })
        }
        onMounted(()=>{
            getStoreData()
        })
        return {
            ...toRefs(data),
            active,
            handleAddcart,
            store,
            goCart,
            goBuy
        }
    }
}
</script>

<style lang="less" scoped>
.shop {
    height: 100%;
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        overflow-y: auto;

        .shopBg {
            width: 100%;
            height: 150px;
            background: url(https://ts1.cn.mm.bing.net/th/id/R-C.c1a5d0276dffd2fafa3ab61294f585da?rik=puKitCmCVN1SqA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50094%2f5808.jpg_wh1200.jpg&ehk=HwThWDJn9nqwkm9vLZEZwvTjyPRrY%2fVermu13znzEoA%3d&risl=&pid=ImgRaw&r=0) no-repeat center top;
            background-size: cover
        }

        .foodSort {
            background-color: #fff;
            height: 500px;
            margin-top: -20px;
            border-radius: 30px 30px 0 0;

            .name {
                display: flex;
                justify-content: space-between;
                font-size: 18px;
                padding: 20px;

                .food-img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}</style>