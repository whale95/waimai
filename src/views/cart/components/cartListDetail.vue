<template>
    <div class="cartListDetail">
        <div class="content">
            <van-checkbox-group @change="checkChange" checked-color="#ffc400" v-model="checked" ref="checkboxGroup">
                <div v-for="(item, index) in store.state.cartList" :key="index">
                    <ListItem :showCheck="true" :item="item" :handleChange="handleChange" />
                </div>
            </van-checkbox-group>
        </div>
        <!-- 展示结算按钮 -->
        <van-submit-bar v-if="store.state.handleCartFooter" button-color="#ffc400" class="submitCheckBox" :price="totalPrice"
            button-text="结算" @submit="onSubmit">
            <van-checkbox @click="submitCheckAll" checked-color="#ffc400" v-model="submitChecked">全选</van-checkbox>
        </van-submit-bar>
        <!-- 展示删除按钮 -->
        <div class="editDelete" v-else>
            <div class="left">
                <van-checkbox @click="submitCheckAll" checked-color="#ffc400" v-model="submitChecked">全选</van-checkbox>
            </div>
            <div class="right" @click="handlDelete">
                删除
            </div>
        </div>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import { useStore } from 'vuex';
import { onMounted, reactive, toRefs, computed } from 'vue'
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
export default {
    components: { ListItem },
    props:['changeShow'],
    setup(props) {
        let store = useStore();
        let router = useRouter();
        const data = reactive({
            checked: [],
            submitChecked: true,
            totalPrice: 0
        })
        // 步进器同步修改num值
        const handleChange = (value, detail) => {
            store.state.cartList.map((item) => {
                if (detail.name === item.id) {
                    item.num = value;
                }
            })
        }
        // 页面初始化，购物车全选状态
        const init = () => {
            data.checked = store.state.cartList.map((item) => item.id);
            // console.log(data.checked);
        };
        onMounted(() => {
            init();
        });
        // 点击全选
        const submitCheckAll = () => {
            if (data.checked.length !== store.state.cartList.length) {
                init();
            } else {
                data.checked = [];
            }
        }
        // checkBox选中或取消选中，联动下面的全选按钮
        const checkChange = (result) => {
            // console.log(result);
            if (result.length === store.state.cartList.length) {
                data.submitChecked = true;
            } else {
                data.submitChecked = false;
            }
            data.checked = result;
        }
        // 计算总价
        // filter把return=true的元素返回到一个新数组里
        // includes判断数组是否包含一个指定的值
        data.totalPrice = computed(() => {
            const countArray = upDateArray();
            let sum = 0;
            countArray.forEach(item => {
                sum += item.price * item.num;
            })
            // 组件里面给price定义的单位是分，所以转换成元要乘以100
            return sum * 100;
        })
        const upDateArray = (type)=>{
            return  store.state.cartList.filter(item => {
                // 这里checked数组的值是number
                return type === "delete"?!data.checked.includes(item.id) 
                :data.checked.includes(item.id)
            })
        }
        // 控制删除
        const handlDelete = () => {
            // 是否选中某个要删除的商品
            if (data.checked.length !== 0) {
                store.commit("deleteCartList",upDateArray('delete'));
                data.checked = [];
                if(store.state.cartList.length === 0){
                    // 展示空购物车页面
                    props.changeShow();
                    // 头部展示编辑，底部结算值更新为true
                    store.commit('changeCartFooter');
                    store.commit('changeHandleEdit',true);
                }
            } else {
                showToast('请先选择要删除的商品!')
            }

        }
        // 点击结算
        const onSubmit = () => {
            if(data.checked.length === 0){
                showToast('请先选择要结算的商品！')
            }else{
                store.commit('updatePay',upDateArray());
                // 订单生成页，传参的时候checked数组的值被编译成字符串了
                router.push({
                    path:'/createOrder',
                    query:{
                        list :data.checked
                    }
                })
            }
        }

        return {
            store,
            ...toRefs(data),
            handleChange,
            onSubmit,
            submitCheckAll,
            checkChange,
            handlDelete
        }
    }
}
</script>

<style lang="less" scoped>
.cartListDetail {
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .editDelete {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 10px;
        font-size: 14px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 58px;

        .right {
            width: 80px;
            border-radius: 30px;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #ffc400;
            color: white;
        }
    }
}

/deep/ .van-submit-bar {
    bottom: 56px
}</style>