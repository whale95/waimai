<template>
    <div class="address">
        <Header title="地址管理" />
        <div class="content">
            <van-address-list :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { toRefs, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    components: { Header },
    setup() {
        let store = useStore();
        let router = useRouter();
        let data = reactive({
            list: []
        })
        const init = () => {
            data.list = store.state.userAddress.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    tel: item.tel,
                    address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
                    isDefault: item.isDefault,
                }
            })
        }
        onMounted(() => {
            init()
        })
        const onEdit = (item)=>{
            router.push({
                path:'/addressEdit',
                query:{
                    id:item.id,
                    type:'edit'
                }
            })
        }
        const onAdd = ()=>{
            router.push({
                path:'/addressEdit',
                query:{
                    type:'add'                    
                }
            })
        }
        return {
            store,
            ...toRefs(data),
            onEdit,
            onAdd
        }
    }
}
</script>

<style lang="less" scoped>
// 修改默认这两个字的背景色
/deep/.van-tag--primary{
    background-image: linear-gradient(to right, #ff6034, #ee0a24);
}
// 修改底部按钮背景和边框色
/deep/.van-button--primary{
    background-color: #ffc400;
    border-color:transparent;
}
// 地址前面的圆框隐藏
/deep/.van-radio__icon{
    display: none;
}
</style>