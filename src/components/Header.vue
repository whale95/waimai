<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="$router.go(-1)"/>
        <div>{{title}}</div>
        <div class="edit" v-if="isEdit" @click="changeEdit">{{ 
            store.state.handleEdit ? '编辑':"完成"
        }}</div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import {showFailToast} from 'vant'
    export default {
        props:['title','isEdit'],
        setup(){
            let store = useStore();
            const changeEdit = ()=>{
                if(store.state.cartList.length === 0){
                    // 提示
                    showFailToast('请先添加商品到购物车');
                }else{
                    // 底部 结算和删除的切换
                    store.commit('changeCartFooter');
                    // 点击 编辑 展示 完成
                    store.commit('changeHandleEdit');
                }
            }
            return{
                changeEdit,store
            }
        }
    }
</script>

<style lang="less" scoped>
.header{
    background-color: #fff;
    font-size: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #d7d7d7;
    .icon{
        position: absolute;
        left:10px
    }
    .edit{
        position:absolute;
        right: 10px;
        font-size: 14px;
    }
    
}
</style>