<template>
    <div class="createOrder">
        <Header title="生成订单" />
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content" v-for="(item, index) in store.state.orderList" :key="index">
            <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
        </div>
        <div class="pay">
            <div class="payPrice">
                <span>商品金额</span>
                <span>￥{{ totalPrice }}</span>
            </div>
            <div class="payBtn" @click="handelOrder">生成订单</div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { onMounted, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';
import { showDialog } from 'vant';
import { useRouter ,useRoute} from 'vue-router';
export default {
    components: { Header },
    setup() {
        let data = reactive({
            name: "橘子味柠檬汽水",
            tel: '18758199674',
            totalPrice: 0
        });
        let store = useStore();
        let router = useRouter();
        let route = useRoute();
        // 初始化总价
        const initPrice = () => {
            let price = 0;
            if (store.state.orderList.length) {
                store.state.orderList.forEach(item => {
                    price += item.num * item.price;
                });
            }
            data.totalPrice = price;
        }
        // 初始化地址
        const initAdress = () => {
            store.state.userAddress.forEach(item => {
                if (item.isDefault) {
                    data.name = item.name;
                    data.tel = item.tel;
                }
            })
        }
        onMounted(() => {
            initPrice();
            initAdress();
        })
        // 点击生成订单
        const handelOrder = () => {
            showDialog({
                title: '提示',
                message: '恭喜！您的订单已完成',
            }).then(() => {
                // 更新购物车列表
                // console.log(route)
                // route传参过来的list数组元素值是字符串，所以要加''转字符串进行比较
                let newList = store.state.cartList.filter(item=>{
                    return  !route.query.list.includes(item.id+'')
                })
                store.commit('deleteCartList',newList)
                store.commit('upDateOrderListAll')
                // 点击确定，跳转到订单页面
                router.push('/order')
            });
        }
        const onEdit = ()=>{
            router.push('/address')
        }
        return {
            ...toRefs(data),
            store,
            onEdit,
            handelOrder
        }
    }
}
</script>

<style lang="less" scoped>
.createOrder {
    .pay {
        height: 80px;
        background-color: white;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 16px;
        padding: 0 10px;

        .payPrice {
            display: flex;
            justify-content: space-between;

        }

        .payPrice span:nth-child(2) {
            color: red;
            font-weight: 600;
        }

        .payBtn {
            background-color: #ffc400;
            color: white;
            font-weight: 600;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
    }
}
</style>