<template>
    <div class="order">
        <Header title="订单" />
        <div class="content">
            <van-tabs v-model:active="active" color="#ffc400">
                <van-tab :title="item" v-for="(item,index) in navData" :key="index">
                    <div v-if ="item ==='全部' && store.state.orderListAll.length" class="foodCard" v-for="(item,index) in store.state.orderListAll" :key="index">
                        <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
                    </div>
                    <div v-else class="showEmpty">
                        <empty/>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import Empty from '../../components/Empty.vue'
import { useStore } from 'vuex';
import { onMounted } from 'vue'
import { reactive } from 'vue';
import { toRefs } from 'vue';
export default {
    components: {
        Footer, Header,Empty
    },
    setup() {
        let store = useStore();
        let data = reactive({
            navData:['全部','交易完成','待付款','待发货','已发货'],
            active:0
        })
        onMounted(() => {
            console.log(store.state.cartList)
        })
        return{
            ...toRefs(data),
            store
        }
    }
}
</script>
<style lang="less" scoped>
.order {
    display: flex;
    flex-flow: column;
    height: 100%;
    overflow-y: auto;

    .content {
        flex: 1;
        .showEmpty{
            margin-top: 50%;
        }
    }
}
</style>
