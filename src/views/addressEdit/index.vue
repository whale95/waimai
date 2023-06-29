<template>
    <div class="addressEdit">
        <Header :title="handleTitle"/>
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-set-default
            :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { areaList } from '@vant/area-data';
import {reactive,toRefs,onMounted,computed} from 'vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
import { showToast } from 'vant';
    export default {
        components:{Header},
        setup(){
            let data = reactive({
                areaList:areaList,
                addressInfo:{},
                handleTitle:""
            })
            let store = useStore();
            let route = useRoute();
            let router = useRouter();
            // 初始化获取对应地址信息
            const init =()=>{
                store.state.userAddress.forEach(item=>{
                    if(item.id === Number(route.query.id)){
                        data.addressInfo = item
                    }
                })
            }
            onMounted(()=>{
                init()
            })
            data.handleTitle = computed(()=>{
                return route.query.type === 'edit'?'地址编辑' :'地址新增'
            })
            // 保存地址
            const onSave = (content)=>{
                if(route.query.type === 'add'){
                    // 新增地址,有个bug，新增的地址没有id，修改或者删除不了
                    store.commit('addAddress',content);
                    // console.log(store.state.userAddress)
                }else{
                    // 修改地址
                    store.commit('editAddress',content);
                }
                showToast('保存成功');
                console.log(store.state.userAddress)
                setTimeout(()=>{
                    router.back()
                },1000)
            }
            // 删除地址
            const onDelete =(content)=>{
                store.commit('deleteAddress',content);
                showToast('删除成功')
                setTimeout(()=>{
                    router.back()
                },1000)
            }
            return{
                ...toRefs(data),
                onSave,
                onDelete
            }
        }
    }
</script>

<style lang="less" scoped>
/deep/.van-button--primary{
    background-color: #ffc400;
    border-color:transparent;
}
/deep/.van-switch--on{
    background: #ffc400;
}
</style>
