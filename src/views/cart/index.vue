<template>
    <div class="cart">
        <Header title="购物车" :isEdit="true"/>
        <cartListDetail v-if="isShow"  :changeShow="changeShow"/>
        <Empty v-else/>
        <Footer/>
    </div>
</template>
<script>
    import Footer from '../../components/Footer.vue'
    import Header from '@/components/Header.vue';
    import Empty from '@/components/Empty.vue';
    import cartListDetail from "../cart/components/cartListDetail.vue"
    import {ref} from 'vue'
    import { useStore } from 'vuex';
    export default {
        components:{
            Footer,Header,Empty,cartListDetail
        },
        setup(){
            let isShow = ref(true);
            let store = useStore();
            if(store.state.cartList.length === 0){
                isShow.value = false;
            }
            const changeShow = ()=>{
                isShow.value = false;
            }
            return {
                isShow,changeShow
            }
        }
    }
</script>
<style lang="less" scoped>
    .cart{
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        .content{
            flex:1
        }
    }
</style>
