<template>
    <van-config-provider :theme-vars="themeVars">
        <div class="foodList">
            <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" color="#ffc400"
                v-if="index === 0" @click-nav="navItem">
                <template #content>
                    <div v-for="(item, index) in foodItems" :key="index">
                        <!-- <FoodItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange" /> -->
                        <ListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange" />
                    </div>
                </template>
            </van-tree-select>
            <div v-else>
                {{ foodData.content }}
            </div>
        </div>
    </van-config-provider>
</template>

<script>
import { reactive, toRefs } from 'vue';
import FoodItem from './FoodItem.vue';
import ListItem from '@/components/ListItem.vue';
export default {
    props: ['index', 'foodData'],
    components: { FoodItem,ListItem },
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [{ text: '分组 1' }, { text: '分组 2' }],
            foodItems: []
        });
        // 初始化左侧导航
        const initData = () => {
            let newArray = [];
            props.foodData?.items?.forEach((element, index) => {
                newArray.push({
                    text: element.text
                })
                if (index === 0) {
                    data.foodItems = element.children;
                }
            });
            data.items = newArray;
        }
        initData();
        let themeVars = reactive({
            sidebarSelectedBorderColor: "#ffc400"
        })
        // 点击左侧导航时触发,vant自定义事件
        const navItem = (number) => {
            props.foodData?.items?.forEach((element, index) => {
                if (number === index) {
                    data.foodItems = element.children;
                }
            });
        }
        // 控制加号展示,传递给子组件
        const handleAdd = (id) => {
            data.foodItems.forEach(element => {
                if (element.id === id) {
                    element.add = false;
                    element.num += 1;
                }
            });
        }
        // 步进器同步修改数据
        const handleChange = (value, detail) => {
            data.foodItems.forEach(element => {
                if (detail.name === element.id) {
                    element.num = value;
                }
            });
        }
        return {
            ...toRefs(data), themeVars, navItem, handleAdd, handleChange

        };
    }
}
</script>

<style lang="less" scoped>
.foodList{
  padding-bottom: 70px;
}
</style>
